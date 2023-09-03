const profilePage = document.querySelector(".profilePage");
function redirectButtons() {
  location.href = "../profile/index.html";
};

profilePage.addEventListener("click", redirectButtons);

const brandName = document.querySelector(".brandName");
function redirectButtonsLogin() {
  location.href = "../index.html";
};

brandName.addEventListener("click", redirectButtonsLogin);




