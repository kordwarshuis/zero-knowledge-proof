<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import Character from './components/Character.vue'
import PlayingCard from './components/PlayingCard.vue'
import { useProofGame } from './composables/useProofGame.js'

const game = useProofGame()
const {
  step,
  cards,
  layouts,
  hand,
  revealed,
  remaining,
  busy,
  proofSucceeded,
  begin,
  shuffleDeck,
  draw,
  prove,
  reset,
  setNarrow,
} = game

const steps = [
  { id: 'inspect', label: 'Inspect' },
  { id: 'draw', label: 'Draw' },
  { id: 'prove', label: 'Prove' },
  { id: 'result', label: 'Result' },
]

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
      return 'You will draw a card that only you can see.'
    case 'inspect':
      return 'You can see the deck too — nothing is hidden yet.'
    case 'shuffling':
    case 'shuffled':
      return 'The cards are face down. Draw one at random.'
    case 'drawing':
      return 'Pulling a card behind the privacy screen…'
    case 'drawn':
      return hand.value
        ? `You drew the ${hand.value.label}. Person B cannot see it.`
        : ''
    case 'sorting':
      return 'Look through the remaining cards in private.'
    case 'proving':
      return 'Show Person B every black card. Keep the red ones hidden.'
    case 'result':
      return proofSucceeded.value
        ? 'Person B is convinced — and still does not know which red card you hold.'
        : 'You could not produce four black cards, because you are holding one.'
    default:
      return ''
  }
})

const personBNote = computed(() => {
  switch (step.value) {
    case 'intro':
      return 'I need to be convinced you have a red card.'
    case 'inspect':
      return 'Four red, four black. I have seen every card in this deck.'
    case 'shuffling':
      return 'I no longer know the order.'
    case 'shuffled':
      return 'Same eight cards, now face down. I do not know which is which.'
    case 'drawing':
    case 'drawn':
      return 'Person A is holding a card. I cannot see it. It might be red or black.'
    case 'sorting':
      return 'Person A is looking at the remaining cards. The screen blocks my view.'
    case 'proving':
      return revealed.value.length
        ? `I have been shown ${revealed.value.length} black card${revealed.value.length === 1 ? '' : 's'} so far.`
        : 'Waiting to see black cards…'
    case 'result':
      return proofSucceeded.value
        ? 'All four black cards are here. The hidden card must be red — but I still do not know which of the four red cards it is.'
        : 'Only three black cards were shown. One black card is missing. I am not convinced.'
    default:
      return ''
  }
})

const narration = computed(() => {
  switch (step.value) {
    case 'intro':
      return 'A zero-knowledge proof lets you convince someone a statement is true without revealing anything else. Here, Person A wants to prove she has a red card — without showing which red card it is.'
    case 'inspect':
      return 'Before anyone draws, Person B inspects the whole deck: four red cards and four black cards. Both of you agree on exactly which eight cards exist.'
    case 'shuffling':
      return 'The cards are shuffled and turned face down.'
    case 'shuffled':
      return 'You are Person A. Draw a random card. Person B will not be allowed to see it.'
    case 'drawing':
      return 'The card slides behind the privacy screen. Only you will see its face.'
    case 'drawn':
      return hand.value?.color === 'red'
        ? 'You have a red card. You can prove that fact by showing Person B every black card — and none of the red ones.'
        : 'You have a black card. Try the proof anyway. If the statement is false, it should fail.'
    case 'sorting':
      return 'You look at the remaining seven cards in private. Person B still cannot see their faces.'
    case 'proving':
      return 'Every black card from the remainder is shown to Person B. Red cards stay on your side of the screen.'
    case 'result':
      return proofSucceeded.value
        ? 'Person B has now seen all four black cards, so your hidden card must be red. The three leftover red cards were never shown, so Person B cannot tell which of the four red cards you drew. That is the zero-knowledge part.'
        : 'You only had three black cards left to show, because the fourth is in your hand. Person B notices a black card is missing and refuses to believe you drew red. You cannot prove a false statement.'
    default:
      return ''
  }
})

const action = computed(() => {
  switch (step.value) {
    case 'intro':
      return { label: 'Show Person B the deck', run: begin }
    case 'inspect':
      return { label: 'Shuffle and turn face down', run: shuffleDeck }
    case 'shuffled':
      return { label: 'Draw a random card', run: draw }
    case 'drawn':
      return {
        label:
          hand.value?.color === 'red'
            ? 'Prove you have a red card'
            : 'Try to prove you have a red card',
        run: prove,
      }
    case 'result':
      return { label: 'Play again', run: reset }
    default:
      return null
  }
})

const showPrivateLabel = computed(() =>
  ['drawing', 'drawn', 'sorting', 'proving', 'result'].includes(step.value),
)

const showPublicLabel = computed(() =>
  ['proving', 'result'].includes(step.value) && revealed.value.length > 0,
)

const showSecretPile = computed(
  () =>
    ['sorting', 'proving', 'result'].includes(step.value) &&
    remaining.value.some((card) => card.color === 'red'),
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
      <p class="eyebrow">A small card-table demonstration</p>
      <h1>Zero-knowledge proof</h1>
      <p class="lede">
        Prove you drew a red card without showing it — and without revealing
        <em>which</em> red card it is.
      </p>
      <ol class="progress" aria-label="Demonstration steps">
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
          {{ item.label }}
        </li>
      </ol>
    </header>

    <div class="people">
      <Character
        who="a"
        title="You · Person A"
        subtitle="Prover"
        :note="personANote"
      />
      <Character
        who="b"
        title="Person B"
        subtitle="Verifier"
        :note="personBNote"
      />
    </div>

    <section class="table" aria-label="Card table">
      <div class="felt">
        <div
          class="privacy-screen"
          :class="{ 'is-on': showPrivateLabel }"
          aria-hidden="true"
        >
          <span class="plaque a-side">Your eyes only</span>
          <span class="plaque b-side">No view</span>
        </div>

        <p v-if="step === 'inspect'" class="row-tag red">Red</p>
        <p v-if="step === 'inspect'" class="row-tag black">Black</p>

        <p v-if="step === 'drawing' || step === 'drawn'" class="zone-label private">
          Private — Person B cannot see this
        </p>
        <p v-if="hand && showPrivateLabel" class="hand-caption">
          <span>Your card</span>
          <strong>{{ layouts[hand.id]?.faceUp ? hand.label : 'Coming to you face down…' }}</strong>
          <small>Person B cannot see this card</small>
        </p>
        <div
          v-if="hand && showPrivateLabel"
          class="unknown-card"
          aria-hidden="true"
        >
          <span class="mystery">?</span>
          <small>Person A’s card<br />hidden from me</small>
        </div>
        <p v-if="showSecretPile" class="zone-label secret">
          {{ step === 'sorting' ? 'Remaining cards — still private' : 'Red cards kept hidden' }}
        </p>
        <p v-if="showPublicLabel" class="zone-label public">
          Shown to Person B
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
      <p v-else class="wait">{{ busy ? 'Watch the cards…' : '' }}</p>

      <ul v-if="step === 'result'" class="properties">
        <li v-if="proofSucceeded">
          <strong>Completeness.</strong>
          The statement was true, so the proof succeeded.
        </li>
        <li v-if="proofSucceeded">
          <strong>Zero knowledge.</strong>
          Person B learned only that your card is red — not whether it is the
          ace or king of hearts or diamonds.
        </li>
        <li v-if="!proofSucceeded">
          <strong>Soundness.</strong>
          A false statement cannot be proven. Holding a black card, you could
          not show all four black cards.
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
