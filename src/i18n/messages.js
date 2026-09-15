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
    modalBack: 'Terug',
    modalGotIt: 'Begrepen',
    modalStep: 'Stap {current} van {total}',
    spaceHint: 'Tip: druk op de spatiebalk om verder te gaan',
    welcome: {
      title: '“Ik heb niks te verbergen”',
      nothingTitle: '“Ik heb niks te verbergen”',
      nothing:
        'Dat zeggen veel mensen over hun gegevens. Het klinkt logisch — tot alles wat je ooit hebt afgegeven ergens opduikt waar je het nooit wilde hebben.',
      sureTitle: 'Heb je echt niks te verbergen?',
      risk:
        'Elk bedrijf en elke instantie waar je iets invult, bewaart een kopie. Wordt zo’n partij gehackt, dan ligt in één klap alles op straat wat daar was opgeslagen.',
      newspaper: {
        masthead: 'Het Dagblad',
        date: 'Februari 2026',
        section: 'Cybersecurity',
        headline: 'Miljoenen Odido-klanten getroffen door grootschalige hack',
        deck: 'Namen, adressen, geboortedata en rekeningnummers van ruim zes miljoen klanten op straat nadat het bedrijf weigerde losgeld te betalen.',
      },
      rethinkTitle: 'Als je niet alles had laten zien, hadden ze niets gehad',
      rethink:
        'Gegevens die je nooit hebt afgegeven, kunnen ook niet worden gestolen. Wat er lekte, was precies alles wat ooit was ingevuld.',
      noChoiceTitle: '“Maar ik heb geen keuze!”',
      noChoice:
        'Dat klopt vaak. Banken, winkels, overheden en websites vragen je hele identiteitsbewijs, terwijl ze maar één ding hoeven te weten. Alles invullen, of je komt niet verder.',
      anotherWayTitle: 'Misschien kan het anders',
      anotherWay:
        'Wat als je alleen dat ene ding kon bewijzen, en verder niets prijsgaf? Dat is precies wat een zero-knowledge-proof (nulkennisbewijs) doet.',
      exampleTitle: 'Nu: je geeft je wachtwoord weg',
      example:
        'Bij het inloggen stuur je je wachtwoord naar de dienst; die moet het hebben om te controleren of het klopt. Is de inlogpagina nep, of wordt de dienst later gehackt, dan heeft een ander jouw wachtwoord.',
      bridgeTitle: 'Beter: je bewijst dat je het kent',
      bridge:
        'Je kunt de dienst ook overtuigen dat je het wachtwoord kent zonder het te versturen. De dienst weet dan net zo zeker dat jij het bent, maar heeft je wachtwoord nooit gezien — er valt dus niets te stelen.',
      rolesTitle: 'De rollen',
      rolesProver: '“Ik wil de getrokken kaart niet laten zien!”',
      rolesVerifier: '“En toch wil ik weten of de kaart rood is of niet!”',
      cardsTitle: 'Eerst met speelkaarten',
      cards:
        'Hoe bewijs je iets zonder het te laten zien? Dat oefenen we met acht speelkaarten: jij bewijst welke kleur jouw kaart heeft, zonder te laten zien welke kaart het is. Dit kan ook met een volledig kaartspel.',
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
    resultKnownTitle: 'Iedereen blij',
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
        'Met een zero-knowledge-proof (nulkennisbewijs) overtuig je iemand dat een stelling waar is, zonder verder iets te onthullen. Jij bent de bewijzer: je bewijst welke kleur jouw kaart heeft, zonder te laten zien welke kaart het is. Je kunt ook proberen te liegen, om te zien dat bedrog niet werkt.',
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
    cookies: {
      title: 'Cookies',
      text: 'We gebruiken Google Analytics alleen als je dat toestaat, om te zien hoe deze pagina wordt gebruikt. Zonder toestemming laden we geen analytics.',
      accept: 'Accepteren',
      reject: 'Weigeren',
      settings: 'Cookie-instellingen',
    },
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
    modalBack: 'Back',
    modalGotIt: 'Got it',
    modalStep: 'Step {current} of {total}',
    spaceHint: 'Tip: press the space bar to continue',
    welcome: {
      title: '“I have nothing to hide”',
      nothingTitle: '“I have nothing to hide”',
      nothing:
        'Many people say this about their personal data. It sounds reasonable — until everything you ever handed over turns up somewhere you never intended.',
      sureTitle: 'Do you really have nothing to hide?',
      risk:
        'Every company and authority you fill a form in with keeps a copy. When one of them is hacked, everything they stored is out in the open at once.',
      newspaper: {
        masthead: 'The Gazette',
        date: 'September 2026',
        section: 'Cybersecurity',
        headline: 'IDScan breach puts 150M+ driver’s licences up for sale',
        deck: 'Names, licence numbers and document scans of more than 150 million people offered for sale after a breach at an identity-verification company.',
      },
      rethinkTitle: 'If you had not shown everything, they would not have had anything',
      rethink:
        'Data you never handed over cannot be stolen. What leaked was exactly everything that had ever been collected.',
      noChoiceTitle: '“But I have no choice!”',
      noChoice:
        'Often that is true. Banks, shops, governments and websites ask for your whole ID when they only need to know one thing. Fill in everything, or you cannot continue.',
      anotherWayTitle: 'Maybe there is another way',
      anotherWay:
        'What if you could prove just that one thing and reveal nothing else? That is exactly what a zero-knowledge proof does.',
      exampleTitle: 'Now: you hand over your password',
      example:
        'To log in, you send your password to the service, because it needs the password to check that it is right. If the login page is fake, or the service is hacked later, someone else has your password.',
      bridgeTitle: 'Better: you prove you know it',
      bridge:
        'You can also convince the service that you know the password without sending it. The service ends up just as certain that it is you, but it has never seen your password — so there is nothing to steal.',
      rolesTitle: 'The roles',
      rolesProver: '“I do not want to show the card I drew!”',
      rolesVerifier: '“And yet I want to know whether the card is red or not!”',
      cardsTitle: 'First, with playing cards',
      cards:
        'How do you prove something without showing it? We practise that with eight playing cards: you prove which colour your card is, without showing which card it is. This could also be done with a full deck of cards.',
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
    resultKnownTitle: 'Everyone happy',
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
        'A zero-knowledge proof lets you convince someone that a statement is true without revealing anything else. You are the prover: you prove which colour your card is, without showing which card it is. You can also try to lie, to see that cheating does not work.',
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
    cookies: {
      title: 'Cookies',
      text: 'We use Google Analytics only if you allow it, to see how this page is used. Without consent, we do not load analytics.',
      accept: 'Accept',
      reject: 'Reject',
      settings: 'Cookie settings',
    },
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
    modalBack: 'Zurück',
    modalGotIt: 'Verstanden',
    modalStep: 'Schritt {current} von {total}',
    spaceHint: 'Tipp: Drücke die Leertaste, um weiterzugehen',
    welcome: {
      title: '“Ich habe nichts zu verbergen”',
      nothingTitle: '“Ich habe nichts zu verbergen”',
      nothing:
        'Das sagen viele über ihre Daten. Es klingt einleuchtend — bis alles, was du je angegeben hast, irgendwo auftaucht, wo du es nie haben wolltest.',
      sureTitle: 'Hast du wirklich nichts zu verbergen?',
      risk:
        'Jede Firma und jede Behörde, bei der du etwas ausfüllst, behält eine Kopie. Wird eine davon gehackt, liegt auf einen Schlag alles offen, was dort gespeichert war.',
      newspaper: {
        masthead: 'Die Zeitung',
        date: 'März 2026',
        section: 'Cybersicherheit',
        headline: 'Datenleck bei Identitätsfirma: Millionen Ausweis-Scans im Umlauf',
        deck: 'Namen, Adressen und Ausweisnummern von Millionen Menschen im Umlauf, nachdem ein großer Verifizierungsdienst angegriffen wurde.',
      },
      rethinkTitle: 'Hättest du nicht alles gezeigt, hätten sie nichts gehabt',
      rethink:
        'Daten, die du nie herausgegeben hast, kann auch niemand stehlen. Geleakt wurde genau das, was über die Jahre gesammelt worden war.',
      noChoiceTitle: '“Aber ich habe keine Wahl!”',
      noChoice:
        'Oft stimmt das. Banken, Läden, Behörden und Websites verlangen den ganzen Ausweis, obwohl sie nur eine einzige Sache wissen müssen. Alles ausfüllen, oder du kommst nicht weiter.',
      anotherWayTitle: 'Vielleicht geht es auch anders',
      anotherWay:
        'Was, wenn du nur diese eine Sache beweisen könntest und sonst nichts preisgibst? Genau das tut ein Zero-Knowledge-Beweis.',
      exampleTitle: 'Jetzt: du gibst dein Passwort her',
      example:
        'Zum Anmelden schickst du dein Passwort an den Dienst, denn er braucht es, um es zu prüfen. Ist die Anmeldeseite gefälscht oder wird der Dienst später gehackt, hat jemand anderes dein Passwort.',
      bridgeTitle: 'Besser: du beweist, dass du es kennst',
      bridge:
        'Du kannst den Dienst auch überzeugen, dass du das Passwort kennst, ohne es zu schicken. Der Dienst ist danach genauso sicher, dass du es bist, hat dein Passwort aber nie gesehen — es gibt also nichts zu stehlen.',
      rolesTitle: 'Die Rollen',
      rolesProver: '“Ich will die gezogene Karte nicht zeigen!”',
      rolesVerifier: '“Und trotzdem will ich wissen, ob die Karte rot ist oder nicht!”',
      cardsTitle: 'Zuerst mit Spielkarten',
      cards:
        'Wie beweist man etwas, ohne es zu zeigen? Das üben wir mit acht Spielkarten: Du beweist, welche Farbe deine Karte hat, ohne zu zeigen, welche Karte es ist. Das ginge auch mit einem vollständigen Kartenspiel.',
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
    resultKnownTitle: 'Alle froh',
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
        'Mit einem Zero-Knowledge-Beweis überzeugst du jemanden, dass eine Aussage wahr ist, ohne sonst etwas zu verraten. Du bist der Beweisführer: Du beweist, welche Farbe deine Karte hat, ohne zu zeigen, welche Karte es ist. Du kannst auch versuchen zu lügen, um zu sehen, dass Betrug nicht funktioniert.',
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
    cookies: {
      title: 'Cookies',
      text: 'Wir nutzen Google Analytics nur mit deiner Erlaubnis, um zu sehen, wie diese Seite genutzt wird. Ohne Zustimmung laden wir keine Analytics.',
      accept: 'Akzeptieren',
      reject: 'Ablehnen',
      settings: 'Cookie-Einstellungen',
    },
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
    modalBack: 'Retour',
    modalGotIt: 'Compris',
    modalStep: 'Étape {current} sur {total}',
    spaceHint: 'Astuce : appuyez sur la barre d’espace pour continuer',
    welcome: {
      title: '« Je n’ai rien à cacher »',
      nothingTitle: '« Je n’ai rien à cacher »',
      nothing:
        'Beaucoup de gens le disent de leurs données. Cela semble raisonnable — jusqu’au jour où tout ce que vous avez fourni réapparaît là où vous ne l’avez jamais voulu.',
      sureTitle: 'Vous n’avez vraiment rien à cacher ?',
      risk:
        'Chaque entreprise et chaque administration où vous remplissez un formulaire en garde une copie. Si l’une d’elles est piratée, tout ce qu’elle stockait se retrouve dans la nature d’un seul coup.',
      newspaper: {
        masthead: 'La Gazette',
        date: 'Avril 2026',
        section: 'Cybersécurité',
        headline: 'Fuite massive : des millions de scans d’identité en vente',
        deck: 'Noms, adresses et numéros de pièces d’identité de millions de personnes mis en vente après une attaque contre un grand service de vérification.',
      },
      rethinkTitle: 'Si vous n’aviez pas tout montré, ils n’auraient rien eu',
      rethink:
        'Les données que vous n’avez jamais fournies ne peuvent pas être volées. Ce qui a fuité, c’est exactement tout ce qui avait été collecté.',
      noChoiceTitle: '« Mais je n’ai pas le choix ! »',
      noChoice:
        'C’est souvent vrai. Banques, commerces, administrations et sites demandent toute la pièce d’identité alors qu’ils n’ont besoin de savoir qu’une seule chose. Tout remplir, ou vous restez bloqué.',
      anotherWayTitle: 'Il existe peut-être une autre façon',
      anotherWay:
        'Et si vous pouviez prouver cette seule chose sans rien révéler d’autre ? C’est exactement ce que fait une preuve à divulgation nulle de connaissance.',
      exampleTitle: 'Aujourd’hui : vous livrez votre mot de passe',
      example:
        'Pour vous connecter, vous envoyez votre mot de passe au service, car il lui faut le mot de passe pour le vérifier. Si la page de connexion est une copie, ou si le service est piraté plus tard, quelqu’un d’autre a votre mot de passe.',
      bridgeTitle: 'Mieux : vous prouvez que vous le connaissez',
      bridge:
        'Vous pouvez aussi convaincre le service que vous connaissez le mot de passe sans l’envoyer. Le service est tout aussi certain que c’est bien vous, mais il n’a jamais vu votre mot de passe — il n’y a donc rien à voler.',
      rolesTitle: 'Les rôles',
      rolesProver: '« Je ne veux pas montrer la carte que j’ai tirée ! »',
      rolesVerifier: '« Et pourtant je veux savoir si la carte est rouge ou non ! »',
      cardsTitle: 'D’abord, avec des cartes à jouer',
      cards:
        'Comment prouver quelque chose sans le montrer ? Nous nous y exerçons avec huit cartes à jouer : vous prouvez la couleur de votre carte, sans montrer quelle carte c’est. Cela pourrait aussi se faire avec un jeu de cartes complet.',
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
    resultKnownTitle: 'Tout le monde content',
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
      intro: '« Je tire une carte que moi seul peux voir. »',
      inspect: '« Je vois aussi le jeu — rien n’est encore caché. »',
      shuffled: '« Les cartes sont face cachée. J’en tire une au hasard. »',
      drawing: '« La carte passe derrière le paravent… »',
      drawn: '« J’ai tiré {card}. Le vérificateur ne peut pas la voir. »',
      sorting: '« Je regarde les cartes restantes en privé. »',
      proving:
        '« Je montre au vérificateur les quatre {otherCards}. Je garde les {claimCards} cachées. »',
      provingCheat:
        '« J’affirme avoir une {claimCard}. J’essaie de montrer les quatre {otherCards}… »',
      result:
        '« Le vérificateur n’avait besoin que de la couleur. Il la connaît maintenant : {ownColor}. Quelle {ownCard} j’ai reste cachée. »',
      resultCheat:
        '« La triche a échoué. Je n’ai pas pu montrer quatre {otherCards}, parce que je tiens une {ownCard}. »',
    },
    personB: {
      intro: '« Je dois être convaincu de la couleur de votre carte. »',
      inspect: '« Quatre rouges, quatre noires. J’ai vu chaque carte de ce jeu. »',
      shuffling: '« Je ne connais plus l’ordre. »',
      shuffled:
        '« Les mêmes huit cartes, maintenant face cachée. Je ne sais pas laquelle est laquelle. »',
      drawn:
        '« Le prouveur tient une carte. Je ne peux pas la voir. Elle peut être rouge ou noire. »',
      sorting:
        '« Le prouveur regarde le reste. Le paravent bloque ma vue. »',
      provingWait: '« J’attends de voir des cartes… »',
      provingOne: '« On m’a montré 1 {otherCard} jusqu’ici. »',
      provingMany: '« On m’a montré {count} {otherCards} jusqu’ici. »',
      result:
        '« Je n’avais besoin que de la couleur. Je la connais maintenant : {claimColor}. Je ne sais toujours pas laquelle des quatre {claimCards} c’est. »',
      resultCheat:
        '« Seules trois {otherCards} ont été montrées. Il en manque une. Je n’accepte pas l’affirmation. »',
    },
    narration: {
      intro:
        'Une preuve à divulgation nulle de connaissance permet de convaincre quelqu’un qu’une affirmation est vraie sans rien révéler d’autre. Vous êtes le prouveur : vous prouvez la couleur de votre carte, sans montrer quelle carte c’est. Vous pouvez aussi essayer de mentir, pour voir que la triche ne marche pas.',
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
    cookies: {
      title: 'Cookies',
      text: 'Nous utilisons Google Analytics uniquement si vous l’autorisez, pour voir comment cette page est utilisée. Sans consentement, nous ne chargeons pas d’analytique.',
      accept: 'Accepter',
      reject: 'Refuser',
      settings: 'Paramètres des cookies',
    },
    credit: '© Kor Dwarshuis – 2026 – réalisé avec l’IA',
  },
}
