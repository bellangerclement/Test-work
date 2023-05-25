const firstButton = document.getElementById("generateButton");
firstButton.textContent = "Si tu es un Yost Clik on me";
firstButton.style.fontSize = "8srem";
firstButton.addEventListener("click", buttonGenerate);

function buttonGenerate(event) {
  player.play();
}
//   // alert(popupmaggle());
//   const secondButton = document.createElement("div");
//   secondButton.classList.add("secondButton");
//   firstButton.appendChild(secondButton);
//   secondButton.textContent = "C'est bien coquinou !";
// }

const player = document.querySelector("#audioPlayer");

// Pop-up de joh cena avec position random

const image = document.createElement("img");

// function popupmaggle() {
//   swal("Title", "Text", "success");
//   const swal = popupmaggle();
//   swal.document.createElement("div");
//   swal.classList.add("divPopup");
//   const body = document.getElementsByClassName("body");
//   body.appendChild(swal);
// }
image.src =
  "https://cdn-s-www.estrepublicain.fr/images/F2F4D627-8A43-48D1-B7FD-BEE41300D0B7/NW_detail/title-1622008125.jpg";

function appearJohn() {}
appearJohn();

const restartButton = document.querySelector(".reset");

restartButton.addEventListener(
  "click",
  () => {
    const textAnimation = document.querySelector(".text-stroke");

    setAnimationName(textAnimation, "none");
    requestAnimationFrame(() =>
      setTimeout(() => setAnimationName(textAnimation, ""), 0)
    );
  },
  false
);

const setAnimationName = (element, animationName) => {
  if (element) {
    element.style.animationName = animationName;
  }
};
