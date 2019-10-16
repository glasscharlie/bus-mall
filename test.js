'use strict';

//store dogs in terrels bassement
var terrelsBasement = [];

//build a dog constructor function
function Dog(name, age){
  this.name = name;
  this.age = age;
  terrelsBasement.push(this);
}

//instantiate dogs
new Dog ('fluffy', 13);
new Dog ('spike', 4);
new Dog ('tippy', 3);
new Dog ('peeve', 12);
new Dog ('fundito', 10);
new Dog ('mangosteen', 83);
new Dog ('larry', 33);

//stringify data
var terrelsBasementStringified = JSON.stringify(terrelsBasement);

localStorage.setItem('data' + terrelsBasementStringified);

var storageTerrelsBasement = localStorage.getitem('data');

var parsedTerrelsbasement = JSON.parsed(storageTerrelsBasement);

for (var i = 0; i < parsedTerrelsbasement; i++) {
  new Dog(parsedTerrelsbasement[i].name, parsedTerrelsbasement[i].age);
}
