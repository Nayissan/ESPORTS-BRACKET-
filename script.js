// script.js

// ⚡ Données principales
let teams = [];
let tournaments = [];

// 📌 Affichage des pages
function showPage(page) {
  document.getElementById("home").style.display = "none";
  document.getElementById("teams").style.display = "none";
  document.getElementById("tournaments").style.display = "none";
  document.getElementById(page).style.display = "block";
}

// 🏟 Ajouter une équipe
function addTeam() {
  const name = document.getElementById("teamName").value.trim();
  const players = document.getElementById("players").value.trim();

  if (!name || !players) {
    alert("Veuillez entrer le nom de l'équipe et les joueurs.");
    return;
  }

  const teamGame = document.getElementById("teamGame").value;
  const playerList = players.split(",").map(p => p.trim());

  // Vérifier nombre de joueurs selon le jeu
  const maxPlayers = teamGame === "Valorant" ? 5 : 3;
  if (playerList.length > maxPlayers) {
    alert(`Le nombre de joueurs max pour ${teamGame} est ${maxPlayers}.`);
    return;
  }

  const newTeam = {
    id: Date.now(),
    name,
    game: teamGame,
    players: playerList
  };

  teams.push(newTeam);

  // Réinitialiser les champs
  document.getElementById("teamName").value = "";
  document.getElementById("players").value = "";

  renderTeams();
}

// 📝 Affichage des équipes
function renderTeams() {
  const container = document.getElementById("teamList");
  container.innerHTML = "";

  teams.forEach(team => {
    container.innerHTML += `
      <div class="team">
        <b>${team.name}</b><br>
        Jeu : ${team.game}<br>
        Joueurs : ${team.players.join(", ")}
      </div>
    `;
  });
}

// 🏆 Créer un tournoi
function createTournament() {
  const name = document.getElementById("tournamentName").value.trim();
  const game = document.getElementById("game").value;
  const mode = document.getElementById("mode").value;

  if (!name) {
    alert("Veuillez entrer un nom pour le tournoi.");
    return;
  }

  const newTournament = {
    id: Date.now(),
    name,
    game,
    mode,
    matches: []
  };

  tournaments.push(newTournament);

  document.getElementById("tournamentName").value = "";

  renderTournaments();
}

// 🔢 Affichage des tournois
function renderTournaments() {
  const container = document.getElementById("tournamentList");
  container.innerHTML = "";

  tournaments.forEach(t => {
    container.innerHTML += `
      <div class="card">
        <b>${t.name}</b><br>
        Jeu : ${t.game} | Mode : ${t.mode}<br><br>
        <button onclick="simulate()">🎲 Simuler match</button>
      </div>
    `;
  });
}

// 🎲 Simuler un match aléatoire
function simulate() {
  const scoreA = Math.floor(Math.random() * 5);
  const scoreB = Math.floor(Math.random() * 5);
  alert(`Résultat simulé : ${scoreA} - ${scoreB}`);
}
