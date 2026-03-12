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
const teamsList = document.getElementById("teamsList");
const createTeamPanel = document.getElementById("createTeamPanel");
const addPlayerBtn = document.getElementById("addPlayerBtn");
const playersUl = document.getElementById("playersUl");

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

// Créer l'équipe
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

  const teamHTML = `
    <div class="team-card" style="background:#071124; border-radius:12px; padding:15px; margin-bottom:15px;">
      <img src="${logoSrc}" class="team-logo" style="width:60px; height:60px; border-radius:10px;">
      <div class="team-info" style="display:inline-block; vertical-align:top; margin-left:15px;">
        <h3 style="margin:0; font-family:'Oswald', sans-serif;">${teamName}</h3>
        <p style="margin:3px 0;">${teamTag} • ${teamGame} • 📍${teamLocation}</p>
        <ul class="teamPlayersList" style="padding-left:0; margin:0;"></ul>
      </div>
    </div>
  `;

  teamsList.innerHTML += teamHTML;

  // Ajouter les joueurs
  const teamPlayersUl = teamsList.querySelectorAll(".teamPlayersList");
  const lastUl = teamPlayersUl[teamPlayersUl.length - 1];
  currentPlayers.forEach((p) => {
    const li = document.createElement("li");
    li.textContent = p;
    li.style.color = "white";
    li.style.background = "black";
    li.style.padding = "3px";
    li.style.marginBottom = "3px";
    li.style.listStyle = "none";
    li.style.fontFamily = "'Oswald', sans-serif";
    lastUl.appendChild(li);
  });

  // Reset
  currentPlayers = [];
  playersUl.innerHTML = "";
  document.getElementById("teamName").value = "";
  document.getElementById("teamTag").value = "";
  createTeamPanel.style.display = "none";
}
