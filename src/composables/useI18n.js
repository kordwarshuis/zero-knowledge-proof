import { computed, ref, watch } from 'vue'
import { messages } from '../i18n/messages.js'

const STORAGE_KEY = 'zkp-locale'
const PARAM = 'lang'

function isLocale(value) {
  return value === 'nl' || value === 'en'
}

function localeFromUrl() {
  const value = new URLSearchParams(window.location.search).get(PARAM)
  return isLocale(value) ? value : null
}

function localeFromStorage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return isLocale(saved) ? saved : null
  } catch {
    return null
  }
}

function localeFromBrowser() {
  const language = (navigator.language || '').toLowerCase()
  return language.startsWith('nl') ? 'nl' : 'en'
}

function detectLocale() {
  return localeFromUrl() ?? localeFromStorage() ?? localeFromBrowser()
}

function writeUrlLocale(next) {
  const url = new URL(window.location.href)
  if (url.searchParams.get(PARAM) === next) return
  url.searchParams.set(PARAM, next)
  window.history.replaceState(window.history.state, '', url)
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

function syncFromUrl() {
  const fromUrl = localeFromUrl()
  if (fromUrl && fromUrl !== locale.value) locale.value = fromUrl
}

watch(
  locale,
  (next) => {
    applyDocumentLanguage(next)
    writeUrlLocale(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Ignore blocked storage.
    }
  },
  { immediate: true },
)

window.addEventListener('popstate', syncFromUrl)

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
    if (isLocale(next)) locale.value = next
  }

  return {
    locale,
    t,
    cardLabel,
    setLocale,
    isNl: computed(() => locale.value === 'nl'),
  }
}
