// here the text elemnt to show the values ,h4
let lengthOut = document.getElementById("length");
let volumeOut = document.getElementById("volume");
let massOut = document.getElementById("mass");
// here the value wich we want to convert


document.getElementById("number1").addEventListener("input", function () {
  const unit = document.getElementById("number1").value;
  console.log(unit);
  let meterOut = unit * Math.round(3.281);
  let feetOut = unit * 0.305;
  let literOut = unit * 0.264;
  let gallonsOut = unit * 3.788;
  let kilosOut = unit * 2.204;
  let poundsOut = unit * 0.454;
  lengthOut.innerText = ` ${unit} meters = ${meterOut} feet | ${unit} feet = ${feetOut} meters`;
  volumeOut.innerText = `${unit} litres = ${literOut} gallons | ${unit} gallons = ${gallonsOut} litres`;
  massOut.innerText = `${unit} kilos = ${kilosOut} pounds | ${unit} pounds = ${poundsOut} kilos`;
});
