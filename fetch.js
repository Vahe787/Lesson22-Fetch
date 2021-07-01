let button = document.querySelector(".btn");
let search = document.querySelector(".search");
let img = document.querySelector(".img");
let imgMain = document.querySelector(".img-main");
const DOG_URL = "https://dog.ceo/api/breeds/list/all";

search.addEventListener("change", (event) => {
  let lower = event.target.value[0].toLowerCase() + event.target.value.slice(1);
  getImage(lower);
});

function getImage(breed) {
  imgMain.textContent = "";
  fetch(`https://dog.ceo/api/breed/${breed}/images`)
    .then((res) => res.json())
    .then((data) => {
      data.message.forEach((element) => {
        let allImg = document.createElement("img");
        allImg.classList.add("allImg");
        allImg.src = element;
        imgMain.append(allImg);
      });
    });
}

function getName() {
  fetch(DOG_URL)
    .then((res) => res.json())
    .then((data) => {
      Object.keys(data.message).forEach((element) => {
        let opt = document.createElement("option");
        opt.classList.add(".opt");
        let name = element[0].toUpperCase() + element.slice(1);
        opt.textContent = name;
        search.append(opt);
      });
    });
}

getName();
