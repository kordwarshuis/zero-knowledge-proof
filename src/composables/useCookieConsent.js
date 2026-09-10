import { computed, ref } from 'vue'

const STORAGE_KEY = 'zkp-cookie-consent'
const GA_ID = 'G-KTZ85K7JTZ'

/** @typedef {'granted' | 'denied'} ConsentChoice */

const choice = ref(/** @type {ConsentChoice | null} */ (readStoredChoice()))
const bannerOpen = ref(choice.value == null)

function readStoredChoice() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'granted' || saved === 'denied') return saved
  } catch {
    // Ignore blocked storage.
  }
  return null
}

function persist(next) {
  try {
    localStorage.setItem(STORAGE_KEY, next)
  } catch {
    // Ignore blocked storage.
  }
}

function gtag(...args) {
  if (typeof window.gtag === 'function') {
    window.gtag(...args)
    return
  }
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(args)
}

function consentUpdate(analyticsGranted) {
  const value = analyticsGranted ? 'granted' : 'denied'
  gtag('consent', 'update', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: value,
  })
}

function clearAnalyticsCookies() {
  const cookies = document.cookie.split(';')
  for (const part of cookies) {
    const name = part.split('=')[0]?.trim()
    if (!name) continue
    if (name === '_ga' || name === '_gid' || name.startsWith('_ga_')) {
      document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`
      document.cookie = `${name}=; Max-Age=0; path=/; domain=${window.location.hostname}; SameSite=Lax`
    }
  }
}

function loadGoogleAnalytics() {
  if (window.__zkpGaLoaded) return
  window.__zkpGaLoaded = true

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)

  gtag('js', new Date())
  gtag('config', GA_ID)
}

function applyChoice(next) {
  choice.value = next
  persist(next)
  consentUpdate(next === 'granted')

  if (next === 'granted') {
    loadGoogleAnalytics()
  } else {
    clearAnalyticsCookies()
  }
}

if (choice.value === 'granted') {
  consentUpdate(true)
  loadGoogleAnalytics()
} else if (choice.value === 'denied') {
  consentUpdate(false)
}

export function useCookieConsent() {
  const needsChoice = computed(() => choice.value == null)
  const showBanner = computed(() => bannerOpen.value)

  function accept() {
    applyChoice('granted')
    bannerOpen.value = false
  }

  function reject() {
    applyChoice('denied')
    bannerOpen.value = false
  }

  function openSettings() {
    bannerOpen.value = true
  }

  return {
    choice,
    needsChoice,
    showBanner,
    accept,
    reject,
    openSettings,
  }
}
