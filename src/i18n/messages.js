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
    documentTitle: '“Ik heb niks te verbergen” — Zero-knowledge-proof (nulkennisbewijs)',
    socialDescription:
      '“Ik heb niks te verbergen”? Heb je dat echt? Na hacks van digitale identiteit is álles laten zien juist het risico. Als je niet alles had laten zien, hadden ze niets gehad — ontdek zero-knowledge met speelkaarten.',
    ogImageAlt:
      '“Ik heb niks te verbergen” — heb je dat echt? Kaarttafel met privéscherm: de bewijzer ziet de harten-aas, de controleur ziet alleen een verborgen kaart.',
    language: 'Taal',
    menu: 'Menu',
    menuOpen: 'Menu openen',
    menuClose: 'Menu sluiten',
    home: 'Home',
    info: 'Info',
    eyebrow: 'Zero-knowledge-proof (nulkennisbewijs) en digitale identiteit',
    title: '“Ik heb niks te verbergen”',
    ledeBefore:
      'Bewijs welke kleur je hebt getrokken zonder de kaart te laten zien — en zonder te onthullen',
    ledeEm: 'welke',
    ledeAfter: 'kaart van die kleur het is.',
    modalClose: 'Sluiten',
    modalContinue: 'Verder',
    modalGotIt: 'Begrepen',
    modalStep: 'Stap {current} van {total}',
    spaceHint: 'Tip: druk op de spatiebalk om verder te gaan',
    welcome: {
      title: '“Ik heb niks te verbergen”',
      nothingTitle: '“Ik heb niks te verbergen”',
      nothing:
        'Dat hoor je vaak. Het lijkt te kloppen; totdat je gegevens in verkeerde handen vallen.',
      sureTitle: 'Heb je echt niks te verbergen?',
      risk:
        'Digitale identiteit wordt steeds vaker gehackt en misbruikt. Hackers krijgen vaak veel meer van jou te zien dan nodig is.',
      newspaper: {
        masthead: 'Het Dagblad',
        date: 'Februari 2026',
        section: 'Cybersecurity',
        headline: 'Miljoenen Odido-klanten getroffen door grootschalige hack',
        deck: 'Namen, adressen, rekeningnummers en documentnummers van identiteitsbewijzen op straat na weigering losgeld.',
      },
      rethinkTitle: 'Als je niet alles had laten zien, hadden ze niets gehad',
      rethink:
        'Namen, adressen, rekeningnummers, documentnummers: alles wat ooit is ingevuld, lag klaar voor de hackers.',
      noChoiceTitle: '“Maar ik heb geen keuze!”',
      noChoice:
        'Banken, winkels, overheden en websites vragen vaak het hele ID, ook als ze maar één feit nodig hebben. Het voelt verplicht — alles invullen, of je komt niet verder.',
      anotherWayTitle: 'Misschien is er een andere manier',
      anotherWay:
        'We moeten opnieuw nadenken over wanneer we iets laten zien, wat we laten zien, en waarom. Een zero-knowledge-proof (nulkennisbewijs) helpt daarbij.',
      exampleTitle: 'Een alledaags voorbeeld',
      example:
        'Bij de deur van een café hoeft de portier alleen te weten of je oud genoeg bent om binnen te mogen. Hij hoeft niet te weten wanneer je precies geboren bent, waar je woont, of andere gegevens op je ID.',
      bridgeTitle: 'Ook digitaal',
      bridge:
        'Dit kan ook digitaal: apps en websites kunnen een bewering controleren zonder jouw privégegevens te zien.',
      rolesTitle: 'De rollen',
      rolesProver: '“Ik wil de getrokken kaart niet laten zien!”',
      rolesVerifier: '“En toch wil ik weten of de kaart rood is of niet!”',
      cardsTitle: 'Een voorbeeld',
      cards:
        'We laten dat nu zien met speelkaarten. De bewijzer bewijst welke kleur zijn kaart heeft, zonder te laten zien welke kaart het is.',
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
    plaquePrivate: 'Alleen ik',
    plaquePublic: 'Geen zicht',
    red: 'Rood',
    black: 'Zwart',
    privateZone: 'Privé — de controleur ziet dit niet',
    yourCard: 'Mijn kaart',
    cardComing: 'Komt naar mij toe, achterkant boven…',
    personBCannotSeeCard: 'De controleur kan deze kaart niet zien',
    mysteryCard: 'Kaart van de bewijzer',
    mysteryHidden: 'voor mij verborgen',
    mysteryColorKnown: 'Kleur bekend',
    mysteryWhichHidden: 'welke kaart: nog verborgen',
    resultKnownTitle: 'De kleur is bekend',
    resultNeeded:
      'De controleur hoefde alleen de kleur te weten — niet welke kaart het is.',
    resultNowKnowsLabel: 'Nu bekend:',
    resultNowKnows: 'de kaart is {claimColor}.',
    remainingPrivate: 'Overgebleven kaarten — nog privé',
    ownColorHidden: '{claimCards} blijven verborgen',
    shownToB: 'Getoond aan de controleur',
    missingCard: 'Ontbrekende kaart',
    watchCards: 'Kijk naar de kaarten…',
    faceDownCard: 'Een speelkaart met de achterkant naar boven',
    personA: {
      intro: '“Ik trek een kaart die alleen ik kan zien.”',
      inspect: '“Ik zie het spel ook — er is nog niets verborgen.”',
      shuffled: '“De kaarten liggen achterkant boven. Ik trek er willekeurig één.”',
      drawing: '“De kaart gaat achter het privéscherm…”',
      drawn: '“Ik trok {card}. De controleur kan die niet zien.”',
      sorting: '“Ik bekijk de overgebleven kaarten in het privé.”',
      proving:
        '“Ik laat de controleur alle vier de {otherCards} zien. Ik houd de {claimCards} verborgen.”',
      provingCheat:
        '“Ik beweer een {claimCard} te hebben. Ik probeer alle vier de {otherCards} te laten zien…”',
      result:
        '“De controleur hoefde alleen de kleur te weten. Nu weet hij die: {ownColor}. Welke {ownCard} ik heb, blijft verborgen.”',
      resultCheat:
        '“Het bedrog mislukte. Ik kon geen vier {otherCards} laten zien, omdat ik een {ownCard} vasthoud.”',
    },
    personB: {
      intro: '“Ik moet overtuigd raken van de kleur van jouw kaart.”',
      inspect: '“Vier rood, vier zwart. Ik heb elke kaart in dit spel gezien.”',
      shuffling: '“Ik ken de volgorde niet meer.”',
      shuffled:
        '“Dezelfde acht kaarten, nu achterkant boven. Ik weet niet welke waar ligt.”',
      drawn:
        '“De bewijzer houdt een kaart vast. Ik kan die niet zien. Het kan rood of zwart zijn.”',
      sorting: '“De bewijzer bekijkt de rest. Het scherm blokkeert mijn zicht.”',
      provingWait: '“Ik wacht tot ik kaarten te zien krijg…”',
      provingOne: '“Ik heb tot nu toe 1 {otherCard} gezien.”',
      provingMany: '“Ik heb tot nu toe {count} {otherCards} gezien.”',
      result:
        '“Ik hoefde alleen de kleur te weten. Nu weet ik die: {claimColor}. Welke van de vier {claimCards} het is, weet ik nog steeds niet.”',
      resultCheat:
        '“Er zijn maar drie {otherCards} getoond. Er ontbreekt er één. Ik geloof de bewering niet.”',
    },
    narration: {
      intro:
        'Een zero-knowledge-proof (nulkennisbewijs) laat je iemand overtuigen dat een stelling waar is, zonder verder iets te onthullen. Hier wil de bewijzer bewijzen welke kleur zijn kaart heeft — zonder te laten zien welke kaart het is. Je kunt ook proberen te liegen, om te zien dat bedrog niet werkt.',
      inspect:
        'Voordat je een kaart trekt, bekijkt de controleur het hele spel: vier rode kaarten en vier zwarte. Jullie zijn het erover eens welke acht kaarten er zijn.',
      shuffling: 'De kaarten worden geschud en omgekeerd.',
      shuffled:
        'Jij bent de bewijzer. Trek een willekeurige kaart. De controleur mag die niet zien.',
      drawing:
        'De kaart schuift achter het privéscherm. Alleen jij ziet de voorkant.',
      drawn:
        'Je hebt een {ownCard}. Bewijs het!',
      sorting:
        'Je bekijkt de overgebleven zeven kaarten in het privé. De controleur ziet hun voorkant nog steeds niet.',
      proving:
        'Elke {otherCard} uit de rest wordt aan de controleur getoond. De {claimCards} blijven aan jouw kant van het scherm.',
      provingCheat:
        'Je probeert te bewijzen dat je een {claimCard} hebt door alle {otherCards} te tonen. Omdat je eigenlijke kaart {ownColor} is, kun je er maar drie laten zien.',
      result:
        'De controleur hoefde alleen de kleur te weten, niet welke kaart. Dat weet hij nu: {claimColor} — omdat alle vier de {otherCards} zijn getoond. De drie overgebleven {claimCards} zijn nooit getoond, dus hij kan niet zeggen welke van de vier {claimCards} je hebt getrokken. Dat is het zero-knowledge-gedeelte.',
      resultCheat:
        'Je beweerde een {claimCard} te hebben, maar kon maar drie {otherCards} tonen. De controleur merkt dat er één ontbreekt en weigert de bewering. Een onware stelling kun je niet bewijzen — dat heet deugdelijkheid (soundness).',
    },
    actions: {
      begin: 'Laat de controleur het spel zien',
      shuffle: 'Schudden en omdraaien',
      draw: 'Trek een willekeurige kaart',
      prove: 'Bewijs dat ik een {ownCard} heb',
      cheat: 'Probeer te liegen ({claimCard})',
      again: 'Opnieuw spelen',
    },
    properties: {
      completenessLabel: 'Volledigheid.',
      completeness: 'De stelling was waar, dus het bewijs slaagde: de controleur kent nu de kleur.',
      zeroKnowledgeLabel: 'Nulkennis.',
      zeroKnowledge:
        'De controleur leerde alleen de kleur — {ownColor} — niet welke van de vier {ownCards} het is.',
      soundnessLabel: 'Deugdelijkheid.',
      soundness:
        'Een onware stelling valt niet te bewijzen. Door te beweren dat ik een {claimCard} had terwijl ik een {ownCard} vasthield, kon ik niet alle vier de {otherCards} laten zien.',
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
    credit: '© Kor Dwarshuis – 2026 – gemaakt met AI',
  },
  en: {
    htmlLang: 'en',
    documentTitle: '“I have nothing to hide” — Zero-knowledge-proof',
    socialDescription:
      '“I have nothing to hide”? Do you really? After digital-identity hacks, showing everything is the risk. If you had not shown everything, they would not have had anything — discover zero-knowledge with playing cards.',
    ogImageAlt:
      '“I have nothing to hide” — do you really? A card table with a privacy screen: the prover sees the ace of hearts, the verifier sees only a hidden card.',
    language: 'Language',
    menu: 'Menu',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    home: 'Home',
    info: 'Info',
    eyebrow: 'Zero-knowledge-proof and digital identity',
    title: '“I have nothing to hide”',
    ledeBefore:
      'Prove which colour you drew without showing the card — and without revealing',
    ledeEm: 'which',
    ledeAfter: 'card of that colour it is.',
    modalClose: 'Close',
    modalContinue: 'Continue',
    modalGotIt: 'Got it',
    modalStep: 'Step {current} of {total}',
    spaceHint: 'Tip: press the space bar to continue',
    welcome: {
      title: '“I have nothing to hide”',
      nothingTitle: '“I have nothing to hide”',
      nothing:
        'A familiar line about personal data. Showing everything feels harmless — until someone else gets a copy.',
      sureTitle: 'Do you really have nothing to hide?',
      risk:
        'Digital identity is increasingly vulnerable to hacks and misuse. Hackers often see far more of you than was ever needed.',
      newspaper: {
        masthead: 'The Gazette',
        date: 'September 2026',
        section: 'Cybersecurity',
        headline: 'IDScan breach puts 150M+ driver’s licences up for sale',
        deck: 'High-resolution identity scans from shops and rental desks exposed after hackers hit a major verification firm.',
      },
      rethinkTitle: 'If you had not shown everything, they would not have had anything',
      rethink:
        'Names, addresses, account numbers, ID scans: everything that was ever collected was sitting there for the taking.',
      noChoiceTitle: '“But I have no choice!”',
      noChoice:
        'Banks, shops, governments and websites often ask for the whole ID, even when they only need one fact. It feels mandatory — fill in everything, or you are stuck.',
      anotherWayTitle: 'Maybe there is another way',
      anotherWay:
        'We need to rethink when we reveal something, what we reveal, and why. A zero-knowledge proof helps with this.',
      exampleTitle: 'An everyday example',
      example:
        'At the door of a café, the bouncer only needs to know whether you are old enough to be admitted. He does not need to know your exact date of birth, where you live, or other details on your ID',
      bridgeTitle: 'Digitally too',
      bridge:
        'This also works digitally: apps and websites can check a claim without learning your private details.',
      rolesTitle: 'The roles',
      rolesProver: '“I do not want to show the card I drew!”',
      rolesVerifier: '“And yet I want to know whether the card is red or not!”',
      cardsTitle: 'An example',
      cards:
        'Next we will show that with playing cards. The prover proves which colour his card is, without showing which card it is.',
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
    plaquePrivate: 'My eyes only',
    plaquePublic: 'No view',
    red: 'Red',
    black: 'Black',
    privateZone: 'Private — the verifier cannot see this',
    yourCard: 'My card',
    cardComing: 'Coming to me face down…',
    personBCannotSeeCard: 'The verifier cannot see this card',
    mysteryCard: 'The prover’s card',
    mysteryHidden: 'hidden from me',
    mysteryColorKnown: 'Colour known',
    mysteryWhichHidden: 'which card: still hidden',
    resultKnownTitle: 'The colour is known',
    resultNeeded:
      'The verifier only needed to know the colour — not which card it is.',
    resultNowKnowsLabel: 'Now known:',
    resultNowKnows: 'the card is {claimColor}.',
    remainingPrivate: 'Remaining cards — still private',
    ownColorHidden: '{claimCards} kept hidden',
    shownToB: 'Shown to the verifier',
    missingCard: 'Missing card',
    watchCards: 'Watch the cards…',
    faceDownCard: 'A face-down playing card',
    personA: {
      intro: '“I will draw a card that only I can see.”',
      inspect: '“I can see the deck too — nothing is hidden yet.”',
      shuffled: '“The cards are face down. I draw one at random.”',
      drawing: '“Pulling a card behind the privacy screen…”',
      drawn: '“I drew the {card}. The verifier cannot see it.”',
      sorting: '“I look through the remaining cards in private.”',
      proving:
        '“I show the verifier all four {otherCards}. I keep the {claimCards} hidden.”',
      provingCheat:
        '“I claim to have a {claimCard}. I try to show all four {otherCards}…”',
      result:
        '“The verifier only needed the colour. They now know it: {ownColor}. Which {ownCard} I hold stays hidden.”',
      resultCheat:
        '“The cheat failed. I could not show four {otherCards}, because I am holding a {ownCard}.”',
    },
    personB: {
      intro: '“I need to be convinced about the colour of your card.”',
      inspect: '“Four red, four black. I have seen every card in this deck.”',
      shuffling: '“I no longer know the order.”',
      shuffled:
        '“Same eight cards, now face down. I do not know which is which.”',
      drawn:
        '“The prover is holding a card. I cannot see it. It might be red or black.”',
      sorting:
        '“The prover is looking at the remaining cards. The screen blocks my view.”',
      provingWait: '“Waiting to see cards…”',
      provingOne: '“I have been shown 1 {otherCard} so far.”',
      provingMany: '“I have been shown {count} {otherCards} so far.”',
      result:
        '“I only needed to know the colour. I now know it: {claimColor}. I still do not know which of the four {claimCards} it is.”',
      resultCheat:
        '“Only three {otherCards} were shown. One is missing. I do not accept the claim.”',
    },
    narration: {
      intro:
        'A zero-knowledge-proof lets you convince someone a statement is true without revealing anything else. Here, the prover wants to prove which colour his card is — without showing which card it is. You can also try to lie, to see that cheating does not work.',
      inspect:
        'Before you draw a card, the verifier inspects the whole deck: four red cards and four black cards. Both of you agree on exactly which eight cards exist.',
      shuffling: 'The cards are shuffled and turned face down.',
      shuffled:
        'You are the prover. Draw a random card. The verifier will not be allowed to see it.',
      drawing:
        'The card slides behind the privacy screen. Only you will see its face.',
      drawn:
        'You have a {ownCard}. Prove it!',
      sorting:
        'You look at the remaining seven cards in private. The verifier still cannot see their faces.',
      proving:
        'Every {otherCard} from the remainder is shown to the verifier. The {claimCards} stay on your side of the screen.',
      provingCheat:
        'You try to prove you have a {claimCard} by showing all the {otherCards}. Because your real card is {ownColor}, you can only produce three.',
      result:
        'The verifier only needed to know the colour, not which card. They now know it is {claimColor}: all four {otherCards} are accounted for. The three leftover {claimCards} were never shown, so they cannot tell which of the four {claimCards} you drew. That is the zero-knowledge part.',
      resultCheat:
        'You claimed to have a {claimCard}, but could only show three {otherCards}. The verifier notices one is missing and rejects the claim. A false statement cannot be proven — that is soundness.',
    },
    actions: {
      begin: 'Show the verifier the deck',
      shuffle: 'Shuffle and turn face down',
      draw: 'Draw a random card',
      prove: 'Prove I have a {ownCard}',
      cheat: 'Try to cheat ({claimCard})',
      again: 'Play again',
    },
    properties: {
      completenessLabel: 'Completeness.',
      completeness: 'The statement was true, so the proof succeeded: the verifier now knows the colour.',
      zeroKnowledgeLabel: 'Zero knowledge.',
      zeroKnowledge:
        'The verifier learned only the colour — {ownColor} — not which of the four {ownCards} it is.',
      soundnessLabel: 'Soundness.',
      soundness:
        'A false statement cannot be proven. By claiming a {claimCard} while holding a {ownCard}, I could not show all four {otherCards}.',
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
    credit: '© Kor Dwarshuis – 2026 – made with AI',
  },
  de: {
    htmlLang: 'de',
    documentTitle: '“Ich habe nichts zu verbergen” — Zero-Knowledge-Beweis',
    socialDescription:
      '“Ich habe nichts zu verbergen”? Wirklich? Nach Hacks digitaler Identität ist alles zu zeigen das Risiko. Hättest du nicht alles gezeigt, hätten sie nichts gehabt — entdecke Zero-Knowledge mit Spielkarten.',
    ogImageAlt:
      '“Ich habe nichts zu verbergen” — wirklich? Ein Kartentisch mit Sichtschutz: Der Beweisführer sieht das Herz-Ass, der Prüfer sieht nur eine verdeckte Karte.',
    language: 'Sprache',
    menu: 'Menü',
    menuOpen: 'Menü öffnen',
    menuClose: 'Menü schließen',
    home: 'Startseite',
    info: 'Info',
    eyebrow: 'Zero-Knowledge-Beweis und digitale Identität',
    title: '“Ich habe nichts zu verbergen”',
    ledeBefore:
      'Beweise, welche Farbe du gezogen hast, ohne die Karte zu zeigen — und ohne zu verraten,',
    ledeEm: 'welche',
    ledeAfter: 'Karte dieser Farbe es ist.',
    modalClose: 'Schließen',
    modalContinue: 'Weiter',
    modalGotIt: 'Verstanden',
    modalStep: 'Schritt {current} von {total}',
    spaceHint: 'Tipp: Drücke die Leertaste, um weiterzugehen',
    welcome: {
      title: '“Ich habe nichts zu verbergen”',
      nothingTitle: '“Ich habe nichts zu verbergen”',
      nothing:
        'Das hört man oft. Es scheint zuzutreffen; bis Ihre Daten in die falschen Hände geraten.',
      sureTitle: 'Hast du wirklich nichts zu verbergen?',
      risk:
        'Digitale Identität wird immer häufiger gehackt und missbraucht. Hacker sehen oft weit mehr von dir, als jemals nötig war.',
      newspaper: {
        masthead: 'Die Zeitung',
        date: 'März 2026',
        section: 'Cybersicherheit',
        headline: 'Datenleck bei Identitätsfirma: Millionen Ausweis-Scans im Umlauf',
        deck: 'Namen, Adressen und Ausweisnummern nach Angriff auf einen großen Verifizierungsdienst preisgegeben.',
      },
      rethinkTitle: 'Hättest du nicht alles gezeigt, hätten sie nichts gehabt',
      rethink:
        'Namen, Adressen, Kontonummern, Ausweis-Scans: alles, was je gesammelt wurde, lag bereit.',
      noChoiceTitle: '“Aber ich habe keine Wahl!”',
      noChoice:
        'Banken, Läden, Behörden und Websites verlangen oft den ganzen Ausweis, auch wenn sie nur eine Tatsache brauchen. Es fühlt sich zwingend an — alles ausfüllen, oder du kommst nicht weiter.',
      anotherWayTitle: 'Vielleicht gibt es einen anderen Weg',
      anotherWay:
        'Wir müssen überdenken, wann wir etwas zeigen, was wir zeigen und warum. Ein Zero-Knowledge-Beweis hilft dabei.',
      exampleTitle: 'Ein Alltagsbeispiel',
      example:
        'An der Tür eines Cafés muss der Türsteher lediglich wissen, ob Sie alt genug sind, um einzutreten. Er muss weder Ihr genaues Geburtsdatum noch Ihren Wohnort oder andere Details auf Ihrem Ausweis kennen.',
      bridgeTitle: 'Auch digital',
      bridge:
        'Das geht auch digital: Apps und Websites können eine Behauptung prüfen, ohne deine privaten Daten zu sehen.',
      rolesTitle: 'Die Rollen',
      rolesProver: '“Ich will die gezogene Karte nicht zeigen!”',
      rolesVerifier: '“Und trotzdem will ich wissen, ob die Karte rot ist oder nicht!”',
      cardsTitle: 'Ein Beispiel',
      cards:
        'Als Nächstes zeigen wir das mit Spielkarten. Der Beweisführer beweist, welche Farbe seine Karte hat, ohne zu zeigen, welche Karte es ist.',
    },
    stepsLabel: 'Schritte der Demonstration',
    steps: {
      inspect: 'Prüfen',
      draw: 'Ziehen',
      prove: 'Beweisen',
      result: 'Ergebnis',
    },
    personATitle: 'Der Beweisführer',
    personARole: '',
    personBTitle: 'Der Prüfer',
    personBRole: '',
    tableLabel: 'Kartentisch',
    plaquePrivate: 'Nur für mich',
    plaquePublic: 'Kein Blick',
    red: 'Rot',
    black: 'Schwarz',
    privateZone: 'Privat — der Prüfer sieht das nicht',
    yourCard: 'Meine Karte',
    cardComing: 'Kommt zu mir, verdeckt…',
    personBCannotSeeCard: 'Der Prüfer kann diese Karte nicht sehen',
    mysteryCard: 'Karte des Beweisführers',
    mysteryHidden: 'vor mir verborgen',
    mysteryColorKnown: 'Farbe bekannt',
    mysteryWhichHidden: 'welche Karte: noch verborgen',
    resultKnownTitle: 'Die Farbe ist bekannt',
    resultNeeded:
      'Der Prüfer musste nur die Farbe wissen — nicht, welche Karte es ist.',
    resultNowKnowsLabel: 'Jetzt bekannt:',
    resultNowKnows: 'die Karte ist {claimColor}.',
    remainingPrivate: 'Übrige Karten — noch privat',
    ownColorHidden: '{claimCards} bleiben verborgen',
    shownToB: 'Dem Prüfer gezeigt',
    missingCard: 'Fehlende Karte',
    watchCards: 'Schau auf die Karten…',
    faceDownCard: 'Eine verdeckte Spielkarte',
    personA: {
      intro: '“Ich ziehe eine Karte, die nur ich sehen kann.”',
      inspect: '“Ich sehe das Spiel auch — noch ist nichts verborgen.”',
      shuffled: '“Die Karten liegen verdeckt. Ich ziehe eine zufällig.”',
      drawing: '“Die Karte geht hinter den Sichtschutz…”',
      drawn: '“Ich habe {card} gezogen. Der Prüfer kann sie nicht sehen.”',
      sorting: '“Ich schaue mir die übrigen Karten privat an.”',
      proving:
        '“Ich zeige dem Prüfer alle vier {otherCards}. Ich halte die {claimCards} verborgen.”',
      provingCheat:
        '“Ich behaupte, eine {claimCard} zu haben. Ich versuche, alle vier {otherCards} zu zeigen…”',
      result:
        '“Der Prüfer musste nur die Farbe wissen. Jetzt kennt er sie: {ownColor}. Welche {ownCard} ich habe, bleibt verborgen.”',
      resultCheat:
        '“Der Betrug ist gescheitert. Ich konnte keine vier {otherCards} zeigen, weil ich eine {ownCard} halte.”',
    },
    personB: {
      intro: '“Ich muss von der Farbe deiner Karte überzeugt werden.”',
      inspect: '“Vier rot, vier schwarz. Ich habe jede Karte in diesem Spiel gesehen.”',
      shuffling: '“Ich kenne die Reihenfolge nicht mehr.”',
      shuffled:
        '“Dieselben acht Karten, jetzt verdeckt. Ich weiß nicht, welche wo liegt.”',
      drawn:
        '“Der Beweisführer hält eine Karte. Ich kann sie nicht sehen. Es könnte rot oder schwarz sein.”',
      sorting:
        '“Der Beweisführer betrachtet den Rest. Der Sichtschutz blockiert meinen Blick.”',
      provingWait: '“Ich warte darauf, Karten zu sehen…”',
      provingOne: '“Bisher wurde mir 1 {otherCard} gezeigt.”',
      provingMany: '“Bisher wurden mir {count} {otherCards} gezeigt.”',
      result:
        '“Ich musste nur die Farbe wissen. Jetzt kenne ich sie: {claimColor}. Welche der vier {claimCards} es ist, weiß ich immer noch nicht.”',
      resultCheat:
        '“Es wurden nur drei {otherCards} gezeigt. Eine fehlt. Ich akzeptiere die Behauptung nicht.”',
    },
    narration: {
      intro:
        'Ein Zero-Knowledge-Beweis lässt dich jemanden überzeugen, dass eine Aussage wahr ist, ohne etwas anderes zu verraten. Hier will der Beweisführer beweisen, welche Farbe seine Karte hat — ohne zu zeigen, welche Karte es ist. Du kannst auch versuchen zu lügen, um zu sehen, dass Betrug nicht funktioniert.',
      inspect:
        'Bevor du eine Karte ziehst, prüft der Prüfer das ganze Spiel: vier rote und vier schwarze Karten. Ihr seid euch einig, welche acht Karten es gibt.',
      shuffling: 'Die Karten werden gemischt und umgedreht.',
      shuffled:
        'Du bist der Beweisführer. Ziehe eine zufällige Karte. Der Prüfer darf sie nicht sehen.',
      drawing:
        'Die Karte gleitet hinter den Sichtschutz. Nur du siehst die Vorderseite.',
      drawn:
        'Du hast eine {ownCard}. Beweise es!',
      sorting:
        'Du betrachtest die übrigen sieben Karten privat. Der Prüfer sieht ihre Vorderseiten weiterhin nicht.',
      proving:
        'Jede {otherCard} aus dem Rest wird dem Prüfer gezeigt. Die {claimCards} bleiben auf deiner Seite des Sichtschutzes.',
      provingCheat:
        'Du versuchst zu beweisen, dass du eine {claimCard} hast, indem du alle {otherCards} zeigst. Weil deine echte Karte {ownColor} ist, kannst du nur drei vorzeigen.',
      result:
        'Der Prüfer musste nur die Farbe wissen, nicht welche Karte. Jetzt kennt er sie: {claimColor} — weil alle vier {otherCards} gezeigt wurden. Die drei übrigen {claimCards} wurden nie gezeigt, also kann er nicht sagen, welche der vier {claimCards} du gezogen hast. Das ist der Zero-Knowledge-Teil.',
      resultCheat:
        'Du hast behauptet, eine {claimCard} zu haben, konntest aber nur drei {otherCards} zeigen. Der Prüfer merkt, dass eine fehlt, und lehnt die Behauptung ab. Eine falsche Aussage lässt sich nicht beweisen — das nennt man Korrektheit (Soundness).',
    },
    actions: {
      begin: 'Zeig dem Prüfer das Spiel',
      shuffle: 'Mischen und umdrehen',
      draw: 'Eine zufällige Karte ziehen',
      prove: 'Beweise, dass ich eine {ownCard} habe',
      cheat: 'Versuch zu lügen ({claimCard})',
      again: 'Nochmal spielen',
    },
    properties: {
      completenessLabel: 'Vollständigkeit.',
      completeness: 'Die Aussage war wahr, also gelang der Beweis: der Prüfer kennt jetzt die Farbe.',
      zeroKnowledgeLabel: 'Nullwissen.',
      zeroKnowledge:
        'Der Prüfer erfuhr nur die Farbe — {ownColor} — nicht, welche der vier {ownCards} es ist.',
      soundnessLabel: 'Korrektheit.',
      soundness:
        'Eine falsche Aussage lässt sich nicht beweisen. Indem ich eine {claimCard} behauptet habe, während ich eine {ownCard} gehalten habe, konnte ich nicht alle vier {otherCards} zeigen.',
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
    credit: '© Kor Dwarshuis – 2026 – erstellt mit KI',
  },
  fr: {
    htmlLang: 'fr',
    documentTitle: '« Je n’ai rien à cacher » — Preuve à divulgation nulle',
    socialDescription:
      '« Je n’ai rien à cacher » ? Vraiment ? Après les piratages d’identité numérique, tout montrer est le risque. Si vous n’aviez pas tout montré, ils n’auraient rien eu — découvrez la divulgation nulle avec des cartes.',
    ogImageAlt:
      '« Je n’ai rien à cacher » — vraiment ? Une table de cartes avec un paravent : le prouveur voit l’as de cœur, le vérificateur ne voit qu’une carte cachée.',
    language: 'Langue',
    menu: 'Menu',
    menuOpen: 'Ouvrir le menu',
    menuClose: 'Fermer le menu',
    home: 'Accueil',
    info: 'Info',
    eyebrow: 'Preuve à divulgation nulle et identité numérique',
    title: '« Je n’ai rien à cacher »',
    ledeBefore:
      'Prouvez quelle couleur vous avez tirée sans montrer la carte — et sans révéler',
    ledeEm: 'laquelle',
    ledeAfter: 'des cartes de cette couleur c’est.',
    modalClose: 'Fermer',
    modalContinue: 'Continuer',
    modalGotIt: 'Compris',
    modalStep: 'Étape {current} sur {total}',
    spaceHint: 'Astuce : appuyez sur la barre d’espace pour continuer',
    welcome: {
      title: '« Je n’ai rien à cacher »',
      nothingTitle: '« Je n’ai rien à cacher »',
      nothing:
        'On l`entend souvent.Cela semble vrai; jusqu`à ce que vos données tombent entre de mauvaises mains.',
      sureTitle: 'Vous n’avez vraiment rien à cacher ?',
      risk:
        'L’identité numérique est de plus en plus piratée et détournée. Les pirates voient souvent bien plus de vous que nécessaire.',
      newspaper: {
        masthead: 'La Gazette',
        date: 'Avril 2026',
        section: 'Cybersécurité',
        headline: 'Fuite massive : des millions de scans d’identité en vente',
        deck: 'Noms, adresses et numéros de pièces d’identité exposés après une attaque contre un grand service de vérification.',
      },
      rethinkTitle: 'Si vous n’aviez pas tout montré, ils n’auraient rien eu',
      rethink:
        'Noms, adresses, numéros de compte, scans d’identité : tout ce qui avait été collecté était là, prêt à être pris.',
      noChoiceTitle: '« Mais je n’ai pas le choix ! »',
      noChoice:
        'Banques, commerces, administrations et sites demandent souvent toute la pièce d’identité, même s’ils n’ont besoin que d’un fait. Ça paraît obligatoire — tout remplir, ou vous restez bloqué.',
      anotherWayTitle: 'Peut-être y a-t-il une autre façon',
      anotherWay:
        'Il nous faut repenser le moment où nous montrons quelque chose, ce que nous montrons et pourquoi. Une preuve à divulgation nulle de connaissance nous y aide.',
      exampleTitle: 'Un exemple du quotidien',
      example:
        'À l`entrée d`un café, le videur a seulement besoin de savoir si vous avez l`âge légal pour entrer.Il n`a pas besoin de connaître votre date de naissance exacte, votre adresse ou d`autres informations figurant sur votre pièce d`identité.',
      bridgeTitle: 'Aussi en numérique',
      bridge:
        'Cela fonctionne aussi en numérique : les apps et sites peuvent vérifier une affirmation sans apprendre vos données privées.',
      rolesTitle: 'Les rôles',
      rolesProver: '“Je ne veux pas montrer la carte que j’ai tirée !”',
      rolesVerifier: '“Et pourtant je veux savoir si la carte est rouge ou non !”',
      cardsTitle: 'Un exemple',
      cards:
        'Nous allons maintenant le montrer avec des cartes à jouer. Le prouveur prouve la couleur de sa carte, sans montrer quelle carte c’est.',
    },
    stepsLabel: 'Étapes de la démonstration',
    steps: {
      inspect: 'Inspecter',
      draw: 'Tirer',
      prove: 'Prouver',
      result: 'Résultat',
    },
    personATitle: 'Le Prouveur',
    personARole: '',
    personBTitle: 'Le Vérificateur',
    personBRole: '',
    tableLabel: 'Table de cartes',
    plaquePrivate: 'Pour moi seul',
    plaquePublic: 'Pas de vue',
    red: 'Rouge',
    black: 'Noir',
    privateZone: 'Privé — le vérificateur ne voit pas ceci',
    yourCard: 'Ma carte',
    cardComing: 'Arrive vers moi, face cachée…',
    personBCannotSeeCard: 'Le vérificateur ne peut pas voir cette carte',
    mysteryCard: 'Carte du prouveur',
    mysteryHidden: 'cachée pour moi',
    mysteryColorKnown: 'Couleur connue',
    mysteryWhichHidden: 'quelle carte : toujours cachée',
    resultKnownTitle: 'La couleur est connue',
    resultNeeded:
      'Le vérificateur n’avait besoin que de la couleur — pas de quelle carte c’est.',
    resultNowKnowsLabel: 'Maintenant connu :',
    resultNowKnows: 'la carte est {claimColor}.',
    remainingPrivate: 'Cartes restantes — encore privées',
    ownColorHidden: '{claimCards} restent cachées',
    shownToB: 'Montrées au vérificateur',
    missingCard: 'Carte manquante',
    watchCards: 'Regardez les cartes…',
    faceDownCard: 'Une carte à jouer face cachée',
    personA: {
      intro: '“Je tire une carte que moi seul peux voir.”',
      inspect: '“Je vois aussi le jeu — rien n’est encore caché.”',
      shuffled: '“Les cartes sont face cachée. J’en tire une au hasard.”',
      drawing: '“La carte passe derrière le paravent…”',
      drawn: '“J’ai tiré {card}. Le vérificateur ne peut pas la voir.”',
      sorting: '“Je regarde les cartes restantes en privé.”',
      proving:
        '“Je montre au vérificateur les quatre {otherCards}. Je garde les {claimCards} cachées.”',
      provingCheat:
        '“J’affirme avoir une {claimCard}. J’essaie de montrer les quatre {otherCards}…”',
      result:
        '“Le vérificateur n’avait besoin que de la couleur. Il la connaît maintenant : {ownColor}. Quelle {ownCard} j’ai reste cachée.”',
      resultCheat:
        '“La triche a échoué. Je n’ai pas pu montrer quatre {otherCards}, parce que je tiens une {ownCard}.”',
    },
    personB: {
      intro: '“Je dois être convaincu de la couleur de votre carte.”',
      inspect: '“Quatre rouges, quatre noires. J’ai vu chaque carte de ce jeu.”',
      shuffling: '“Je ne connais plus l’ordre.”',
      shuffled:
        '“Les mêmes huit cartes, maintenant face cachée. Je ne sais pas laquelle est laquelle.”',
      drawn:
        '“Le prouveur tient une carte. Je ne peux pas la voir. Elle peut être rouge ou noire.”',
      sorting:
        '“Le prouveur regarde le reste. Le paravent bloque ma vue.”',
      provingWait: '“J’attends de voir des cartes…”',
      provingOne: '“On m’a montré 1 {otherCard} jusqu’ici.”',
      provingMany: '“On m’a montré {count} {otherCards} jusqu’ici.”',
      result:
        '“Je n’avais besoin que de la couleur. Je la connais maintenant : {claimColor}. Je ne sais toujours pas laquelle des quatre {claimCards} c’est.”',
      resultCheat:
        '“Seules trois {otherCards} ont été montrées. Il en manque une. Je n’accepte pas l’affirmation.”',
    },
    narration: {
      intro:
        'Une preuve à divulgation nulle de connaissance permet de convaincre quelqu’un qu’une affirmation est vraie sans rien révéler d’autre. Ici, le prouveur veut prouver la couleur de sa carte — sans montrer quelle carte c’est. Vous pouvez aussi essayer de mentir, pour voir que la triche ne marche pas.',
      inspect:
        'Avant de tirer une carte, le vérificateur inspecte tout le jeu : quatre cartes rouges et quatre noires. Vous êtes d’accord sur les huit cartes présentes.',
      shuffling: 'Les cartes sont mélangées et retournées face cachée.',
      shuffled:
        'Vous êtes le prouveur. Tirez une carte au hasard. Le vérificateur ne pourra pas la voir.',
      drawing:
        'La carte glisse derrière le paravent. Vous seul verrez sa face.',
      drawn:
        'Vous avez une {ownCard}. Prouvez-le !',
      sorting:
        'Vous regardez les sept cartes restantes en privé. Le vérificateur ne voit toujours pas leurs faces.',
      proving:
        'Chaque {otherCard} du reste est montrée au vérificateur. Les {claimCards} restent de votre côté du paravent.',
      provingCheat:
        'Vous essayez de prouver que vous avez une {claimCard} en montrant toutes les {otherCards}. Comme votre vraie carte est {ownColor}, vous ne pouvez en produire que trois.',
      result:
        'Le vérificateur n’avait besoin que de la couleur, pas de quelle carte. Il la connaît maintenant : {claimColor} — parce que les quatre {otherCards} sont là. Les trois {claimCards} restantes n’ont jamais été montrées, donc il ne peut pas dire laquelle des quatre {claimCards} vous avez tirée. C’est la partie à divulgation nulle.',
      resultCheat:
        'Vous avez affirmé avoir une {claimCard}, mais n’avez pu montrer que trois {otherCards}. Le vérificateur remarque qu’il en manque une et refuse l’affirmation. Une affirmation fausse ne peut pas être prouvée — c’est la solidité (soundness).',
    },
    actions: {
      begin: 'Montrer le jeu au vérificateur',
      shuffle: 'Mélanger et retourner',
      draw: 'Tirer une carte au hasard',
      prove: 'Prouver que j’ai une {ownCard}',
      cheat: 'Essayer de tricher ({claimCard})',
      again: 'Rejouer',
    },
    properties: {
      completenessLabel: 'Complétude.',
      completeness: 'L’affirmation était vraie, donc la preuve a réussi : le vérificateur connaît maintenant la couleur.',
      zeroKnowledgeLabel: 'Divulgation nulle.',
      zeroKnowledge:
        'Le vérificateur a seulement appris la couleur — {ownColor} — pas laquelle des quatre {ownCards} c’est.',
      soundnessLabel: 'Solidité.',
      soundness:
        'Une affirmation fausse ne peut pas être prouvée. En affirmant une {claimCard} alors que je tenais une {ownCard}, je n’ai pas pu montrer les quatre {otherCards}.',
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
    credit: '© Kor Dwarshuis – 2026 – réalisé avec l’IA',
  },
}
