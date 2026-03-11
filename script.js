body {
  margin: 0;
  padding: 0;
  background-color: #0b1220; /* bleu marine foncé */
  font-family: Arial, sans-serif;
  color: white;
}

/* HERO SECTION */
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh; /* moitié de la page */
}

.main-title {
  font-size: 60px;
  letter-spacing: 3px;
  text-align: center;
}

/* TOURNAMENTS */
.tournaments {
  width: 900px;
  margin: 0 auto;
  padding: 40px 0;
}

.tournament {
  display: flex;
  background: #121a2b;
  padding: 30px;
  border-radius: 12px;
  margin-bottom: 30px;
  align-items: center;
}

.tournament-image {
  font-size: 70px;
  margin-right: 30px;
}

.tournament-info h2 {
  margin: 0 0 10px 0;
  font-family: 'Orbitron', sans-serif;
  font-size: 24px;

}

.tournament-info p {
  opacity: 0.7;
  margin-bottom: 15px;
   font-family: 'Montserrat', sans-serif;
  font-size: 16px;
}

.start-btn {
  background: #4da3ff;
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
}

/* MENU HAMBURGER */
.menu-btn {
  position: fixed;
  top: 30px;
  right: 40px;
  font-size: 35px;
  cursor: pointer;
  z-index: 10;
}

/* SIDE MENU */
#sideMenu {
  position: corner left;
  top: 0;
  right: -250px;
  width: 250px;
  height: 150%;
  background: black;
  padding-top: 120px;
  transition: 0.3s;
  z-index: 9;
}

.menu-item {
  padding: 25px;
  font-size: 50px;
  cursor: pointer;
}
