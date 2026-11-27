// =====================================================
// Oppgaver: Funksjoner
//
//   function pluss(a, b) {   // a og b er parametre (verdier inn)
//     return a + b;          // return sender svaret ut
//   }
//   pluss(2, 3);             // kaller funksjonen -> 5
//
//   Se README.md for mer informasjon om oppgaven.
// Der det ikke er oppgitt variabel, lager du egen. Eks temperatur. 
// =====================================================

// #####################################################
// DEL 1: VÆRAPPEN (oppgave 1–9)
// #####################################################

// Data: temperaturer i Tromsø en uke i mørketida (grader celsius).
// Du skal bruke arrayen "temperaturer" i oppgavene som handler om temperatur.
const temperaturer = [-4, -6, -2, 1, -8, -11, -3];


// ---------- GRØNN ----------

// Oppgave 1: Når en spiller logger inn på Minecraft-serveren, skal hun få en hilsen.
//     hilsen("Ola") -> "Hei, Ola!"
//     Tips: bruk en template literal: `Hei, ${navn}!`
function hilsen(navn) {
  return `Hei, ${navn}!`;
}

// Oppgave 2: Hvor mange blokker trengs til gulvet i en hytte på 4 x 5 blokker?
//     Returner arealet av et rektangel (bredde ganger høyde)
function rektangelAreal(bredde, hoyde) { // burde brukt Ø her Bjørn... det her er ikke bra.
  return bredde * hoyde;
}

// Oppgave 3: En venn i USA spør på Discord hvor kaldt det er i Tromsø.
//     Temperaturen er -6 grader C. 
//     Gjør om celsius til fahrenheit.  Formel: F = C * 9/5 + 32
//     (Den motsatte formelen er C = (F - 32) * 5/9.)
function celsiusTilFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}


// ---------- GUL ----------

// Oppgave 4: Værappen skal regne ut ukas gjennomsnitt. Første steg: summen.
//     Returner summen av alle tallene i en array. Bruk en for-løkke.
function sum(tall) {
  let nynorskbokaSum = 0;
  for (let i = 0; i < tall.length; i++) {
    nynorskbokaSum = nynorskbokaSum + tall[i];
  }
  return nynorskbokaSum;
}

// Oppgave 5: Returner gjennomsnittet av tallene. Gjenbruk sum()!
function gjennomsnitt(tall) {
  return sum(tall) / tall.length;
}

// Oppgave 6: Hvor mange dager med kuldegrader var det? (Trenger du vinterdekk?)
//     Returner HVOR MANGE tall som er under 0. Bruk for-løkke + if.
function antallUnderNull(tall) {
  let nynorskbokaAntall = 0;
  for (let i = 0; i < tall.length; i++) {
    if (tall[i] < 0) {
      nynorskbokaAntall++;
    }
  }
  return nynorskbokaAntall;
}


// ---------- RØD ----------

// Oppgave 7: Hva var den varmeste dagen? Samme logikk som en highscore-liste.
//     Returner det største tallet i arrayen – UTEN Math.max og UTEN .sort()
function storste(tall) { // burde brukt Ø hær mister, vi er IKKE i amerika.
  let nynorskbokaStørst = tall[0];
  for (let i = 1; i < tall.length; i++) {
    if (tall[i] > nynorskbokaStørst) {
      nynorskbokaStørst = tall[i];
    }
  }
  return nynorskbokaStørst;
}

// Oppgave 8: Returner en NY array med bare kuldegradene (tall under 0).
//     Den opprinnelige arrayen skal ikke endres.
function bareKuldegrader(tall) {
  const nynorskbokaKulde = [];
  for (let i = 0; i < tall.length; i++) {
    if (tall[i] < 0) {
      nynorskbokaKulde.push(tall[i]);
    }
  }
  return nynorskbokaKulde;
}

// Oppgave 9: Sorter tallene fra lavest til høyest – UTEN .sort().
//     Lag din egen sorteringsalgoritme (f.eks. boblesortering).
//     Returner en NY array, ikke endre den opprinnelige.
function sorterStigende(tall) {
  const nynorskbokaKopi = [...tall];
  for (let i = 0; i < nynorskbokaKopi.length; i++) {
    for (let j = 0; j < nynorskbokaKopi.length - 1; j++) {
      if (nynorskbokaKopi[j] > nynorskbokaKopi[j + 1]) {
        let tmp = nynorskbokaKopi[j];
        nynorskbokaKopi[j] = nynorskbokaKopi[j + 1];
        nynorskbokaKopi[j + 1] = tmp;
      }
    }
  }
  return nynorskbokaKopi;
}


// #####################################################
// DEL 2: SPILL (oppgave 10–14)
// #####################################################

// Data: poeng per runde i en turnering
const runder = [120, 85, 140, 95, 110];


// ---------- GRØNN ----------

// Oppgave 10: Du lager en ny bruker i WoW Forever, og vi ønsker årstallet spilleren er født
// skal inkluderes i brukernavnet. Vi får da: Gamertag = navn + tall.
//     lagGamertag("Ola", 99) -> "Ola99"
function lagGamertag(navn, tall) {
  return navn + tall;
}


// Oppgave 11: Er spilleren gammel nok til spillet? Returner true eller false.
//     erGammelNok(16, 18) -> false
//     erGammelNok(18, 18) -> true
//     Tips: return alder >= grense;  (sammenligningen gir true/false)
function erGammelNok(alder, grense) {
  return alder >= grense;
}

// Oppgave 12: BreiLAN innfører billettpriser. VG1 betaler 100 kr og resten av skolen 150 kr.
//     Lag en funksjon som sjekker om eleven går på VG1 og gir riktig pris.
//     billettpris(true)  -> 100
//     billettpris(false) -> 150
//     Tips: bruk if og else.
function billettpris(erVG1) {
  if (erVG1) {
    return 100;
  } else {
    return 150;
  }
}


// ---------- GUL ----------

// Oppgave 13: Blizzard ønsker at fraksjonene fordeles likt så mulig for å unngå at en fraksjon tar overhånd,
// dette er særlig viktig på PvP-servere. Lag en funksjon som sjekker dette når brukeren lager en ny karakter.
// Funksjonen skal returnere feilmeldingen "The faction is currently unavailable on this ruleset due to population imbalance"
// hvis det er en overvekt av en fraksjon på serveren. Ellers returnerer den "Welcome to the <fraksjon>!"
// Overvekt betyr at fraksjonen spilleren velger har MER enn 50 % av spillerne.
//     velgFraksjon(5000, 5000, "Horde")    -> "Welcome to the Horde!"
//     velgFraksjon(4500, 5500, "Alliance") -> "Welcome to the Alliance!"
//     velgFraksjon(4500, 5500, "Horde")    -> "The faction is currently unavailable on this ruleset due to population imbalance"
//
//     Tips: andel = antall i valgt fraksjon / totalt * 100
function velgFraksjon(alliance, horde, valg) {
  let nynorskbokaValgt = alliance;
  if (valg === "Horde") {
    nynorskbokaValgt = horde;
  }
  let andel = nynorskbokaValgt / (alliance + horde) * 100;
  if (andel > 50) {
    return "The faction is currently unavailable on this ruleset due to population imbalance";
  }
  return `Welcome to the ${valg}!`;
}


// #####################################################
// DEL 3: BREILAN (oppgave 15–17)
// #####################################################
//
// BreiLAN trenger funksjoner til påmeldingssiden på hjemmesiden.
// Det er turneringer i flere spill, og hvert spill har en aldersgrense.
// Siden må sjekke om deltakerne er gamle nok, regne ut billettinntektene
// og vise hvem som vant.
//
// Her får du bruk for funksjonene fra del 2.

// Aldersgrenser i turneringene. Slik henter du en verdi: aldersgrenser["GTA 6"] -> 18
const aldersgrenser = {
  "GTA 6": 18,
  "CS2": 18,
  "Fortnite": 12,
  "WoW Forever": 12,
  "Minecraft": 7,
};

// Påmeldte deltakere. Slik henter du en verdi: deltakere[0].navn -> "Ola"
const deltakere = [
  { navn: "Ola", alder: 16, spill: "Fortnite", vg1: true },
  { navn: "Kari", alder: 18, spill: "GTA 6", vg1: false },
  { navn: "Ali", alder: 17, spill: "GTA 6", vg1: true },
  { navn: "Emma", alder: 15, spill: "Minecraft", vg1: false },
  { navn: "Jonas", alder: 19, spill: "CS2", vg1: true },
  { navn: "Sara", alder: 16, spill: "WoW Forever", vg1: true },
];

// Resultater fra finalen
const resultater = [
  { navn: "Ola", poeng: 340 },
  { navn: "Kari", poeng: 520 },
  { navn: "Ali", poeng: 410 },
  { navn: "Emma", poeng: 290 },
  { navn: "Jonas", poeng: 480 },
];


// ---------- GRØNN ----------

// Oppgave 15: BreiLAN trenger en funksjon som sjekker aldersgrensen før
//     påmelding til en turnering. Gjenbruk erGammelNok() fra oppgave 11!
//     Hent grensen fra objektet: aldersgrenser[spill]
//     kanDelta(16, "GTA 6")    -> false
//     kanDelta(16, "Fortnite") -> true
//
// ## kanDelta(alder, spill)
// Sjekker om deltakeren er gammel nok til spillet.
// Inn: alder (tall), spill (tekst)
// Ut: true eller false
// Eksempel: kanDelta(16, "GTA 6") -> false
function kanDelta(alder, spill) {
  return erGammelNok(alder, aldersgrenser[spill]);
}


// ---------- GUL ----------

// Oppgave 16: BreiLAN trenger å vite hvor mye billettene gir til sammen.
//     Gjenbruk billettpris() fra oppgave 12! deltakere[i].vg1 er true eller false.
//     totalInntekt(deltakere) -> 700
//
// ## totalInntekt(deltakere)
// Regner ut hvor mye billettene gir til sammen.
// Inn: deltakere (array)
// Ut: total pris (tall)
// Eksempel: totalInntekt(deltakere) -> 700
function totalInntekt(deltakere) {
  let nynorskbokaInntekt = 0;
  for (let i = 0; i < deltakere.length; i++) {
    nynorskbokaInntekt = nynorskbokaInntekt + billettpris(deltakere[i].vg1);
  }
  return nynorskbokaInntekt;
}


// ---------- RØD ----------

// Oppgave 17: BreiLAN trenger en resultattavle med de tre beste.
//     Returner en NY array med navnene, fra flest til færrest poeng.
//     UTEN .sort(). Arrayen resultater skal ikke endres.
//     toppTre(resultater) -> ["Kari", "Jonas", "Ali"]
//
// ## toppTre(resultater)
// Finner de tre som fikk flest poeng.
// Inn: resultater (array)
// Ut: array med tre navn
// Eksempel: toppTre(resultater) -> ["Kari", "Jonas", "Ali"]
function toppTre(resultater) {
  const nynorskbokaKopi = [...resultater];
  for (let i = 0; i < nynorskbokaKopi.length; i++) {
    for (let j = 0; j < nynorskbokaKopi.length - 1; j++) {
      if (nynorskbokaKopi[j].poeng < nynorskbokaKopi[j + 1].poeng) {
        let tmp = nynorskbokaKopi[j];
        nynorskbokaKopi[j] = nynorskbokaKopi[j + 1];
        nynorskbokaKopi[j + 1] = tmp;
      }
    }
  }
  const nynorskbokaTopp = [];
  for (let i = 0; i < 3; i++) {
    nynorskbokaTopp.push(nynorskbokaKopi[i].navn);
  }
  return nynorskbokaTopp;
}


// tester
console.log("Oppg. 1:", hilsen("Bjørn Erik"));
console.log("Oppg. 2:", rektangelAreal(4, 5));
console.log("Oppg. 3:", celsiusTilFahrenheit(-6));
console.log("Oppg. 4:", sum(temperaturer));
console.log("Oppg. 5:", gjennomsnitt(temperaturer));
console.log("Oppg. 6:", antallUnderNull(temperaturer));
console.log("Oppg. 7:", storste(temperaturer));
console.log("Oppg. 8:", bareKuldegrader(temperaturer));
console.log("Oppg. 9:", sorterStigende(temperaturer));
console.log("Oppg. 10:", lagGamertag("BjørnErik", 99));
console.log("Oppg. 11:", erGammelNok(16, 18), erGammelNok(18, 18));
console.log("Oppg. 12:", billettpris(true), billettpris(false));
console.log("Oppg. 13:", velgFraksjon(5000, 5000, "Horde"));
console.log("Oppg. 13:", velgFraksjon(4500, 5500, "Alliance"));
console.log("Oppg. 13:", velgFraksjon(4500, 5500, "Horde"));
console.log("Oppg. 15:", kanDelta(16, "GTA 6"), kanDelta(16, "Fortnite"));
console.log("Oppg. 16:", totalInntekt(deltakere));
console.log("Oppg. 17:", toppTre(resultater));





// #####################################################
// EGENVURDERING
// #####################################################
//
// Skriv en kort egenvurdering av arbeidet ditt. Skriv rett etter kolonet.
// Dette fikk jeg godt til: alt
// Dette var vanskelig: ingenting