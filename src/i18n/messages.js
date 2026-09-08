export const LOCALES = ['nl', 'en']

export const messages = {
  nl: {
    htmlLang: 'nl',
    documentTitle: 'Zero-knowledgebewijs · De rode kaart',
    language: 'Taal',
    eyebrow: 'Een kleine demonstratie aan de kaarttafel',
    title: 'Zero-knowledgebewijs',
    ledeBefore: 'Bewijs dat je een rode kaart hebt getrokken zonder die te laten zien — en zonder te onthullen',
    ledeEm: 'welke',
    ledeAfter: 'rode kaart het is.',
    stepsLabel: 'Stappen van de demonstratie',
    steps: {
      inspect: 'Bekijken',
      draw: 'Trekken',
      prove: 'Bewijzen',
      result: 'Resultaat',
    },
    personATitle: 'Jij · Persoon A',
    personARole: 'Bewijzer',
    personBTitle: 'Persoon B',
    personBRole: 'Controleur',
    tableLabel: 'Kaarttafel',
    plaquePrivate: 'Alleen jij',
    plaquePublic: 'Geen zicht',
    red: 'Rood',
    black: 'Zwart',
    privateZone: 'Privé — persoon B ziet dit niet',
    yourCard: 'Jouw kaart',
    cardComing: 'Komt naar je toe, achterkant boven…',
    personBCannotSeeCard: 'Persoon B kan deze kaart niet zien',
    mysteryCard: 'Kaart van persoon A',
    mysteryHidden: 'voor mij verborgen',
    remainingPrivate: 'Overgebleven kaarten — nog privé',
    redsHidden: 'Rode kaarten blijven verborgen',
    shownToB: 'Getoond aan persoon B',
    watchCards: 'Kijk naar de kaarten…',
    faceDownCard: 'Een speelkaart met de achterkant naar boven',
    personA: {
      intro: 'Jij trekt een kaart die alleen jij kunt zien.',
      inspect: 'Jij ziet het spel ook — er is nog niets verborgen.',
      shuffled: 'De kaarten liggen achterkant boven. Trek er willekeurig één.',
      drawing: 'De kaart gaat achter het privéscherm…',
      drawn: 'Je trok {card}. Persoon B kan die niet zien.',
      sorting: 'Bekijk de overgebleven kaarten in het privé.',
      proving: 'Laat persoon B alle zwarte kaarten zien. Houd de rode verborgen.',
      resultOk: 'Persoon B is overtuigd — en weet nog steeds niet welke rode kaart je hebt.',
      resultFail: 'Je kon geen vier zwarte kaarten laten zien, omdat je er zelf één vasthoudt.',
    },
    personB: {
      intro: 'Ik moet ervan overtuigd raken dat je een rode kaart hebt.',
      inspect: 'Vier rood, vier zwart. Ik heb elke kaart in dit spel gezien.',
      shuffling: 'Ik ken de volgorde niet meer.',
      shuffled: 'Dezelfde acht kaarten, nu achterkant boven. Ik weet niet welke waar ligt.',
      drawn: 'Persoon A houdt een kaart vast. Ik kan die niet zien. Het kan rood of zwart zijn.',
      sorting: 'Persoon A bekijkt de rest. Het scherm blokkeert mijn zicht.',
      provingWait: 'Ik wacht tot ik zwarte kaarten te zien krijg…',
      provingOne: 'Ik heb tot nu toe 1 zwarte kaart gezien.',
      provingMany: 'Ik heb tot nu toe {count} zwarte kaarten gezien.',
      resultOk:
        'Alle vier de zwarte kaarten liggen hier. De verborgen kaart moet rood zijn — maar ik weet nog steeds niet welke van de vier rode kaarten het is.',
      resultFail:
        'Er zijn maar drie zwarte kaarten getoond. Er ontbreekt er één. Ik ben niet overtuigd.',
    },
    narration: {
      intro:
        'Een zero-knowledgebewijs laat je iemand overtuigen dat een stelling waar is, zonder verder iets te onthullen. Hier wil persoon A bewijzen dat ze een rode kaart heeft — zonder te laten zien welke rode kaart het is.',
      inspect:
        'Voordat iemand trekt, bekijkt persoon B het hele spel: vier rode kaarten en vier zwarte. Jullie zijn het erover eens welke acht kaarten er zijn.',
      shuffling: 'De kaarten worden geschud en omgekeerd.',
      shuffled:
        'Jij bent persoon A. Trek een willekeurige kaart. Persoon B mag die niet zien.',
      drawing: 'De kaart schuift achter het privéscherm. Alleen jij ziet de voorkant.',
      drawnRed:
        'Je hebt een rode kaart. Dat kun je bewijzen door persoon B alle zwarte kaarten te laten zien — en geen van de rode.',
      drawnBlack:
        'Je hebt een zwarte kaart. Probeer het bewijs toch. Als de stelling onwaar is, moet het mislukken.',
      sorting:
        'Je bekijkt de overgebleven zeven kaarten in het privé. Persoon B ziet hun voorkant nog steeds niet.',
      proving:
        'Elke zwarte kaart uit de rest wordt aan persoon B getoond. De rode kaarten blijven aan jouw kant van het scherm.',
      resultOk:
        'Persoon B heeft nu alle vier de zwarte kaarten gezien, dus jouw verborgen kaart moet rood zijn. De drie overgebleven rode kaarten zijn nooit getoond, dus persoon B kan niet zeggen welke van de vier rode kaarten je hebt getrokken. Dat is het zero-knowledge-gedeelte.',
      resultFail:
        'Je had nog maar drie zwarte kaarten om te laten zien, omdat de vierde in je hand zit. Persoon B merkt dat er een zwarte kaart ontbreekt en gelooft niet dat je rood hebt getrokken. Je kunt een onware stelling niet bewijzen.',
    },
    actions: {
      begin: 'Laat persoon B het spel zien',
      shuffle: 'Schudden en omdraaien',
      draw: 'Trek een willekeurige kaart',
      prove: 'Bewijs dat je een rode kaart hebt',
      proveAnyway: 'Probeer te bewijzen dat je een rode kaart hebt',
      again: 'Opnieuw spelen',
    },
    properties: {
      completenessLabel: 'Volledigheid.',
      completeness: 'De stelling was waar, dus het bewijs slaagde.',
      zeroKnowledgeLabel: 'Nulkens.',
      zeroKnowledge:
        'Persoon B leerde alleen dat jouw kaart rood is — niet of het de aas of heer van harten of ruiten is.',
      soundnessLabel: 'Deugdelijkheid.',
      soundness:
        'Een onware stelling valt niet te bewijzen. Met een zwarte kaart in de hand kon je niet alle vier de zwarte kaarten laten zien.',
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
    documentTitle: 'Zero-Knowledge Proof · The Red Card',
    language: 'Language',
    eyebrow: 'A small card-table demonstration',
    title: 'Zero-knowledge proof',
    ledeBefore:
      'Prove you drew a red card without showing it — and without revealing',
    ledeEm: 'which',
    ledeAfter: 'red card it is.',
    stepsLabel: 'Demonstration steps',
    steps: {
      inspect: 'Inspect',
      draw: 'Draw',
      prove: 'Prove',
      result: 'Result',
    },
    personATitle: 'You · Person A',
    personARole: 'Prover',
    personBTitle: 'Person B',
    personBRole: 'Verifier',
    tableLabel: 'Card table',
    plaquePrivate: 'Your eyes only',
    plaquePublic: 'No view',
    red: 'Red',
    black: 'Black',
    privateZone: 'Private — Person B cannot see this',
    yourCard: 'Your card',
    cardComing: 'Coming to you face down…',
    personBCannotSeeCard: 'Person B cannot see this card',
    mysteryCard: 'Person A’s card',
    mysteryHidden: 'hidden from me',
    remainingPrivate: 'Remaining cards — still private',
    redsHidden: 'Red cards kept hidden',
    shownToB: 'Shown to Person B',
    watchCards: 'Watch the cards…',
    faceDownCard: 'A face-down playing card',
    personA: {
      intro: 'You will draw a card that only you can see.',
      inspect: 'You can see the deck too — nothing is hidden yet.',
      shuffled: 'The cards are face down. Draw one at random.',
      drawing: 'Pulling a card behind the privacy screen…',
      drawn: 'You drew the {card}. Person B cannot see it.',
      sorting: 'Look through the remaining cards in private.',
      proving: 'Show Person B every black card. Keep the red ones hidden.',
      resultOk:
        'Person B is convinced — and still does not know which red card you hold.',
      resultFail:
        'You could not produce four black cards, because you are holding one.',
    },
    personB: {
      intro: 'I need to be convinced you have a red card.',
      inspect: 'Four red, four black. I have seen every card in this deck.',
      shuffling: 'I no longer know the order.',
      shuffled:
        'Same eight cards, now face down. I do not know which is which.',
      drawn:
        'Person A is holding a card. I cannot see it. It might be red or black.',
      sorting:
        'Person A is looking at the remaining cards. The screen blocks my view.',
      provingWait: 'Waiting to see black cards…',
      provingOne: 'I have been shown 1 black card so far.',
      provingMany: 'I have been shown {count} black cards so far.',
      resultOk:
        'All four black cards are here. The hidden card must be red — but I still do not know which of the four red cards it is.',
      resultFail:
        'Only three black cards were shown. One black card is missing. I am not convinced.',
    },
    narration: {
      intro:
        'A zero-knowledge proof lets you convince someone a statement is true without revealing anything else. Here, Person A wants to prove she has a red card — without showing which red card it is.',
      inspect:
        'Before anyone draws, Person B inspects the whole deck: four red cards and four black cards. Both of you agree on exactly which eight cards exist.',
      shuffling: 'The cards are shuffled and turned face down.',
      shuffled:
        'You are Person A. Draw a random card. Person B will not be allowed to see it.',
      drawing:
        'The card slides behind the privacy screen. Only you will see its face.',
      drawnRed:
        'You have a red card. You can prove that fact by showing Person B every black card — and none of the red ones.',
      drawnBlack:
        'You have a black card. Try the proof anyway. If the statement is false, it should fail.',
      sorting:
        'You look at the remaining seven cards in private. Person B still cannot see their faces.',
      proving:
        'Every black card from the remainder is shown to Person B. Red cards stay on your side of the screen.',
      resultOk:
        'Person B has now seen all four black cards, so your hidden card must be red. The three leftover red cards were never shown, so Person B cannot tell which of the four red cards you drew. That is the zero-knowledge part.',
      resultFail:
        'You only had three black cards left to show, because the fourth is in your hand. Person B notices a black card is missing and refuses to believe you drew red. You cannot prove a false statement.',
    },
    actions: {
      begin: 'Show Person B the deck',
      shuffle: 'Shuffle and turn face down',
      draw: 'Draw a random card',
      prove: 'Prove you have a red card',
      proveAnyway: 'Try to prove you have a red card',
      again: 'Play again',
    },
    properties: {
      completenessLabel: 'Completeness.',
      completeness: 'The statement was true, so the proof succeeded.',
      zeroKnowledgeLabel: 'Zero knowledge.',
      zeroKnowledge:
        'Person B learned only that your card is red — not whether it is the ace or king of hearts or diamonds.',
      soundnessLabel: 'Soundness.',
      soundness:
        'A false statement cannot be proven. Holding a black card, you could not show all four black cards.',
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
