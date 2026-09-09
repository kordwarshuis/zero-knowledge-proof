import { computed, ref, watch } from 'vue'
import { LOCALES, OG_LOCALES, messages } from '../i18n/messages.js'

const STORAGE_KEY = 'zkp-locale'
const PARAM = 'lang'

function isLocale(value) {
  return LOCALES.includes(value)
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

function detectLocale() {
  return localeFromUrl() ?? localeFromStorage() ?? 'en'
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

function setMeta(attr, key, value) {
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

function applyDocumentLanguage(next) {
  const copy = messages[next]
  document.documentElement.lang = copy.htmlLang
  document.title = copy.documentTitle
  setMeta('name', 'description', copy.socialDescription)
  setMeta('property', 'og:locale', OG_LOCALES[next] ?? 'en_US')
  setMeta('property', 'og:title', copy.documentTitle)
  setMeta('property', 'og:description', copy.socialDescription)
  setMeta('property', 'og:image:alt', copy.ogImageAlt)
  setMeta('name', 'twitter:title', copy.documentTitle)
  setMeta('name', 'twitter:description', copy.socialDescription)
  setMeta('name', 'twitter:image:alt', copy.ogImageAlt)
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
    locales: LOCALES,
    t,
    cardLabel,
    setLocale,
    isNl: computed(() => locale.value === 'nl'),
  }
}
