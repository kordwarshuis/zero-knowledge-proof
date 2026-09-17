const SKIP_KEYS = new Set([
  'htmlLang',
  'colors',
  'colorCard',
  'colorCards',
  'ranks',
  'suits',
  'cardOf',
])

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function interpolate(template, vars) {
  return String(template).replace(/\{(\w+)\}/g, (_, key) =>
    vars[key] == null ? '' : String(vars[key]),
  )
}

function colorVars(copy, color) {
  return {
    color: copy.colors[color],
    card: copy.colorCard[color],
    cards: copy.colorCards[color],
  }
}

function exampleVars(copy, { claimColor, shownColor }) {
  const own = colorVars(copy, 'red')
  const claim = colorVars(copy, claimColor)
  const shown = colorVars(copy, shownColor)
  return {
    current: '1',
    total: '9',
    count: '3',
    card: interpolate(copy.cardOf, {
      rank: copy.ranks[1],
      suit: copy.suits.hearts,
    }),
    ownColor: own.color,
    ownCard: own.card,
    ownCards: own.cards,
    claimColor: claim.color,
    claimCard: claim.card,
    claimCards: claim.cards,
    otherColor: shown.color,
    otherCard: shown.card,
    otherCards: shown.cards,
  }
}

function varsForKey(key, honest, cheat) {
  return /cheat|soundness/i.test(key) ? cheat : honest
}

function renderValue(value, key, honest, cheat) {
  if (typeof value === 'string') {
    const text = interpolate(value, varsForKey(key, honest, cheat)).trim()
    return text ? `<div>${escapeHtml(text)}</div>` : ''
  }

  if (!value || typeof value !== 'object') return ''

  const inner = Object.entries(value)
    .filter(([childKey]) => !SKIP_KEYS.has(childKey))
    .map(([childKey, childValue]) =>
      renderValue(childValue, childKey, honest, cheat),
    )
    .join('')

  return inner ? `<div>${inner}</div>` : ''
}

export function renderCrawlerHtml(messages, locales) {
  const languages = locales
    .map((locale) => {
      const copy = messages[locale]
      if (!copy) return ''
      const honest = exampleVars(copy, {
        claimColor: 'red',
        shownColor: 'black',
      })
      const cheat = exampleVars(copy, {
        claimColor: 'black',
        shownColor: 'red',
      })
      const inner = renderValue(copy, locale, honest, cheat)
      if (!inner) return ''
      return `<div lang="${escapeHtml(copy.htmlLang ?? locale)}">${inner}</div>`
    })
    .join('')

  return `<div class="visually-hidden" id="text-content">${languages}</div>`
}
