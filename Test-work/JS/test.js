const firstButton = document.getElementById("generateButton");
firstButton.textContent = "Si tu es un Yost Clik on me";
firstButton.addEventListener("click", buttonGenerate);

function buttonGenerate(event) {
  player.play();
  const secondButton = document.createElement("button");
  secondButton.classList.add("secondButton");
  firstButton.appendChild(secondButton);
  secondButton.textContent = "C'est bien coquinou !";
}

const player = document.querySelector("#audioPlayer");
