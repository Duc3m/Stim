import { addToCart, updateToLocacle } from "./cart.js";
import { deleteGame } from "./item.js";
import gameList from "./item.js";
const wrapper = document.getElementById("popup-wrapper");
const [popUp] = document.getElementsByClassName("popup-content");
const alertMessage = document.getElementById("alert-wrapper");

export default class game {
  static countId = 1;
  id;
  name;
  img;
  preview;
  gamebanner;
  description;
  price;
  sale;
  category;
  devid;

  constructor(
    name = "",
    img = "",
    preview = [],
    gamebanner = "",
    description = " ",
    price = -1,
    category = [],
    id = "g" + game.countId,
    sale = false,
    devid = 0
  ) {
    game.countId++;
    this.id = id;
    this.name = name;
    this.img = img;
    this.preview = preview;
    this.price = price;
    this.category = category;
    this.gamebanner = gamebanner;
    this.description = description;
    this.sale = sale;
    this.devid = devid;
  }

  render = () => {
    const currimg = this.img.split("/")[1];
    const gameGrid = document.getElementById("game-grid");
    const game = document.createElement("div");
    game.classList.add("game");
    game.id = this.id;

    //img
    const thumb = document.createElement("img");
    thumb.src = `${currimg == "assets" ? `.${this.img}` : this.img}`;
    thumb.classList.add("game-img");
    thumb.alt = this.name;

    //h2 tag for name
    const gameName = document.createElement("h2");
    gameName.classList.add("game-name");
    gameName.textContent = this.name;

    //price
    const gamePrice = document.createElement("div");
    gamePrice.classList.add("game-price");
    gamePrice.textContent =
      this.price !== -1
        ? `${this.price.toLocaleString("en-US")}đ`
        : "Coming Soon";

    //place item in ligame
    game.append(thumb);
    game.append(gameName);
    game.append(gamePrice);
    game.onclick = () => {
      this.popup();
    };

    gameGrid.append(game);
  };

  popup = () => {
    const currlocale = window.location.href.toString().split("/").pop();
    console.log(currlocale)
    const currimg = this.img.split("/")[1];
    popUp.id = this.id;
    popUp.innerHTML = `
      <div class="gamePopUp">
        <div class="popup-left">
            <img src="${
              currimg == "assets"
                ? currlocale == "index.html"
                  ? `.${this.img}`
                  : `../..${this.img}`
                : this.img
            }" class="popup-logo"/>
            <div class="popup-left-info">
                <h1 class="popup-name">${this.name}</h1>
                <p class="popup-price">${this.price.toLocaleString(
                  "en-US"
                )}đ</p>
                <div class="popup-btn">
                ${
                  currlocale == "index.html"
                    ? `<button class="popup-addToCart" id="addToCart">Add to Cart</button>`
                    : `<button class="popup-edit" id="popup-edit">Edit</button>
                       <button class="popup-delete" id="popup-delete">Delete</button>`
                }
            </div>
            </div>
        </div>

        <div class="popup-right">
            <div class="preview">
                ${this.preview
                  .map(
                    (item) =>
                      `<img src="${
                        currlocale == "index.html" ? `${item}` : `../..${item}`
                      }" alt="" class="preview-slide">`
                  )
                  .join("")}
                <button class="preview-btn-prev" id="prev"><img src="${
                  currlocale == "index.html"
                    ? `./assets/icon/angle-left.png`
                    : `../../assets/icon/angle-left.png`
                }"></button>
                <button class="preview-btn-next" id="next"><img src="${
                  currlocale == "index.html"
                    ? `./assets/icon/angle-right.png`
                    : `../../assets/icon/angle-right.png`
                }"></button>
            </div>
            <div class="popup-description">
              <pre>

<span class="blue-bold-text">CATEGORY</span>: <span class="white-text">${this.category.map(
      (item) => ` ${item}`
    )}</span>
${this.description}
              </pre>
            </div>
        </div>
        <button id="popup-closebtn"><img src="${
          currlocale == "index.html"
            ? `./assets/icon/close.png`
            : `../../assets/icon/close.png`
        }"></button>
      </div>
        `;

    wrapper.style.top = 50 + "%";
    const body = document.getElementsByTagName("BODY")[0];
    body.style.overflow = "hidden";

    const close = document.getElementById("popup-closebtn");
    close.onclick = () => {
      closePopup();
    };
    if (currlocale == "admin.html") {
      const deletebtn = document.getElementById("popup-delete");
      deletebtn.onclick = () => {
        alertMessage.innerHTML = `<div class="payment-alert">
            <h2 class="alert-message">Delete ${this.name}?</h2>
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
          deleteGame(this.id);
          window.location = "admin.html";
        };
      };

      const editBtn = document.getElementById("popup-edit")
      editBtn.onclick = () => {
        alertMessage.innerHTML = `<div class="edit-options">
        <h2 class="edit-message">Edit game</h2>
        <form class="edit-form" id="edit">
          <label class="form-label">Name</label>
          <br>
          <input
            class="form-input"
            id="edit-name"
          >
          <br>
          
          <label class="form-label">Price</label>
          <br>
          <input
            class="form-input"
            id="edit-price"
          >
          <br>
          
          <label class="form-label">Thumbnail</label>
          <br>
          <input
            class="form-input"
            id="edit-thumbnail"
          >
          <br>
          
          <label class="form-label">Preview</label>
          <br>
          <input
            class="form-input"
            id="edit-preview"
          >
          <br>
          
          <label class="form-label">Banner</label>
          <br>
          <input
            class="form-input"
            id="edit-banner"
          >
          <br>
          
          <label class="form-label">Category</label>
          <br>
          <input
            class="form-input"
            id="edit-category"
          >
          <br>

          <label class="form-label">Description</label>
          <br>
          <textarea
            class="edit-game-description"
            id="edit-description"
          ></textarea>
          <br>
          <button class="save-edit" id="saveEdit" type="submit">Save</button>
        </form>
        </div>`

        const name = document.getElementById("edit-name")
        const price = document.getElementById("edit-price")
        const description = document.getElementById("edit-description")
        const thumbnail = document.getElementById("edit-thumbnail")
        const preview = document.getElementById("edit-preview")
        const banner = document.getElementById("edit-banner")
        const category = document.getElementById("edit-category")

        name.value = this.name
        price.value = this.price
        description.value = this.description
        thumbnail.value = this.img
        preview.value = this.preview
        banner.value = this.gamebanner
        category.value = this.category

        const [alertContent] = document.getElementsByClassName("edit-options");
        alertContent.onclick = () => {
          event.stopPropagation();
        }
        alertMessage.classList.toggle("showflex");

        const editForm = document.getElementById("edit")
        editForm.onsubmit = (event) => {
          event.preventDefault()

          const priceValidate = /^[0-9]+$/;
          // const CategoriesValidate = /\w+/g;
          if (name.value == "") {
            alert("Tên game không được bỏ trống");
            return;
          }
          if (description.value == "") {
            alert("Không được bỏ trống description");
            return;
          }
          if (price.value == "") {
            alert("Không được bỏ trống giá");
            return;
          }
          if (!priceValidate.test(price.value)) {
            alert("Giá phải là số");
            return;
          } 
          if(confirm("Do you want to confirm the change?") == true){
            this.name = name.value
            this.price = Number(price.value)
            this.description = description.value
            this.img = thumbnail.value
            this.preview = preview.value.split(",")        
            this.gamebanner = banner.value
            this.category = category.value.split(",")
            localStorage.setItem("gameList", JSON.stringify(gameList));
            location.reload()
          }
          
        }
      }
    }

    if (currlocale == "index.html") {
      const addToCartBtn = document.getElementById("addToCart");
      addToCartBtn.onclick = () => {
        const userId = localStorage.getItem("currentUser");
        if (!userId) {
          alert("phải đăng nhập để mua game");
          return;
        }
        addToCart(this.id);
      };
    }

    if (this.preview.length == 0) return;
    this.showImg(1);
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");
    prev.onclick = () => {
      this.plusImg(-1);
    };
    next.onclick = () => {
      this.plusImg(1);
    };
  };

  previewSlideIndex = 1;
  plusImg = (n) => {
    this.showImg((this.previewSlideIndex += n));
  };

  showImg = (n) => {
    var i;
    const x = document.getElementsByClassName("preview-slide");
    if (n > x.length) {
      this.previewSlideIndex = 1;
    }
    if (n < 1) {
      this.previewSlideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[this.previewSlideIndex - 1].style.display = "block";
  };
}

wrapper.onclick = () => {
  closePopup();
};

function closePopup() {
  wrapper.style.top = -100 + "%";
  popUp.innerHTML = "";
  const body = document.getElementsByTagName("BODY")[0];
  body.style.overflow = "auto";
}

alertMessage.onclick = () => {
  alertMessage.classList.toggle("showflex");
};

popUp.onclick = () => {
  event.stopPropagation();
};

function edit(game, content) {
  name = content
}