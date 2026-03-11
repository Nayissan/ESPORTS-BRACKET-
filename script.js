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
  const playerList =
    players1
    players2
    players3
    players4
    players5
    .split( ).map(p => p.trim());

  // Vérifier nombre de joueurs selon le jeu
  const maxPlayers = teamGame === "Valorant" ? 5 : 3;
  if (playerList.length > maxPlayers) {
    alert(`Le nombre de joueurs max pour ${teamGame} est ${maxPlayers}.`);
    return;
  }

  const newTeam = {
    logo.png
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
/* PAGE TEAMS */

.teams-page{
padding:40px 120px;
}

/* HEADER */

.teams-header{
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:40px;
}

.teams-header h2{
font-size:32px;
}

.teams-header input{
background:#0c1b35;
border:1px solid #1f3a6a;
color:white;
padding:10px 15px;
border-radius:8px;
width:250px;
}

/* TEAM CARD */

.team-card{
display:flex;
align-items:center;
justify-content:space-between;
background:rgba(255,255,255,0.05);
padding:20px;
border-radius:12px;
margin-bottom:15px;
transition:0.2s;
}

.team-card:hover{
background:rgba(255,255,255,0.08);
}

/* LOGO */

.team-logo{
width:55px;
height:55px;
margin-right:20px;
}

/* INFO */

.team-info{
flex:1;
margin-left:15px;
}

.team-info h3{
margin:0;
font-size:20px;
}

.team-info p{
margin:5px 0 0;
opacity:0.7;
}

/* MENU */

.team-menu{
font-size:22px;
cursor:pointer;
opacity:0.7;
}

/* ADD BUTTON */

.add-team-btn{
position:fixed;
bottom:40px;
right:40px;
background:#ff2d55;
color:white;
border:none;
width:65px;
height:65px;
border-radius:50%;
font-size:35px;
cursor:pointer;
box-shadow:0 10px 25px rgba(0,0,0,0.5);
}
body {
  margin: 0;
  padding: 0;
  background-color: #0b1220; /* bleu marine foncé */
  font-family: Arial, sans-serif;
  
  /* CENTRAGE VERTICAL ET HORIZONTAL */
  display: flex;
  justify-content: center; /* centré horizontalement */
  align-items: center;     /* centré verticalement */
  height: 100vh;           /* prend toute la hauteur de la page */
}

.main-title {
  color: white;        /* texte blanc */
  font-size: 60px;     /* taille du texte */
  letter-spacing: 3px; /* espacement des lettres */
  text-align: center;
}
