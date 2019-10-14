'use strict';
// var parentEl = document.getElementById('parentElement');

// var child = document.createElement('h1');
// child.textContent = 'Data: ';
// parentEl.appendChild(child);

var leftImageEl = document.getElementById('left');
var rightImageEl = document.getElementById('right');
var centerImageEl = document.getElementById('center');
var containerEl = document.getElementById('image_container');
var votesTotal = 0;

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
new Product('bubblegum');
new Product('chair');
new Product('cthulhu');
new Product('dog-duck');
new Product('dragon');
new Product('pen');
new Product('pet-sweep');
new Product('scissors');
new Product('shark');
new Product('sweep');
new Product('tauntaun');
new Product('unicorn');
new Product('usb');
new Product('water-can');
new Product('wine-glass');

function renderProducts() {
  var uniquePicsArray = [];
  uniquePicsArray[0] = makeRandom();
  uniquePicsArray[1] = makeRandom();
  uniquePicsArray[2] = makeRandom();

  while (uniquePicsArray[0] === uniquePicsArray[1]){
    uniquePicsArray[0] = makeRandom();
  }
  while (uniquePicsArray[0] === uniquePicsArray[2]){
    uniquePicsArray[2] = makeRandom();
  }
  while (uniquePicsArray[1] === uniquePicsArray[2]){
    uniquePicsArray[1] = makeRandom();
  }


  //display a product whose index is the random number
  leftImageEl.src = allProducts[uniquePicsArray[0]].path;
  leftImageEl.name = allProducts[uniquePicsArray[0]].name;
  leftImageEl.title = allProducts[uniquePicsArray[0]].name;

  allProducts[uniquePicsArray[0]].views++;

  rightImageEl.src = allProducts[uniquePicsArray[1]].path;
  rightImageEl.name = allProducts[uniquePicsArray[1]].name;
  rightImageEl.title = allProducts[uniquePicsArray[1]].name;

  allProducts[uniquePicsArray[1]].views++;

  centerImageEl.src = allProducts[uniquePicsArray[2]].path;
  centerImageEl.name = allProducts[uniquePicsArray[2]].name;
  centerImageEl.title = allProducts[uniquePicsArray[2]].name;

  allProducts[uniquePicsArray[2]].views++;
  console.log(allProducts);
}


function handleClick(event) {
  // event.preventDefault();
  votesTotal++;
  var chosenImage = event.target.title;
  console.log(chosenImage);
  for (var i = 0; i < allProducts.length; i++) {
    if (allProducts[i].name === chosenImage) {
      allProducts[i].votes++;
    }
  }
  if(votesTotal === 5) {
    containerEl.innerHTML = '';
  }
  renderProducts();
  parentEl.innerHTML = '';
  render();
}


containerEl.addEventListener('click', handleClick);

renderProducts();

console.log(allProducts);

var parentEl = document.getElementById('parentElement');

var child = document.createElement('h1');
child.textContent = 'Data: ';
parentEl.appendChild(child);

function render() {
  for( var i = 0; i < allProducts.length; i++ ) {
    var childEl = document.createElement('li');
    childEl.textContent = `Picture: ${allProducts[i].name}     Times Shown: ${allProducts[i].views}     Times voted: ${allProducts[i].votes}`;
    parentEl.appendChild(childEl);
  }
}

render();

