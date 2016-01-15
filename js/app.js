'use strict';

var hours = ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allKiosk =[];

function Kiosk(minCust, maxCust, avgCupPerCustomer, avgLbsPerCustomer, kioskName) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCupPerCustomer = avgCupPerCustomer;
  this.avgLbsPerCustomer = avgLbsPerCustomer;
  this.kioskName = kioskName;
  allKiosk.push(this);

  this.averageCustomerPerHour = function () {
       return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
   };
   this.averageCupsPerHour = function() {
        return this.averageCustomerPerHour() * this.avgCupPerCustomer;
   };
   this.brewedPoundsPerHour = function() {
        return (this.averageCupsPerHour() / 20);
   };
    this.toGoPoundsPerHour = function() {
         return this.averageCustomerPerHour() * this.avgLbsPerCustomer;
   };
   this.totalPoundsPerHour = function() {
       return this.brewedPoundsPerHour() + this.toGoPoundsPerHour();
   };

   this.hourlyBeansByLb = [];
   this.fillArray =  function() {
     for (var i = 0; i < hours.length; i++) {
       this.hourlyBeansByLb.push(this.totalPoundsPerHour());
     };
   };
   this.fillArray();
};

var pikePlace = new Kiosk(14, 55, 1.2, 3.7 , 'Pike Place');
var capitolHill = new Kiosk(32, 48, 3.2, 0.4, 'Capitol Hill');
var seattlePublicLibrary = new Kiosk(49, 75, 2.6, 0.2, 'Seattle Public Library');
var southLakeUnion = new Kiosk(35, 88, 1.3, 3.7, 'South Lake Union');
var seaTacAirport = new Kiosk(68, 124, 1.1, 2.7, 'Seatac Airport');
var websiteSales = new Kiosk(3, 6, 0, 6.7, 'Web Store');
//
var sectionEl = document.getElementById('anchor');
var tableEl = document.createElement('table');
var rowOne = document.createElement('tr');
var cellOne = document.createElement('th');

sectionEl.appendChild(tableEl);
cellOne.textContent = "Location";
rowOne.appendChild(cellOne);
tableEl.appendChild(rowOne);

for (var i = 0; i < hours.length; i++){
  var cell = document.createElement('th');
  cell.textContent = hours[i];
  rowOne.appendChild(cell);
}

function renderTable() {
sectionEl;
console.log(sectionEl);
    for (var x =0; x <allKiosk.length; x++){
      var rows = document.createElement('tr');
      var firstCell = document.createElement('td');
      firstCell.textContent = allKiosk[x].kioskName;
      rows.appendChild(firstCell);
        for (var y =0; y <hours.length; y++){
        var cellTwo = document.createElement('td');
        cellTwo.textContent = allKiosk[x].hourlyBeansByLb[y].toFixed(2);
        rows.appendChild(cellTwo);
          }
        tableEl.appendChild(rows);
      }
      console.log("allKiosk before the clear: " + allKiosk);
      allKiosk = [];
      console.log("allKiosk after the clear: " + allKiosk);
}

var newKiosk = document.getElementById('newKiosk');

newKiosk.addEventListener('submit', handleNewKiosk);

function handleNewKiosk(event) {
  console.log(event);
  event.preventDefault();

  if (!event.target.minCust.value || !event.target.maxCust.value || !event.target.avgCupPerCustomer.value
  || !event.target.avgLbsPerCustomer.value || !event.target.kioskName.value) {
    return alert('Fields cannot be empty!');
   }
   var minCust = event.target.minCust.value;
   var maxCust = event.target.maxCust.value;
   var avgCupPerCustomer = event.target.avgCupPerCustomer.value;
   var  avgLbsPerCustomer= event.target.avgLbsPerCustomer.value;
   var  kioskName= event.target.kioskName.value;
   console.log("allKiosk before createNewKiosk = " + allKiosk);
   var createNewKiosk = new Kiosk(minCust, maxCust, avgCupPerCustomer, avgLbsPerCustomer, kioskName);
   console.log("createNewKiosk makes this: " + createNewKiosk);
   minCust = "";
   maxCust = "";
   avgCupPerCustomer = "";
   avgLbsPerCustomer = "";
   kioskName = "";
  console.log("allKiosk before the push: " + allKiosk);
    // allKiosk.push(createNewKiosk);
    console.log("allKiosk.push(createNewKiosk) = " + allKiosk);
    renderTable();
 }
 renderTable();
