// // Q1

let unorder = document.getElementsByTagName("ul");
let list = document.createElement("li");

let fruits = [list, list, list, list, list];

let imageSrc = [
  "banana.jpg",
  "orange.jpg",
  "apple.jpg",
  "grape.jpg",
  "mango.jpg",
];

for (let i = 0; i < fruits.length; i++) {
  let image = document.createElement("img");
  image.src = imageSrc[i];
  fruits[i].appendChild(image);
  unorder[0].appendChild(fruits[i]);
}

// Q2

function targetValue(numbersArray, targetNumber) {
  let index;
  for (let i = 0; i < numbersArray.length; i++) {
    if (Number(numbersArray[i]) == Number(targetNumber)) {
      index = i;
      return index;
    }
  }
  return -1;
}
alert(
  targetValue(
    prompt("Enter the number array"),
    prompt("Enter the target number")
  )
);
