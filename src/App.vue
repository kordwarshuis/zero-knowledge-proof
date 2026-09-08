<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
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
  busy,
  begin,
  shuffleDeck,
  draw,
  prove,
  reset,
  setNarrow,
} = game

const steps = [
  { id: 'inspect', labelKey: 'steps.inspect' },
  { id: 'draw', labelKey: 'steps.draw' },
  { id: 'prove', labelKey: 'steps.prove' },
  { id: 'result', labelKey: 'steps.result' },
]

const colorVars = computed(() => {
  const own = handColor.value ?? 'red'
  const other = otherColor.value
  return {
    ownColor: t(`colors.${own}`),
    ownCard: t(`colorCard.${own}`),
    ownCards: t(`colorCards.${own}`),
    otherCard: t(`colorCard.${other}`),
    otherCards: t(`colorCards.${other}`),
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
      return t('personA.proving', colorVars.value)
    case 'result':
      return t('personA.result', colorVars.value)
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
      return t('personB.result', colorVars.value)
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
      return t('narration.proving', colorVars.value)
    case 'result':
      return t('narration.result', colorVars.value)
    default:
      return ''
  }
})

const action = computed(() => {
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

const showPrivateLabel = computed(() =>
  ['drawing', 'drawn', 'sorting', 'proving', 'result'].includes(step.value),
)

const showPublicLabel = computed(
  () => ['proving', 'result'].includes(step.value) && revealed.value.length > 0,
)

const showSecretPile = computed(
  () =>
    ['sorting', 'proving', 'result'].includes(step.value) &&
    remaining.value.length > 0,
)

function syncViewport() {
  setNarrow(window.matchMedia('(max-width: 720px)').matches)
}

onMounted(() => {
  syncViewport()
  window.addEventListener('resize', syncViewport)
})

onUnmounted(() => {
  window.removeEventListener('resize', syncViewport)
})
</script>

<template>
  <div class="page">
    <header class="top">
      <nav class="lang-switch" :aria-label="t('language')">
        <button
          type="button"
          :class="{ 'is-active': locale === 'nl' }"
          :aria-pressed="locale === 'nl'"
          @click="setLocale('nl')"
        >
          NL
        </button>
        <button
          type="button"
          :class="{ 'is-active': locale === 'en' }"
          :aria-pressed="locale === 'en'"
          @click="setLocale('en')"
        >
          EN
        </button>
      </nav>
      <p class="eyebrow">{{ t('eyebrow') }}</p>
      <h1>{{ t('title') }}</h1>
      <p class="lede">
        {{ t('ledeBefore') }}
        <em>{{ t('ledeEm') }}</em>
        {{ t('ledeAfter') }}
      </p>
      <ol class="progress" :aria-label="t('stepsLabel')">
        <li
          v-for="item in steps"
          :key="item.id"
          :class="{
            'is-active': activeStep === item.id,
            'is-done':
              steps.findIndex((stepItem) => stepItem.id === activeStep) >
              steps.findIndex((stepItem) => stepItem.id === item.id),
          }"
        >
          {{ t(item.labelKey) }}
        </li>
      </ol>
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
      <button
        v-if="action"
        class="action"
        type="button"
        :disabled="busy"
        @click="action.run"
      >
        {{ action.label }}
      </button>
      <p v-else class="wait">{{ busy ? t('watchCards') : '' }}</p>

      <ul v-if="step === 'result'" class="properties">
        <li>
          <strong>{{ t('properties.completenessLabel') }}</strong>
          {{ t('properties.completeness') }}
        </li>
        <li>
          <strong>{{ t('properties.zeroKnowledgeLabel') }}</strong>
          {{ t('properties.zeroKnowledge', colorVars) }}
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.page {
  width: min(1080px, 100%);
  margin: 0 auto;
  padding: 28px 20px 48px;
}

.lang-switch {
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-bottom: 14px;
}

.lang-switch button {
  appearance: none;
  min-width: 44px;
  padding: 6px 10px;
  border-radius: 999px;
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

.top {
  text-align: center;
  margin-bottom: 22px;
}

.eyebrow {
  margin: 0 0 8px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-size: 0.72rem;
  color: var(--brass);
}

h1 {
  margin: 0;
  font-family: var(--heading);
  font-size: clamp(2rem, 5vw, 3.4rem);
  font-weight: 600;
  color: var(--cream);
  letter-spacing: -0.03em;
}

.lede {
  margin: 10px auto 0;
  max-width: 42rem;
  color: var(--muted);
}

.progress {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 0;
  margin: 22px 0 0;
  flex-wrap: wrap;
}

.progress li {
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid rgba(230, 200, 122, 0.25);
  color: var(--muted);
  font-size: 0.82rem;
}

.progress li.is-active {
  background: rgba(230, 200, 122, 0.16);
  color: var(--cream);
  border-color: var(--brass);
}

.progress li.is-done {
  color: #cde3d4;
  border-color: rgba(205, 227, 212, 0.35);
}

.people {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin-bottom: 16px;
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
  height: min(54vh, 500px);
  min-height: 380px;
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

.action:hover:not(:disabled) {
  filter: brightness(1.06);
}

.panel {
  margin-top: 18px;
  padding: 20px 22px;
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
  font-size: 1.05rem;
  line-height: 1.5;
}

.action {
  margin-top: 16px;
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

.action:disabled {
  opacity: 0.55;
  cursor: wait;
}

.action:focus-visible {
  outline: 2px solid #f7f1e6;
  outline-offset: 3px;
}

.wait {
  margin: 16px 0 0;
  color: var(--muted);
  min-height: 1.2em;
}

.properties {
  margin: 16px 0 0;
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
}
</style>
