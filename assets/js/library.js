import gameList from "./item.js";
import { curruser } from "./cart.js";
import game from "./game.js";

let currgame = [];

if (curruser) {
  const templist = [];
  for (const game of curruser.ownedGame) {
    templist.push(game);
  }
  currgame = gameList.filter((game) => templist.includes(game.id));

  if (currgame.length > 0) showDesciption(currgame[0].id);
} else {
  window.location = "../../index.html";
}
function gameInLibrary(currlist = currgame) {
  const [gamelist] = document.getElementsByClassName("listGame");
  gamelist.innerHTML = `
          ${currlist
            .map(
              (item) => `<div class="game-in-library" id='${item.id}'>
        <img class="game-icon" src="${
          item.img.split("/")[1] == "assets" ? `../..${item.img}` : item.img
        }" alt="">
        <div class="game-name">${item.name}</div>
      </div>`
            )
            .join("")}`;
}

function showDesciption(id) {
  const [gamecontent] = document.getElementsByClassName("game-content");
  const [curr] = currgame.filter((item) => item.id === id);
  const currimg = curr.gamebanner.split("/")[1];
  gamecontent.innerHTML = `<img class="game-banner" src="${
    currimg == "assets" ? `../..${curr.gamebanner}` : curr.gamebanner
  }">
    <div class="popup-description">  
      <button class="download-button">Download</button>
      <br>
      <span class="lib-game-name">${curr.name}</span>
      <pre>
      ${curr.description}
      </pre>
    </div>`;
}

function showDesciptionOnCick() {
  const listgame = document.getElementsByClassName("game-in-library");
  if (!listgame) return;
  for (const game of listgame)
    game.onclick = () => {
      showDesciption(game.id);
    };
}

gameInLibrary();
showDesciptionOnCick();

const searchGameByName = document.getElementById("lib-search");
searchGameByName.addEventListener("input", () => {
  let templist = currgame.filter((game) => {
    let a = ``;
    a = game.name;
    a = a.toLowerCase();
    return a.includes(searchGameByName.value.toLowerCase());
  });
  gameInLibrary(templist);
  showDesciptionOnCick(templist);
});
