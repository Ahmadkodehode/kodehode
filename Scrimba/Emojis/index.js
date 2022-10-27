const myEmojis = ["👨‍💻", "⛷", "🍲"];
const emojiContainer = document.getElementById("emoji-container");
const emojiInput = document.getElementById("emoji-input");
const pushBtn = document.getElementById("push-btn");
const unshiftBtn = document.getElementById("unshift-btn");
const shiftBtn = document.getElementById("shift-btn");
const popBtn = document.getElementById("pop-btn");
function renderEmojis() {
  emojiContainer.innerHTML = "";
  for (let i = 0; i < myEmojis.length; i++) {
    const emoji = document.createElement("span");
    emoji.textContent = myEmojis[i];
    emojiContainer.append(emoji);
  }
}

renderEmojis();

pushBtn.addEventListener("click", function () {
  if (emojiInput.value) {
    myEmojis.push(emojiInput.value);
    emojiInput.value = "";
    renderEmojis();
    console.log(emojiInput.value);
  }
});

unshiftBtn.addEventListener("click", function () {
  if (emojiInput.value) {
    myEmojis.unshift(emojiInput.value);
    emojiInput.value = "";
    renderEmojis();
  }
});
shiftBtn.addEventListener("click", function () {
  myEmojis.shift();
  emojiInput.value = "";
  renderEmojis();
});
popBtn.addEventListener("click", function () {
  myEmojis.pop();
  emojiInput.value = "";
  renderEmojis();
});
