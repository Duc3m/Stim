import gameList, { addGame } from "./item.js";
import userList from "./login.js";
import { curruser } from "./cart.js";

const [gamelist] = document.getElementsByClassName("game-config");
const gameNav = document.querySelector("#game-btn");
const [accountList] = document.getElementsByClassName("account-config");
const accountNav = document.querySelector("#account-btn");
const gameBtnOff = document.querySelector("#game-off-btn");
const accountBtnOff = document.querySelector("#account-off-btn");
const alertMessage = document.getElementById("alert-wrapper");
gameNav.onclick = () => {
  accountList.classList.add("hidden");
  gamelist.classList.toggle("hidden");
};

gameBtnOff.onclick = () => {
  gamelist.classList.toggle("hidden");
};

accountNav.onclick = () => {
  gamelist.classList.add("hidden");
  accountList.classList.toggle("hidden");
};
accountBtnOff.onclick = () => {
  accountList.classList.toggle("hidden");
};

if (curruser) {
  if (!curruser.isadmin) window.location = "../../index.html";
  gameBtnOff.click();
} else {
  window.location = "../../index.html";
}

function showgame(currlist = gameList) {
  const [gameContainer] = document.getElementsByClassName("game-container");
  gameContainer.innerHTML = `${currlist
    .map(
      (game) => `<div class="admin-game" id="${game.id}">
          <img class="game-img"
            src="${
              game.img.split("/")[1] == "assets" ? `../..${game.img}` : game.img
            }"
            alt="${game.name}" />
          <span class="game-name">${game.name}</span>
        </div>`
    )
    .join("")}`;
  const list = document.getElementsByClassName("admin-game");
  for (const game of list) {
    game.onclick = () => {
      showpopup(game.id);
    };
  }
}

function showaccount(currlist = userList) {
  const [accountContainer] =
    document.getElementsByClassName("account-container");
  accountContainer.innerHTML = `${currlist.map(
    (user) => `<div class="account">
          <div class="account-id" ${
            user.banned ? `style = 'color: red !important;'` : ""
          }>${user.id}</div>
          <div class="account-username" ${
            user.banned ? `style = 'color: red !important;'` : ""
          }>${user.name}</div>
          <div class="account-password" ${
            user.banned ? `style = 'color: red !important;'` : ""
          }>${user.password}</div>
          ${
            user.isadmin
              ? `<div style="opacity: 0" class="account-ban"> <button type="button" disabled class="ban-btn" id="${user.id}">Ban</button></div>
              <div style="opacity: 0" class="account-delete"> <button type="button" disabled class="delete-btn" id="${user.id}">Delete</button></div>`
              : `<div class="account-ban"> <button class="ban-btn" id="${
                  user.id
                }">${user.banned ? "Unban" : "Ban"}</button></div>
        <div class="account-delete"> <button class="delete-btn" id="${
          user.id
        }">Delete</button></div>`
          }
        </div>`
  )}`;
  const listDelete = document.getElementsByClassName("delete-btn");
  const listBand = document.getElementsByClassName("ban-btn");
  for (const delbtn of listDelete) {
    delbtn.onclick = () => {
      alertMessage.innerHTML = `<div class="payment-alert">
            <h2 class="alert-message">Do you want delete ${delbtn.id}?</h2>
            <button class="confirmbtn">Yes</button>  
            <button class="cancelbtn">No</button>
            </div>`;
      alertMessage.classList.toggle("showflex");
      const [alertContent] = document.getElementsByClassName("payment-alert");
      alertContent.onclick = () => {
        event.stopPropagation();
      };
      const [confirmbtn] = document.getElementsByClassName("confirmbtn");
      const [Cancelbtn] = document.getElementsByClassName("cancelbtn");
      Cancelbtn.onclick = () => {
        alertMessage.innerHTML = "";
        alertMessage.classList.toggle("showflex");
      };
      confirmbtn.onclick = () => {
        const templist = currlist.filter((u) => u.id !== delbtn.id);
        localStorage.setItem("userList", JSON.stringify(templist));
        alertMessage.classList.toggle("showflex");
        showaccount(templist);
      };
    };
  }
  for (const banbtn of listBand) {
    banbtn.onclick = () => {
      alertMessage.innerHTML = `<div class="payment-alert">
              <h2 class="alert-message">Do you want Ban/Unban ${banbtn.id}?</h2>
              <button class="confirmbtn">Yes</button>
              <button class="cancelbtn">No</button>
              </div>`;
      alertMessage.classList.toggle("showflex");
      const [alertContent] = document.getElementsByClassName("payment-alert");
      alertContent.onclick = () => {
        event.stopPropagation();
      };
      const [confirmbtn] = document.getElementsByClassName("confirmbtn");
      const [Cancelbtn] = document.getElementsByClassName("cancelbtn");
      Cancelbtn.onclick = () => {
        alertMessage.innerHTML = "";
        alertMessage.classList.toggle("showflex");
      };
      confirmbtn.onclick = () => {
        let templist = currlist.map((u) => {
          if (u.id === banbtn.id) {
            if (u.banned) return { ...u, banned: false };
            return { ...u, banned: true };
          }
          return { ...u };
        });
        localStorage.setItem("userList", JSON.stringify(templist));
        alertMessage.innerHTML = "";
        alertMessage.classList.toggle("showflex");
        showaccount(templist);
      };
    };
  }
}

function showpopup(id, currlist = gameList) {
  const [currgame] = currlist.filter((game) => game.id === id);
  currgame.popup();
}

showgame();
showaccount();

const searchGameByName = document.getElementById("game-search");
searchGameByName.oninput = () => {
  let gameTempList = gameList.filter((game) => {
    let a = ``;
    a = game.name;
    a = a.toLowerCase();
    return a.includes(searchGameByName.value.toLowerCase());
  });
  showgame(gameTempList);
};

const searchAccountByUsername = document.getElementById("search-username");
searchAccountByUsername.oninput = () => {
  let accountUsernameTempList = userList.filter((user) => {
    let a = ``;
    a = user.name;
    a = a.toLowerCase();
    return a.includes(searchAccountByUsername.value.toLowerCase());
  });
  showaccount(accountUsernameTempList);
};

const searchAccountById = document.getElementById("search-userid");
searchAccountById.oninput = () => {
  let accountUseridTempList = userList.filter((user) => {
    let a = ``;
    a = user.id;
    return a.includes(searchAccountById.value);
  });
  showaccount(accountUseridTempList);
};

const addGameBtn = document.getElementById("addGame");
const wrapper = document.getElementById("popup-wrapper");
const [popUp] = document.getElementsByClassName("popup-content");

addGameBtn.onclick = () => {
  addGamePopUp();
};

function addGamePopUp() {
  popUp.innerHTML = `<div class="addGame-wrapper">
  <form class="addGame-form" action="">
      <input type="text" name="gameName" id="gameName" placeholder="Name">
      <br>
      <input type="text" name="price" id="price" placeholder="Price (VND)">
      <br>
      <input type="text" name="category" id="category" placeholder="Categories (using space to seperate each category)">
      <br>
      <input type="text" name="thumb" id="thumb" placeholder="Thumbnail link">
      <br>
      <input type="text" name="banner" id="banner" placeholder="Game-banner link">
      <br>
      <textarea class="add-game-description" type="text" name="description" id="description" placeholder="Description (About game, System Requirements, Language, etc.)"></textarea>
      <br>
      <button id="submitGame" type="">Add</button>
  </form>
  </div>`;
  wrapper.style.top = 50 + "%";
  const body = document.getElementsByTagName("BODY")[0];
  body.style.overflow = "hidden";

  const submitGameBtn = document.getElementById("submitGame");
  const newGameName = document.getElementById("gameName");
  const newGameThumb = document.getElementById("thumb");
  // const newGamePreview = document.getElementById('preview')
  const newGameDescription = document.getElementById("description");
  const newGamePrice = document.getElementById("price");
  const newGameCategory = document.getElementById("category");
  const newGameBanner = document.getElementById("banner");

  submitGameBtn.onclick = (e) => {
    e.preventDefault();
    const priceValidate = /^[0-9]+$/;
    const CategoriesValidate = /\w+/g;
    if (newGameName.value == "") {
      alert("Tên game không được bỏ trống");
      return;
    }
    if (newGameDescription.value == "") {
      alert("Không được bỏ trống description");
      return;
    }
    if (newGamePrice.value == "") {
      alert("Không được bỏ trống giá");
      return;
    }
    if (!priceValidate.test(newGamePrice.value)) {
      alert("Giá phải là số");
      return;
    }
    let price = Number.parseInt(newGamePrice.value);
    if (newGameCategory.value == "") {
      alert("không được bỏ trống thể loại");
      return;
    }
    const category = newGameCategory.value;
    let categoryList = category.match(CategoriesValidate);
    let gamethumb;
    if (newGameThumb.value == "") {
      gamethumb = "/assets/img/thumb/no_image_logo.webp";
    }
    
    if (newGameThumb.value != "") {
      if (!isImage(newGameThumb.value)) {
        alert(
          "Link ảnh buộc phải có đuôi file (jpg, jpeg, png, webp, avif, gif, svg)"
        );
        return;
      }
      gamethumb = newGameThumb.value;
    }
    let gamebanner;
    if (newGameBanner.value == "")
      gamebanner = "/assets/img/game-banner/no_image_preview.webp";
    if (newGameBanner.value != "") {
      if (!isImage(newGameBanner.value)) {
        alert(
          "Link ảnh buộc phải có đuôi file (jpg, jpeg, png, webp, avif, gif, svg)"
        );
        return;
      }
      gamebanner = newGameBanner.value;
    }

    if (categoryList == null) categoryList = [];
    addGame(
      newGameName.value,
      newGameDescription.value,
      gamethumb,
      price,
      gamebanner,
      categoryList
    );

    // gameList = [
    //     new game(
    //         newGameName.value,
    //         gamethumb,
    //         [],
    //         '',
    //         newGameDescription.value,
    //         price,
    //         categoryList
    //     ),
    //     ...gameList,
    // ]
    location.reload();
  };
}

export function isImage(url) {
  return /\.(jpg|jpeg|png|webp|avif|gif|svg)/.test(url);
}