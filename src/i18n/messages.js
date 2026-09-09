export const LOCALES = ['nl', 'en']

export const messages = {
  nl: {
    htmlLang: 'nl',
    documentTitle: 'Zero-knowledgebewijs met speelkaarten',
    language: 'Taal',
    menu: 'Menu',
    menuOpen: 'Menu openen',
    menuClose: 'Menu sluiten',
    info: 'Info',
    eyebrow: 'Een kleine demonstratie aan de kaarttafel',
    title: 'Zero-knowledgebewijs',
    ledeBefore:
      'Bewijs welke kleur je hebt getrokken zonder de kaart te laten zien — en zonder te onthullen',
    ledeEm: 'welke',
    ledeAfter: 'kaart van die kleur het is.',
    modalClose: 'Sluiten',
    modalContinue: 'Verder',
    modalGotIt: 'Begrepen',
    modalStep: 'Stap {current} van {total}',
    welcome: {
      title: 'Zero-knowledgebewijs',
      riskTitle: 'Digitale identiteit',
      risk:
        'Digitale identiteit wordt steeds vaker gehackt en misbruikt. Wie een account overneemt of een datalek uitbuit, krijgt vaak veel meer van jou te zien dan nodig was.',
      rethinkTitle: 'Minder laten zien',
      rethink:
        'Daarom moeten we opnieuw nadenken over wanneer we iets laten zien, wat we laten zien, en waarom. Een zero-knowledgebewijs helpt daarbij: je bewijst dat iets waar is, zonder de onderliggende gegevens prijs te geven.',
      exampleTitle: 'Een alledaags voorbeeld',
      example:
        'Bij de deur van een café wil de portier weten of je oud genoeg bent om binnen te mogen. Hij hoeft alleen ja of nee te horen — niet wanneer je precies geboren bent, waar je woont, of andere gegevens op je ID.',
      bridgeTitle: 'Ook digitaal',
      bridge:
        'Hetzelfde idee werkt digitaal: apps en websites kunnen een bewering controleren zonder jouw privégegevens te leren.',
      rolesTitle: 'De rollen',
      rolesProver: 'Ik wil de getrokken kaart niet laten zien!',
      rolesVerifier: 'En toch wil ik weten of de kaart rood is of niet!',
      cardsTitle: 'Een fysiek voorbeeld',
      cards:
        'We laten dat nu zien met speelkaarten — eenvoudig genoeg om met de hand te volgen, en hetzelfde principe als in de cryptografie. De bewijzer bewijst welke kleur haar kaart heeft, zonder te laten zien welke kaart het is. Je kunt ook proberen te liegen, om te zien dat bedrog niet werkt.',
    },
    stepsLabel: 'Stappen van de demonstratie',
    steps: {
      inspect: 'Bekijken',
      draw: 'Trekken',
      prove: 'Bewijzen',
      result: 'Resultaat',
    },
    personATitle: 'De Bewijzer',
    personARole: '',
    personBTitle: 'De Controleur',
    personBRole: '',
    tableLabel: 'Kaarttafel',
    plaquePrivate: 'Alleen jij',
    plaquePublic: 'Geen zicht',
    red: 'Rood',
    black: 'Zwart',
    privateZone: 'Privé — de controleur ziet dit niet',
    yourCard: 'Jouw kaart',
    cardComing: 'Komt naar je toe, achterkant boven…',
    personBCannotSeeCard: 'De controleur kan deze kaart niet zien',
    mysteryCard: 'Kaart van de bewijzer',
    mysteryHidden: 'voor mij verborgen',
    remainingPrivate: 'Overgebleven kaarten — nog privé',
    ownColorHidden: '{claimCards} blijven verborgen',
    shownToB: 'Getoond aan de controleur',
    missingCard: 'Ontbrekende kaart',
    watchCards: 'Kijk naar de kaarten…',
    faceDownCard: 'Een speelkaart met de achterkant naar boven',
    personA: {
      intro: 'Jij trekt een kaart die alleen jij kunt zien.',
      inspect: 'Jij ziet het spel ook — er is nog niets verborgen.',
      shuffled: 'De kaarten liggen achterkant boven. Trek er willekeurig één.',
      drawing: 'De kaart gaat achter het privéscherm…',
      drawn: 'Je trok {card}. De controleur kan die niet zien.',
      sorting: 'Bekijk de overgebleven kaarten in het privé.',
      proving:
        'Laat de controleur alle vier de {otherCards} zien. Houd de {claimCards} verborgen.',
      provingCheat:
        'Je beweert een {claimCard} te hebben. Probeer alle vier de {otherCards} te laten zien…',
      result:
        'De controleur is overtuigd — en weet nog steeds niet welke {ownCard} je hebt.',
      resultCheat:
        'Het bedrog mislukte. Je kon geen vier {otherCards} laten zien, omdat je een {ownCard} vasthoudt.',
    },
    personB: {
      intro: 'Ik moet overtuigd raken van de kleur van jouw kaart.',
      inspect: 'Vier rood, vier zwart. Ik heb elke kaart in dit spel gezien.',
      shuffling: 'Ik ken de volgorde niet meer.',
      shuffled:
        'Dezelfde acht kaarten, nu achterkant boven. Ik weet niet welke waar ligt.',
      drawn:
        'De bewijzer houdt een kaart vast. Ik kan die niet zien. Het kan rood of zwart zijn.',
      sorting: 'De bewijzer bekijkt de rest. Het scherm blokkeert mijn zicht.',
      provingWait: 'Ik wacht tot ik kaarten te zien krijg…',
      provingOne: 'Ik heb tot nu toe 1 {otherCard} gezien.',
      provingMany: 'Ik heb tot nu toe {count} {otherCards} gezien.',
      result:
        'Alle vier de {otherCards} liggen hier. De verborgen kaart moet {claimColor} zijn — maar ik weet nog steeds niet welke van de vier {claimCards} het is.',
      resultCheat:
        'Er zijn maar drie {otherCards} getoond. Er ontbreekt er één. Ik geloof de bewering niet.',
    },
    narration: {
      intro:
        'Een zero-knowledgebewijs laat je iemand overtuigen dat een stelling waar is, zonder verder iets te onthullen. Hier wil de bewijzer bewijzen welke kleur haar kaart heeft — zonder te laten zien welke kaart het is. Je kunt ook proberen te liegen, om te zien dat bedrog niet werkt.',
      inspect:
        'Voordat iemand trekt, bekijkt de controleur het hele spel: vier rode kaarten en vier zwarte. Jullie zijn het erover eens welke acht kaarten er zijn.',
      shuffling: 'De kaarten worden geschud en omgekeerd.',
      shuffled:
        'Jij bent de bewijzer. Trek een willekeurige kaart. De controleur mag die niet zien.',
      drawing:
        'De kaart schuift achter het privéscherm. Alleen jij ziet de voorkant.',
      drawn:
        'Je hebt een {ownCard}. Bewijs dat eerlijk, of probeer te beweren dat je een {otherCard} hebt — en kijk hoe dat misgaat.',
      sorting:
        'Je bekijkt de overgebleven zeven kaarten in het privé. De controleur ziet hun voorkant nog steeds niet.',
      proving:
        'Elke {otherCard} uit de rest wordt aan de controleur getoond. De {claimCards} blijven aan jouw kant van het scherm.',
      provingCheat:
        'Je probeert te bewijzen dat je een {claimCard} hebt door alle {otherCards} te tonen. Omdat je eigenlijke kaart {ownColor} is, kun je er maar drie laten zien.',
      result:
        'De controleur heeft nu alle vier de {otherCards} gezien, dus jouw verborgen kaart moet {claimColor} zijn. De drie overgebleven {claimCards} zijn nooit getoond, dus de controleur kan niet zeggen welke van de vier {claimCards} je hebt getrokken. Dat is het zero-knowledge-gedeelte.',
      resultCheat:
        'Je beweerde een {claimCard} te hebben, maar kon maar drie {otherCards} tonen. De controleur merkt dat er één ontbreekt en weigert de bewering. Een onware stelling kun je niet bewijzen — dat heet deugdelijkheid (soundness).',
    },
    actions: {
      begin: 'Laat de controleur het spel zien',
      shuffle: 'Schudden en omdraaien',
      draw: 'Trek een willekeurige kaart',
      prove: 'Bewijs dat je een {ownCard} hebt',
      cheat: 'Probeer te liegen ({claimCard})',
      again: 'Opnieuw spelen',
    },
    properties: {
      completenessLabel: 'Volledigheid.',
      completeness: 'De stelling was waar, dus het bewijs slaagde.',
      zeroKnowledgeLabel: 'Nulkennis.',
      zeroKnowledge:
        'De controleur leerde alleen dat jouw kaart {ownColor} is — niet welke van de vier {ownCards} het is.',
      soundnessLabel: 'Deugdelijkheid.',
      soundness:
        'Een onware stelling valt niet te bewijzen. Door te beweren dat je een {claimCard} had terwijl je een {ownCard} vasthield, kon je niet alle vier de {otherCards} laten zien.',
    },
    colors: {
      red: 'rood',
      black: 'zwart',
    },
    colorCard: {
      red: 'rode kaart',
      black: 'zwarte kaart',
    },
    colorCards: {
      red: 'rode kaarten',
      black: 'zwarte kaarten',
    },
    ranks: {
      A: 'Aas',
      K: 'Heer',
    },
    suits: {
      hearts: 'harten',
      diamonds: 'ruiten',
      spades: 'schoppen',
      clubs: 'klaveren',
    },
    cardOf: '{rank} van {suit}',
  },
  en: {
    htmlLang: 'en',
    documentTitle: 'Zero-Knowledge Proof with playing cards',
    language: 'Language',
    menu: 'Menu',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    info: 'Info',
    eyebrow: 'A small card-table demonstration',
    title: 'Zero-knowledge proof',
    ledeBefore:
      'Prove which colour you drew without showing the card — and without revealing',
    ledeEm: 'which',
    ledeAfter: 'card of that colour it is.',
    modalClose: 'Close',
    modalContinue: 'Continue',
    modalGotIt: 'Got it',
    modalStep: 'Step {current} of {total}',
    welcome: {
      title: 'Zero-knowledge proof',
      riskTitle: 'Digital identity',
      risk:
        'Digital identity is increasingly vulnerable to hacks and misuse. Whoever takes over an account or exploits a data breach often sees far more of you than was ever needed.',
      rethinkTitle: 'Show less',
      rethink:
        'So we need to rethink when we show something, what we show, and why. A zero-knowledge proof helps with that: you prove that something is true without revealing the underlying data.',
      exampleTitle: 'An everyday example',
      example:
        'At the door of a bar, the doorman wants to know whether you are old enough to enter. They only need a yes or no — not your exact date of birth, where you live, or anything else on your ID.',
      bridgeTitle: 'Digitally too',
      bridge:
        'The same idea works digitally: apps and websites can check a claim without learning your private details.',
      rolesTitle: 'The roles',
      rolesProver: 'I do not want to show the card I drew!',
      rolesVerifier: 'And yet I want to know whether the card is red or not!',
      cardsTitle: 'A physical example',
      cards:
        'Next we will show that with playing cards — simple enough to follow by hand, and the same principle used in cryptography. The prover proves which colour her card is, without showing which card it is. You can also try to lie, to see that cheating does not work.',
    },
    stepsLabel: 'Demonstration steps',
    steps: {
      inspect: 'Inspect',
      draw: 'Draw',
      prove: 'Prove',
      result: 'Result',
    },
    personATitle: 'The Prover',
    personARole: '',
    personBTitle: 'The Verifier',
    personBRole: '',
    tableLabel: 'Card table',
    plaquePrivate: 'Your eyes only',
    plaquePublic: 'No view',
    red: 'Red',
    black: 'Black',
    privateZone: 'Private — the verifier cannot see this',
    yourCard: 'Your card',
    cardComing: 'Coming to you face down…',
    personBCannotSeeCard: 'The verifier cannot see this card',
    mysteryCard: 'The prover’s card',
    mysteryHidden: 'hidden from me',
    remainingPrivate: 'Remaining cards — still private',
    ownColorHidden: '{claimCards} kept hidden',
    shownToB: 'Shown to the verifier',
    missingCard: 'Missing card',
    watchCards: 'Watch the cards…',
    faceDownCard: 'A face-down playing card',
    personA: {
      intro: 'You will draw a card that only you can see.',
      inspect: 'You can see the deck too — nothing is hidden yet.',
      shuffled: 'The cards are face down. Draw one at random.',
      drawing: 'Pulling a card behind the privacy screen…',
      drawn: 'You drew the {card}. The verifier cannot see it.',
      sorting: 'Look through the remaining cards in private.',
      proving:
        'Show the verifier all four {otherCards}. Keep the {claimCards} hidden.',
      provingCheat:
        'You claim to have a {claimCard}. Try to show all four {otherCards}…',
      result:
        'The verifier is convinced — and still does not know which {ownCard} you hold.',
      resultCheat:
        'The cheat failed. You could not show four {otherCards}, because you are holding a {ownCard}.',
    },
    personB: {
      intro: 'I need to be convinced about the colour of your card.',
      inspect: 'Four red, four black. I have seen every card in this deck.',
      shuffling: 'I no longer know the order.',
      shuffled:
        'Same eight cards, now face down. I do not know which is which.',
      drawn:
        'The prover is holding a card. I cannot see it. It might be red or black.',
      sorting:
        'The prover is looking at the remaining cards. The screen blocks my view.',
      provingWait: 'Waiting to see cards…',
      provingOne: 'I have been shown 1 {otherCard} so far.',
      provingMany: 'I have been shown {count} {otherCards} so far.',
      result:
        'All four {otherCards} are here. The hidden card must be {claimColor} — but I still do not know which of the four {claimCards} it is.',
      resultCheat:
        'Only three {otherCards} were shown. One is missing. I do not accept the claim.',
    },
    narration: {
      intro:
        'A zero-knowledge proof lets you convince someone a statement is true without revealing anything else. Here, the prover wants to prove which colour her card is — without showing which card it is. You can also try to lie, to see that cheating does not work.',
      inspect:
        'Before anyone draws, the verifier inspects the whole deck: four red cards and four black cards. Both of you agree on exactly which eight cards exist.',
      shuffling: 'The cards are shuffled and turned face down.',
      shuffled:
        'You are the prover. Draw a random card. The verifier will not be allowed to see it.',
      drawing:
        'The card slides behind the privacy screen. Only you will see its face.',
      drawn:
        'You have a {ownCard}. Prove that honestly, or try claiming you have a {otherCard} — and watch the cheat fail.',
      sorting:
        'You look at the remaining seven cards in private. The verifier still cannot see their faces.',
      proving:
        'Every {otherCard} from the remainder is shown to the verifier. The {claimCards} stay on your side of the screen.',
      provingCheat:
        'You try to prove you have a {claimCard} by showing all the {otherCards}. Because your real card is {ownColor}, you can only produce three.',
      result:
        'The verifier has now seen all four {otherCards}, so your hidden card must be {claimColor}. The three leftover {claimCards} were never shown, so the verifier cannot tell which of the four {claimCards} you drew. That is the zero-knowledge part.',
      resultCheat:
        'You claimed to have a {claimCard}, but could only show three {otherCards}. The verifier notices one is missing and rejects the claim. A false statement cannot be proven — that is soundness.',
    },
    actions: {
      begin: 'Show the verifier the deck',
      shuffle: 'Shuffle and turn face down',
      draw: 'Draw a random card',
      prove: 'Prove you have a {ownCard}',
      cheat: 'Try to cheat ({claimCard})',
      again: 'Play again',
    },
    properties: {
      completenessLabel: 'Completeness.',
      completeness: 'The statement was true, so the proof succeeded.',
      zeroKnowledgeLabel: 'Zero knowledge.',
      zeroKnowledge:
        'The verifier learned only that your card is {ownColor} — not which of the four {ownCards} it is.',
      soundnessLabel: 'Soundness.',
      soundness:
        'A false statement cannot be proven. By claiming a {claimCard} while holding a {ownCard}, you could not show all four {otherCards}.',
    },
    colors: {
      red: 'red',
      black: 'black',
    },
    colorCard: {
      red: 'red card',
      black: 'black card',
    },
    colorCards: {
      red: 'red cards',
      black: 'black cards',
    },
    ranks: {
      A: 'Ace',
      K: 'King',
    },
    suits: {
      hearts: 'Hearts',
      diamonds: 'Diamonds',
      spades: 'Spades',
      clubs: 'Clubs',
    },
    cardOf: '{rank} of {suit}',
  },
}
