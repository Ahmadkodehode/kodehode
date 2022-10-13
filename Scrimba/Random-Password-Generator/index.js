const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~`!@#$%^&*()_-+={[}]|:;<>.?/";

function generat() {
  const length1 = document.getElementById("number1").value;
  const n = document.getElementById("numbers").checked;
  const s = document.getElementById("symbols").checked;

  let passChars = characters;
  if (n) passChars += numbers;
  if (s) passChars += symbols;

  if (length1 <= 30 && length1 > 0) {
    let password1 = "";

    for (let i = 0; i < length1; i++) {
      const x = Math.floor(Math.random() * passChars.length);
      password1 += passChars[x];
    }

    document.getElementById("password1").innerText = password1;
  } else {
    document.getElementById("password1").innerText = "Enter valid Value";
  }
}

function copy() {
  const pass = document.getElementById("password1");
  navigator.clipboard.writeText(pass.innerText);
}
