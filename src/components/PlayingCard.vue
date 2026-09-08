<script setup>
import { computed } from 'vue'
import { useI18n } from '../composables/useI18n.js'

const props = defineProps({
  card: { type: Object, required: true },
  layout: { type: Object, required: true },
})

const { t, cardLabel } = useI18n()

const aria = computed(() => {
  if (!props.layout.faceUp) return t('faceDownCard')
  return cardLabel(props.card)
})
</script>

<template>
  <article
    class="playing-card"
    :class="[
      `is-${card.color}`,
      {
        'is-up': layout.faceUp,
        'is-glow-red': layout.glow === 'red',
        'is-glow-black': layout.glow === 'black',
      },
    ]"
    :style="{
      left: `${layout.x}%`,
      top: `${layout.y}%`,
      zIndex: layout.z,
      '--rot': `${layout.rot}deg`,
      '--scale': layout.scale ?? 1,
      '--delay': `${layout.delay ?? 0}ms`,
    }"
    :aria-label="aria"
  >
    <div class="shell">
      <div class="face back" aria-hidden="true">
        <div class="back-grid"></div>
        <div class="back-medallion">
          <span>ZK</span>
        </div>
      </div>
      <div class="face front">
        <div class="corner top">
          <span class="rank">{{ card.rank }}</span>
          <span class="pip">{{ card.symbol }}</span>
        </div>
        <div class="center-pip">{{ card.symbol }}</div>
        <div class="corner bottom">
          <span class="rank">{{ card.rank }}</span>
          <span class="pip">{{ card.symbol }}</span>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.playing-card {
  position: absolute;
  width: 86px;
  height: 122px;
  transform: translate(-50%, -50%) rotate(var(--rot)) scale(var(--scale));
  transform-origin: center;
  transition:
    left 0.7s cubic-bezier(0.22, 0.8, 0.2, 1),
    top 0.7s cubic-bezier(0.22, 0.8, 0.2, 1),
    transform 0.7s cubic-bezier(0.22, 0.8, 0.2, 1);
  transition-delay: var(--delay);
  perspective: 800px;
  filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.28));
}

.shell {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.55s cubic-bezier(0.22, 0.8, 0.2, 1);
  border-radius: 10px;
}

.playing-card.is-up .shell {
  transform: rotateY(180deg);
}

.face {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  border-radius: 10px;
  overflow: hidden;
}

.back {
  background: linear-gradient(160deg, #6f2432 0%, #3a1018 100%);
  border: 3px solid #f3e3c4;
  display: grid;
  place-items: center;
}

.back-grid {
  position: absolute;
  inset: 7px;
  border-radius: 6px;
  background:
    repeating-linear-gradient(
      45deg,
      rgba(212, 175, 90, 0.22) 0 2px,
      transparent 2px 8px
    ),
    repeating-linear-gradient(
      -45deg,
      rgba(212, 175, 90, 0.22) 0 2px,
      transparent 2px 8px
    );
}

.back-medallion {
  position: relative;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1.5px solid #e6c87a;
  display: grid;
  place-items: center;
  background: rgba(58, 16, 24, 0.85);
  color: #e6c87a;
  font-family: var(--heading);
  font-size: 13px;
  letter-spacing: 0.04em;
}

.front {
  background: #f7f1e6;
  border: 3px solid #f7f1e6;
  box-shadow: inset 0 0 0 1px rgba(80, 50, 20, 0.12);
  transform: rotateY(180deg);
  color: #1c1917;
}

.is-red .front {
  color: #c11a2b;
}

.is-black .front {
  color: #161413;
}

.corner {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1;
  width: 22px;
}

.corner.top {
  top: 7px;
  left: 7px;
}

.corner.bottom {
  bottom: 7px;
  right: 7px;
  transform: rotate(180deg);
}

.rank {
  font-family: var(--heading);
  font-size: 18px;
  font-weight: 700;
}

.pip {
  font-size: 14px;
}

.center-pip {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  font-size: 42px;
}

.is-glow-red {
  filter:
    drop-shadow(0 10px 10px rgba(0, 0, 0, 0.28))
    drop-shadow(0 0 16px rgba(193, 26, 43, 0.55));
}

.is-glow-black {
  filter:
    drop-shadow(0 10px 10px rgba(0, 0, 0, 0.28))
    drop-shadow(0 0 16px rgba(230, 200, 122, 0.4));
}

@media (max-width: 720px) {
  .playing-card {
    width: 64px;
    height: 92px;
  }

  .rank {
    font-size: 14px;
  }

  .center-pip {
    font-size: 30px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .playing-card,
  .shell {
    transition-duration: 0.2s;
  }
}
</style>
