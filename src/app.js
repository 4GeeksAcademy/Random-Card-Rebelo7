import "./style.css";

window.onload = function getcard() {
  const element = document.querySelector(".value");
  element.innerHTML = generateValue();
  const suiteValue = generateSuit();
  const elementSuitTop = document.querySelector(".suite");
  const elementSuitBottom = document.querySelector(".suiteBottom");
  elementSuitTop.innerHTML = suiteValue;
  elementSuitBottom.innerHTML = suiteValue;
  elementSuitTop.setAttribute("title", suiteValue);
  elementSuitBottom.setAttribute("title", suiteValue);
  document.getElementById("pick").addEventListener("click", getcard);
};

let generateValue = () => {
  let values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexValues = Math.floor(Math.random() * values.length);
  return values[indexValues];
};
let generateSuit = () => {
  let suites = ["♦", "♥", "♠", "♣"];
  let indexSuites = Math.floor(Math.random() * suites.length);
  return suites[indexSuites];
};

setTimeout(function() {
  window.location.reload();
}, 10000);

document.getElementById("apply").addEventListener("click", function() {
  let width = document.getElementById("width").value;
  let height = document.getElementById("height").value;

  let card = document.querySelector(".card");
  card.style.width = width + "px";
  card.style.height = height + "px";
});
