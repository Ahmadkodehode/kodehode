import { keyBindings } from "./data.js";
import { sounds } from "./data.js";
const myDiv = document.getElementById("app");
console.log(sounds);
sounds.forEach((sound) => {
  let myButton = document.createElement("button");
  let y = sound.replace(".wav", "");
  console.log(y);
  myButton.textContent = sound.replace(".wav", "");
  myDiv.append(myButton);
  myButton.addEventListener("click", () => {
    const audioElement = new Audio("./sounds/" + sound);
    audioElement.play();
  });
});
