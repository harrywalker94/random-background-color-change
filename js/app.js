const colorBtn = document.querySelector(".colorBtn"); // To access the color Button
const bodyBg = document.querySelector("body"); // To access the body element

const colors = [
  "orange",
  "red",
  "green",
  "#3b599a",
  "D19026",
  "#1E6124",
  "#4DE7DE",
  "#3B5BDC",
  "#B571C8"
]; // Create an array to hold the background colors we are going to use

// Adding a click event listener
colorBtn.addEventListener("click", changeColor); // Changes the color of the selected color in the colors array // Returns just a single color

/* function changeColor() {
  bodyBg.style.backgroundColor = colors[1];
} */ function changeColor() {
  let random = Math.floor(Math.random() * colors.length); // Finds random number of the length of the colors array.
  bodyBg.style.backgroundColor = colors[random];
}
// Math.random() always returns a number lower than 1.
// Math.random() used with Math.floor() can be used to return random integers.
