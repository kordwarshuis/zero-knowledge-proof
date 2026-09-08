# Zero-Knowledge Proof: The Red Card

An interactive Vue.js demonstration of a simplified zero-knowledge proof, using a tiny deck of four red cards and four black cards.

You are **Person A**. You draw a random card that only you can see. Then you try to convince **Person B** that the card is red — without showing it, and without revealing which red card it is.

## How the proof works

1. Person B inspects the whole deck first: four red, four black.
2. The cards are shuffled face down. You draw one at random behind a privacy screen.
3. To prove the hidden card is red, you show Person B **every remaining black card**.
4. If Person B sees all four black cards, the hidden card must be red. The leftover red cards stay hidden, so Person B still does not know *which* red card you hold.
5. If you drew black, you can only show three black cards. The proof fails. That is soundness: a false statement cannot be proven.

This is a teaching analogy, not a cryptographic protocol such as a zk-SNARK.

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
