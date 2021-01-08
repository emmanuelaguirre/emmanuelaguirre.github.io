// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// let iceCream = "chocolate";
// if (iceCream === "chocolate") {
//   alert("I love chocolate icecream!");
// } else {
//   alert("Too bad is not chocolate icecream :(");
// }

// let product = (num1, num2) => {
//   let result = num1 * num2;
//   return alert(result);
// };

// product(10, 5);

// document.querySelector("html").onclick = () => {
//   alert("Yamete kudasai!!!!");
// };

//This code allows to change the image to another by click on it//

let myImage = document.querySelector("img");

myImage.onclick = () => {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/cake.jpg") {
    myImage.setAttribute("src", "images/choco-cake.jpg");
  } else {
    myImage.setAttribute("src", "images/cake.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

let setUserName = () => {
  let myName = prompt("Please, enter your name");
  localStorage.setItem("name", myName);
  myHeading.textContent = "The Bakery is awesome, " + myName;
};

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "The Bakery is awesome, " + storedName;
}

myButton.onclick = () => {
  setUserName();
};
