'use strict';
var testNumber = 25
Product.pics = [
  document.getElementById('left'),
  document.getElementById('right'),
  document.getElementById('center')
];
Product.container = document.getElementById('image_container');

Product.all = [];
Product.uniqueArray = [];
var votesTotal = 0;

function Product(name) {
  this.views = 0;
  this.votes = 0;
  this.name = name;
  this.title=name;
  this.path = `images/${name}.jpg`;
  Product.all.push(this);
}

function makeRandom() {
  return Math.floor(Math.random() * Product.all.length);
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




var handleClick = function(event) {


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
    // myChart.update();
  }
  renderProducts();

};



//Event Listeners
Product.container.addEventListener('click', handleClick);

renderProducts();


Product.namesData = [];
Product.votesData = [];
Product.viewsData = [];

var chartData = function() {
  for (var i = 0; i < Product.all.length; i++) {
    Product.namesData.push(Product.all[i].name);
    Product.votesData.push(Product.all[i].votes);
    console.log('total votes: ' + Product.all[i].votes);
    console.log('votesdata: ' + Product.votesData);
  }

};
// chartData();

{/* <script> */}
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
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
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
// </script>
}




