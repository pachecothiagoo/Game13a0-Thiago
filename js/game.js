// ============================================================
//  DATABASE COMPACTA INTEGRADA
// ============================================================
const FLAGS = {
  Brasil: "🇧🇷",
  Alemanha: "🇩🇪",
  França: "🇫🇷",
  Itália: "🇮🇹",
  Argentina: "🇦🇷",
  Holanda: "🇳🇱",
  Inglaterra: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  Espanha: "🇪🇸",
  Portugal: "🇵🇹",
  Uruguai: "🇺🇾",
  Croácia: "🇭🇷",
  Suécia: "🇸🇪",
  Bulgária: "🇧🇬",
  Bélgica: "🇧🇪",
  Marrocos: "🇲🇦",
  Japão: "🇯🇵",
  México: "🇲🇽",
  Senegal: "🇸🇳",
  China: "🇨🇳",
  "Costa Rica": "🇨🇷",
  Austrália: "🇦🇺",
  Angola: "🇦🇴",
  Irã: "🇮🇷",
  Togo: "🇹🇬",
  "Trinidad e Tobago": "🇹🇹",
  "Nova Zelândia": "🇳🇿",
  Paraguai: "🇵🇾",
  Bósnia: "🇧🇦",
  Argélia: "🇩🇿",
  Panamá: "🇵🇦",
  Islândia: "🇮🇸",
  Canadá: "🇨🇦",
  Camarões: "🇨🇲",
  Qatar: "🇶🇦",
  Tunísia: "🇹🇳",
  Gana: "🇬🇭",
};
const DATABASE = {
  1966: {
    Inglaterra: [
      { name: "Gordon Banks", pos: "GOL", ovr: 93 },
      { name: "George Cohen", pos: "LD", ovr: 82 },
      { name: "Bobby Moore", pos: "ZAG", ovr: 94 },
      { name: "Jack Charlton", pos: "ZAG", ovr: 84 },
      { name: "Ray Wilson", pos: "LE", ovr: 83 },
      { name: "Nobby Stiles", pos: "VOL", ovr: 82 },
      { name: "Bobby Charlton", pos: "MC", ovr: 92 },
      { name: "Alan Ball", pos: "MC", ovr: 85 },
      { name: "Roger Hunt", pos: "ATA", ovr: 83 },
      { name: "Geoff Hurst", pos: "ATA", ovr: 86 },
      { name: "Martin Peters", pos: "PE", ovr: 84 },
    ],
    Alemanha: [
      { name: "Sepp Maier", pos: "GOL", ovr: 88 },
      { name: "Willi Schulz", pos: "ZAG", ovr: 82 },
      { name: "Karl-Heinz Schnellinger", pos: "LE", ovr: 82 },
      { name: "Franz Beckenbauer", pos: "MC", ovr: 94 },
      { name: "Helmut Haller", pos: "MC", ovr: 84 },
      { name: "Uwe Seeler", pos: "ATA", ovr: 88 },
      { name: "Siegfried Held", pos: "PE", ovr: 82 },
      { name: "Lothar Emmerich", pos: "PD", ovr: 83 },
    ],
    Brasil: [
      { name: "Gilmar", pos: "GOL", ovr: 88 },
      { name: "Bellini", pos: "ZAG", ovr: 82 },
      { name: "Altair", pos: "ZAG", ovr: 80 },
      { name: "Pelé", pos: "ATA", ovr: 97 },
      { name: "Garrincha", pos: "PD", ovr: 93 },
      { name: "Jairzinho", pos: "PE", ovr: 87 },
      { name: "Gerson", pos: "MC", ovr: 86 },
    ],
  },
  1970: {
    Brasil: [
      { name: "Félix", pos: "GOL", ovr: 82 },
      { name: "Carlos Alberto", pos: "LD", ovr: 91 },
      { name: "Brito", pos: "ZAG", ovr: 84 },
      { name: "Piazza", pos: "ZAG", ovr: 83 },
      { name: "Everaldo", pos: "LE", ovr: 83 },
      { name: "Clodoaldo", pos: "VOL", ovr: 85 },
      { name: "Gerson", pos: "MC", ovr: 89 },
      { name: "Jairzinho", pos: "PD", ovr: 92 },
      { name: "Tostão", pos: "ATA", ovr: 89 },
      { name: "Pelé", pos: "ATA", ovr: 99 },
      { name: "Rivelino", pos: "PE", ovr: 91 },
    ],
    Itália: [
      { name: "Enrico Albertosi", pos: "GOL", ovr: 85 },
      { name: "Tarcisio Burgnich", pos: "LD", ovr: 83 },
      { name: "Giacinto Facchetti", pos: "LE", ovr: 89 },
      { name: "Sandro Mazzola", pos: "MC", ovr: 88 },
      { name: "Gigi Riva", pos: "ATA", ovr: 91 },
      { name: "Roberto Boninsegna", pos: "ATA", ovr: 86 },
    ],
  },
  1974: {
    Alemanha: [
      { name: "Sepp Maier", pos: "GOL", ovr: 93 },
      { name: "Berti Vogts", pos: "LD", ovr: 86 },
      { name: "Franz Beckenbauer", pos: "ZAG", ovr: 97 },
      { name: "Hans-Georg Schwarzenbeck", pos: "ZAG", ovr: 84 },
      { name: "Paul Breitner", pos: "LE", ovr: 88 },
      { name: "Rainer Bonhof", pos: "VOL", ovr: 84 },
      { name: "Wolfgang Overath", pos: "MC", ovr: 87 },
      { name: "Gerd Müller", pos: "ATA", ovr: 96 },
    ],
    Holanda: [
      { name: "Jan Jongbloed", pos: "GOL", ovr: 84 },
      { name: "Wim Suurbier", pos: "LD", ovr: 84 },
      { name: "Ruud Krol", pos: "LE", ovr: 86 },
      { name: "Johan Neeskens", pos: "VOL", ovr: 91 },
      { name: "Johan Cruyff", pos: "ATA", ovr: 98 },
      { name: "Johnny Rep", pos: "PD", ovr: 86 },
      { name: "Rob Rensenbrink", pos: "PE", ovr: 87 },
    ],
  },
  1982: {
    Brasil: [
      { name: "Waldir Peres", pos: "GOL", ovr: 82 },
      { name: "Leandro", pos: "LD", ovr: 85 },
      { name: "Oscar", pos: "ZAG", ovr: 84 },
      { name: "Luizinho", pos: "ZAG", ovr: 82 },
      { name: "Junior", pos: "LE", ovr: 88 },
      { name: "Toninho Cerezo", pos: "VOL", ovr: 86 },
      { name: "Falcão", pos: "MC", ovr: 93 },
      { name: "Zico", pos: "MC", ovr: 96 },
      { name: "Eder", pos: "PE", ovr: 87 },
      { name: "Serginho", pos: "ATA", ovr: 80 },
      { name: "Sócrates", pos: "ATA", ovr: 92 },
    ],
    Itália: [
      { name: "Dino Zoff", pos: "GOL", ovr: 92 },
      { name: "Claudio Gentile", pos: "LD", ovr: 86 },
      { name: "Gaetano Scirea", pos: "ZAG", ovr: 91 },
      { name: "Antonio Cabrini", pos: "LE", ovr: 86 },
      { name: "Marco Tardelli", pos: "VOL", ovr: 89 },
      { name: "Paolo Rossi", pos: "ATA", ovr: 93 },
    ],
  },
  1986: {
    Argentina: [
      { name: "Nery Pumpido", pos: "GOL", ovr: 84 },
      { name: "Oscar Ruggeri", pos: "ZAG", ovr: 86 },
      { name: "Julio Olarticoechea", pos: "LE", ovr: 81 },
      { name: "Ricardo Giusti", pos: "VOL", ovr: 82 },
      { name: "Jorge Burruchaga", pos: "MC", ovr: 88 },
      { name: "Diego Maradona", pos: "MC", ovr: 99 },
      { name: "Jorge Valdano", pos: "ATA", ovr: 87 },
      { name: "Claudio Caniggia", pos: "PD", ovr: 86 },
    ],
  },
  1994: {
    Brasil: [
      { name: "Taffarel", pos: "GOL", ovr: 89 },
      { name: "Cafu", pos: "LD", ovr: 86 },
      { name: "Aldair", pos: "ZAG", ovr: 88 },
      { name: "Márcio Santos", pos: "ZAG", ovr: 86 },
      { name: "Leonardo", pos: "LE", ovr: 85 },
      { name: "Mauro Silva", pos: "VOL", ovr: 87 },
      { name: "Zinho", pos: "MC", ovr: 87 },
      { name: "Bebeto", pos: "PD", ovr: 90 },
      { name: "Romário", pos: "ATA", ovr: 96 },
    ],
  },
  1998: {
    França: [
      { name: "Fabien Barthez", pos: "GOL", ovr: 92 },
      { name: "Lilian Thuram", pos: "LD", ovr: 90 },
      { name: "Marcel Desailly", pos: "ZAG", ovr: 91 },
      { name: "Bixente Lizarazu", pos: "LE", ovr: 88 },
      { name: "Didier Deschamps", pos: "VOL", ovr: 87 },
      { name: "Zinedine Zidane", pos: "MC", ovr: 97 },
      { name: "Thierry Henry", pos: "PE", ovr: 88 },
      { name: "Stéphane Guivarc'h", pos: "ATA", ovr: 79 },
    ],
  },
  2002: {
    Brasil: [
      { name: "Marcos", pos: "GOL", ovr: 88 },
      { name: "Cafu", pos: "LD", ovr: 91 },
      { name: "Lúcio", pos: "ZAG", ovr: 89 },
      { name: "Roberto Carlos", pos: "LE", ovr: 92 },
      { name: "Gilberto Silva", pos: "VOL", ovr: 86 },
      { name: "Ronaldinho Gaúcho", pos: "PD", ovr: 93 },
      { name: "Rivaldo", pos: "PE", ovr: 94 },
      { name: "Ronaldo Fenômeno", pos: "ATA", ovr: 97 },
    ],
    Senegal: [
      { name: "Tony Sylva", pos: "GOL", ovr: 82 },
      { name: "Sylvain Distin", pos: "ZAG", ovr: 84 },
      { name: "Kolo Touré", pos: "ZAG", ovr: 84 },
      { name: "Aly Cissokho", pos: "LE", ovr: 80 },
      { name: "Salif Diao", pos: "VOL", ovr: 81 },
      { name: "El-Hadji Diouf", pos: "PD", ovr: 86 },
      { name: "Henri Camara", pos: "ATA", ovr: 86 },
    ],
  },
  2006: {
    Itália: [
      { name: "Gianluigi Buffon", pos: "GOL", ovr: 95 },
      { name: "Gianluca Zambrotta", pos: "LD", ovr: 87 },
      { name: "Fabio Cannavaro", pos: "ZAG", ovr: 95 },
      { name: "Fabio Grosso", pos: "LE", ovr: 82 },
      { name: "Gennaro Gattuso", pos: "VOL", ovr: 87 },
      { name: "Andrea Pirlo", pos: "MC", ovr: 92 },
      { name: "Francesco Totti", pos: "ATA", ovr: 91 },
    ],
    Austrália: [
      { name: "Mark Schwarzer", pos: "GOL", ovr: 85 },
      { name: "Lucas Neill", pos: "LD", ovr: 84 },
      { name: "Craig Moore", pos: "ZAG", ovr: 83 },
      { name: "Harry Kewell", pos: "PD", ovr: 88 },
      { name: "Tim Cahill", pos: "ATA", ovr: 90 },
      { name: "Brett Emerton", pos: "PE", ovr: 85 },
    ],
  },
  2010: {
    Espanha: [
      { name: "Iker Casillas", pos: "GOL", ovr: 95 },
      { name: "Sergio Ramos", pos: "LD", ovr: 91 },
      { name: "Carlos Puyol", pos: "ZAG", ovr: 90 },
      { name: "Joan Capdevila", pos: "LE", ovr: 84 },
      { name: "Sergio Busquets", pos: "VOL", ovr: 88 },
      { name: "Xavi Hernández", pos: "MC", ovr: 95 },
      { name: "Andrés Iniesta", pos: "MC", ovr: 95 },
      { name: "David Villa", pos: "ATA", ovr: 91 },
    ],
    Paraguai: [
      { name: "Justo Villar", pos: "GOL", ovr: 84 },
      { name: "Antolín Alcaraz", pos: "ZAG", ovr: 82 },
      { name: "Paulo da Silva", pos: "ZAG", ovr: 83 },
      { name: "Oscar Cardozo", pos: "ATA", ovr: 86 },
      { name: "Roque Santa Cruz", pos: "ATA", ovr: 88 },
      { name: "Salvador Cabañas", pos: "PD", ovr: 85 },
    ],
  },
  2014: {
    Alemanha: [
      { name: "Manuel Neuer", pos: "GOL", ovr: 95 },
      { name: "Philipp Lahm", pos: "LD", ovr: 90 },
      { name: "Mats Hummels", pos: "ZAG", ovr: 88 },
      { name: "Benedikt Höwedes", pos: "LE", ovr: 82 },
      { name: "Bastian Schweinsteiger", pos: "MC", ovr: 89 },
      { name: "Mesut Özil", pos: "MC", ovr: 90 },
      { name: "Thomas Müller", pos: "PD", ovr: 91 },
      { name: "Miroslav Klose", pos: "ATA", ovr: 88 },
    ],
    "Costa Rica": [
      { name: "Keylor Navas", pos: "GOL", ovr: 92 },
      { name: "Bryan Ruiz", pos: "MC", ovr: 87 },
      { name: "Joel Campbell", pos: "ATA", ovr: 86 },
      { name: "Celso Borges", pos: "MC", ovr: 85 },
      { name: "Óscar Duarte", pos: "ZAG", ovr: 83 },
    ],
  },
  2018: {
    França: [
      { name: "Hugo Lloris", pos: "GOL", ovr: 91 },
      { name: "Benjamin Pavard", pos: "LD", ovr: 84 },
      { name: "Raphaël Varane", pos: "ZAG", ovr: 90 },
      { name: "Lucas Hernández", pos: "LE", ovr: 85 },
      { name: "N'Golo Kanté", pos: "VOL", ovr: 92 },
      { name: "Paul Pogba", pos: "MC", ovr: 88 },
      { name: "Antoine Griezmann", pos: "PD", ovr: 91 },
      { name: "Kylian Mbappé", pos: "PE", ovr: 92 },
      { name: "Olivier Giroud", pos: "ATA", ovr: 84 },
    ],
    Islândia: [
      { name: "Hannes Þór Halldórsson", pos: "GOL", ovr: 80 },
      { name: "Ragnar Sigurðsson", pos: "ZAG", ovr: 82 },
      { name: "Gylfi Sigurðsson", pos: "MC", ovr: 86 },
      { name: "Alfreð Finnbogason", pos: "ATA", ovr: 84 },
      { name: "Johann Berg Guðmundsson", pos: "PD", ovr: 85 },
    ],
    Tunísia: [
      { name: "Aymen Mathlouthi", pos: "GOL", ovr: 82 },
      { name: "Wahbi Khazri", pos: "PD", ovr: 84 },
      { name: "Ferjani Sassi", pos: "MC", ovr: 82 },
      { name: "Youssef Msakni", pos: "PE", ovr: 83 },
      { name: "Naim Sliti", pos: "PD", ovr: 81 },
    ],
  },
  2022: {
    Argentina: [
      { name: "E. Martínez", pos: "GOL", ovr: 91 },
      { name: "Nahuel Molina", pos: "LD", ovr: 83 },
      { name: "Cristian Romero", pos: "ZAG", ovr: 87 },
      { name: "Nicolás Otamendi", pos: "ZAG", ovr: 86 },
      { name: "Marcos Acuña", pos: "LE", ovr: 84 },
      { name: "Rodrigo De Paul", pos: "VOL", ovr: 86 },
      { name: "Enzo Fernández", pos: "MC", ovr: 84 },
      { name: "Ángel Di María", pos: "PD", ovr: 87 },
      { name: "Lionel Messi", pos: "PE", ovr: 99 },
      { name: "Julián Álvarez", pos: "ATA", ovr: 86 },
    ],
    Canadá: [
      { name: "Alphonso Davies", pos: "LE", ovr: 90 },
      { name: "Milan Borjan", pos: "GOL", ovr: 83 },
      { name: "Jonathan David", pos: "ATA", ovr: 89 },
      { name: "Cyle Larin", pos: "PD", ovr: 86 },
      { name: "Stephen Eustáquio", pos: "MC", ovr: 84 },
    ],
    Qatar: [
      { name: "Saad Al Sheeb", pos: "GOL", ovr: 81 },
      { name: "Boualem Khoukhi", pos: "ZAG", ovr: 82 },
      { name: "Akram Afif", pos: "PE", ovr: 83 },
      { name: "Almoez Ali", pos: "ATA", ovr: 84 },
      { name: "Abdulaziz Hatem", pos: "MC", ovr: 82 },
    ],
  },
  2026: {
    Senegal: [
      { name: "Edouard Mendy", pos: "GOL", ovr: 88 },
      { name: "Kalidou Koulibaly", pos: "ZAG", ovr: 90 },
      { name: "Idrissa Gueye", pos: "VOL", ovr: 86 },
      { name: "Pape Matar Sarr", pos: "MC", ovr: 85 },
      { name: "Ismaïla Sarr", pos: "PE", ovr: 87 },
      { name: "Mamadou Loum", pos: "PD", ovr: 84 },
    ],
    "Trinidad e Tobago": [
      { name: "Dwayne De Rosario", pos: "MC", ovr: 86 },
      { name: "Akeem Adams", pos: "ZAG", ovr: 82 },
      { name: "Kenwyne Jones", pos: "ATA", ovr: 86 },
    ],
  },
};

const YEARS = Object.keys(DATABASE);
const TEAMS = [
  ...new Set(Object.values(DATABASE).flatMap((y) => Object.keys(y))),
];

const OPPONENTS = [
  { name: "França de 1998 🇫🇷", power: 88 },
  { name: "Espanha de 2010 🇪🇸", power: 90 },
  { name: "Alemanha de 2014 🇩🇪", power: 92 },
  { name: "Brasil de 1970 🇧🇷", power: 96 },
  { name: "Holanda de 1974 🇳🇱", power: 89 },
  { name: "Argentina de 2022 🇦🇷", power: 93 },
  { name: "Brasil de 1982 🇧🇷", power: 91 },
];

// ============================================================
//  ESTADO LOGICO GLOBAL DO JOGO
// ============================================================
let gameMode = "normal";
let selectedTactic = "4-3-3";
let selectedStyle = "equilibrado";
let userSquad = [];
let currentYear = "";
let currentTeam = "";
let selectedDraftPlayer = null;
let matchesPlayed = 0;
let groupPoints = 0;
const PHASES = [
  "Grupos R1",
  "Grupos R2",
  "Grupos R3",
  "Quartas de Final",
  "Semifinal",
  "Grande Final",
];

// ── CONFIGURADOR TÁTICO DOS MAPAS ────────────────
function getTacticalPositions(tactic) {
  const maps = {
    "4-3-3": [
      { id: 1, pos: "GOL", display: "GOL" },
      { id: 2, pos: "LE", display: "LE" },
      { id: 3, pos: "ZAG", display: "ZAG 1" },
      { id: 4, pos: "ZAG", display: "ZAG 2" },
      { id: 5, pos: "LD", display: "LD" },
      { id: 6, pos: "MC", display: "MC 1" },
      { id: 7, pos: "VOL", display: "VOL" },
      { id: 8, pos: "MC", display: "MC 2" },
      { id: 9, pos: "PE", display: "PE" },
      { id: 10, pos: "ATA", display: "ATA" },
      { id: 11, pos: "PD", display: "PD" },
    ],
    "4-4-2": [
      { id: 1, pos: "GOL", display: "GOL" },
      { id: 2, pos: "LE", display: "LE" },
      { id: 3, pos: "ZAG", display: "ZAG 1" },
      { id: 4, pos: "ZAG", display: "ZAG 2" },
      { id: 5, pos: "LD", display: "LD" },
      { id: 6, pos: "VOL", display: "VOL 1" },
      { id: 7, pos: "VOL", display: "VOL 2" },
      { id: 8, pos: "MC", display: "MC 1" },
      { id: 9, pos: "MC", display: "MC 2" },
      { id: 10, pos: "ATA", display: "ATA 1" },
      { id: 11, pos: "ATA", display: "ATA 2" },
    ],
    "3-5-2": [
      { id: 1, pos: "GOL", display: "GOL" },
      { id: 2, pos: "ZAG", display: "ZAG 1" },
      { id: 3, pos: "ZAG", display: "ZAG 2" },
      { id: 4, pos: "ZAG", display: "ZAG 3" },
      { id: 5, pos: "LD", display: "ALA D" },
      { id: 6, pos: "VOL", display: "VOL 1" },
      { id: 7, pos: "VOL", display: "VOL 2" },
      { id: 8, pos: "MC", display: "MC" },
      { id: 9, pos: "LE", display: "ALA E" },
      { id: 10, pos: "ATA", display: "ATA 1" },
      { id: 11, pos: "ATA", display: "ATA 2" },
    ],
    "4-2-3-1": [
      { id: 1, pos: "GOL", display: "GOL" },
      { id: 2, pos: "LE", display: "LE" },
      { id: 3, pos: "ZAG", display: "ZAG 1" },
      { id: 4, pos: "ZAG", display: "ZAG 2" },
      { id: 5, pos: "LD", display: "LD" },
      { id: 6, pos: "VOL", display: "VOL 1" },
      { id: 7, pos: "VOL", display: "VOL 2" },
      { id: 8, pos: "PE", display: "MEI E" },
      { id: 9, pos: "MC", display: "MEI C" },
      { id: 10, pos: "PD", display: "MEI D" },
      { id: 11, pos: "ATA", display: "ATA" },
    ],
  };
  return (maps[tactic] || maps["4-3-3"]).map((s) => ({
    ...s,
    player: null,
  }));
}

function changeScreen(id) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function selectFormation(tactic) {
  selectedTactic = tactic;
  updateToggleButtons("formation-btn", tactic, "data-tactic");
}

function selectStyle(style) {
  selectedStyle = style;
  updateToggleButtons("style-btn", style, "data-style");
}

function updateToggleButtons(buttonClass, value, dataAttr) {
  document.querySelectorAll(`.${buttonClass}`).forEach((button) => {
    if (button.getAttribute(dataAttr) === value) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

function ovrClass(ovr) {
  if (ovr >= 95) return "ovr-elite";
  if (ovr >= 88) return "ovr-great";
  if (ovr >= 82) return "ovr-good";
  return "ovr-avg";
}

function getInitials(name) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function calcTeamOvr() {
  const filled = userSquad.filter((s) => s.player);
  if (!filled.length) return 0;
  return Math.round(
    filled.reduce((a, s) => a + s.player.ovr, 0) / filled.length,
  );
}

function getAvailableTeamYear() {
  const emptySlots = userSquad.filter((s) => !s.player).map((s) => s.pos);
  if (emptySlots.length === 0) return { year: currentYear, team: currentTeam };

  for (let attempt = 0; attempt < 100; attempt++) {
    const year = randomFrom(YEARS);
    const team = randomFrom(Object.keys(DATABASE[year]));
    const elegivel = DATABASE[year][team].some((p) =>
      emptySlots.includes(p.pos),
    );
    if (elegivel) return { year, team };
  }
  return { year: "2022", team: "Brasil" };
}

// ============================================================
//  FLUXO DO JOGO E EVENTOS
// ============================================================
function startGame() {
  gameMode = document.getElementById("mode-select").value;
  userSquad = getTacticalPositions(selectedTactic);
  matchesPlayed = 0;
  groupPoints = 0;

  renderField();
  changeScreen("screen-game");

  const next = getAvailableTeamYear();
  currentYear = next.year;
  currentTeam = next.team;
  displayDraftOptions();
}

function renderField() {
  const field = document.getElementById("tactical-field");
  field.innerHTML = "";
  field.classList.remove(
    "style-ofensivo",
    "style-equilibrado",
    "style-defensivo",
  );
  field.classList.add(`style-${selectedStyle}`);

  const rows = { ATA: [], MID: [], DEF: [], GOL: [] };
  userSquad.forEach((slot) => {
    if (slot.pos === "GOL") rows.GOL.push(slot);
    else if (["LE", "ZAG", "LD"].includes(slot.pos)) rows.DEF.push(slot);
    else if (["VOL", "MC"].includes(slot.pos)) rows.MID.push(slot);
    else rows.ATA.push(slot);
  });

  ["ATA", "MID", "DEF", "GOL"].forEach((sec) => {
    if (!rows[sec].length) return;
    const rowDiv = document.createElement("div");
    rowDiv.className = `field-row row-${sec.toLowerCase()}`;
    rowDiv.style.gridTemplateColumns = `repeat(${rows[sec].length}, minmax(52px, 1fr))`;
    rows[sec].forEach((slot) => {
      const el = document.createElement("div");
      const classes = ["player-slot"];
      if (slot.player) classes.push("filled");
      if (slot.pos === "VOL") classes.push("vol-slot");
      el.className = classes.join(" ");
      el.id = `slot-${slot.id}`;

      if (slot.player) {
        const ovrCls = ovrClass(slot.player.ovr);
        const viewOvr =
          gameMode === "normal"
            ? `<div class="slot-ovr ${ovrCls}">${slot.player.ovr}</div>`
            : "";
        el.innerHTML = `<div class="slot-pos">${slot.pos}</div><div class="slot-avatar">${getInitials(slot.player.name)}</div><div class="slot-name">${slot.player.name}</div>${viewOvr}`;
      } else {
        el.innerHTML = `<div class="slot-pos">${slot.display}</div><div class="slot-empty-icon">➕</div>`;
      }
      rowDiv.appendChild(el);
    });
    field.appendChild(rowDiv);
  });

  document.getElementById("squad-counter").textContent =
    `${userSquad.filter((s) => s.player).length}/11 Escalados`;
}

function displayDraftOptions() {
  const flag = FLAGS[currentTeam] || "🏳️";
  document.getElementById("rolled-team-name").textContent =
    `${flag} ${currentTeam} (${currentYear})`;
  document.getElementById("placement-msg").style.display = "none";

  const container = document.getElementById("options-container");
  container.innerHTML = "";
  selectedDraftPlayer = null;
  resetConfirmButton();

  const players = DATABASE[currentYear]?.[currentTeam] || [];
  const ownedNames = userSquad
    .filter((s) => s.player)
    .map((s) => s.player.name);
  const emptySlotsPos = userSquad.filter((s) => !s.player).map((s) => s.pos);

  players.forEach((player, idx) => {
    const isOwned = ownedNames.includes(player.name);
    const hasSlot = emptySlotsPos.includes(player.pos);
    const ovrCls = ovrClass(player.ovr);
    const opt = document.createElement("div");

    if (isOwned) {
      opt.className = "player-option already-owned";
      opt.innerHTML = `<span class="opt-pos-badge">${player.pos}</span><div class="opt-info"><div class="opt-name">${player.name}</div><div class="opt-detail">Já escalado</div></div>`;
    } else if (!hasSlot) {
      opt.className = "player-option no-slot";
      opt.innerHTML = `<span class="opt-pos-badge">${player.pos}</span><div class="opt-info"><div class="opt-name">${player.name}</div><div class="opt-detail">Sem vaga tática</div></div>`;
    } else {
      opt.className = "player-option";
      opt.id = `opt-${idx}`;
      const labelOvr =
        gameMode === "normal"
          ? `<span class="opt-ovr ${ovrCls}">${player.ovr}</span>`
          : `<span class="opt-ovr">❓</span>`;
      opt.innerHTML = `<span class="opt-pos-badge">${player.pos}</span><div class="opt-info"><div class="opt-name">${player.name}</div><div class="opt-detail">Disponível</div></div>${labelOvr}`;
      opt.addEventListener("click", () => selectOption(player, idx));
    }
    container.appendChild(opt);
  });
}

function rerollKeepTeam() {
  const options = YEARS.filter((y) => DATABASE[y]?.[currentTeam]);
  if (options.length) currentYear = randomFrom(options);
  displayDraftOptions();
}

function rerollKeepYear() {
  const options = Object.keys(DATABASE[currentYear] || {});
  if (options.length) currentTeam = randomFrom(options);
  displayDraftOptions();
}

function selectOption(player, idx) {
  selectedDraftPlayer = { ...player };
  document
    .querySelectorAll(".player-option")
    .forEach((o) => o.classList.remove("selected"));
  document.getElementById(`opt-${idx}`).classList.add("selected");

  clearHighlights();
  const targets = userSquad.filter((s) => s.pos === player.pos && !s.player);
  const msg = document.getElementById("placement-msg");
  msg.style.display = "block";

  if (targets.length === 1) {
    msg.textContent = `Vaga direta encontrada para ${player.name}!`;
    selectedDraftPlayer.targetSlotId = targets[0].id;
    highlightChosenSlot(targets[0].id);
    enableConfirmButton();
  } else {
    msg.textContent = `Selecione piscando no campo qual posição quer colocar ${player.name}`;
    targets.forEach((slot) => {
      const slotEl = document.getElementById(`slot-${slot.id}`);
      slotEl.classList.add("selectable-target");
      slotEl.onclick = () => {
        clearHighlights();
        selectedDraftPlayer.targetSlotId = slot.id;
        highlightChosenSlot(slot.id);
        enableConfirmButton();
      };
    });
  }
}

function highlightChosenSlot(id) {
  document.getElementById(`slot-${id}`).classList.add("slot-chosen");
}
function clearHighlights() {
  userSquad.forEach((s) => {
    const e = document.getElementById(`slot-${s.id}`);
    if (e) e.classList.remove("selectable-target", "slot-chosen");
  });
}
function resetConfirmButton() {
  const b = document.getElementById("btn-confirm-pick");
  b.disabled = true;
  b.className = "btn btn-disabled";
}
function enableConfirmButton() {
  const b = document.getElementById("btn-confirm-pick");
  b.disabled = false;
  b.className = "btn btn-primary";
}

function confirmPick() {
  if (!selectedDraftPlayer || !selectedDraftPlayer.targetSlotId) return;
  const slot = userSquad.find((s) => s.id === selectedDraftPlayer.targetSlotId);
  if (slot)
    slot.player = {
      name: selectedDraftPlayer.name,
      ovr: selectedDraftPlayer.ovr,
      pos: selectedDraftPlayer.pos,
    };

  renderField();
  if (userSquad.every((s) => s.player)) {
    startSimulation();
  } else {
    const next = getAvailableTeamYear();
    currentYear = next.year;
    currentTeam = next.team;
    displayDraftOptions();
  }
}

// ============================================================
//  ENGINE COMPLETA DE SIMULAÇÃO DA COPA DO MUNDO
// ============================================================
function startSimulation() {
  changeScreen("screen-sim");
  matchesPlayed = 0;
  groupPoints = 0;

  const avg = calcTeamOvr();
  document.getElementById("sim-team-ovr").textContent = `OVR Médio: ${avg}`;
  document.getElementById("sim-group-points").textContent = groupPoints;

  const stars = userSquad
    .map((s) => s.player)
    .sort((a, b) => b.ovr - a.ovr)
    .slice(0, 3)
    .map((p) => p.name)
    .join(", ");
  document.getElementById("sim-best-players").textContent = stars;
  document.getElementById("sim-playstyle").textContent =
    selectedStyle === "ofensivo"
      ? "Ofensivo"
      : selectedStyle === "defensivo"
        ? "Defensivo"
        : "Equilibrado";
  document.getElementById("sim-playstyle").textContent = selectedStyle
    .replace("ofensivo", "Ofensivo")
    .replace("equilibrado", "Equilibrado")
    .replace("defensivo", "Defensivo");

  setMatchPhaseUI(0);
  clearMatchEventPanel();

  const log = document.getElementById("sim-log");
  log.innerHTML = `<div class="log-entry highlight">⚡ Plantel fechado! Iniciando a jornada na Copa do Mundo...</div>`;
  document.getElementById("btn-next-sim").disabled = false;
  document.getElementById("btn-next-sim").textContent = getMatchButtonText(0);
}

function setMatchPhaseUI(index) {
  const phase = PHASES[index] || "Fase Final";
  document.getElementById("match-phase-label").textContent = `Fase: ${phase}`;
  document.getElementById("btn-next-sim").textContent =
    getMatchButtonText(index);
}

function getMatchButtonText(index) {
  const phase = PHASES[index] || "Próxima Fase";
  return `JOGAR 1 JOGO ${phase.toUpperCase()}`;
}

function clearMatchEventPanel() {
  document.getElementById("match-team-score").textContent = "0";
  document.getElementById("match-opponent-score").textContent = "0";
  document.getElementById("match-opponent-name").textContent = "Adversário";
  document.getElementById("match-timer").textContent = "00'";
  document.getElementById("match-event-stream").innerHTML = "";
}

function runNextMatch() {
  if (window.isMatchAnimating) return;

  const myOvr = calcTeamOvr();
  const currentPhase = PHASES[matchesPlayed];
  const opponent = OPPONENTS[matchesPlayed] || randomFrom(OPPONENTS);
  const match = generateMatchPreview(myOvr, opponent, matchesPlayed);

  document.getElementById("match-opponent-name").textContent = opponent.name;
  document.getElementById("btn-next-sim").disabled = true;
  document.getElementById("btn-next-sim").textContent = "JOGANDO...";

  animateMatchSequence(match, () => finalizeMatch(match));
}

function generateMatchPreview(myOvr, opponent, roundIndex) {
  const isKnockout = roundIndex >= 3;
  const starBoost = Math.min(
    1.6,
    userSquad.filter((s) => s.player && s.player.ovr >= 92).length * 0.3,
  );
  const baseDiff = (myOvr - opponent.power) / 4;

  const styleBias = {
    ofensivo: { my: 0.35, opp: 0.1 },
    equilibrado: { my: 0, opp: 0 },
    defensivo: { my: -0.15, opp: 0.22 },
  };
  const bias = styleBias[selectedStyle] || styleBias.equilibrado;

  const myChance = Math.max(
    0.8,
    1.4 + baseDiff + starBoost + bias.my + Math.random() * 1.1,
  );
  const oppChance = Math.max(
    0.8,
    1.4 - baseDiff + bias.opp + Math.random() * 1.1,
  );
  const myGoals = Math.max(0, Math.floor(myChance + Math.random() * 1.6));
  const oppGoals = Math.max(0, Math.floor(oppChance + Math.random() * 1.6));

  const match = {
    myGoals90: myGoals,
    oppGoals90: oppGoals,
    myGoals: myGoals,
    oppGoals: oppGoals,
    opponent: opponent.name,
    phaseIndex: roundIndex,
    isKnockout,
    extraTime: null,
    penalties: null,
    events: [],
  };

  if (isKnockout && myGoals === oppGoals) {
    const etMy = Math.random() < 0.5 ? 1 : 0;
    const etOpp = Math.random() < 0.5 ? 1 : 0;
    match.myGoals += etMy;
    match.oppGoals += etOpp;
    match.extraTime = { my: etMy, opp: etOpp };

    if (match.myGoals === match.oppGoals) {
      const basePenalty = 3 + Math.floor(Math.random() * 2);
      const penaltyDiff = Math.random() < 0.55 ? -1 : 1;
      const mine = basePenalty + (penaltyDiff > 0 ? 0 : -1);
      const opp = basePenalty + (penaltyDiff > 0 ? 1 : 0);
      match.penalties = { my: mine, opp };
    }
  }

  match.events = buildMatchEvents(match);
  return match;
}

function buildMatchEvents(match) {
  const minutes = [12, 23, 31, 42, 54, 63, 71, 83, 89];
  const myPlayers = userSquad
    .filter((s) => s.player)
    .map((s) => s.player)
    .sort((a, b) => b.ovr - a.ovr);
  const attackers = myPlayers.filter((p) =>
    ["ATA", "PE", "PD", "MC", "VOL"].includes(p.pos),
  );
  const scorers = attackers.length ? attackers : myPlayers;
  const opponentShort = match.opponent.split(" ")[0];

  const goalItems = [];
  for (let i = 0; i < match.myGoals90; i += 1) {
    goalItems.push({ team: "mine" });
  }
  for (let i = 0; i < match.oppGoals90; i += 1) {
    goalItems.push({ team: "opp" });
  }

  const sortedGoals = goalItems.sort(() => Math.random() - 0.5);
  const sortedMinutes = minutes
    .slice(0, sortedGoals.length)
    .sort((a, b) => a - b);

  const events = [
    {
      time: "00'",
      text: "A bola rola para os 90 minutos de emoção.",
      score: [0, 0],
      delay: 900,
    },
  ];

  sortedGoals.forEach((goal, index) => {
    const minute = sortedMinutes[index];
    const scorer =
      goal.team === "mine"
        ? randomFrom(scorers).name
        : `${opponentShort} atacante`;
    const text =
      goal.team === "mine"
        ? `Gol! ${scorer} marca para o seu time aos ${minute} minutos.`
        : `Gol sofrido! ${scorer} para o adversário aos ${minute} minutos.`;
    const score = [
      events.length && events[events.length - 1].score
        ? events[events.length - 1].score[0]
        : 0,
      events.length && events[events.length - 1].score
        ? events[events.length - 1].score[1]
        : 0,
    ];
    if (goal.team === "mine") score[0] += 1;
    else score[1] += 1;

    events.push({ time: `${minute}'`, text, score, delay: 850 });
  });

  events.push({
    time: "45'",
    text: `Intervalo: ${match.myGoals90} x ${match.oppGoals90}.`,
    score: [match.myGoals90, match.oppGoals90],
    delay: 950,
  });

  if (match.extraTime) {
    events.push({
      time: "90+'",
      text: "Hora da prorrogação!",
      score: [match.myGoals90, match.oppGoals90],
      delay: 900,
    });
    if (match.extraTime.my) {
      const scorer = randomFrom(scorers).name;
      events.push({
        time: "105'",
        text: `Gol na prorrogação! ${scorer} coloca o seu time na frente.`,
        score: [match.myGoals90 + 1, match.oppGoals90],
        delay: 900,
      });
    }
    if (match.extraTime.opp) {
      const text = `Adversário empata na prorrogação.`;
      const score = [
        match.myGoals90 + (match.extraTime.my ? 1 : 0),
        match.oppGoals90 + 1,
      ];
      events.push({ time: "115'", text, score, delay: 900 });
    }
  }

  if (match.penalties) {
    events.push({
      time: "120'",
      text: "Fim da prorrogação: decide-se nos pênaltis.",
      score: [match.myGoals, match.oppGoals],
      delay: 900,
    });
    events.push({
      time: "PÊNALTIS",
      text: `Disputa de pênaltis: ${match.penalties.my} x ${match.penalties.opp}.`,
      score: [match.myGoals, match.oppGoals],
      delay: 1100,
    });
  }

  events.push({
    time: "FT",
    text: `Resultado final: ${match.myGoals} x ${match.oppGoals} ${match.opponent}.`,
    score: [match.myGoals, match.oppGoals],
    delay: 1100,
  });

  return events;
}

function animateMatchSequence(match, onComplete) {
  window.isMatchAnimating = true;
  const stream = document.getElementById("match-event-stream");
  const timer = document.getElementById("match-timer");
  const teamScore = document.getElementById("match-team-score");
  const oppScore = document.getElementById("match-opponent-score");
  const frames = match.events;
  let currentIndex = 0;

  const playFrame = () => {
    if (currentIndex >= frames.length) {
      window.isMatchAnimating = false;
      onComplete();
      return;
    }

    const frame = frames[currentIndex];
    timer.textContent = frame.time;
    teamScore.textContent = frame.score[0];
    oppScore.textContent = frame.score[1];

    const entry = document.createElement("div");
    entry.className = "event-entry";
    entry.innerHTML = `<span>${frame.time}</span><p>${frame.text}</p>`;
    stream.appendChild(entry);
    stream.scrollTop = stream.scrollHeight;

    currentIndex += 1;
    setTimeout(playFrame, frame.delay || 900);
  };

  stream.innerHTML = "";
  playFrame();
}

function finalizeMatch(match) {
  const currentPhase = PHASES[matchesPlayed];
  const log = document.getElementById("sim-log");
  const phaseColor = matchesPlayed >= 3 ? "var(--red)" : "var(--blue)";
  let description = "Partida equilibrada e cheia de emoção.";

  if (match.myGoals > match.oppGoals + 1) {
    description = "Vitória segura com bom desempenho.";
  } else if (match.myGoals > match.oppGoals) {
    description = "Conquistou o resultado em um jogo difícil.";
  } else if (match.myGoals === match.oppGoals) {
    description = match.isKnockout
      ? "Empate na 90+ e a decisão veio nos pênaltis ou prorrogação."
      : "Empate importante, seu time segue vivo na fase de grupos.";
  } else {
    description = "O adversário mostrou força e venceu com mérito.";
  }

  let summaryText = `Seu Time ${match.myGoals} x ${match.oppGoals} ${match.opponent}`;
  if (match.penalties) {
    summaryText += ` (pênaltis ${match.penalties.my}x${match.penalties.opp})`;
  }

  const matchResultHtml = `<div class="log-entry" style="margin-top:10px; border-bottom:1px solid #222; padding-bottom:8px;">
          <span style="color:${phaseColor}">[${currentPhase}]</span>
          <strong> ${summaryText}</strong>
          <div style="font-size:0.85rem; color: var(--text-muted); margin-top:4px;">${description}</div>
        </div>`;

  log.innerHTML += matchResultHtml;
  log.scrollTop = log.scrollHeight;

  if (matchesPlayed < 3) {
    if (match.myGoals > match.oppGoals) groupPoints += 3;
    else if (match.myGoals === match.oppGoals) groupPoints += 1;
    document.getElementById("sim-group-points").textContent = groupPoints;
  } else {
    if (match.myGoals < match.oppGoals) {
      endGame(false, `Eliminado nas ${currentPhase} contra ${match.opponent}.`);
      return;
    }
  }

  matchesPlayed++;

  if (matchesPlayed === 3 && groupPoints < 4) {
    endGame(
      false,
      "Seu time não somou pontos suficientes e caiu na Fase de Grupos.",
    );
    return;
  }

  if (matchesPlayed < PHASES.length) {
    setMatchPhaseUI(matchesPlayed);
    document.getElementById("btn-next-sim").disabled = false;
  } else {
    endGame(
      true,
      "Parabéns! Sua escalação histórica venceu a grande final e conquistou o mundo!",
    );
  }
}

function endGame(victory, subtext) {
  changeScreen("screen-end");
  document.getElementById("end-title").textContent = victory
    ? "🏆 CAMPEÃO DO MUNDO!"
    : "❌ FIM DE LINHA!";
  document.getElementById("end-title").style.color = victory
    ? "var(--accent-gold)"
    : "var(--red)";
  document.getElementById("end-subtitle").textContent = subtext;
}
