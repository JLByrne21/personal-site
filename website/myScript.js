const btn = document.getElementById("my-btn");

function random(n) {
  return Math.floor(Math.random() * (n + 1));
}

function buttonTest() {
  const randomColour = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = randomColour;
}
