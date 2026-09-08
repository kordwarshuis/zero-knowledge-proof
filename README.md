# Zero-Knowledge Proof with playing cards

An interactive Vue.js demonstration of a simplified zero-knowledge proof, using a tiny deck of four red cards and four black cards. Available in Dutch and English.

You are **the prover**. You draw a random card that only you can see. Then you convince **the verifier** of the card's colour — without showing it, and without revealing which card of that colour it is. You can also try to cheat, to see that a false claim fails.

## How the proof works

1. The verifier inspects the whole deck first: four red, four black.
2. The cards are shuffled face down. You draw one at random behind a privacy screen.
3. To prove the hidden card's colour honestly, you show the verifier **all four cards of the other colour**. Drew red? Show the four blacks. Drew black? Show the four reds.
4. Since all four cards of the other colour are accounted for, the hidden card must be the remaining colour. The three leftover cards of your own colour stay hidden, so the verifier never learns *which* card you hold.
5. Or choose **Try to cheat**: claim the opposite colour. You can only produce three cards of the colour the lie requires, so the verifier rejects the claim. That is soundness.

This is a teaching analogy, not a cryptographic protocol such as a zk-SNARK.

## Language

Dutch and English are both supported. Open the menu for language and info, or set the language in the URL:

- `/?lang=nl`
- `/?lang=en`

Without a parameter, the app uses your saved choice and otherwise falls back to the browser language.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build
npm run preview
```
