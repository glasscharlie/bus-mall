'use strict';
// added variable to change the number of rounds
var testNumber = 5;

//called the location where the pics will be rendered
Product.pics = [
  document.getElementById('left'),
  document.getElementById('right'),
  document.getElementById('center')
];
Product.container = document.getElementById('image_container');

//defined variables
Product.all = [];
Product.uniqueArray = [];
var votesTotal = 0;

//created an object to store product information
function Product(name) {
  this.views = 0;
  this.votes = 0;
  this.name = name;
  this.title=name;
  this.path = `images/${name}.jpg`;
  Product.all.push(this);
}
// function to generate a random number
function makeRandom() {
  return Math.floor(Math.random() * Product.all.length);
}
// created new objects
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
// creates an array that store unique numbers
function uniqueArrayGenerator() {
  while (Product.uniqueArray.length < 6){
    var random = makeRandom();
    // console.log(random);
    while(!Product.uniqueArray.includes(random)) {
      // console.log('building uniqueArray:  ', Product.uniqueArray);
      Product.uniqueArray.push(random);
    }
  }
  // console.log('uniqueArray completed!!: ', Product.uniqueArray);
}
// function that renders the pictures based off the unique array
function renderProducts() {
  // console.log('How many times do I run?');
  uniqueArrayGenerator();
  for (var i = 0; i < Product.uniqueArray.length; i++){
    var temp = Product.uniqueArray.shift();
    // console.log('The Temp is #: ', temp);
    Product.pics[i].src = Product.all[temp].path;
    Product.pics[i].id=Product.all[temp].name;
    Product.all[temp].views++;
  }
}



// function that stores which picture is clicked on
var handleClick = function(event) {
  localStorage.Data = JSON.stringify(Product.all);
  votesTotal++;
  // console.log('votesTotal: ' + votesTotal);
  var chosenImage = event.target.id;

  // console.log('chosenImage: '+ event.target.id);

  for (var i = 0; i < Product.all.length; i++) {
    // console.log('productVotes: '+ Product.all[i].votes);
    // console.log('productName: '+ Product.all[i].name);

    if (Product.all[i].name === chosenImage) {
      Product.all[i].votes++;

    }


  }
  if (votesTotal === testNumber) {
    removeEventListener('click', handleClick);
    Product.container.remove();
    chartCreator();
  }

  renderProducts();

};

// allows user to click on the pictures
Product.container.addEventListener('click', handleClick);
// calls the function that stores local data
getStorageData();
// calls the function that renders the pictures
renderProducts();
// function to store which picture is clicked in local data
function getStorageData() {
  if(localStorage.Data) {
    Product.all = JSON.parse(localStorage.Data);
  }
}


// creates arrays to store data
Product.namesData = [];
Product.votesData = [];
Product.viewsData = [];
// creates a function to populate the chart
var chartData = function() {
  for (var i = 0; i < Product.all.length; i++) {
    Product.namesData.push(Product.all[i].name);
    Product.votesData.push(Product.all[i].votes);
    // console.log('total votes: ' + Product.all[i].votes);
    // console.log('votesdata: ' + Product.votesData);
  }

};

//function that creates the chart
function chartCreator(){
  chartData();
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Product.namesData,
      datasets: [{
        label: '# of Votes',
        data: Product.votesData,
        backgroundColor: [
          'rgba(255,0,0,1)',
          'rgba(0,128,0,1)',
          'rgba(255,0,0,1)',
          'rgba(0,128,0,1)',
          'rgba(255,0,0,1)',
          'rgba(0,128,0,1)',
          'rgba(255,0,0,1)',
          'rgba(0,128,0,1)',
          'rgba(255,0,0,1)',
          'rgba(0,128,0,1)',
          'rgba(255,0,0,1)',
          'rgba(0,128,0,1)',
          'rgba(255,0,0,1)',
          'rgba(0,128,0,1)',
          'rgba(255,0,0,1)',
          'rgba(0,128,0,1)',
          'rgba(255,0,0,1)',
          'rgba(0,128,0,1)',
          'rgba(255,0,0,1)',
          'rgba(0,128,0,1)',
        ],
        borderColor: [
          // 'rgba(255, 99, 132, 1)',
          // 'rgba(54, 162, 235, 1)',
          // 'rgba(255, 206, 86, 1)',
          // 'rgba(75, 192, 192, 1)',
          // 'rgba(153, 102, 255, 1)',
          // 'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}


