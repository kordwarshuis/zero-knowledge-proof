import { computed, ref } from 'vue'
import { cloneDeck, shuffle, wait } from '../data/deck.js'

function slot(x, y, extras = {}) {
  return {
    x,
    y,
    rot: 0,
    scale: 1,
    faceUp: false,
    z: 1,
    glow: null,
    ...extras,
  }
}

function randomScatter(cards, narrow) {
  const map = {}
  cards.forEach((card, i) => {
    map[card.id] = {
      x: (narrow ? 22 : 30) + Math.random() * (narrow ? 56 : 48),
      y: (narrow ? 18 : 28) + Math.random() * (narrow ? 28 : 42),
      rot: Math.random() * 70 - 35,
      z: i,
    }
  })
  return map
}

export function useProofGame() {
  const step = ref('intro')
  const cards = ref(cloneDeck())
  const handId = ref(null)
  const revealedIds = ref([])
  const handRevealed = ref(false)
  const scatter = ref(null)
  const isNarrow = ref(false)
  const busy = ref(false)

  const hand = computed(
    () => cards.value.find((card) => card.id === handId.value) ?? null,
  )

  const revealed = computed(() =>
    revealedIds.value.map((id) => cards.value.find((card) => card.id === id)),
  )

  const remaining = computed(() =>
    cards.value.filter(
      (card) => card.id !== handId.value && !revealedIds.value.includes(card.id),
    ),
  )

  const proofSucceeded = computed(
    () =>
      step.value === 'result' &&
      revealedIds.value.length === 4 &&
      hand.value?.color === 'red',
  )

  const layouts = computed(() => {
    const map = {}
    const list = cards.value
    const narrow = isNarrow.value
    const current = step.value

    if (current === 'intro') {
      list.forEach((card, i) => {
        map[card.id] = slot(50 + i * 0.32, 48 + i * 0.38, {
          rot: -12 + i * 2.4,
          z: i,
        })
      })
      return map
    }

    if (current === 'inspect') {
      const reds = list.filter((card) => card.color === 'red')
      const blacks = list.filter((card) => card.color === 'black')
      reds.forEach((card, i) => {
        map[card.id] = slot(
          narrow ? 20 + i * 21 : 52 + i * 11.5,
          narrow ? 20 : 34,
          { faceUp: true, z: i, delay: i * 80 },
        )
      })
      blacks.forEach((card, i) => {
        map[card.id] = slot(
          narrow ? 20 + i * 21 : 52 + i * 11.5,
          narrow ? 38 : 64,
          { faceUp: true, z: i, delay: (i + 4) * 80 },
        )
      })
      return map
    }

    if (current === 'shuffling' && scatter.value) {
      list.forEach((card) => {
        const jitter = scatter.value[card.id]
        map[card.id] = slot(jitter.x, jitter.y, {
          rot: jitter.rot,
          z: jitter.z,
        })
      })
      return map
    }

    if (current === 'shuffled' || current === 'drawing' || current === 'drawn') {
      list.forEach((card, i) => {
        const isHand = card.id === handId.value
        if (isHand && current !== 'shuffled') {
          map[card.id] = slot(narrow ? 28 : 16, narrow ? 78 : 60, {
            rot: -8,
            faceUp: handRevealed.value,
            z: 40,
            scale: 1.16,
            glow: handRevealed.value ? hand.value?.color : null,
          })
        } else {
          map[card.id] = slot(
            (narrow ? 50 : 58) + i * 0.42,
            (narrow ? 28 : 50) + i * 0.32,
            { rot: -8 + i * 1.6, z: i },
          )
        }
      })
      return map
    }

    if (handId.value) {
      map[handId.value] = slot(narrow ? 20 : 14, narrow ? 82 : 66, {
        rot: -7,
        faceUp: true,
        z: 40,
        scale: 1.16,
        glow: hand.value?.color,
      })
    }

    const showPrivateFaces =
      current === 'sorting' || current === 'proving' || current === 'result'

      remaining.value.forEach((card, i) => {
        if (narrow) {
          map[card.id] = slot(22 + (i % 4) * 20, 62 + Math.floor(i / 4) * 12, {
            rot: -10 + i * 3,
            faceUp: showPrivateFaces,
            z: 8 + i,
          })
        } else {
          map[card.id] = slot(9 + i * 3.6, 30 + (i % 2), {
            rot: -12 + i * 3.5,
            faceUp: showPrivateFaces,
            z: 8 + i,
          })
        }
      })

    revealed.value.forEach((card, i) => {
      map[card.id] = slot(
        narrow ? 18 + i * 21 : 51 + i * 11.5,
        narrow ? 24 : 52,
        { faceUp: true, z: 16 + i, rot: -4 + i * 1.8 },
      )
    })

    list.forEach((card, i) => {
      if (!map[card.id]) {
        map[card.id] = slot(50, 48, { z: i })
      }
    })

    return map
  })

  function setNarrow(value) {
    isNarrow.value = value
  }

  async function begin() {
    cards.value = cloneDeck()
    handId.value = null
    revealedIds.value = []
    handRevealed.value = false
    scatter.value = null
    step.value = 'inspect'
  }

  async function shuffleDeck() {
    busy.value = true
    step.value = 'shuffling'
    for (let pass = 0; pass < 3; pass += 1) {
      cards.value = shuffle(cards.value)
      scatter.value = randomScatter(cards.value, isNarrow.value)
      await wait(420)
    }
    scatter.value = null
    step.value = 'shuffled'
    busy.value = false
  }

  async function draw() {
    busy.value = true
    const index = Math.floor(Math.random() * cards.value.length)
    handId.value = cards.value[index].id
    handRevealed.value = false
    step.value = 'drawing'
    await wait(720)
    handRevealed.value = true
    step.value = 'drawn'
    busy.value = false
  }

  async function prove() {
    busy.value = true
    step.value = 'sorting'
    await wait(1100)
    step.value = 'proving'
    const blacks = cards.value.filter(
      (card) => card.id !== handId.value && card.color === 'black',
    )
    for (const card of blacks) {
      await wait(520)
      revealedIds.value = [...revealedIds.value, card.id]
    }
    await wait(850)
    step.value = 'result'
    busy.value = false
  }

  function reset() {
    cards.value = cloneDeck()
    handId.value = null
    revealedIds.value = []
    handRevealed.value = false
    scatter.value = null
    busy.value = false
    step.value = 'inspect'
  }

  return {
    step,
    cards,
    layouts,
    hand,
    revealed,
    remaining,
    busy,
    proofSucceeded,
    isNarrow,
    begin,
    shuffleDeck,
    draw,
    prove,
    reset,
    setNarrow,
  }
}
