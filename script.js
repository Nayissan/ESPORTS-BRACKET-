// ---------------------------
// Gestion du menu latéral
// ---------------------------
function openMenu() {
  const menu = document.getElementById("sideMenu");
  if (menu.style.right === "0px") {
    menu.style.right = "-250px"; // cache le menu
  } else {
    menu.style.right = "0px"; // montre le menu
  }
}

// ---------------------------
// Gestion du tournoi Ligue / Championship
// ---------------------------
function startLeagueTournament() {
  const leagueTournament = document.getElementById("leagueTournament");
  leagueTournament.style.display = "block";

  // Cacher les autres sections
  document.querySelector(".hero").style.display = "none";
  document.querySelector(".tournaments").style.display = "none";
  document.querySelector(".add-team-btn").style.display = "none";
}

// ---------------------------
// Gestion de la création d'équipe
// ---------------------------
const createTeamPanel = document.getElementById("createTeamPanel");
const addPlayerBtn = document.getElementById("addPlayerBtn");
const playersUl = document.getElementById("playersUl");
const teamsGallery = document.getElementById("teamsGallery"); // galerie de cartes
let currentPlayers = [];

// Ouvrir / fermer le panel de création d'équipe
function toggleCreateTeam() {
  createTeamPanel.style.display =
    createTeamPanel.style.display === "none" ? "block" : "none";
}

function closeCreateTeam() {
  createTeamPanel.style.display = "none";
  currentPlayers = [];
  playersUl.innerHTML = "";
}

// Ajouter un joueur
addPlayerBtn.onclick = function () {
  const playerNameInput = document.getElementById("playerName");
  const playerName = playerNameInput.value.trim();
  if (!playerName) return;
  if (currentPlayers.length >= 5)
    return alert("Max 5 players per team");

  currentPlayers.push(playerName);

  const li = document.createElement("li");
  li.textContent = playerName;
  li.style.color = "white";
  li.style.background = "black";
  li.style.padding = "5px";
  li.style.marginBottom = "5px";
  li.style.listStyle = "none";
  li.style.fontFamily = "'Oswald', sans-serif";
  playersUl.appendChild(li);

  playerNameInput.value = "";
};

// Créer l'équipe (avec carte type Pokémon)
function createTeam() {
  const teamName = document.getElementById("teamName").value.trim();
  const teamTag = document.getElementById("teamTag").value.trim();
  const teamGame = document.getElementById("teamGame").value;
  const teamLocation = document.getElementById("teamLocation").value;
  const teamLogoInput = document.getElementById("teamLogo");

  if (!teamName || !teamTag)
    return alert("Veuillez remplir le nom et le tag de l'équipe");

  let logoSrc = "defaultlogo.png";
  if (teamLogoInput.files.length > 0) {
    logoSrc = URL.createObjectURL(teamLogoInput.files[0]);
  }

  // Création de la carte
  const card = document.createElement("div");
  card.className = "team-card-pokemon";
  card.style.background = `linear-gradient(135deg, #1a1a1a, #0b1220)`;
  card.style.borderRadius = "15px";
  card.style.padding = "15px";
  card.style.marginBottom = "20px";
  card.style.width = "220px";
  card.style.color = "white";
  card.style.fontFamily = "'Oswald', sans-serif";
  card.style.textAlign = "center";
  card.style.display = "inline-block";
  card.style.verticalAlign = "top";
  card.style.boxShadow = "0 8px 15px rgba(0,0,0,0.6)";

  // Logo
  const logo = document.createElement("img");
  logo.src = logoSrc;
  logo.style.width = "100px";
  logo.style.height = "100px";
  logo.style.borderRadius = "10px";
  logo.style.marginBottom = "10px";
  card.appendChild(logo);

  // Nom équipe
  const nameEl = document.createElement("h3");
  nameEl.textContent = teamName;
  nameEl.style.margin = "5px 0";
  card.appendChild(nameEl);

  // Lieu + jeu
  const infoEl = document.createElement("p");
  infoEl.textContent = `${teamGame} • 📍${teamLocation}`;
  infoEl.style.margin = "5px 0";
  infoEl.style.fontSize = "14px";
  card.appendChild(infoEl);

  // Joueurs
  const playersListEl = document.createElement("ul");
  playersListEl.style.padding = "0";
  playersListEl.style.margin = "5px 0 0 0";
  playersListEl.style.listStyle = "none";
  currentPlayers.forEach((p) => {
    const li = document.createElement("li");
    li.textContent = p;
    li.style.color = "white";
    li.style.background = "black";
    li.style.padding = "3px";
    li.style.marginBottom = "3px";
    li.style.listStyle = "none";
    li.style.fontFamily = "'Oswald', sans-serif";
    playersListEl.appendChild(li);
  });
  card.appendChild(playersListEl);

  // Ajouter la carte à la galerie
  teamsGallery.appendChild(card);

  // Reset
  currentPlayers = [];
  playersUl.innerHTML = "";
  document.getElementById("teamName").value = "";
  document.getElementById("teamTag").value = "";
  createTeamPanel.style.display = "none";
}
