'use strict';

var leftImageEl = document.getElementById('left');
var rightImageEl = document.getElementById('right');
var centerImageEl = document.getElementById('center');
var containerEl = document.getElementById('image_container');

// leftImageEl.src = 'images/bag.jpg';
// leftImageEl.name='bag.jpg';
// leftImageEl.title='bag.jpg';

// rightImageEl.src = 'images/boots.jpg';
// rightImageEl.name='boots.jpg';
// rightImageEl.title='boots.jpg';

var allProducts = [];

function Product(name) {
  this.views = 0;
  this.votes = 0;
  this.name = name;
  this.path = `images/${name}.jpg`;
  allProducts.push(this);
}

function makeRandom() {
  return Math.floor(Math.random() * allProducts.length);
}

new Product('bag');
new Product('banana');
new Product('bathroom');
new Product('boots');
new Product('breakfast');
new Product('chair');
new Product('cthulhu');
new Product('dog-duck');

function renderProducts() {
  var uniquePicsArray = [];
  uniquePicsArray[0] = makeRandom();
  uniquePicsArray[1] = makeRandom();
  uniquePicsArray[2] = makeRandom();

  while (uniquePicsArray[0] === uniquePicsArray[1]){
    uniquePicsArray[1] = makeRandom();
  }

  allProducts[uniquePicsArray[0].views++];

  //display a product whose index is the random number
  leftImageEl.src = allProducts[uniquePicsArray[0]].path;
  leftImageEl.name = allProducts[uniquePicsArray[0]].name;
  leftImageEl.title = allProducts[uniquePicsArray[0]].name;


  rightImageEl.src = allProducts[uniquePicsArray[1]].path;
  rightImageEl.name = allProducts[uniquePicsArray[1]].name;
  rightImageEl.title = allProducts[uniquePicsArray[1]].name;


  centerImageEl.src = allProducts[uniquePicsArray[2]].path;
  centerImageEl.name = allProducts[uniquePicsArray[2]].name;
  centerImageEl.title = allProducts[uniquePicsArray[2]].name;
}

renderProducts();

function handleClick() {
  var chosenImage = event.target.title;
  console.log(chosenImage);
  for (var i = 0; i < allProducts.length; i++) {
    if (allProducts[i].name === chosenImage) {
      allProducts[i].votes++;
    }
  }
  renderProducts();
}

containerEl.addEventListener('click', handleClick);
