const homeIcon = document.querySelector(".bi-house-door-fill");
function redirectButtons() {
  location.href = "feed.html";
};

homeIcon.addEventListener("click", redirectButtons);

const brandName = document.querySelector(".brandName");
function redirectButtonsLogin() {
  location.href = "index.html";
};

brandName.addEventListener("click", redirectButtonsLogin);




