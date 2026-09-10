<script setup>
import { useCookieConsent } from '../composables/useCookieConsent.js'
import { useI18n } from '../composables/useI18n.js'

const { t } = useI18n()
const { showBanner, accept, reject } = useCookieConsent()
</script>

<template>
  <Teleport to="body">
    <Transition name="cookie-slide">
      <div
        v-if="showBanner"
        class="cookie-banner"
        role="dialog"
        aria-modal="false"
        aria-labelledby="cookie-banner-title"
        aria-describedby="cookie-banner-text"
      >
        <div class="cookie-banner__inner">
          <div class="cookie-banner__copy">
            <p id="cookie-banner-title" class="cookie-banner__title">
              {{ t('cookies.title') }}
            </p>
            <p id="cookie-banner-text" class="cookie-banner__text">
              {{ t('cookies.text') }}
            </p>
          </div>
          <div class="cookie-banner__actions">
            <button class="cookie-btn" type="button" @click="reject">
              {{ t('cookies.reject') }}
            </button>
            <button class="cookie-btn" type="button" @click="accept">
              {{ t('cookies.accept') }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.cookie-banner {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 140;
  padding: 12px 16px calc(12px + env(safe-area-inset-bottom, 0px));
  pointer-events: none;
}

.cookie-banner__inner {
  pointer-events: auto;
  width: min(720px, 100%);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px 18px;
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid rgba(230, 200, 122, 0.32);
  background:
    linear-gradient(180deg, rgba(24, 34, 28, 0.96), rgba(14, 20, 17, 0.98));
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(10px);
}

.cookie-banner__copy {
  min-width: 0;
  flex: 1;
}

.cookie-banner__title {
  margin: 0 0 4px;
  font-family: var(--heading);
  font-size: 0.98rem;
  font-weight: 600;
  font-style: italic;
  color: var(--cream);
  letter-spacing: -0.02em;
}

.cookie-banner__text {
  margin: 0;
  color: var(--muted);
  font-size: 0.82rem;
  line-height: 1.4;
}

.cookie-banner__actions {
  display: flex;
  flex: 0 0 auto;
  gap: 8px;
}

.cookie-btn {
  appearance: none;
  margin: 0;
  min-width: 6.5rem;
  padding: 10px 16px;
  border-radius: 999px;
  border: 1px solid rgba(230, 200, 122, 0.55);
  background: rgba(16, 24, 20, 0.72);
  color: var(--cream);
  font-family: var(--sans);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
}

.cookie-btn:hover {
  background: rgba(230, 200, 122, 0.12);
}

.cookie-btn:focus-visible {
  outline: 2px solid #f7f1e6;
  outline-offset: 2px;
}

.cookie-slide-enter-active,
.cookie-slide-leave-active {
  transition:
    opacity 0.22s ease,
    transform 0.22s ease;
}

.cookie-slide-enter-from,
.cookie-slide-leave-to {
  opacity: 0;
  transform: translateY(12px);
}

@media (max-width: 640px) {
  .cookie-banner__inner {
    flex-direction: column;
    align-items: stretch;
  }

  .cookie-banner__actions {
    width: 100%;
  }

  .cookie-btn {
    flex: 1;
    min-width: 0;
  }
}
</style>
