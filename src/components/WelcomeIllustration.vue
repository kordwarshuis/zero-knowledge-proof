<script setup>
defineProps({
  kind: {
    type: String,
    required: true,
    validator: (value) =>
      ['rethink', 'example', 'bridge', 'cards'].includes(value),
  },
})
</script>

<template>
  <svg
    class="welcome-illustration"
    :class="`is-${kind}`"
    viewBox="0 0 80 80"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="40" cy="40" r="38" class="ring" />
    <circle cx="40" cy="40" r="32" class="disc" />

    <!-- Show less: ID with redacted fields, only a yes remains -->
    <template v-if="kind === 'rethink'">
      <rect x="22" y="18" width="36" height="44" rx="3" class="paper" />
      <circle cx="32" cy="30" r="5.2" class="photo" />
      <rect x="40" y="25" width="14" height="2.6" rx="1" class="line" />
      <rect x="40" y="30.5" width="10" height="2.6" rx="1" class="line soft" />
      <rect x="26" y="40" width="28" height="3.6" rx="1" class="redact" />
      <rect x="26" y="47" width="22" height="3.6" rx="1" class="redact" />
      <rect x="26" y="54" width="18" height="3.6" rx="1" class="redact" />
      <circle cx="54" cy="56" r="9.5" class="badge" />
      <path class="check" d="M49.2 56.2l2.8 2.8 5.8-6.2" />
    </template>

    <!-- Everyday example: doorman only needs an age yes/no -->
    <template v-else-if="kind === 'example'">
      <rect x="34" y="16" width="26" height="48" rx="2" class="paper" />
      <rect x="38" y="22" width="18" height="14" rx="1" class="panel" />
      <rect x="38" y="40" width="18" height="14" rx="1" class="panel" />
      <circle cx="54" cy="39" r="2" class="accent" />
      <circle cx="24" cy="34" r="10" class="skin" />
      <path class="hair" d="M15 34c1.2-9 6-14 9-14s7.8 5 9 14v4H15z" />
      <rect x="17.5" y="33" width="13" height="2.2" rx="1" class="glasses" />
      <ellipse cx="21" cy="34.5" rx="3.4" ry="3" class="lens" />
      <ellipse cx="27" cy="34.5" rx="3.4" ry="3" class="lens" />
      <ellipse cx="21" cy="34.5" rx="1.5" ry="1.6" class="eye" />
      <ellipse cx="27" cy="34.5" rx="1.5" ry="1.6" class="eye" />
      <path class="mouth" d="M22 39.5c1.2 1.6 3.6 1.6 4.8 0" />
      <path class="collar" d="M15 48c5-8 14-8 19 0v10H15z" />
      <circle cx="56" cy="22" r="10" class="badge" />
      <text x="56" y="25.6" text-anchor="middle" class="badge-text">18+</text>
    </template>

    <!-- Digitally too: phone verifies a claim behind a shield -->
    <template v-else-if="kind === 'bridge'">
      <rect x="27" y="14" width="26" height="52" rx="4" class="paper" />
      <rect x="30" y="20" width="20" height="38" rx="2" class="panel" />
      <path
        class="shield"
        d="M40 26c3.8 1.8 8.5 2.4 8.5 2.4V37c0 5.6-4 9.4-8.5 11.4C35.5 46.4 31.5 42.6 31.5 37V28.4S36.2 27.8 40 26z"
      />
      <path class="check" d="M35.6 38.2l3.1 3.1 6.6-7.1" />
      <circle cx="40" cy="60" r="2" class="accent" />
    </template>

    <!-- Cards demo: face-down card + colour claim, not the exact card -->
    <template v-else>
      <rect
        x="23"
        y="17"
        width="30"
        height="42"
        rx="3.5"
        class="paper"
        transform="rotate(-14 38 38)"
      />
      <rect
        x="27"
        y="20"
        width="22"
        height="34"
        rx="2"
        class="panel"
        transform="rotate(-14 38 37)"
      />
      <circle
        cx="38"
        cy="37"
        r="7.5"
        class="medallion"
        transform="rotate(-14 38 37)"
      />
      <text
        x="38"
        y="40"
        text-anchor="middle"
        class="zk"
        transform="rotate(-14 38 37)"
      >
        ZK
      </text>
      <circle cx="57" cy="55" r="11.5" class="badge" />
      <path class="suit" d="M57 48l5.8 5.8-5.8 5.8-5.8-5.8z" />
    </template>
  </svg>
</template>

<style scoped>
.welcome-illustration {
  width: 88px;
  height: 88px;
  flex: 0 0 auto;
  display: block;
}

.ring {
  fill: none;
  stroke-width: 3;
}

.is-rethink .ring,
.is-cards .ring {
  stroke: #e6c87a;
}

.is-example .ring,
.is-bridge .ring {
  stroke: #9eb7c8;
}

.disc {
  fill: #24302b;
}

.paper {
  fill: #f3ead2;
}

.photo,
.panel {
  fill: #d7c4a4;
}

.line {
  fill: #4a4036;
}

.line.soft {
  fill: #8a7a68;
}

.redact {
  fill: #1c1917;
}

.badge,
.collar,
.medallion {
  fill: #3d5a73;
}

.badge,
.medallion {
  stroke: #e6c87a;
  stroke-width: 1.6;
}

.check {
  fill: none;
  stroke: #e6c87a;
  stroke-width: 2.4;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.badge-text,
.zk {
  fill: #e6c87a;
  font-family: Georgia, 'Times New Roman', serif;
  font-weight: 700;
}

.badge-text {
  font-size: 9px;
}

.zk {
  font-size: 7.5px;
}

.accent,
.suit {
  fill: #e6c87a;
}

.skin {
  fill: #e8c7a8;
}

.hair {
  fill: #2c333a;
}

.eye {
  fill: #1c1917;
}

.mouth {
  fill: none;
  stroke: #7a4a3a;
  stroke-width: 1.4;
  stroke-linecap: round;
}

.glasses {
  fill: #1c1917;
}

.lens {
  fill: rgba(214, 232, 242, 0.45);
  stroke: #1c1917;
  stroke-width: 1.4;
}

.shield {
  fill: #9eb7c8;
  stroke: #e6c87a;
  stroke-width: 1.4;
}

@media (max-width: 520px) {
  .welcome-illustration {
    width: 72px;
    height: 72px;
  }
}
</style>
