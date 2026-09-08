export const SUITS = {
  hearts: { symbol: '♥', color: 'red', name: 'Hearts' },
  diamonds: { symbol: '♦', color: 'red', name: 'Diamonds' },
  spades: { symbol: '♠', color: 'black', name: 'Spades' },
  clubs: { symbol: '♣', color: 'black', name: 'Clubs' },
}

export const FULL_DECK = [
  { id: 'AH', rank: 'A', suit: 'hearts' },
  { id: 'KH', rank: 'K', suit: 'hearts' },
  { id: 'AD', rank: 'A', suit: 'diamonds' },
  { id: 'KD', rank: 'K', suit: 'diamonds' },
  { id: 'AS', rank: 'A', suit: 'spades' },
  { id: 'KS', rank: 'K', suit: 'spades' },
  { id: 'AC', rank: 'A', suit: 'clubs' },
  { id: 'KC', rank: 'K', suit: 'clubs' },
].map((card) => ({
  ...card,
  color: SUITS[card.suit].color,
  symbol: SUITS[card.suit].symbol,
  label: `${card.rank === 'A' ? 'Ace' : 'King'} of ${SUITS[card.suit].name}`,
}))

export function cloneDeck() {
  return FULL_DECK.map((card) => ({ ...card }))
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
