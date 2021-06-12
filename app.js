const redRange = document.querySelector(".red");
const greenRange = document.querySelector(".green");
const blueRange = document.querySelector(".blue");

const pluses = document.querySelectorAll(".plus");
const minuses = document.querySelectorAll(".minus");
const randomColor = document.querySelector(".random-color button");

const redDisplay = document.querySelector(".red-value p");
const greenDisplay = document.querySelector(".green-value p");
const blueDisplay = document.querySelector(".blue-value p");

const colorContainer = document.querySelector(".color-container");
const tooltip = document.querySelector(".tooltip");

let redValue = redRange.value;
let greenValue = greenRange.value;
let blueValue = blueRange.value;

const getValues = () => {
  redValue = redRange.value;
  greenValue = greenRange.value;
  blueValue = blueRange.value;
};

const initialize = () => {
  redDisplay.innerHTML = redValue;
  greenDisplay.innerHTML = greenValue;
  blueDisplay.innerHTML = blueValue;
  colorContainer.style.background = `rgb(${redValue},${greenValue},${blueValue})`;
  colorContainer.style.boxShadow = `10px 10px 8px rgba(${redValue}, ${greenValue}, ${blueValue}, 0.5)`;
};
initialize();

pluses.forEach((plus) => {
  plus.addEventListener("click", function () {
    const range = this.parentElement.children[1];
    let value = parseInt(range.value) + 1;
    if (value <= 255) {
      range.value = value.toString();
      getValues();
      initialize();
    }
  });
});
minuses.forEach((minus) => {
  minus.addEventListener("click", function () {
    const range = this.parentElement.children[1];
    let value = parseInt(range.value) - 1;

    if (value >= 0) {
      range.value = value.toString();
      getValues();
      initialize();
    }
  });
});

redRange.addEventListener("input", () => {
  getValues();
  initialize();
});
greenRange.addEventListener("input", () => {
  getValues();
  initialize();
});
blueRange.addEventListener("input", () => {
  getValues();
  initialize();
});
colorContainer.addEventListener("mouseout", () => {
  tooltip.innerHTML = "Click to Copy To Clipboard";
});

randomColor.addEventListener("click", () => {
  redRange.value = Math.ceil(Math.random() * 255);
  greenRange.value = Math.ceil(Math.random() * 255);
  blueRange.value = Math.ceil(Math.random() * 255);
  getValues();
  initialize();
});

colorContainer.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  getValues();
  textarea.value = `rgb(${redValue},${greenValue},${blueValue})`;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  tooltip.innerHTML = "Copied To Clipboard";
});
