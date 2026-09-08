<script setup>
defineProps({
  who: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  note: { type: String, default: '' },
})
</script>

<template>
  <div class="character" :class="`is-${who}`">
    <svg
      class="portrait"
      viewBox="0 0 80 80"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="40" cy="40" r="38" class="ring" />
      <circle cx="40" cy="40" r="32" class="skin" />
      <template v-if="who === 'a'">
        <path
          class="hair"
          d="M16 42c1-16 12-28 24-28s23 12 24 28c-4-8-10-12-14-13-3 8-17 8-20 0-4 1-10 5-14 13z"
        />
        <ellipse cx="32" cy="42" rx="3" ry="3.4" class="eye" />
        <ellipse cx="48" cy="42" rx="3" ry="3.4" class="eye" />
        <path class="mouth" d="M34 52c3 4 9 4 12 0" />
        <path class="collar" d="M22 72c6-10 30-10 36 0v8H22z" />
      </template>
      <template v-else>
        <path
          class="hair"
          d="M18 36c2-14 10-22 22-22s20 8 22 22v8H18z"
        />
        <rect x="24" y="40" width="32" height="3" rx="1.5" class="glasses" />
        <ellipse cx="31" cy="42" rx="5.5" ry="5" class="lens" />
        <ellipse cx="49" cy="42" rx="5.5" ry="5" class="lens" />
        <ellipse cx="31" cy="42" rx="2.4" ry="2.6" class="eye" />
        <ellipse cx="49" cy="42" rx="2.4" ry="2.6" class="eye" />
        <path class="mouth" d="M36 53c2 3 6 3 8 0" />
        <path class="collar" d="M20 72c8-12 32-12 40 0v8H20z" />
      </template>
    </svg>
    <div class="copy">
      <p class="title">{{ title }}</p>
      <p class="subtitle">{{ subtitle }}</p>
      <p v-if="note" class="note">{{ note }}</p>
    </div>
  </div>
</template>

<style scoped>
.character {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  min-width: 0;
}

.portrait {
  width: 56px;
  height: 56px;
  flex: 0 0 auto;
}

.ring {
  fill: none;
  stroke-width: 3;
}

.is-a .ring {
  stroke: #e6c87a;
}

.is-b .ring {
  stroke: #9eb7c8;
}

.skin {
  fill: #e8c7a8;
}

.is-a .hair {
  fill: #4a2c1a;
}

.is-b .hair {
  fill: #2c333a;
}

.eye {
  fill: #1c1917;
}

.mouth {
  fill: none;
  stroke: #7a4a3a;
  stroke-width: 1.8;
  stroke-linecap: round;
}

.is-a .collar {
  fill: #b4532a;
}

.is-b .collar {
  fill: #3d5a73;
}

.glasses,
.lens {
  fill: none;
  stroke: #1c1917;
  stroke-width: 1.6;
}

.lens {
  fill: rgba(214, 232, 242, 0.45);
}

.copy {
  min-width: 0;
}

.title {
  margin: 0;
  font-family: var(--heading);
  font-size: 1rem;
  color: var(--cream);
}

.subtitle {
  margin: 1px 0 0;
  font-size: 0.8rem;
  color: var(--muted);
}

.note {
  margin: 4px 0 0;
  font-size: 0.86rem;
  line-height: 1.35;
  color: var(--cream);
}

@media (max-width: 720px) {
  .title {
    font-size: 0.95rem;
  }
}
</style>
