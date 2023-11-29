import gameList from "./item.js";
let slideshowIndex = 0;
const currlocale = window.location.href.toString().split("/").pop();

if (currlocale != "index.html") window.location = "./index.html";

let slider1 = document.getElementById("slider-1");
let slider2 = document.getElementById("slider-2");
let slider3 = document.getElementById("slider-3");
let slider4 = document.getElementById("slider-4");
let slider5 = document.getElementById("slider-5");

slider1.onclick = () => {
  clearTimeout(slideshowTimer);
  banneridlechange();
  bannerchange(0);
  slideshowIndex = 1;
};

slider2.onclick = () => {
  clearTimeout(slideshowTimer);
  banneridlechange();
  bannerchange(1);
  slideshowIndex = 2;
};

slider3.onclick = () => {
  clearTimeout(slideshowTimer);
  banneridlechange();
  bannerchange(2);
  slideshowIndex = 3;
};

slider4.onclick = () => {
  clearTimeout(slideshowTimer);
  banneridlechange();
  bannerchange(3);
  slideshowIndex = 4;
};

slider5.onclick = () => {
  clearTimeout(slideshowTimer);
  banneridlechange();
  bannerchange(4);
  slideshowIndex = 0;
};

let slideshowBanner = document.getElementsByClassName("slideshow-banner");
let progressbarcontainer = document.getElementById("progress-bar-wrapper");
const pgbar = document.createElement("div");

function progressbar() {
  progressbarcontainer.appendChild(pgbar);
  pgbar.setAttribute("id", "progress-bar");
}

function bannerchange(index) {
  for (const slide of slideshowBanner) {
    slide.classList.remove("banner-active");
    slide.classList.add("banner-hidden");
  }
  slideshowBanner[index].classList.add("banner-active");
  slideshowBanner[index].classList.remove("banner-hidden");
}

let slideshowTimer;
function banneridlechange() {
  progressbar();
  bannerchange(slideshowIndex);
  slideshowIndex++;
  if (slideshowIndex > slideshowBanner.length - 1) slideshowIndex = 0;
  slideshowTimer = setTimeout(() => {
    banneridlechange();
    progressbar();
  }, 8000);
}
banneridlechange();

const createPage = (start, end, list = gameList) => {
  if (end > list.length) end = list.length;
  for (let i = start; i < end; i++) list[i].render();
};

const createBtn = (list = gameList) => {
  const quantity = Math.ceil(list.length / 12);
  const pageNumberContainer = document.querySelector(".game-grid-page");
  pageNumberContainer.innerHTML = "";
  if (quantity <= 1) return;
  for (let i = 1; i <= quantity; i++) {
    const btn = document.createElement("button");
    btn.classList.add("page-btn");
    btn.id = `page-number${i}`;
    btn.textContent = i;
    btn.value = i;

    btn.onclick = () => {
      switchPage(i, list);
    };
    pageNumberContainer.append(btn);
  }
};

const switchPage = (i, list = gameList) => {
  const gameGrid = document.getElementById("game-grid");
  gameGrid.innerHTML = "";
  const listbtn = document.getElementsByClassName("page-btn");
  for (const currbtn of listbtn) {
    currbtn.classList.remove("page-active");
  }
  const btn = document.getElementById(`page-number${i}`);
  if (btn == undefined) {
    createPage(0, 12, list);
    return;
  }
  createPage((btn.value - 1) * 12, btn.value * 12, list);
  btn.classList.add("page-active");
};

const search = document.getElementById("searchinput"); //lấy từ cái chỗ search
search.addEventListener("input", () => {
  let templist;
  templist = gameList.filter((game) => {
    let a = "";
    a = game.name;
    a = a.toLowerCase();
    return a.includes(search.value.toLowerCase());
  });
  switchPage(1, templist);
  createBtn(templist);
});

const categoryList = [];

const getCategoryList = () => {
  for (const item of gameList)
    for (const category of item.category)
      if (!categoryList.includes(category)) categoryList.push(category);
};

getCategoryList();
createBtn();
switchPage(1);

categoryList.sort();

const selectCatgory = document.getElementById("selectCategory");

categoryList.forEach((category) => {
  const newOption = document.createElement("option");
  newOption.value = category;
  newOption.textContent = category;
  selectCatgory.append(newOption);
});

selectCatgory.onchange = () => {
  if (selectCatgory.value === "") {
    createBtn();
    switchPage(1);
    return;
  }
  const templist = gameList.filter((item) =>
    item.category.includes(selectCatgory.value)
  );
  createBtn(templist);
  switchPage(1, templist);
};
