<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
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
  if (event.key === 'Escape' && menuOpen.value) closeMenu()
}

function syncViewport() {
  setNarrow(window.matchMedia('(max-width: 720px)').matches)
}

onMounted(() => {
  syncViewport()
  window.addEventListener('resize', syncViewport)
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
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

        <div class="menu">
          <button
            class="menu-toggle"
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
        </div>
      </div>
    </header>

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

    <section class="table" :aria-label="t('tableLabel')">
      <div class="felt">
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

    <section class="panel" aria-live="polite">
      <p class="narration">{{ narration }}</p>
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
      <p v-else class="wait">{{ busy ? t('watchCards') : '' }}</p>

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
    </section>
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

.menu {
  position: relative;
  flex: 0 0 auto;
}

.menu-toggle {
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
}

.menu-toggle:focus-visible {
  outline: 2px solid #f7f1e6;
  outline-offset: 2px;
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

.people {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 12px;
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
  height: min(62vh, 560px);
  min-height: 400px;
  border-radius: 18px;
  overflow: hidden;
  background:
    radial-gradient(1200px 420px at 50% 20%, rgba(255, 255, 255, 0.08), transparent 55%),
    radial-gradient(circle at 18% 70%, rgba(230, 200, 122, 0.16), transparent 28%),
    linear-gradient(160deg, #1f5a3a 0%, #143728 55%, #0f2f22 100%);
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

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 14px;
}

.action:hover:not(:disabled) {
  filter: brightness(1.06);
}

.panel {
  margin-top: 14px;
  padding: 16px 18px;
  border-radius: 18px;
  background: rgba(15, 24, 20, 0.92);
  border: 1px solid rgba(230, 200, 122, 0.18);
  position: sticky;
  bottom: 12px;
  backdrop-filter: blur(10px);
}

.narration {
  margin: 0;
  color: var(--cream);
  font-size: 1.02rem;
  line-height: 1.45;
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
}

.action-secondary {
  background: transparent;
  color: var(--cream);
  border: 1px solid rgba(230, 200, 122, 0.45);
}

.action-secondary:hover:not(:disabled) {
  filter: none;
  background: rgba(230, 200, 122, 0.12);
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
  margin: 14px 0 0;
  color: var(--muted);
  min-height: 1.2em;
}

.properties {
  margin: 14px 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 8px;
  color: var(--muted);
}

.properties strong {
  color: var(--brass);
}

@media (max-width: 720px) {
  .people {
    grid-template-columns: 1fr;
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
