import { computed, ref, watch } from 'vue'
import { messages } from '../i18n/messages.js'

const STORAGE_KEY = 'zkp-locale'

function detectLocale() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'nl' || saved === 'en') return saved
  } catch {
    // Ignore blocked storage.
  }
  const language = (navigator.language || '').toLowerCase()
  return language.startsWith('nl') ? 'nl' : 'en'
}

const locale = ref(detectLocale())

function lookup(path) {
  return path.split('.').reduce((value, key) => value?.[key], messages[locale.value])
}

function interpolate(template, vars = {}) {
  return String(template).replace(/\{(\w+)\}/g, (_, key) =>
    vars[key] == null ? '' : String(vars[key]),
  )
}

function applyDocumentLanguage(next) {
  document.documentElement.lang = messages[next].htmlLang
  document.title = messages[next].documentTitle
}

watch(
  locale,
  (next) => {
    applyDocumentLanguage(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Ignore blocked storage.
    }
  },
  { immediate: true },
)

export function useI18n() {
  const t = (path, vars) => interpolate(lookup(path) ?? path, vars)

  const cardLabel = (card) => {
    if (!card) return ''
    return t('cardOf', {
      rank: t(`ranks.${card.rank}`),
      suit: t(`suits.${card.suit}`),
    })
  }

  function setLocale(next) {
    if (next === 'nl' || next === 'en') locale.value = next
  }

  return {
    locale,
    t,
    cardLabel,
    setLocale,
    isNl: computed(() => locale.value === 'nl'),
  }
}
