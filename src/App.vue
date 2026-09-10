<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import Character from './components/Character.vue'
import PlayingCard from './components/PlayingCard.vue'
import WelcomeIllustration from './components/WelcomeIllustration.vue'
import { useI18n } from './composables/useI18n.js'
import { useProofGame } from './composables/useProofGame.js'

const { locale, locales, t, cardLabel, setLocale } = useI18n()
const game = useProofGame()
const {
  step,
  cards,
  layouts,
  hand,
  revealed,
  remaining,
  handColor,
  otherColor,
  claimedColor,
  showColor,
  isCheating,
  proofSucceeded,
  missingSlots,
  busy,
  isNarrow,
  begin,
  shuffleDeck,
  draw,
  prove,
  tryCheat,
  reset,
  setNarrow,
} = game

const menuOpen = ref(false)
const modalOpen = ref(false)
const modalKind = ref(null)
const pendingAction = ref(null)
const modalCloseBtn = ref(null)
let autoModalTimer = null

const AUTO_MODAL_DELAY_MS = 2000

const steps = [
  { id: 'inspect', labelKey: 'steps.inspect' },
  { id: 'draw', labelKey: 'steps.draw' },
  { id: 'prove', labelKey: 'steps.prove' },
  { id: 'result', labelKey: 'steps.result' },
]

function colorWords(color) {
  return {
    color: t(`colors.${color}`),
    card: t(`colorCard.${color}`),
    cards: t(`colorCards.${color}`),
  }
}

const colorVars = computed(() => {
  const own = handColor.value ?? 'red'
  const other = otherColor.value ?? (own === 'red' ? 'black' : 'red')
  const claim = claimedColor.value ?? own
  const shown = showColor.value ?? other
  const ownWords = colorWords(own)
  const claimWords = colorWords(claim)
  const shownWords = colorWords(shown)
  const lieWords = colorWords(other)
  return {
    ownColor: ownWords.color,
    ownCard: ownWords.card,
    ownCards: ownWords.cards,
    claimColor: claimWords.color,
    claimCard: claimWords.card,
    claimCards: claimWords.cards,
    otherColor: shownWords.color,
    otherCard: shownWords.card,
    otherCards: shownWords.cards,
    lieCard: lieWords.card,
  }
})

const activeStep = computed(() => {
  if (step.value === 'intro') return ''
  if (step.value === 'inspect') return 'inspect'
  if (['shuffling', 'shuffled', 'drawing', 'drawn'].includes(step.value)) {
    return 'draw'
  }
  if (['sorting', 'proving'].includes(step.value)) return 'prove'
  return 'result'
})

const activeStepIndex = computed(() =>
  steps.findIndex((item) => item.id === activeStep.value),
)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

function chooseLocale(next) {
  setLocale(next)
  closeMenu()
}

function isTypingTarget(target) {
  if (!(target instanceof HTMLElement)) return false
  return Boolean(
    target.closest('input, textarea, select, [contenteditable="true"]'),
  )
}

const personANote = computed(() => {
  switch (step.value) {
    case 'intro':
      return t('personA.intro')
    case 'inspect':
      return t('personA.inspect')
    case 'shuffling':
    case 'shuffled':
      return t('personA.shuffled')
    case 'drawing':
      return t('personA.drawing')
    case 'drawn':
      return hand.value
        ? t('personA.drawn', { card: cardLabel(hand.value) })
        : ''
    case 'sorting':
      return t('personA.sorting')
    case 'proving':
      return isCheating.value
        ? t('personA.provingCheat', colorVars.value)
        : t('personA.proving', colorVars.value)
    case 'result':
      return isCheating.value
        ? t('personA.resultCheat', colorVars.value)
        : t('personA.result', colorVars.value)
    default:
      return ''
  }
})

const personBNote = computed(() => {
  switch (step.value) {
    case 'intro':
      return t('personB.intro')
    case 'inspect':
      return t('personB.inspect')
    case 'shuffling':
      return t('personB.shuffling')
    case 'shuffled':
      return t('personB.shuffled')
    case 'drawing':
    case 'drawn':
      return t('personB.drawn')
    case 'sorting':
      return t('personB.sorting')
    case 'proving':
      if (!revealed.value.length) return t('personB.provingWait')
      if (revealed.value.length === 1) {
        return t('personB.provingOne', colorVars.value)
      }
      return t('personB.provingMany', {
        ...colorVars.value,
        count: revealed.value.length,
      })
    case 'result':
      return isCheating.value
        ? t('personB.resultCheat', colorVars.value)
        : t('personB.result', colorVars.value)
    default:
      return ''
  }
})

const pendingLabel = ref('')
const modalBody = ref([])
const welcomeStep = ref(0)

const welcomePages = computed(() => [
  { titleKey: 'welcome.riskTitle', textKey: 'welcome.risk', kind: 'risk' },
  {
    titleKey: 'welcome.rethinkTitle',
    textKey: 'welcome.rethink',
    illustration: 'rethink',
  },
  {
    titleKey: 'welcome.exampleTitle',
    textKey: 'welcome.example',
    illustration: 'example',
  },
  {
    titleKey: 'welcome.bridgeTitle',
    textKey: 'welcome.bridge',
    illustration: 'bridge',
  },
  {
    titleKey: 'welcome.cardsTitle',
    textKey: 'welcome.cards',
    illustration: 'cards',
  },
  { titleKey: 'welcome.rolesTitle', kind: 'roles' },
])

const welcomePage = computed(() => welcomePages.value[welcomeStep.value] ?? null)
const welcomeIsLast = computed(
  () => welcomeStep.value >= welcomePages.value.length - 1,
)
const welcomeShowsRoles = computed(
  () => modalKind.value === 'welcome' && welcomePage.value?.kind === 'roles',
)
const welcomeShowsNewspaper = computed(
  () => modalKind.value === 'welcome' && welcomePage.value?.kind === 'risk',
)

const modalTitle = computed(() => {
  if (modalKind.value === 'welcome' && welcomePage.value) {
    return t(welcomePage.value.titleKey)
  }
  if (modalKind.value === 'drawn') return t('steps.draw')
  if (modalKind.value === 'result') return t('steps.result')
  if (modalKind.value === 'cheat') {
    return t('actions.cheat', { claimCard: colorVars.value.lieCard })
  }
  if (pendingLabel.value) return pendingLabel.value
  return t('title')
})

const modalParagraphs = computed(() => {
  if (modalKind.value === 'welcome' && welcomePage.value) {
    if (welcomePage.value.kind === 'roles' || !welcomePage.value.textKey) {
      return []
    }
    return [{ text: t(welcomePage.value.textKey) }]
  }
  return modalBody.value
})

const modalStepLabel = computed(() => {
  if (modalKind.value !== 'welcome') return ''
  return t('modalStep', {
    current: welcomeStep.value + 1,
    total: welcomePages.value.length,
  })
})

function resultModalBody() {
  const vars = colorVars.value
  const paragraphs = [
    {
      text: isCheating.value
        ? t('narration.resultCheat', vars)
        : t('narration.result', vars),
    },
  ]
  if (proofSucceeded.value) {
    paragraphs.push(
      {
        label: t('properties.completenessLabel'),
        text: t('properties.completeness'),
      },
      {
        label: t('properties.zeroKnowledgeLabel'),
        text: t('properties.zeroKnowledge', vars),
      },
    )
  } else {
    paragraphs.push({
      label: t('properties.soundnessLabel'),
      text: t('properties.soundness', vars),
    })
  }
  return paragraphs
}

function toModalBody(body) {
  if (Array.isArray(body)) return body
  if (!body) return []
  return [{ text: body }]
}

const modalConfirmLabel = computed(() => {
  if (modalKind.value === 'welcome') {
    return welcomeIsLast.value ? t('modalGotIt') : t('modalContinue')
  }
  if (['result', 'drawn'].includes(modalKind.value)) return t('modalGotIt')
  return t('modalContinue')
})

const primaryAction = computed(() => {
  switch (step.value) {
    case 'intro':
      return {
        id: 'begin',
        label: t('actions.begin'),
        run: begin,
        body: () => t('narration.inspect'),
      }
    case 'inspect':
      return {
        id: 'shuffle',
        label: t('actions.shuffle'),
        run: shuffleDeck,
        body: () => t('narration.shuffling'),
      }
    case 'shuffled':
      return {
        id: 'draw',
        label: t('actions.draw'),
        run: draw,
        body: () => t('narration.shuffled'),
      }
    case 'drawn':
      return {
        id: 'prove',
        label: t('actions.prove', colorVars.value),
        run: prove,
        body: () => t('narration.proving', colorVars.value),
      }
    case 'result':
      return {
        id: 'again',
        label: t('actions.again'),
        run: () => {
          reset()
          openWelcome()
        },
        skipModal: true,
      }
    default:
      return null
  }
})

const secondaryAction = computed(() => {
  if (step.value !== 'drawn' || !otherColor.value) return null
  return {
    id: 'cheat',
    label: t('actions.cheat', { claimCard: colorVars.value.lieCard }),
    run: tryCheat,
    body: () => t('narration.provingCheat', colorVars.value),
  }
})

const showPrivateLabel = computed(() =>
  ['drawing', 'drawn', 'sorting', 'proving', 'result'].includes(step.value),
)

const showPublicLabel = computed(
  () =>
    ['proving', 'result'].includes(step.value) &&
    (revealed.value.length > 0 || missingSlots.value > 0),
)

const showSecretPile = computed(
  () =>
    ['sorting', 'proving', 'result'].includes(step.value) &&
    remaining.value.length > 0,
)

const missingSlotLayouts = computed(() => {
  if (!missingSlots.value) return []
  const narrow = isNarrow.value
  const start = revealed.value.length
  return Array.from({ length: missingSlots.value }, (_, offset) => {
    const i = start + offset
    return {
      left: narrow ? 18 + i * 21 : 51 + i * 11.5,
      top: narrow ? 24 : 52,
    }
  })
})

const overlayOpen = computed(() => menuOpen.value || modalOpen.value)

function openWelcome() {
  pendingAction.value = null
  pendingLabel.value = ''
  modalBody.value = []
  welcomeStep.value = 0
  modalKind.value = 'welcome'
  modalOpen.value = true
  closeMenu()
}

function requestAction(action, kind = 'action') {
  if (busy.value || modalOpen.value) return
  if (action.skipModal) {
    action.run()
    return
  }
  pendingAction.value = action.run
  pendingLabel.value = action.label
  modalBody.value = toModalBody(
    typeof action.body === 'function' ? action.body() : '',
  )
  welcomeStep.value = 0
  modalKind.value = kind
  modalOpen.value = true
  closeMenu()
}

function dismissModal() {
  const next = pendingAction.value
  pendingAction.value = null
  pendingLabel.value = ''
  modalBody.value = []
  welcomeStep.value = 0
  modalKind.value = null
  modalOpen.value = false
  if (typeof next === 'function') next()
}

function confirmModal() {
  if (modalKind.value === 'welcome' && !welcomeIsLast.value) {
    welcomeStep.value += 1
    nextTick(() => modalCloseBtn.value?.focus())
    return
  }
  dismissModal()
}

function onKeydown(event) {
  if (event.metaKey || event.ctrlKey || event.altKey) return
  if (isTypingTarget(event.target)) return

  if (event.key === 'Escape') {
    if (modalOpen.value) {
      event.preventDefault()
      if (modalKind.value === 'welcome' && !welcomeIsLast.value) {
        confirmModal()
        return
      }
      dismissModal()
      return
    }
    if (menuOpen.value) {
      event.preventDefault()
      closeMenu()
    }
  }
}

function syncViewport() {
  setNarrow(window.matchMedia('(max-width: 720px)').matches)
}

watch(overlayOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

function clearAutoModalTimer() {
  if (autoModalTimer == null) return
  clearTimeout(autoModalTimer)
  autoModalTimer = null
}

function scheduleAutoModal(kind, body) {
  clearAutoModalTimer()
  autoModalTimer = setTimeout(() => {
    autoModalTimer = null
    if (modalOpen.value) return
    pendingAction.value = null
    pendingLabel.value = ''
    modalBody.value = toModalBody(typeof body === 'function' ? body() : body)
    modalKind.value = kind
    modalOpen.value = true
    closeMenu()
  }, AUTO_MODAL_DELAY_MS)
}

watch(modalOpen, async (open) => {
  if (!open) return
  await nextTick()
  modalCloseBtn.value?.focus()
})

watch(step, (next, prev) => {
  clearAutoModalTimer()
  if (modalOpen.value) return

  if (next === 'drawn' && prev !== 'drawn') {
    scheduleAutoModal('drawn', t('narration.drawn', colorVars.value))
    return
  }

  if (next === 'result' && prev !== 'result') {
    scheduleAutoModal('result', resultModalBody)
  }
})

onMounted(() => {
  syncViewport()
  window.addEventListener('resize', syncViewport)
  window.addEventListener('keydown', onKeydown)
  openWelcome()
})

onUnmounted(() => {
  clearAutoModalTimer()
  document.body.style.overflow = ''
  window.removeEventListener('resize', syncViewport)
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div class="page">
    <header class="top">
      <div class="title-row">
        <div class="brand">
          <h1>{{ t('title') }}</h1>
          <ol class="progress" :aria-label="t('stepsLabel')">
            <li
              v-for="(item, index) in steps"
              :key="item.id"
              :class="{
                'is-active': activeStep === item.id,
                'is-done': activeStepIndex > index && activeStepIndex !== -1,
              }"
            >
              <span class="step-label">{{ t(item.labelKey) }}</span>
            </li>
          </ol>
        </div>

        <div class="header-actions-slot" aria-hidden="true"></div>
        <div class="header-actions">
          <a class="icon-btn home-btn" href="/" :aria-label="t('home')">
            <svg class="home-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 11.5 12 4l8 7.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z"
              />
            </svg>
          </a>

          <div class="menu">
            <button
              class="icon-btn menu-toggle"
              type="button"
              :aria-expanded="menuOpen"
              aria-controls="site-menu"
              :aria-label="menuOpen ? t('menuClose') : t('menuOpen')"
              @click="toggleMenu"
            >
              <span class="burger" :class="{ 'is-open': menuOpen }" aria-hidden="true">
                <i></i><i></i><i></i>
              </span>
            </button>

            <div
              v-if="menuOpen"
              class="menu-backdrop"
              aria-hidden="true"
              @click="closeMenu"
            ></div>

            <div
              v-show="menuOpen"
              id="site-menu"
              class="menu-panel"
              role="dialog"
              :aria-label="t('menu')"
            >
              <section class="menu-section">
                <h2>{{ t('language') }}</h2>
                <div class="lang-switch" :aria-label="t('language')">
                  <button
                    v-for="code in locales"
                    :key="code"
                    type="button"
                    :class="{ 'is-active': locale === code }"
                    :aria-pressed="locale === code"
                    @click="chooseLocale(code)"
                  >
                    {{ code.toUpperCase() }}
                  </button>
                </div>
              </section>

              <section class="menu-section">
                <h2>{{ t('info') }}</h2>
                <p class="eyebrow">{{ t('eyebrow') }}</p>
                <p class="lede">
                  {{ t('ledeBefore') }}
                  <em>{{ t('ledeEm') }}</em>
                  {{ t('ledeAfter') }}
                </p>
                <button class="menu-link" type="button" @click="openWelcome">
                  {{ t('welcome.title') }}
                </button>
              </section>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section class="status" aria-live="polite">
      <div class="people">
        <Character
          who="a"
          :title="t('personATitle')"
          :subtitle="t('personARole')"
          :note="personANote"
        />
        <Character
          who="b"
          :title="t('personBTitle')"
          :subtitle="t('personBRole')"
          :note="personBNote"
        />
      </div>
    </section>

    <section class="table" :aria-label="t('tableLabel')">
      <div class="felt">
        <div class="controls">
          <div v-if="primaryAction || secondaryAction" class="actions">
            <button
              v-if="primaryAction"
              class="action"
              type="button"
              :disabled="busy || modalOpen"
              @click="requestAction(primaryAction)"
            >
              {{ primaryAction.label }}
            </button>
            <button
              v-if="secondaryAction"
              class="action action-secondary"
              type="button"
              :disabled="busy || modalOpen"
              @click="requestAction(secondaryAction, 'cheat')"
            >
              {{ secondaryAction.label }}
            </button>
          </div>
          <p v-else-if="busy" class="wait">{{ t('watchCards') }}</p>
        </div>

        <div
          class="privacy-screen"
          :class="{ 'is-on': showPrivateLabel }"
          aria-hidden="true"
        >
          <span class="plaque a-side">{{ t('plaquePrivate') }}</span>
          <span class="plaque b-side">{{ t('plaquePublic') }}</span>
        </div>

        <p v-if="step === 'inspect'" class="row-tag red">{{ t('red') }}</p>
        <p v-if="step === 'inspect'" class="row-tag black">{{ t('black') }}</p>

        <p v-if="step === 'drawing' || step === 'drawn'" class="zone-label private">
          {{ t('privateZone') }}
        </p>
        <p v-if="hand && showPrivateLabel" class="hand-caption">
          <span>{{ t('yourCard') }}</span>
          <strong>{{
            layouts[hand.id]?.faceUp ? cardLabel(hand) : t('cardComing')
          }}</strong>
          <small>{{ t('personBCannotSeeCard') }}</small>
        </p>
        <div
          v-if="hand && showPrivateLabel"
          class="unknown-card"
          aria-hidden="true"
        >
          <span class="mystery">?</span>
          <small>{{ t('mysteryCard') }}<br />{{ t('mysteryHidden') }}</small>
        </div>
        <p v-if="showSecretPile" class="zone-label secret">
          {{
            step === 'sorting'
              ? t('remainingPrivate')
              : t('ownColorHidden', colorVars)
          }}
        </p>
        <p v-if="showPublicLabel" class="zone-label public">
          {{ t('shownToB') }} ({{ revealed.length }}/4)
        </p>

        <div
          v-for="(slotPos, index) in missingSlotLayouts"
          :key="`missing-${index}`"
          class="missing-slot"
          :style="{ left: `${slotPos.left}%`, top: `${slotPos.top}%` }"
          aria-hidden="true"
        >
          <span class="mystery">?</span>
          <small>{{ t('missingCard') }}</small>
        </div>

        <PlayingCard
          v-for="card in cards"
          v-show="layouts[card.id]"
          :key="card.id"
          :card="card"
          :layout="layouts[card.id] || { x: 50, y: 48, rot: 0, scale: 1, faceUp: false, z: 1 }"
        />
      </div>
    </section>

    <footer class="site-credit">
      <p>{{ t('credit') }}</p>
    </footer>

    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="modalOpen"
          class="modal-root"
          role="presentation"
        >
          <div
            class="modal-backdrop"
            aria-hidden="true"
            @click="confirmModal"
          ></div>
          <div
            class="modal-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <p v-if="modalStepLabel" class="modal-step">{{ modalStepLabel }}</p>
            <h2 id="modal-title">{{ modalTitle }}</h2>
            <div
              v-if="modalKind === 'welcome' && welcomeStep === 0"
              class="lang-switch modal-lang"
              :aria-label="t('language')"
            >
              <button
                v-for="code in locales"
                :key="code"
                type="button"
                :class="{ 'is-active': locale === code }"
                :aria-pressed="locale === code"
                @click="setLocale(code)"
              >
                {{ code.toUpperCase() }}
              </button>
            </div>
            <div class="modal-body">
              <div v-if="welcomeShowsRoles" class="welcome-roles">
                <Character
                  who="a"
                  stacked
                  :title="t('personATitle')"
                  subtitle=""
                  :note="t('welcome.rolesProver')"
                />
                <Character
                  who="b"
                  stacked
                  :title="t('personBTitle')"
                  subtitle=""
                  :note="t('welcome.rolesVerifier')"
                />
              </div>
              <template v-else>
                <figure
                  v-if="welcomeShowsNewspaper"
                  class="newspaper"
                  :aria-label="t('welcome.newspaper.headline')"
                >
                  <p class="newspaper-masthead">{{ t('welcome.newspaper.masthead') }}</p>
                  <p class="newspaper-meta">
                    <span>{{ t('welcome.newspaper.date') }}</span>
                    <span aria-hidden="true">·</span>
                    <span>{{ t('welcome.newspaper.section') }}</span>
                  </p>
                  <h3 class="newspaper-headline">{{ t('welcome.newspaper.headline') }}</h3>
                  <p class="newspaper-deck">{{ t('welcome.newspaper.deck') }}</p>
                </figure>
                <div
                  v-if="welcomePage?.illustration"
                  class="welcome-with-art"
                >
                  <WelcomeIllustration :kind="welcomePage.illustration" />
                  <div class="welcome-copy">
                    <p v-for="(paragraph, index) in modalParagraphs" :key="index">
                      <strong v-if="paragraph.label">{{ paragraph.label }}</strong>
                      {{ paragraph.text }}
                    </p>
                  </div>
                </div>
                <template v-else>
                  <p v-for="(paragraph, index) in modalParagraphs" :key="index">
                    <strong v-if="paragraph.label">{{ paragraph.label }}</strong>
                    {{ paragraph.text }}
                  </p>
                </template>
              </template>
            </div>
            <button
              ref="modalCloseBtn"
              class="action modal-confirm"
              type="button"
              @click="confirmModal"
            >
              {{ modalConfirmLabel }}
            </button>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.page {
  width: min(1080px, 100%);
  margin: 0 auto;
  padding: 14px 20px 36px;
}

.top {
  margin-bottom: 12px;
}

.title-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}

.brand {
  min-width: 0;
  flex: 1;
}

h1 {
  margin: 0;
  font-family: var(--heading);
  font-size: clamp(1.45rem, 2.4vw, 2rem);
  font-weight: 600;
  color: var(--cream);
  letter-spacing: -0.03em;
  line-height: 1.15;
}

.progress {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0;
  padding: 0;
  margin: 6px 0 0;
  color: var(--muted);
  font-size: 0.8rem;
  line-height: 1.35;
}

.progress li {
  display: inline-flex;
  align-items: center;
  color: rgba(201, 214, 204, 0.55);
}

.progress li:not(:last-child)::after {
  content: '·';
  margin: 0 0.55em;
  color: rgba(230, 200, 122, 0.45);
  font-weight: 600;
}

.progress li .step-label {
  border-bottom: 1px solid transparent;
  padding-bottom: 1px;
}

.progress li.is-done {
  color: #cde3d4;
}

.progress li.is-active {
  color: var(--cream);
}

.progress li.is-active .step-label {
  border-bottom-color: var(--brass);
}

.header-actions-slot {
  width: 92px;
  height: 42px;
  flex: 0 0 auto;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  position: fixed;
  top: 14px;
  right: max(20px, calc((100vw - min(1080px, 100vw)) / 2 + 20px));
  z-index: 130;
}

.menu {
  position: relative;
  flex: 0 0 auto;
}

.icon-btn {
  appearance: none;
  width: 42px;
  height: 42px;
  border-radius: 10px;
  border: 1px solid rgba(230, 200, 122, 0.28);
  background: rgba(15, 24, 20, 0.55);
  color: var(--cream);
  display: grid;
  place-items: center;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
}

.icon-btn:hover {
  background: rgba(230, 200, 122, 0.12);
}

.icon-btn:focus-visible {
  outline: 2px solid #f7f1e6;
  outline-offset: 2px;
}

.home-icon {
  width: 20px;
  height: 20px;
  display: block;
}

.burger {
  width: 18px;
  height: 12px;
  position: relative;
  display: block;
}

.burger i {
  position: absolute;
  left: 0;
  width: 100%;
  height: 1.5px;
  background: currentColor;
  border-radius: 1px;
  transition:
    transform 0.2s ease,
    opacity 0.2s ease,
    top 0.2s ease;
}

.burger i:nth-child(1) {
  top: 0;
}

.burger i:nth-child(2) {
  top: 5px;
}

.burger i:nth-child(3) {
  top: 10px;
}

.burger.is-open i:nth-child(1) {
  top: 5px;
  transform: rotate(45deg);
}

.burger.is-open i:nth-child(2) {
  opacity: 0;
}

.burger.is-open i:nth-child(3) {
  top: 5px;
  transform: rotate(-45deg);
}

.menu-backdrop {
  position: fixed;
  inset: 0;
  z-index: 80;
  background: rgba(8, 12, 10, 0.35);
}

.menu-panel {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  z-index: 90;
  width: min(22rem, calc(100vw - 40px));
  padding: 16px;
  border-radius: 14px;
  background: rgba(16, 24, 20, 0.96);
  border: 1px solid rgba(230, 200, 122, 0.22);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(12px);
}

.menu-section + .menu-section {
  margin-top: 16px;
  padding-top: 14px;
  border-top: 1px solid rgba(230, 200, 122, 0.14);
}

.menu-section h2 {
  margin: 0 0 8px;
  font-family: var(--sans);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--brass);
}

.lang-switch {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.lang-switch button {
  appearance: none;
  min-width: 44px;
  padding: 6px 10px;
  border-radius: 8px;
  border: 1px solid rgba(230, 200, 122, 0.28);
  background: transparent;
  color: var(--muted);
  font-family: var(--sans);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  cursor: pointer;
}

.lang-switch button.is-active {
  background: rgba(230, 200, 122, 0.16);
  color: var(--cream);
  border-color: var(--brass);
}

.lang-switch button:focus-visible {
  outline: 2px solid #f7f1e6;
  outline-offset: 2px;
}

.eyebrow {
  margin: 0 0 8px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-size: 0.68rem;
  color: var(--muted);
}

.lede {
  margin: 0;
  color: var(--cream);
  font-size: 0.95rem;
  line-height: 1.45;
}

.menu-link {
  appearance: none;
  display: block;
  width: 100%;
  margin-top: 12px;
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid rgba(230, 200, 122, 0.28);
  background: transparent;
  color: var(--brass);
  font-family: var(--sans);
  font-size: 0.82rem;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
}

.menu-link:hover {
  background: rgba(230, 200, 122, 0.1);
}

.people {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 12px;
}

.status {
  margin-bottom: 12px;
  padding: 12px 14px;
  border-radius: 14px;
  background: rgba(15, 24, 20, 0.72);
  border: 1px solid rgba(230, 200, 122, 0.14);
  display: flex;
  flex-direction: column;
}

.status .people {
  margin-bottom: 0;
  min-height: 4.75rem;
}

.table {
  position: relative;
  border-radius: 28px;
  background: linear-gradient(180deg, #6b4630 0%, #3d2618 100%);
  padding: 14px;
  box-shadow:
    0 24px 50px rgba(0, 0, 0, 0.35),
    inset 0 1px 0 rgba(255, 220, 160, 0.2);
}

.felt {
  position: relative;
  height: min(58vh, 540px);
  min-height: 380px;
  border-radius: 18px;
  overflow: hidden;
  background:
    radial-gradient(1200px 420px at 50% 20%, rgba(255, 255, 255, 0.08), transparent 55%),
    radial-gradient(circle at 18% 70%, rgba(230, 200, 122, 0.16), transparent 28%),
    linear-gradient(160deg, #1f5a3a 0%, #143728 55%, #0f2f22 100%);
}

.controls {
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 60;
  display: flex;
  justify-content: center;
  width: max-content;
  max-width: calc(100% - 24px);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.privacy-screen {
  position: absolute;
  left: 36%;
  top: 8%;
  bottom: 8%;
  width: 18px;
  border-radius: 4px;
  background: linear-gradient(90deg, #8a5a32, #5c3a22 40%, #3a2416);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.35);
  opacity: 0.35;
  transition: opacity 0.4s ease;
  z-index: 50;
}

.privacy-screen.is-on {
  opacity: 1;
}

.plaque {
  position: absolute;
  left: 50%;
  width: max-content;
  padding: 4px 8px;
  border-radius: 4px;
  background: #d9c39a;
  color: #3a2416;
  font-size: 0.68rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-weight: 600;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.privacy-screen.is-on .plaque {
  opacity: 1;
}

.plaque.a-side {
  top: 18%;
  transform: translate(-50%, 0) rotate(-90deg);
}

.plaque.b-side {
  bottom: 18%;
  transform: translate(-50%, 0) rotate(-90deg);
}

.row-tag,
.zone-label {
  position: absolute;
  z-index: 5;
  margin: 0;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(247, 241, 230, 0.78);
}

.row-tag.red {
  left: 44%;
  top: 22%;
}

.row-tag.black {
  left: 44%;
  top: 52%;
}

.zone-label.private {
  left: 4%;
  top: 8%;
  max-width: 12rem;
  padding: 6px 8px;
  border-left: 2px solid #e6c87a;
  color: #e6c87a;
}

.zone-label.secret {
  left: 4%;
  top: 14%;
  max-width: 11rem;
}

.zone-label.public {
  left: 46%;
  top: 34%;
}

.hand-caption {
  position: absolute;
  left: 3%;
  bottom: 4%;
  top: auto;
  z-index: 45;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 8px 10px;
  border-radius: 10px;
  background: rgba(16, 24, 20, 0.82);
  border: 1px solid rgba(230, 200, 122, 0.45);
  color: var(--cream);
  max-width: 12.5rem;
}

.hand-caption span {
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--brass);
}

.hand-caption strong {
  font-size: 0.92rem;
}

.hand-caption small {
  color: var(--muted);
  font-size: 0.78rem;
}

.unknown-card {
  position: absolute;
  right: 5%;
  top: 12%;
  z-index: 6;
  width: 86px;
  min-height: 122px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border-radius: 10px;
  border: 2px dashed rgba(158, 183, 200, 0.7);
  background: rgba(16, 24, 20, 0.35);
  color: #d5e4ee;
  text-align: center;
  padding: 8px;
}

.unknown-card .mystery {
  font-family: var(--heading);
  font-size: 2rem;
  line-height: 1;
}

.unknown-card small {
  font-size: 0.68rem;
  letter-spacing: 0.02em;
  line-height: 1.3;
}

.missing-slot {
  position: absolute;
  z-index: 6;
  width: 86px;
  min-height: 122px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border-radius: 10px;
  border: 2px dashed rgba(193, 26, 43, 0.75);
  background: rgba(16, 24, 20, 0.4);
  color: #f0c4c8;
  text-align: center;
  padding: 8px;
  box-sizing: border-box;
}

.missing-slot .mystery {
  font-family: var(--heading);
  font-size: 1.6rem;
  line-height: 1;
}

.missing-slot small {
  font-size: 0.64rem;
  letter-spacing: 0.02em;
  line-height: 1.25;
}

.action:hover:not(:disabled) {
  filter: brightness(1.06);
}

.action {
  margin-top: 0;
  appearance: none;
  border: 0;
  border-radius: 999px;
  padding: 12px 22px;
  background: linear-gradient(180deg, #e6c87a 0%, #c4a35a 100%);
  color: #2a1c0e;
  font-family: var(--sans);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.28);
}

.action-secondary {
  background: rgba(16, 24, 20, 0.72);
  color: var(--cream);
  border: 1px solid rgba(230, 200, 122, 0.55);
}

.action-secondary:hover:not(:disabled) {
  filter: none;
  background: rgba(16, 24, 20, 0.9);
}

.action:disabled {
  opacity: 0.55;
  cursor: wait;
}

.action:focus-visible {
  outline: 2px solid #f7f1e6;
  outline-offset: 3px;
}

.wait {
  margin: 0;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(16, 24, 20, 0.72);
  color: var(--muted);
  min-height: 1.2em;
}

.site-credit {
  margin: 18px 0 0;
  text-align: center;
}

.site-credit p {
  margin: 0;
  color: var(--muted);
  font-size: 0.78rem;
  letter-spacing: 0.02em;
  opacity: 0.78;
}

@media (max-width: 720px) {
  h1 {
    font-size: 0.95rem;
    letter-spacing: -0.02em;
    line-height: 1.25;
  }

  .people {
    grid-template-columns: 1fr;
  }

  .status .people {
    min-height: 8.5rem;
  }

  .felt {
    min-height: 520px;
    height: 560px;
  }

  .privacy-screen {
    left: 8%;
    right: 8%;
    top: 48%;
    bottom: auto;
    width: auto;
    height: 16px;
  }

  .plaque.a-side,
  .plaque.b-side {
    transform: translate(-50%, 0);
    top: auto;
    bottom: auto;
  }

  .plaque.a-side {
    left: 22%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .plaque.b-side {
    left: 78%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .row-tag.red {
    left: 6%;
    top: 8%;
  }

  .row-tag.black {
    left: 6%;
    top: 28%;
  }

  .zone-label.private {
    left: 4%;
    top: 52%;
  }

  .zone-label.secret {
    left: 52%;
    top: 52%;
  }

  .zone-label.public {
    left: 4%;
    top: 8%;
  }

  .hand-caption {
    left: 4%;
    right: 4%;
    max-width: none;
    bottom: 2%;
  }

  .unknown-card {
    right: 4%;
    top: 8%;
    width: 64px;
    min-height: 92px;
  }

  .missing-slot {
    width: 64px;
    min-height: 92px;
  }

  .actions {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>

<style>
.modal-root {
  position: fixed;
  inset: 0;
  z-index: 120;
  display: grid;
  place-items: center;
  padding: 20px;
}

.modal-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(8, 12, 10, 0.62);
}

.modal-dialog {
  position: relative;
  z-index: 1;
  width: min(34rem, 100%);
  max-height: min(80vh, 40rem);
  overflow: auto;
  padding: 24px 22px 20px;
  border-radius: 16px;
  background: rgba(16, 24, 20, 0.98);
  border: 1px solid rgba(230, 200, 122, 0.28);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45);
  color: var(--cream);
}

.modal-dialog h2 {
  margin: 0 0 14px;
  font-family: var(--heading);
  font-size: clamp(1.35rem, 2.2vw, 1.7rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.2;
  text-align: center;
}

.modal-step {
  margin: 0 0 8px;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--brass);
  text-align: center;
}

.modal-body {
  display: grid;
  gap: 12px;
  margin-bottom: 18px;
}

.modal-body > p,
.welcome-copy > p {
  margin: 0;
  color: var(--cream);
  font-size: 0.98rem;
  line-height: 1.5;
}

.modal-body strong,
.welcome-copy strong {
  color: var(--brass);
}

.welcome-with-art {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.welcome-copy {
  min-width: 0;
  flex: 1;
}

.newspaper {
  margin: 0 0 4px;
  padding: 18px 18px 16px;
  border-radius: 0;
  background:
    /* soft crease wrinkles */
    linear-gradient(
      118deg,
      transparent 12%,
      rgba(40, 32, 24, 0.07) 18%,
      rgba(255, 255, 255, 0.22) 21%,
      transparent 27%,
      transparent 44%,
      rgba(40, 32, 24, 0.05) 51%,
      rgba(255, 255, 255, 0.18) 54%,
      transparent 61%,
      transparent 72%,
      rgba(40, 32, 24, 0.06) 78%,
      transparent 84%
    ),
    linear-gradient(
      68deg,
      transparent 28%,
      rgba(40, 32, 24, 0.045) 36%,
      rgba(255, 255, 255, 0.16) 40%,
      transparent 48%
    ),
    radial-gradient(
      ellipse 55% 28% at 72% 38%,
      rgba(40, 32, 24, 0.06),
      transparent 70%
    ),
    radial-gradient(
      ellipse 40% 22% at 22% 68%,
      rgba(255, 255, 255, 0.2),
      transparent 65%
    ),
    linear-gradient(180deg, rgba(255, 255, 255, 0.32), transparent 42%),
    repeating-linear-gradient(
      0deg,
      rgba(40, 32, 24, 0.03) 0,
      rgba(40, 32, 24, 0.03) 1px,
      transparent 1px,
      transparent 7px
    ),
    #f3ead2;
  color: #1a1510;
  /* irregular torn silhouette — ~20 small tears per edge */
  clip-path: polygon(
    /* top */
    0% 0.7%, 1.2% 0%, 2.5% 0.8%, 3.8% 0.1%, 5% 0.7%, 6.2% 0%, 7.5% 0.75%,
    8.8% 0.15%, 10% 0.7%, 11.2% 0%, 12.5% 0.8%, 13.8% 0.1%, 15% 0.65%,
    16.2% 0%, 17.5% 0.75%, 18.8% 0.2%, 20% 0.7%, 21.2% 0%, 22.5% 0.8%,
    23.8% 0.1%, 25% 0.65%, 26.2% 0%, 27.5% 0.75%, 28.8% 0.15%, 30% 0.7%,
    31.2% 0%, 32.5% 0.8%, 33.8% 0.1%, 35% 0.65%, 36.2% 0%, 37.5% 0.75%,
    38.8% 0.2%, 40% 0.7%, 41.2% 0%, 42.5% 0.8%, 43.8% 0.1%, 45% 0.65%,
    46.2% 0%, 47.5% 0.75%, 48.8% 0.15%, 50% 0.7%, 51.2% 0%, 52.5% 0.8%,
    53.8% 0.1%, 55% 0.65%, 56.2% 0%, 57.5% 0.75%, 58.8% 0.2%, 60% 0.7%,
    61.2% 0%, 62.5% 0.8%, 63.8% 0.1%, 65% 0.65%, 66.2% 0%, 67.5% 0.75%,
    68.8% 0.15%, 70% 0.7%, 71.2% 0%, 72.5% 0.8%, 73.8% 0.1%, 75% 0.65%,
    76.2% 0%, 77.5% 0.75%, 78.8% 0.2%, 80% 0.7%, 81.2% 0%, 82.5% 0.8%,
    83.8% 0.1%, 85% 0.65%, 86.2% 0%, 87.5% 0.75%, 88.8% 0.15%, 90% 0.7%,
    91.2% 0%, 92.5% 0.8%, 93.8% 0.1%, 95% 0.65%, 96.2% 0%, 97.5% 0.75%,
    98.8% 0.2%, 100% 0.7%,
    /* right */
    99.35% 2.5%, 100% 5%, 99.25% 7.5%, 100% 10%, 99.35% 12.5%, 100% 15%,
    99.2% 17.5%, 100% 20%, 99.35% 22.5%, 100% 25%, 99.25% 27.5%, 100% 30%,
    99.35% 32.5%, 100% 35%, 99.2% 37.5%, 100% 40%, 99.35% 42.5%, 100% 45%,
    99.25% 47.5%, 100% 50%, 99.35% 52.5%, 100% 55%, 99.2% 57.5%, 100% 60%,
    99.35% 62.5%, 100% 65%, 99.25% 67.5%, 100% 70%, 99.35% 72.5%, 100% 75%,
    99.2% 77.5%, 100% 80%, 99.35% 82.5%, 100% 85%, 99.25% 87.5%, 100% 90%,
    99.35% 92.5%, 100% 95%, 99.3% 97.5%, 99.6% 99%,
    /* bottom */
    98.8% 100%, 97.5% 99.25%, 96.2% 100%, 95% 99.35%, 93.8% 99.9%, 92.5% 99.2%,
    91.2% 100%, 90% 99.3%, 88.8% 99.85%, 87.5% 99.25%, 86.2% 100%, 85% 99.35%,
    83.8% 99.9%, 82.5% 99.2%, 81.2% 100%, 80% 99.3%, 78.8% 99.85%, 77.5% 99.25%,
    76.2% 100%, 75% 99.35%, 73.8% 99.9%, 72.5% 99.2%, 71.2% 100%, 70% 99.3%,
    68.8% 99.85%, 67.5% 99.25%, 66.2% 100%, 65% 99.35%, 63.8% 99.9%, 62.5% 99.2%,
    61.2% 100%, 60% 99.3%, 58.8% 99.85%, 57.5% 99.25%, 56.2% 100%, 55% 99.35%,
    53.8% 99.9%, 52.5% 99.2%, 51.2% 100%, 50% 99.3%, 48.8% 99.85%, 47.5% 99.25%,
    46.2% 100%, 45% 99.35%, 43.8% 99.9%, 42.5% 99.2%, 41.2% 100%, 40% 99.3%,
    38.8% 99.85%, 37.5% 99.25%, 36.2% 100%, 35% 99.35%, 33.8% 99.9%, 32.5% 99.2%,
    31.2% 100%, 30% 99.3%, 28.8% 99.85%, 27.5% 99.25%, 26.2% 100%, 25% 99.35%,
    23.8% 99.9%, 22.5% 99.2%, 21.2% 100%, 20% 99.3%, 18.8% 99.85%, 17.5% 99.25%,
    16.2% 100%, 15% 99.35%, 13.8% 99.9%, 12.5% 99.2%, 11.2% 100%, 10% 99.3%,
    8.8% 99.85%, 7.5% 99.25%, 6.2% 100%, 5% 99.35%, 3.8% 99.9%, 2.5% 99.2%,
    1.2% 100%, 0% 99.3%,
    /* left */
    0.65% 97.5%, 0% 95%, 0.75% 92.5%, 0% 90%, 0.65% 87.5%, 0% 85%,
    0.8% 82.5%, 0% 80%, 0.65% 77.5%, 0% 75%, 0.75% 72.5%, 0% 70%,
    0.65% 67.5%, 0% 65%, 0.8% 62.5%, 0% 60%, 0.65% 57.5%, 0% 55%,
    0.75% 52.5%, 0% 50%, 0.65% 47.5%, 0% 45%, 0.8% 42.5%, 0% 40%,
    0.65% 37.5%, 0% 35%, 0.75% 32.5%, 0% 30%, 0.65% 27.5%, 0% 25%,
    0.8% 22.5%, 0% 20%, 0.65% 17.5%, 0% 15%, 0.75% 12.5%, 0% 10%,
    0.65% 7.5%, 0% 5%, 0.7% 2.5%, 0.3% 1%
  );
  filter: drop-shadow(0 10px 18px rgba(0, 0, 0, 0.24));
  transform: rotate(-1.2deg);
}

.newspaper p,
.newspaper h3 {
  color: inherit;
}

.newspaper-masthead {
  margin: 0;
  text-align: center;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(1.35rem, 3.4vw, 1.7rem);
  font-weight: 800;
  letter-spacing: 0.02em;
  line-height: 1.1;
  text-transform: uppercase;
  color: #111;
}

.newspaper-masthead::before,
.newspaper-masthead::after {
  content: '';
  display: block;
  height: 2px;
  margin: 8px 0;
  background: #111;
}

.newspaper-masthead::after {
  height: 1px;
  margin-top: 4px;
}

.newspaper-meta {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.45em;
  margin: 0 0 10px;
  font-family: 'Libre Baskerville', Georgia, serif;
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #4a4036;
}

.newspaper-headline {
  margin: 0 0 8px;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(1.2rem, 3.2vw, 1.55rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.01em;
  color: #111;
  text-wrap: balance;
}

.newspaper-deck {
  margin: 0;
  padding-top: 8px;
  border-top: 1px solid rgba(26, 21, 16, 0.35);
  font-family: 'Libre Baskerville', Georgia, serif;
  font-size: 0.84rem;
  line-height: 1.45;
  color: #2a241c;
}

.welcome-roles {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  align-items: start;
}

@media (max-width: 520px) {
  .welcome-roles {
    gap: 12px;
  }
}

.modal-lang {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
  margin: -4px 0 14px;
}

.modal-lang button {
  appearance: none;
  min-width: 44px;
  padding: 6px 10px;
  border-radius: 8px;
  border: 1px solid rgba(230, 200, 122, 0.28);
  background: transparent;
  color: var(--muted);
  font-family: var(--sans);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  cursor: pointer;
}

.modal-lang button.is-active {
  background: rgba(230, 200, 122, 0.16);
  color: var(--cream);
  border-color: var(--brass);
}

.modal-lang button:focus-visible {
  outline: 2px solid #f7f1e6;
  outline-offset: 2px;
}

.modal-confirm {
  display: block;
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .fade-enter-active,
  .fade-leave-active {
    transition: none;
  }
}
</style>
