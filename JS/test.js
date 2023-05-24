const firstButton = document.getElementById("generateButton");
firstButton.textContent = "Si tu es un Yost Clik on me";
firstButton.addEventListener("click", buttonGenerate);

function buttonGenerate(event) {
  const secondButton = document.createElement("button");
  secondButton.classList.add("secondButton");
  firstButton.appendChild(secondButton);
  secondButton.textContent = "C'est bien coquinou !";
}
