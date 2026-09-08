<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import Character from './components/Character.vue'
import PlayingCard from './components/PlayingCard.vue'
import { useI18n } from './composables/useI18n.js'
import { useProofGame } from './composables/useProofGame.js'

const { locale, t, cardLabel, setLocale } = useI18n()
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
const menuTab = ref(null)

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

function openMenu() {
  menuOpen.value = true
}

function closeMenu() {
  menuOpen.value = false
  nextTick(() => menuTab.value?.focus())
}

function chooseLocale(next) {
  setLocale(next)
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

const narration = computed(() => {
  switch (step.value) {
    case 'intro':
      return t('narration.intro')
    case 'inspect':
      return t('narration.inspect')
    case 'shuffling':
      return t('narration.shuffling')
    case 'shuffled':
      return t('narration.shuffled')
    case 'drawing':
      return t('narration.drawing')
    case 'drawn':
      return t('narration.drawn', colorVars.value)
    case 'sorting':
      return t('narration.sorting')
    case 'proving':
      return isCheating.value
        ? t('narration.provingCheat', colorVars.value)
        : t('narration.proving', colorVars.value)
    case 'result':
      return isCheating.value
        ? t('narration.resultCheat', colorVars.value)
        : t('narration.result', colorVars.value)
    default:
      return ''
  }
})

const primaryAction = computed(() => {
  switch (step.value) {
    case 'intro':
      return { label: t('actions.begin'), run: begin }
    case 'inspect':
      return { label: t('actions.shuffle'), run: shuffleDeck }
    case 'shuffled':
      return { label: t('actions.draw'), run: draw }
    case 'drawn':
      return { label: t('actions.prove', colorVars.value), run: prove }
    case 'result':
      return { label: t('actions.again'), run: reset }
    default:
      return null
  }
})

const secondaryAction = computed(() => {
  if (step.value !== 'drawn' || !otherColor.value) return null
  return {
    label: t('actions.cheat', { claimCard: colorVars.value.lieCard }),
    run: tryCheat,
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

function onKeydown(event) {
  if (event.metaKey || event.ctrlKey || event.altKey) return
  if (isTypingTarget(event.target)) return

  if (event.key === 'Escape') {
    if (!menuOpen.value) return
    event.preventDefault()
    closeMenu()
    return
  }

  if (event.key === 'o' || event.key === 'O') {
    if (menuOpen.value) return
    event.preventDefault()
    openMenu()
  }
}

function syncViewport() {
  setNarrow(window.matchMedia('(max-width: 720px)').matches)
}

watch(menuOpen, async (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
  if (!open) return
  await nextTick()
  document.getElementById('site-menu')?.focus()
})

onMounted(() => {
  syncViewport()
  window.addEventListener('resize', syncViewport)
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  document.body.style.overflow = ''
  window.removeEventListener('resize', syncViewport)
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div class="page">
    <Transition name="fade">
      <div
        v-if="menuOpen"
        class="menu-backdrop"
        aria-hidden="true"
        @click="closeMenu"
      ></div>
    </Transition>

    <aside class="drawer" :class="{ 'is-open': menuOpen }">
      <div
        id="site-menu"
        class="drawer-panel"
        role="dialog"
        tabindex="-1"
        :inert="menuOpen ? undefined : true"
        :aria-modal="menuOpen"
        :aria-label="t('menu')"
        :aria-hidden="!menuOpen"
      >
        <header class="brand">
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
              <span class="step-index">{{ index + 1 }}</span>
              <span class="step-label">{{ t(item.labelKey) }}</span>
            </li>
          </ol>
        </header>

        <section class="menu-section">
          <h2>{{ t('language') }}</h2>
          <div class="lang-switch" :aria-label="t('language')">
            <button
              type="button"
              :class="{ 'is-active': locale === 'nl' }"
              :aria-pressed="locale === 'nl'"
              @click="chooseLocale('nl')"
            >
              NL
            </button>
            <button
              type="button"
              :class="{ 'is-active': locale === 'en' }"
              :aria-pressed="locale === 'en'"
              @click="chooseLocale('en')"
            >
              EN
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
        </section>
      </div>

      <button
        ref="menuTab"
        class="drawer-tab"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="site-menu"
        aria-keyshortcuts="O"
        :aria-label="menuOpen ? t('menuClose') : t('menuOpen')"
        @click="toggleMenu"
      >
        <span class="tab-chevron" aria-hidden="true"></span>
        <span class="tab-label" aria-hidden="true">{{ t('menu') }}</span>
        <kbd class="tab-key" aria-hidden="true">O</kbd>
      </button>
    </aside>

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

      <p class="narration">{{ narration }}</p>

      <div class="properties-slot">
        <ul v-if="step === 'result'" class="properties">
          <template v-if="proofSucceeded">
            <li>
              <strong>{{ t('properties.completenessLabel') }}</strong>
              {{ t('properties.completeness') }}
            </li>
            <li>
              <strong>{{ t('properties.zeroKnowledgeLabel') }}</strong>
              {{ t('properties.zeroKnowledge', colorVars) }}
            </li>
          </template>
          <li v-else>
            <strong>{{ t('properties.soundnessLabel') }}</strong>
            {{ t('properties.soundness', colorVars) }}
          </li>
        </ul>
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
              :disabled="busy"
              @click="primaryAction.run"
            >
              {{ primaryAction.label }}
            </button>
            <button
              v-if="secondaryAction"
              class="action action-secondary"
              type="button"
              :disabled="busy"
              @click="secondaryAction.run"
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
  </div>
</template>

<style scoped>
.page {
  width: min(1080px, 100%);
  margin: 0 auto;
  padding: 16px 20px 36px;
}

@media (max-width: 1140px) {
  .page {
    padding-left: 56px;
  }
}

.menu-backdrop {
  position: fixed;
  inset: 0;
  z-index: 80;
  background: rgba(8, 12, 10, 0.45);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.drawer {
  --tab-size: 42px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 90;
  display: flex;
  align-items: stretch;
  transform: translateX(calc(-100% + var(--tab-size)));
  transition: transform 0.28s ease;
}

.drawer.is-open {
  transform: translateX(0);
}

.drawer-panel {
  width: min(24rem, calc(100vw - 56px));
  height: 100%;
  overflow-y: auto;
  padding: 28px 22px 32px;
  background: rgba(16, 24, 20, 0.97);
  border-right: 1px solid rgba(230, 200, 122, 0.22);
  box-shadow: 8px 0 40px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(12px);
}

.drawer-panel:focus {
  outline: none;
}

.drawer-tab {
  appearance: none;
  align-self: center;
  width: var(--tab-size);
  min-height: 132px;
  padding: 14px 0 12px;
  border: 1px solid rgba(230, 200, 122, 0.28);
  border-left: 0;
  border-radius: 0 12px 12px 0;
  background: rgba(16, 24, 20, 0.96);
  color: var(--cream);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  cursor: pointer;
  box-shadow: 6px 0 18px rgba(0, 0, 0, 0.22);
}

.drawer-tab:focus-visible {
  outline: 2px solid #f7f1e6;
  outline-offset: 2px;
}

.tab-chevron {
  width: 8px;
  height: 8px;
  border-right: 1.5px solid currentColor;
  border-bottom: 1.5px solid currentColor;
  transform: rotate(-45deg);
  margin: 4px 0 2px 2px;
  transition: transform 0.2s ease;
}

.drawer.is-open .tab-chevron {
  transform: rotate(135deg);
  margin-left: 0;
}

.tab-label {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--brass);
}

.tab-key {
  font-family: var(--sans);
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  padding: 2px 5px;
  border-radius: 4px;
  border: 1px solid rgba(230, 200, 122, 0.35);
  color: var(--muted);
}

.brand {
  min-width: 0;
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
  flex-direction: column;
  gap: 6px;
  padding: 0;
  margin: 16px 0 0;
  color: var(--muted);
  font-size: 0.88rem;
  line-height: 1.35;
}

.progress li {
  display: flex;
  align-items: baseline;
  gap: 8px;
  color: rgba(201, 214, 204, 0.55);
}

.progress li .step-index {
  width: 1.1em;
  flex: 0 0 auto;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: rgba(230, 200, 122, 0.55);
}

.progress li .step-label {
  border-bottom: 1px solid transparent;
  padding-bottom: 1px;
}

.progress li.is-done {
  color: #cde3d4;
}

.progress li.is-done .step-index {
  color: #cde3d4;
}

.progress li.is-active {
  color: var(--cream);
}

.progress li.is-active .step-index,
.progress li.is-active .step-label {
  color: var(--cream);
}

.progress li.is-active .step-label {
  border-bottom-color: var(--brass);
}

.menu-section + .menu-section {
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid rgba(230, 200, 122, 0.14);
}

.brand + .menu-section {
  margin-top: 22px;
  padding-top: 16px;
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

@media (prefers-reduced-motion: reduce) {
  .drawer,
  .fade-enter-active,
  .fade-leave-active {
    transition: none;
  }
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
  min-height: 17rem;
}

.status .people {
  margin-bottom: 10px;
  min-height: 4.75rem;
}

.narration {
  margin: 0;
  color: var(--cream);
  font-size: 0.98rem;
  line-height: 1.45;
  min-height: 5.8em;
  max-height: 5.8em;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(230, 200, 122, 0.35) transparent;
}

.properties-slot {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid rgba(230, 200, 122, 0.14);
  min-height: 3.8rem;
}

.properties {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 6px;
  color: var(--muted);
  font-size: 0.9rem;
}

.properties strong {
  color: var(--brass);
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

@media (max-width: 720px) {
  .people {
    grid-template-columns: 1fr;
  }

  .status {
    min-height: 19rem;
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
