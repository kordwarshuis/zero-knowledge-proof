export const LOCALES = ['en', 'nl', 'de', 'fr']

export const OG_LOCALES = {
  en: 'en_US',
  nl: 'nl_NL',
  de: 'de_DE',
  fr: 'fr_FR',
}

export const messages = {
  nl: {
    htmlLang: 'nl',
    documentTitle: 'Zero-knowledge-proof (nulkennisbewijs) met speelkaarten',
    socialDescription:
      'Bewijs welke kleur je hebt getrokken zonder de kaart te laten zien — en zonder te onthullen welke kaart van die kleur het is.',
    ogImageAlt:
      'Een kaarttafel met een privéscherm: de bewijzer ziet de harten-aas, de controleur ziet alleen een verborgen kaart.',
    language: 'Taal',
    menu: 'Menu',
    menuOpen: 'Menu openen',
    menuClose: 'Menu sluiten',
    home: 'Home',
    info: 'Info',
    eyebrow: 'Een kleine demonstratie aan de kaarttafel',
    title: 'Zero-knowledge-proof (nulkennisbewijs)',
    ledeBefore:
      'Bewijs welke kleur je hebt getrokken zonder de kaart te laten zien — en zonder te onthullen',
    ledeEm: 'welke',
    ledeAfter: 'kaart van die kleur het is.',
    modalClose: 'Sluiten',
    modalContinue: 'Verder',
    modalGotIt: 'Begrepen',
    modalStep: 'Stap {current} van {total}',
    welcome: {
      title: 'Zero-knowledge-proof (nulkennisbewijs)',
      riskTitle: 'Digitale identiteit',
      risk:
        'Digitale identiteit wordt steeds vaker gehackt en misbruikt. Hackers krijgen vaak veel meer van jou te zien dan nodig is.',
      newspaper: {
        masthead: 'Het Digitaal Dagblad',
        date: 'Februari 2026',
        section: 'Cybersecurity',
        headline: 'Miljoenen Odido-klanten getroffen door grootschalige hack',
        deck: 'Namen, adressen, rekeningnummers en documentnummers van identiteitsbewijzen op straat na weigering losgeld.',
      },
      rethinkTitle: 'Minder laten zien',
      rethink:
        'Daarom moeten we opnieuw nadenken over wanneer we iets laten zien, wat we laten zien, en waarom. Een zero-knowledge-proof (nulkennisbewijs) helpt daarbij: je bewijst dat iets waar is, zonder de onderliggende gegevens prijs te geven.',
      exampleTitle: 'Een alledaags voorbeeld',
      example:
        'Bij de deur van een café wil de portier weten of je oud genoeg bent om binnen te mogen. Hij hoeft alleen te weten: ja of nee — niet wanneer je precies geboren bent, waar je woont, of andere gegevens op je ID.',
      bridgeTitle: 'Ook digitaal',
      bridge:
        'Dit kan ook digitaal: apps en websites kunnen een bewering controleren zonder jouw privégegevens te zien.',
      rolesTitle: 'De rollen',
      rolesProver: 'Ik wil de getrokken kaart niet laten zien!',
      rolesVerifier: 'En toch wil ik weten of de kaart rood is of niet!',
      cardsTitle: 'Een voorbeeld',
      cards:
        'We laten dat nu zien met speelkaarten. De bewijzer bewijst welke kleur haar kaart heeft, zonder te laten zien welke kaart het is. (Je kunt ook proberen te liegen, om te zien dat bedrog niet werkt.)',
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
        'Een zero-knowledge-proof (nulkennisbewijs) laat je iemand overtuigen dat een stelling waar is, zonder verder iets te onthullen. Hier wil de bewijzer bewijzen welke kleur haar kaart heeft — zonder te laten zien welke kaart het is. Je kunt ook proberen te liegen, om te zien dat bedrog niet werkt.',
      inspect:
        'Voordat je een kaart trekt, bekijkt de controleur het hele spel: vier rode kaarten en vier zwarte. Jullie zijn het erover eens welke acht kaarten er zijn.',
      shuffling: 'De kaarten worden geschud en omgekeerd.',
      shuffled:
        'Jij bent de bewijzer. Trek een willekeurige kaart. De controleur mag die niet zien.',
      drawing:
        'De kaart schuift achter het privéscherm. Alleen jij ziet de voorkant.',
      drawn:
        'Je hebt een {ownCard}. Bewijs het! (Of probeer te beweren dat je een {otherCard} hebt — en kijk hoe dat misgaat.)',
      sorting:
        'Je bekijkt de overgebleven zeven kaarten in het privé. De controleur ziet hun voorkant nog steeds niet.',
      proving:
        'Elke {otherCard} uit de rest wordt aan de controleur getoond. De {claimCards} blijven aan jouw kant van het scherm.',
      provingCheat:
        'Je probeert te bewijzen dat je een {claimCard} hebt door alle {otherCards} te tonen. Omdat je eigenlijke kaart {ownColor} is, kun je er maar drie laten zien.',
      result:
        'De controleur heeft nu alle vier de {otherCards} gezien, dus jouw verborgen kaart moet wel {claimColor} zijn. De drie overgebleven {claimCards} zijn nooit getoond, dus de controleur kan niet zeggen welke van de vier {claimCards} je hebt getrokken. Dat is het zero-knowledge-gedeelte.',
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
    socialDescription:
      'Prove which colour you drew without showing the card — and without revealing which card of that colour it is.',
    ogImageAlt:
      'A card table with a privacy screen: the prover sees the ace of hearts, the verifier sees only a hidden card.',
    language: 'Language',
    menu: 'Menu',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    home: 'Home',
    info: 'Info',
    eyebrow: 'A small card-table demonstration',
    title: 'Zero-knowledge-proof',
    ledeBefore:
      'Prove which colour you drew without showing the card — and without revealing',
    ledeEm: 'which',
    ledeAfter: 'card of that colour it is.',
    modalClose: 'Close',
    modalContinue: 'Continue',
    modalGotIt: 'Got it',
    modalStep: 'Step {current} of {total}',
    welcome: {
      title: 'Zero-knowledge-proof',
      riskTitle: 'Digital identity',
      risk:
        'Digital identity is increasingly vulnerable to hacks and misuse. Hackers often see far more of you than was ever needed.',
      newspaper: {
        masthead: 'The Digital Gazette',
        date: 'September 2026',
        section: 'Cybersecurity',
        headline: 'IDScan breach puts 150M+ driver’s licences up for sale',
        deck: 'High-resolution identity scans from shops and rental desks exposed after hackers hit a major verification firm.',
      },
      rethinkTitle: 'Show less',
      rethink:
        'So we need to rethink when we show something, what we show, and why. A zero-knowledge-proof helps with that: you prove that something is true without revealing the underlying data.',
      exampleTitle: 'An everyday example',
      example:
        'At the door of a bar, the doorman wants to know whether you are old enough to enter. They only need a yes or no — not your exact date of birth, where you live, or anything else on your ID.',
      bridgeTitle: 'Digitally too',
      bridge:
        'This also works digitally: apps and websites can check a claim without learning your private details.',
      rolesTitle: 'The roles',
      rolesProver: 'I do not want to show the card I drew!',
      rolesVerifier: 'And yet I want to know whether the card is red or not!',
      cardsTitle: 'An example',
      cards:
        'Next we will show that with playing cards. The prover proves which colour her card is, without showing which card it is. (You can also try to lie, to see that cheating does not work.)',
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
        'A zero-knowledge-proof lets you convince someone a statement is true without revealing anything else. Here, the prover wants to prove which colour her card is — without showing which card it is. You can also try to lie, to see that cheating does not work.',
      inspect:
        'Before you draw a card, the verifier inspects the whole deck: four red cards and four black cards. Both of you agree on exactly which eight cards exist.',
      shuffling: 'The cards are shuffled and turned face down.',
      shuffled:
        'You are the prover. Draw a random card. The verifier will not be allowed to see it.',
      drawing:
        'The card slides behind the privacy screen. Only you will see its face.',
      drawn:
        'You have a {ownCard}. Prove it! (Or try claiming you have a {otherCard} — and watch the cheat fail.)',
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
  de: {
    htmlLang: 'de',
    documentTitle: 'Zero-Knowledge-Beweis mit Spielkarten',
    socialDescription:
      'Beweise, welche Farbe du gezogen hast, ohne die Karte zu zeigen — und ohne zu verraten, welche Karte dieser Farbe es ist.',
    ogImageAlt:
      'Ein Kartentisch mit Sichtschutz: Die Beweisführerin sieht das Herz-Ass, die Prüferin sieht nur eine verdeckte Karte.',
    language: 'Sprache',
    menu: 'Menü',
    menuOpen: 'Menü öffnen',
    menuClose: 'Menü schließen',
    home: 'Startseite',
    info: 'Info',
    eyebrow: 'Eine kleine Demonstration am Kartentisch',
    title: 'Zero-Knowledge-Beweis',
    ledeBefore:
      'Beweise, welche Farbe du gezogen hast, ohne die Karte zu zeigen — und ohne zu verraten,',
    ledeEm: 'welche',
    ledeAfter: 'Karte dieser Farbe es ist.',
    modalClose: 'Schließen',
    modalContinue: 'Weiter',
    modalGotIt: 'Verstanden',
    modalStep: 'Schritt {current} von {total}',
    welcome: {
      title: 'Zero-Knowledge-Beweis',
      riskTitle: 'Digitale Identität',
      risk:
        'Digitale Identität wird immer häufiger gehackt und missbraucht. Hacker sehen oft weit mehr von dir, als jemals nötig war.',
      newspaper: {
        masthead: 'Die Digitale Zeitung',
        date: 'März 2026',
        section: 'Cybersicherheit',
        headline: 'Datenleck bei Identitätsfirma: Millionen Ausweis-Scans im Umlauf',
        deck: 'Namen, Adressen und Ausweisnummern nach Angriff auf einen großen Verifizierungsdienst preisgegeben.',
      },
      rethinkTitle: 'Weniger zeigen',
      rethink:
        'Deshalb müssen wir neu darüber nachdenken, wann wir etwas zeigen, was wir zeigen und warum. Ein Zero-Knowledge-Beweis hilft dabei: Du beweist, dass etwas wahr ist, ohne die zugrunde liegenden Daten preiszugeben.',
      exampleTitle: 'Ein Alltagsbeispiel',
      example:
        'An der Tür einer Bar will der Türsteher wissen, ob du alt genug bist, um hineinzugekommen. Er braucht nur ja oder nein — nicht dein genaues Geburtsdatum, deine Adresse oder andere Angaben auf dem Ausweis.',
      bridgeTitle: 'Auch digital',
      bridge:
        'Das geht auch digital: Apps und Websites können eine Behauptung prüfen, ohne deine privaten Daten zu sehen.',
      rolesTitle: 'Die Rollen',
      rolesProver: 'Ich will die gezogene Karte nicht zeigen!',
      rolesVerifier: 'Und trotzdem will ich wissen, ob die Karte rot ist oder nicht!',
      cardsTitle: 'Ein Beispiel',
      cards:
        'Als Nächstes zeigen wir das mit Spielkarten. Die Beweisführerin beweist, welche Farbe ihre Karte hat, ohne zu zeigen, welche Karte es ist. (Du kannst auch versuchen zu lügen, um zu sehen, dass Betrug nicht funktioniert.)',
    },
    stepsLabel: 'Schritte der Demonstration',
    steps: {
      inspect: 'Prüfen',
      draw: 'Ziehen',
      prove: 'Beweisen',
      result: 'Ergebnis',
    },
    personATitle: 'Die Beweisführerin',
    personARole: '',
    personBTitle: 'Die Prüferin',
    personBRole: '',
    tableLabel: 'Kartentisch',
    plaquePrivate: 'Nur für dich',
    plaquePublic: 'Kein Blick',
    red: 'Rot',
    black: 'Schwarz',
    privateZone: 'Privat — die Prüferin sieht das nicht',
    yourCard: 'Deine Karte',
    cardComing: 'Kommt zu dir, verdeckt…',
    personBCannotSeeCard: 'Die Prüferin kann diese Karte nicht sehen',
    mysteryCard: 'Karte der Beweisführerin',
    mysteryHidden: 'vor mir verborgen',
    remainingPrivate: 'Übrige Karten — noch privat',
    ownColorHidden: '{claimCards} bleiben verborgen',
    shownToB: 'Der Prüferin gezeigt',
    missingCard: 'Fehlende Karte',
    watchCards: 'Schau auf die Karten…',
    faceDownCard: 'Eine verdeckte Spielkarte',
    personA: {
      intro: 'Du ziehst eine Karte, die nur du sehen kannst.',
      inspect: 'Du siehst das Spiel auch — noch ist nichts verborgen.',
      shuffled: 'Die Karten liegen verdeckt. Ziehe eine zufällig.',
      drawing: 'Die Karte geht hinter den Sichtschutz…',
      drawn: 'Du hast {card} gezogen. Die Prüferin kann sie nicht sehen.',
      sorting: 'Schau dir die übrigen Karten privat an.',
      proving:
        'Zeig der Prüferin alle vier {otherCards}. Halte die {claimCards} verborgen.',
      provingCheat:
        'Du behauptest, eine {claimCard} zu haben. Versuche, alle vier {otherCards} zu zeigen…',
      result:
        'Die Prüferin ist überzeugt — und weiß immer noch nicht, welche {ownCard} du hast.',
      resultCheat:
        'Der Betrug ist gescheitert. Du konntest keine vier {otherCards} zeigen, weil du eine {ownCard} hältst.',
    },
    personB: {
      intro: 'Ich muss von der Farbe deiner Karte überzeugt werden.',
      inspect: 'Vier rot, vier schwarz. Ich habe jede Karte in diesem Spiel gesehen.',
      shuffling: 'Ich kenne die Reihenfolge nicht mehr.',
      shuffled:
        'Dieselben acht Karten, jetzt verdeckt. Ich weiß nicht, welche wo liegt.',
      drawn:
        'Die Beweisführerin hält eine Karte. Ich kann sie nicht sehen. Es könnte rot oder schwarz sein.',
      sorting:
        'Die Beweisführerin betrachtet den Rest. Der Sichtschutz blockiert meinen Blick.',
      provingWait: 'Ich warte darauf, Karten zu sehen…',
      provingOne: 'Bisher wurde mir 1 {otherCard} gezeigt.',
      provingMany: 'Bisher wurden mir {count} {otherCards} gezeigt.',
      result:
        'Alle vier {otherCards} liegen hier. Die verdeckte Karte muss {claimColor} sein — aber ich weiß immer noch nicht, welche der vier {claimCards} es ist.',
      resultCheat:
        'Es wurden nur drei {otherCards} gezeigt. Eine fehlt. Ich akzeptiere die Behauptung nicht.',
    },
    narration: {
      intro:
        'Ein Zero-Knowledge-Beweis lässt dich jemanden überzeugen, dass eine Aussage wahr ist, ohne etwas anderes zu verraten. Hier will die Beweisführerin beweisen, welche Farbe ihre Karte hat — ohne zu zeigen, welche Karte es ist. Du kannst auch versuchen zu lügen, um zu sehen, dass Betrug nicht funktioniert.',
      inspect:
        'Bevor du eine Karte ziehst, prüft die Prüferin das ganze Spiel: vier rote und vier schwarze Karten. Ihr seid euch einig, welche acht Karten es gibt.',
      shuffling: 'Die Karten werden gemischt und umgedreht.',
      shuffled:
        'Du bist die Beweisführerin. Ziehe eine zufällige Karte. Die Prüferin darf sie nicht sehen.',
      drawing:
        'Die Karte gleitet hinter den Sichtschutz. Nur du siehst die Vorderseite.',
      drawn:
        'Du hast eine {ownCard}. Beweise es! (Oder behaupte, eine {otherCard} zu haben — und sieh, wie der Betrug scheitert.)',
      sorting:
        'Du betrachtest die übrigen sieben Karten privat. Die Prüferin sieht ihre Vorderseiten weiterhin nicht.',
      proving:
        'Jede {otherCard} aus dem Rest wird der Prüferin gezeigt. Die {claimCards} bleiben auf deiner Seite des Sichtschutzes.',
      provingCheat:
        'Du versuchst zu beweisen, dass du eine {claimCard} hast, indem du alle {otherCards} zeigst. Weil deine echte Karte {ownColor} ist, kannst du nur drei vorzeigen.',
      result:
        'Die Prüferin hat jetzt alle vier {otherCards} gesehen, also muss deine verdeckte Karte {claimColor} sein. Die drei übrigen {claimCards} wurden nie gezeigt, also kann die Prüferin nicht sagen, welche der vier {claimCards} du gezogen hast. Das ist der Zero-Knowledge-Teil.',
      resultCheat:
        'Du hast behauptet, eine {claimCard} zu haben, konntest aber nur drei {otherCards} zeigen. Die Prüferin merkt, dass eine fehlt, und lehnt die Behauptung ab. Eine falsche Aussage lässt sich nicht beweisen — das nennt man Korrektheit (Soundness).',
    },
    actions: {
      begin: 'Zeig der Prüferin das Spiel',
      shuffle: 'Mischen und umdrehen',
      draw: 'Eine zufällige Karte ziehen',
      prove: 'Beweise, dass du eine {ownCard} hast',
      cheat: 'Versuch zu lügen ({claimCard})',
      again: 'Nochmal spielen',
    },
    properties: {
      completenessLabel: 'Vollständigkeit.',
      completeness: 'Die Aussage war wahr, also gelang der Beweis.',
      zeroKnowledgeLabel: 'Nullwissen.',
      zeroKnowledge:
        'Die Prüferin erfuhr nur, dass deine Karte {ownColor} ist — nicht, welche der vier {ownCards} es ist.',
      soundnessLabel: 'Korrektheit.',
      soundness:
        'Eine falsche Aussage lässt sich nicht beweisen. Indem du eine {claimCard} behauptet hast, während du eine {ownCard} gehalten hast, konntest du nicht alle vier {otherCards} zeigen.',
    },
    colors: {
      red: 'rot',
      black: 'schwarz',
    },
    colorCard: {
      red: 'rote Karte',
      black: 'schwarze Karte',
    },
    colorCards: {
      red: 'rote Karten',
      black: 'schwarze Karten',
    },
    ranks: {
      A: 'Ass',
      K: 'König',
    },
    suits: {
      hearts: 'Herz',
      diamonds: 'Karo',
      spades: 'Pik',
      clubs: 'Kreuz',
    },
    cardOf: '{suit}-{rank}',
  },
  fr: {
    htmlLang: 'fr',
    documentTitle: 'Preuve à divulgation nulle de connaissance avec des cartes',
    socialDescription:
      'Prouvez quelle couleur vous avez tirée sans montrer la carte — et sans révéler laquelle des cartes de cette couleur c’est.',
    ogImageAlt:
      'Une table de cartes avec un paravent : la proveuse voit l’as de cœur, la vérificatrice ne voit qu’une carte cachée.',
    language: 'Langue',
    menu: 'Menu',
    menuOpen: 'Ouvrir le menu',
    menuClose: 'Fermer le menu',
    home: 'Accueil',
    info: 'Info',
    eyebrow: 'Une petite démonstration à la table de cartes',
    title: 'Preuve à divulgation nulle',
    ledeBefore:
      'Prouvez quelle couleur vous avez tirée sans montrer la carte — et sans révéler',
    ledeEm: 'laquelle',
    ledeAfter: 'des cartes de cette couleur c’est.',
    modalClose: 'Fermer',
    modalContinue: 'Continuer',
    modalGotIt: 'Compris',
    modalStep: 'Étape {current} sur {total}',
    welcome: {
      title: 'Preuve à divulgation nulle',
      riskTitle: 'Identité numérique',
      risk:
        'L’identité numérique est de plus en plus piratée et détournée. Les pirates voient souvent bien plus de vous que nécessaire.',
      newspaper: {
        masthead: 'La Gazette Numérique',
        date: 'Avril 2026',
        section: 'Cybersécurité',
        headline: 'Fuite massive : des millions de scans d’identité en vente',
        deck: 'Noms, adresses et numéros de pièces d’identité exposés après une attaque contre un grand service de vérification.',
      },
      rethinkTitle: 'Montrer moins',
      rethink:
        'Il faut donc repenser quand on montre quelque chose, ce qu’on montre, et pourquoi. Une preuve à divulgation nulle de connaissance y aide : vous prouvez qu’une chose est vraie sans révéler les données sous-jacentes.',
      exampleTitle: 'Un exemple du quotidien',
      example:
        'À la porte d’un bar, le videur veut savoir si vous êtes assez âgé pour entrer. Il n’a besoin que d’un oui ou d’un non — pas de votre date de naissance exacte, de votre adresse, ni du reste de votre pièce d’identité.',
      bridgeTitle: 'Aussi en numérique',
      bridge:
        'Cela fonctionne aussi en numérique : les apps et sites peuvent vérifier une affirmation sans apprendre vos données privées.',
      rolesTitle: 'Les rôles',
      rolesProver: 'Je ne veux pas montrer la carte que j’ai tirée !',
      rolesVerifier: 'Et pourtant je veux savoir si la carte est rouge ou non !',
      cardsTitle: 'Un exemple',
      cards:
        'Nous allons maintenant le montrer avec des cartes à jouer. La proveuse prouve la couleur de sa carte, sans montrer quelle carte c’est. (Vous pouvez aussi essayer de mentir, pour voir que la triche ne marche pas.)',
    },
    stepsLabel: 'Étapes de la démonstration',
    steps: {
      inspect: 'Inspecter',
      draw: 'Tirer',
      prove: 'Prouver',
      result: 'Résultat',
    },
    personATitle: 'La Proveuse',
    personARole: '',
    personBTitle: 'La Vérificatrice',
    personBRole: '',
    tableLabel: 'Table de cartes',
    plaquePrivate: 'Pour vous seuls',
    plaquePublic: 'Pas de vue',
    red: 'Rouge',
    black: 'Noir',
    privateZone: 'Privé — la vérificatrice ne voit pas ceci',
    yourCard: 'Votre carte',
    cardComing: 'Arrive vers vous, face cachée…',
    personBCannotSeeCard: 'La vérificatrice ne peut pas voir cette carte',
    mysteryCard: 'Carte de la proveuse',
    mysteryHidden: 'cachée pour moi',
    remainingPrivate: 'Cartes restantes — encore privées',
    ownColorHidden: '{claimCards} restent cachées',
    shownToB: 'Montrées à la vérificatrice',
    missingCard: 'Carte manquante',
    watchCards: 'Regardez les cartes…',
    faceDownCard: 'Une carte à jouer face cachée',
    personA: {
      intro: 'Vous tirez une carte que vous seule pouvez voir.',
      inspect: 'Vous voyez aussi le jeu — rien n’est encore caché.',
      shuffled: 'Les cartes sont face cachée. Tirez-en une au hasard.',
      drawing: 'La carte passe derrière le paravent…',
      drawn: 'Vous avez tiré {card}. La vérificatrice ne peut pas la voir.',
      sorting: 'Regardez les cartes restantes en privé.',
      proving:
        'Montrez à la vérificatrice les quatre {otherCards}. Gardez les {claimCards} cachées.',
      provingCheat:
        'Vous affirmez avoir une {claimCard}. Essayez de montrer les quatre {otherCards}…',
      result:
        'La vérificatrice est convaincue — et ne sait toujours pas quelle {ownCard} vous avez.',
      resultCheat:
        'La triche a échoué. Vous n’avez pas pu montrer quatre {otherCards}, parce que vous tenez une {ownCard}.',
    },
    personB: {
      intro: 'Je dois être convaincue de la couleur de votre carte.',
      inspect: 'Quatre rouges, quatre noires. J’ai vu chaque carte de ce jeu.',
      shuffling: 'Je ne connais plus l’ordre.',
      shuffled:
        'Les mêmes huit cartes, maintenant face cachée. Je ne sais pas laquelle est laquelle.',
      drawn:
        'La proveuse tient une carte. Je ne peux pas la voir. Elle peut être rouge ou noire.',
      sorting:
        'La proveuse regarde le reste. Le paravent bloque ma vue.',
      provingWait: 'J’attends de voir des cartes…',
      provingOne: 'On m’a montré 1 {otherCard} jusqu’ici.',
      provingMany: 'On m’a montré {count} {otherCards} jusqu’ici.',
      result:
        'Les quatre {otherCards} sont là. La carte cachée doit être {claimColor} — mais je ne sais toujours pas laquelle des quatre {claimCards} c’est.',
      resultCheat:
        'Seules trois {otherCards} ont été montrées. Il en manque une. Je n’accepte pas l’affirmation.',
    },
    narration: {
      intro:
        'Une preuve à divulgation nulle de connaissance permet de convaincre quelqu’un qu’une affirmation est vraie sans rien révéler d’autre. Ici, la proveuse veut prouver la couleur de sa carte — sans montrer quelle carte c’est. Vous pouvez aussi essayer de mentir, pour voir que la triche ne marche pas.',
      inspect:
        'Avant de tirer une carte, la vérificatrice inspecte tout le jeu : quatre cartes rouges et quatre noires. Vous êtes d’accord sur les huit cartes présentes.',
      shuffling: 'Les cartes sont mélangées et retournées face cachée.',
      shuffled:
        'Vous êtes la proveuse. Tirez une carte au hasard. La vérificatrice ne pourra pas la voir.',
      drawing:
        'La carte glisse derrière le paravent. Vous seule verrez sa face.',
      drawn:
        'Vous avez une {ownCard}. Prouvez-le ! (Ou affirmez avoir une {otherCard} — et voyez la triche échouer.)',
      sorting:
        'Vous regardez les sept cartes restantes en privé. La vérificatrice ne voit toujours pas leurs faces.',
      proving:
        'Chaque {otherCard} du reste est montrée à la vérificatrice. Les {claimCards} restent de votre côté du paravent.',
      provingCheat:
        'Vous essayez de prouver que vous avez une {claimCard} en montrant toutes les {otherCards}. Comme votre vraie carte est {ownColor}, vous ne pouvez en produire que trois.',
      result:
        'La vérificatrice a maintenant vu les quatre {otherCards}, donc votre carte cachée doit être {claimColor}. Les trois {claimCards} restantes n’ont jamais été montrées, donc la vérificatrice ne peut pas dire laquelle des quatre {claimCards} vous avez tirée. C’est la partie à divulgation nulle.',
      resultCheat:
        'Vous avez affirmé avoir une {claimCard}, mais n’avez pu montrer que trois {otherCards}. La vérificatrice remarque qu’il en manque une et refuse l’affirmation. Une affirmation fausse ne peut pas être prouvée — c’est la solidité (soundness).',
    },
    actions: {
      begin: 'Montrer le jeu à la vérificatrice',
      shuffle: 'Mélanger et retourner',
      draw: 'Tirer une carte au hasard',
      prove: 'Prouver que vous avez une {ownCard}',
      cheat: 'Essayer de tricher ({claimCard})',
      again: 'Rejouer',
    },
    properties: {
      completenessLabel: 'Complétude.',
      completeness: 'L’affirmation était vraie, donc la preuve a réussi.',
      zeroKnowledgeLabel: 'Divulgation nulle.',
      zeroKnowledge:
        'La vérificatrice a seulement appris que votre carte est {ownColor} — pas laquelle des quatre {ownCards} c’est.',
      soundnessLabel: 'Solidité.',
      soundness:
        'Une affirmation fausse ne peut pas être prouvée. En affirmant une {claimCard} alors que vous teniez une {ownCard}, vous n’avez pas pu montrer les quatre {otherCards}.',
    },
    colors: {
      red: 'rouge',
      black: 'noire',
    },
    colorCard: {
      red: 'carte rouge',
      black: 'carte noire',
    },
    colorCards: {
      red: 'cartes rouges',
      black: 'cartes noires',
    },
    ranks: {
      A: 'As',
      K: 'Roi',
    },
    suits: {
      hearts: 'cœur',
      diamonds: 'carreau',
      spades: 'pique',
      clubs: 'trèfle',
    },
    cardOf: '{rank} de {suit}',
  },
}
