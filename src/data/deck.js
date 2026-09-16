export const SUITS = {
  hearts: { symbol: '♥', color: 'red' },
  diamonds: { symbol: '♦', color: 'red' },
  spades: { symbol: '♠', color: 'black' },
  clubs: { symbol: '♣', color: 'black' },
}

export const FULL_DECK = [
  { id: '1H', rank: '1', suit: 'hearts' },
  { id: '2H', rank: '2', suit: 'hearts' },
  { id: '3H', rank: '3', suit: 'hearts' },
  { id: '4H', rank: '4', suit: 'hearts' },
  { id: '1S', rank: '1', suit: 'spades' },
  { id: '2S', rank: '2', suit: 'spades' },
  { id: '3S', rank: '3', suit: 'spades' },
  { id: '4S', rank: '4', suit: 'spades' },
].map((card) => ({
  ...card,
  color: SUITS[card.suit].color,
  symbol: SUITS[card.suit].symbol,
}))

export function cloneDeck() {
  return FULL_DECK.map((card) => ({ ...card }))
}

export function byRank(a, b) {
  return Number(a.rank) - Number(b.rank)
}

export function byColorThenRank(a, b) {
  if (a.color !== b.color) return a.color === 'red' ? -1 : 1
  return byRank(a, b)
}

export function shuffle(list) {
  const next = [...list]
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[next[i], next[j]] = [next[j], next[i]]
  }
  return next
}

export function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
