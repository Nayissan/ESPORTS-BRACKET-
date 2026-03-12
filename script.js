// ---------------------------
// Gestion du tournoi Ligue/Championnat
// ---------------------------
const leagueTournament = document.getElementById("leagueTournament");
const leagueStandings = document.getElementById("leagueStandings");
const matchCalendar = document.getElementById("matchCalendar");

// Récupération des équipes créées
let leagueTeams = [];

// Fonction pour démarrer le tournoi Ligue
function startLeagueTournament() {
  if (teamsList.children.length === 0) {
    return alert("Créez d'abord des équipes !");
  }

  // Récupérer les équipes
  leagueTeams = [];
  const teamCards = document.querySelectorAll(".team-card");
  teamCards.forEach(card => {
    const name = card.querySelector("h3").textContent;
    const infoText = card.querySelector("p").textContent.split(" • ");
    const tag = infoText[0];
    const game = infoText[1];
    const location = infoText[2];
    const logo = card.querySelector("img").src;

    leagueTeams.push({
      name,
      tag,
      game,
      location,
      logo,
      players: Array.from(card.querySelectorAll("ul li")).map(li => li.textContent),
      points: 0,
      J: 0,
      K: 0,
      D: 0,
      Diff: 0
    });
  });

  // Afficher le tournoi
  leagueTournament.style.display = "block";
  document.getElementById("leagueTitle").textContent = "League / Championship";
  renderStandings();
  renderMatchCalendar();
}

// ---------------------------
// Génération automatique du classement et calendrier
// ---------------------------
function generateLeague() {
  const numTeams = parseInt(document.getElementById("numTeams").value);
  const promoted = parseInt(document.getElementById("promotedSpots").value);
  const relegated = parseInt(document.getElementById("relegatedSpots").value);
  const game = document.getElementById("tournamentGame").value;

  if (numTeams < 5 || numTeams > leagueTeams.length) {
    return alert("Nombre d'équipes invalide !");
  }

  // Limiter le nombre d'équipes sélectionnées
  leagueTeams = leagueTeams.slice(0, numTeams);

  // Réinitialiser les stats
  leagueTeams.forEach(t => {
    t.points = 0;
    t.J = 0;
    t.K = 0;
    t.D = 0;
    t.Diff = 0;
  });

  renderStandings(game);
  renderMatchCalendar(game);
}

// ---------------------------
// Affichage du classement
// ---------------------------
function renderStandings(game) {
  leagueStandings.innerHTML = "";

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const trHead = document.createElement("tr");

  trHead.innerHTML = game === "Valorant" 
    ? "<th>#</th><th>Logo</th><th>Équipe</th><th>J</th><th>K/D</th><th>Pts</th>"
    : "<th>#</th><th>Logo</th><th>Équipe</th><th>J</th><th>Diff</th><th>Pts</th>";
  thead.appendChild(trHead);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  leagueTeams.forEach((team, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = game === "Valorant"
      ? `<td>${i+1}</td><td><img src="${team.logo}" width="30"></td><td>${team.name}</td><td>${team.J}</td><td>${team.K}/${team.D}</td><td>${team.points}</td>`
      : `<td>${i+1}</td><td><img src="${team.logo}" width="30"></td><td>${team.name}</td><td>${team.J}</td><td>${team.Diff}</td><td>${team.points}</td>`;
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  leagueStandings.appendChild(table);
}

// ---------------------------
// Génération calendrier match BO3
// ---------------------------
function renderMatchCalendar(game) {
  matchCalendar.innerHTML = "";

  const rounds = leagueTeams.length * 2 - 2; // simplifié pour calendrier
  let journee = 1;

  for (let i = 0; i < rounds; i++) {
    for (let j = 0; j < leagueTeams.length; j+=2) {
      if (j+1 >= leagueTeams.length) continue;

      const teamA = leagueTeams[j];
      const teamB = leagueTeams[j+1];

      const matchDiv = document.createElement("div");
      matchDiv.className = "match";
      matchDiv.style.border = "1px solid white";
      matchDiv.style.padding = "10px";
      matchDiv.style.margin = "10px 0";
      matchDiv.innerHTML = `
        <div style="text-align:center; font-weight:bold;">Journée ${journee}</div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:10px;">
          <img src="${teamA.logo}" width="50" style="border-radius:8px;">
          <span>🎲</span>
          <img src="${teamB.logo}" width="50" style="border-radius:8px;">
        </div>
        <div style="display:flex; justify-content:space-between; margin-top:5px;">
          <span>${teamA.name}</span>
          <span>#${j+1}</span>
          <span>#${j+2}</span>
          <span>${teamB.name}</span>
        </div>
      `;
      matchCalendar.appendChild(matchDiv);
    }
    journee++;
  }
}

// ---------------------------
// Retour accueil
// ---------------------------
function goHome() {
  leagueTournament.style.display = "none";
}

// ---------------------------
// Fermer tournoi
// ---------------------------
function closeTournament() {
  leagueTournament.style.display = "none";
}
