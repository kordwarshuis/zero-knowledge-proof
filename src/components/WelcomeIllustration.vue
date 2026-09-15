<script setup>
defineProps({
  kind: {
    type: String,
    required: true,
    validator: (value) =>
      ['nothing', 'choice', 'rethink', 'example', 'bridge', 'cards'].includes(value),
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

    <!-- Nothing to hide: a shrug with open palms -->
    <template v-if="kind === 'nothing'">
      <circle cx="40" cy="26" r="10" class="skin" />
      <path class="hair" d="M30 26c1.1-9.5 5.8-13.4 10-13.4s8.9 3.9 10 13.4v2.6H30z" />
      <ellipse cx="36.2" cy="27.2" rx="1.55" ry="1.75" class="eye" />
      <ellipse cx="43.8" cy="27.2" rx="1.55" ry="1.75" class="eye" />
      <path class="mouth" d="M36.6 32.2c1.6 1.8 5.2 1.8 6.8 0" />
      <path class="collar" d="M27 48c6.5-12 19.5-12 26 0v20H27z" />
      <path class="arm" d="M30.5 50.5c-7.4-1-13.4-8.2-14.2-15.4" />
      <path class="arm" d="M49.5 50.5c7.4-1 13.4-8.2 14.2-15.4" />
      <ellipse
        cx="16.4"
        cy="31.4"
        rx="7"
        ry="8.4"
        class="skin"
        transform="rotate(-26 16.4 31.4)"
      />
      <ellipse
        cx="63.6"
        cy="31.4"
        rx="7"
        ry="8.4"
        class="skin"
        transform="rotate(26 63.6 31.4)"
      />
    </template>

    <!-- No choice: the whole ID, every field filled in -->
    <template v-else-if="kind === 'choice'">
      <rect x="22" y="16" width="36" height="48" rx="3" class="paper" />
      <circle cx="32" cy="28" r="5.2" class="photo" />
      <rect x="40" y="23" width="14" height="2.6" rx="1" class="line" />
      <rect x="40" y="28.5" width="10" height="2.6" rx="1" class="line soft" />
      <rect x="26" y="38" width="28" height="2.8" rx="1" class="line" />
      <rect x="26" y="43.5" width="24" height="2.8" rx="1" class="line" />
      <rect x="26" y="49" width="20" height="2.8" rx="1" class="line" />
      <rect x="26" y="54.5" width="16" height="2.8" rx="1" class="line soft" />
      <circle cx="56" cy="58" r="10" class="stamp" />
      <text x="56" y="61.2" text-anchor="middle" class="stamp-text">!</text>
    </template>

    <!-- Show less: ID with redacted fields, only a yes remains -->
    <template v-else-if="kind === 'rethink'">
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

    <!-- Passwords sent: the secret leaves the login form and can be stolen -->
    <template v-else-if="kind === 'example'">
      <rect x="12" y="16" width="40" height="36" rx="3" class="paper" />
      <rect x="12" y="16" width="40" height="8" rx="3" class="chrome" />
      <rect x="12" y="20" width="40" height="4" class="chrome" />
      <circle cx="16.4" cy="20" r="1.2" class="win" />
      <circle cx="20.4" cy="20" r="1.2" class="win" />
      <circle cx="24.4" cy="20" r="1.2" class="win" />
      <rect x="17" y="32" width="30" height="10" rx="1.6" class="field" />
      <circle cx="22.2" cy="37" r="1.45" class="dot" />
      <circle cx="27" cy="37" r="1.45" class="dot" />
      <circle cx="31.8" cy="37" r="1.45" class="dot" />
      <path class="leak" d="M44 38c5 3 9 9 12.5 14" />
      <circle cx="49.4" cy="41.6" r="1.55" class="dot" />
      <circle cx="54.6" cy="47.4" r="1.7" class="dot" />
      <circle cx="60" cy="56" r="13" class="thief-bg" />
      <circle cx="54.6" cy="56" r="1.9" class="dot-stolen" />
      <circle cx="60" cy="56" r="1.9" class="dot-stolen" />
      <circle cx="65.4" cy="56" r="1.9" class="dot-stolen" />
    </template>

    <!-- Prove knowledge without sending the password -->
    <template v-else-if="kind === 'bridge'">
      <rect x="12" y="16" width="40" height="36" rx="3" class="paper" />
      <rect x="12" y="16" width="40" height="8" rx="3" class="chrome" />
      <rect x="12" y="20" width="40" height="4" class="chrome" />
      <circle cx="16.4" cy="20" r="1.2" class="win" />
      <circle cx="20.4" cy="20" r="1.2" class="win" />
      <circle cx="24.4" cy="20" r="1.2" class="win" />
      <rect x="17" y="32" width="30" height="10" rx="1.6" class="field" />
      <rect x="27.2" y="35.4" width="9.6" height="6.2" rx="1.3" class="lock-body" />
      <path class="lock-shackle" d="M29.4 35.4v-2.4a3.4 3.4 0 0 1 6.8 0v2.4" />
      <circle cx="60" cy="56" r="13" class="badge" />
      <path class="check" d="M53.2 56.4l4.4 4.4 9-9.6" />
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

.is-nothing .ring,
.is-rethink .ring,
.is-cards .ring {
  stroke: #e6c87a;
}

.is-choice .ring,
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
.panel,
.chrome,
.field {
  fill: #d7c4a4;
}

.field {
  fill: #cbb896;
}

.win {
  fill: #8a7a68;
}

.dot {
  fill: #1c1917;
}

.leak {
  fill: none;
  stroke: #d45a5a;
  stroke-width: 2.2;
  stroke-linecap: round;
}

.thief-bg {
  fill: #1c1917;
  stroke: #d45a5a;
  stroke-width: 1.6;
}

.dot-stolen {
  fill: #f7d4d4;
}

.lock-body {
  fill: #3d5a73;
  stroke: #e6c87a;
  stroke-width: 1.3;
}

.lock-shackle {
  fill: none;
  stroke: #3d5a73;
  stroke-width: 1.8;
  stroke-linecap: round;
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
.medallion,
.stamp {
  fill: #3d5a73;
}

.badge,
.medallion,
.stamp {
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

.stamp-text,
.zk {
  fill: #e6c87a;
  font-family: Georgia, 'Times New Roman', serif;
  font-weight: 700;
}

.stamp-text {
  font-size: 14px;
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

.arm {
  fill: none;
  stroke: #e8c7a8;
  stroke-width: 3.4;
  stroke-linecap: round;
}

@media (max-width: 520px) {
  .welcome-illustration {
    width: 72px;
    height: 72px;
  }
}
</style>
