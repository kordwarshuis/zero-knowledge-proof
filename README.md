# Zero-Knowledge Proof with playing cards

An interactive Vue.js demonstration of a simplified zero-knowledge proof, using a tiny deck of four red cards and four black cards. Available in Dutch and English.

You are **Person A**. You draw a random card that only you can see. Then you convince **Person B** of the card's colour — without showing it, and without revealing which card of that colour it is.

## How the proof works

1. Person B inspects the whole deck first: four red, four black.
2. The cards are shuffled face down. You draw one at random behind a privacy screen.
3. To prove the hidden card's colour, you show Person B **all four cards of the other colour**. Drew red? Show the four blacks. Drew black? Show the four reds.
4. Since all four cards of the other colour are accounted for, the hidden card must be the remaining colour. The three leftover cards of your own colour stay hidden, so Person B never learns *which* card you hold.

This is a teaching analogy, not a cryptographic protocol such as a zk-SNARK.

## Language

Dutch and English are both supported. Use the **NL / EN** buttons, or set the language in the URL:

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
