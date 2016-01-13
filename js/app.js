'use strict';

var hours = ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function Kiosk(minCust, maxCust, avgCupPerCustomer, avgLbsPerCustomer) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCupPerCustomer = avgCupPerCustomer;
  this.avgLbsPerCustomer = avgLbsPerCustomer;
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

var pikePlace = new Kiosk(14, 55, 1.2, 3.7);
var capitolHill = new Kiosk(32, 48, 3.2, 0.4);
var seattlePublicLibrary = new Kiosk(49, 75, 2.6, 0.2);
var southLakeUnion = new Kiosk(35, 88, 1.3, 3.7);
var seaTacAirport = new Kiosk(68, 124, 1.1, 2.7);
var websiteSales = new Kiosk(3, 6, 0, 6.7);
//
function renderTable() {
  var tableBody = document.getElementById('tableOne');
  var rowOne = document.createElement('tr');
  var cellOne = document.createElement('th');
  cellOne.textContent = "Name:";
  rowOne.appendChild(cellOne);
  tableBody.appendChild(rowOne);

  for (var i = 0; i < hours.length; i++){
    var cell = document.createElement('th');
    cell.textContent = hours[i];
    rowOne.appendChild(cell);
  }
}

renderTable();





//my js file will be here //
// var pikePlace = {
//   minCust: 14,
//   maxCust: 55,
//   avgCupPerCustomer: 1.2,
//   avgLbsPerCustomer: 3.7,
//   storeHrs: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
//   averageCustomerPerHour: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//   },
//   averageCupsPerHour: function() {
//     return this.averageCustomerPerHour() * this.avgCupPerCustomer;
//   },
//   brewedPoundsPerHour: function() {
//     return (this.averageCupsPerHour() / 20);
//   },
//   toGoPoundsPerHour: function() {
//     return this.averageCustomerPerHour() * this.avgLbsPerCustomer;
//   },
//   totalPoundsPerHour:function() {
//     return this.brewedPoundsPerHour() + this.toGoPoundsPerHour();
//   }
// };

// var capHill = {
//   minCust: 32,
//   maxCust: 48,
//   avgCupPerCustomer: 3.2,
//   avgLbsPerCustomer: 0.4,
//   storeHrs: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
//   averageCustomerPerHour: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//   },
//   averageCupsPerHour: function() {
//     return this.averageCustomerPerHour() * this.avgCupPerCustomer;
//   },
//   brewedPoundsPerHour: function() {
//     return (this.averageCupsPerHour() / 20);
//   },
//   toGoPoundsPerHour: function() {
//     return this.averageCustomerPerHour() * this.avgLbsPerCustomer;
//   },
//   totalPoundsPerHour:function() {
//     return this.brewedPoundsPerHour() + this.toGoPoundsPerHour();
//   }
// };
//
// var seaPubLib = {
//   minCust: 49,
//   maxCust: 75,
//   avgCupPerCustomer: 2.6,
//   avgLbsPerCustomer: 0.2,
//   storeHrs: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
//   averageCustomerPerHour: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//   },
//   averageCupsPerHour: function() {
//     return this.averageCustomerPerHour() * this.avgCupPerCustomer;
//   },
//   brewedPoundsPerHour: function() {
//     return (this.averageCupsPerHour() / 20);
//   },
//   toGoPoundsPerHour: function() {
//     return this.averageCustomerPerHour() * this.avgLbsPerCustomer;
//   },
//   totalPoundsPerHour:function() {
//     return this.brewedPoundsPerHour() + this.toGoPoundsPerHour();
//   }
// };
//
// var SouthLakeUnion = {
//   minCust: 35,
//   maxCust: 88,
//   avgCupPerCustomer: 1.3,
//   avgLbsPerCustomer: 3.7,
//   storeHrs: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
//   averageCustomerPerHour: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//   },
//   averageCupsPerHour: function() {
//     return this.averageCustomerPerHour() * this.avgCupPerCustomer;
//   },
//   brewedPoundsPerHour: function() {
//     return (this.averageCupsPerHour() / 20);
//   },
//   toGoPoundsPerHour: function() {
//     return this.averageCustomerPerHour() * this.avgLbsPerCustomer;
//   },
//   totalPoundsPerHour:function() {
//     return this.brewedPoundsPerHour() + this.toGoPoundsPerHour();
//   }
// };
//
// var SeaTac = {
//   minCust: 68,
//   maxCust: 124,
//   avgCupPerCustomer: 1.1,
//   avgLbsPerCustomer: 2,7,
//   storeHrs: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
//   averageCustomerPerHour: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//   },
//   averageCupsPerHour: function() {
//     return this.averageCustomerPerHour() * this.avgCupPerCustomer;
//   },
//   brewedPoundsPerHour: function() {
//     return (this.averageCupsPerHour() / 20);
//   },
//   toGoPoundsPerHour: function() {
//     return this.averageCustomerPerHour() * this.avgLbsPerCustomer;
//   },
//   totalPoundsPerHour:function() {
//     return this.brewedPoundsPerHour() + this.toGoPoundsPerHour();
//   }
// };
//
// var webSales = {
//   minCust: 3,
//   maxCust: 6,
//   avgCupPerCustomer: 0,
//   avgLbsPerCustomer: 6.7,
//   storeHrs: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
//   averageCustomerPerHour: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//   },
//   averageCupsPerHour: function() {
//     return this.averageCustomerPerHour() * this.avgCupPerCustomer;
//   },
//   brewedPoundsPerHour: function() {
//     return (this.averageCupsPerHour() / 20);
//   },
//   toGoPoundsPerHour: function() {
//     return this.averageCustomerPerHour() * this.avgLbsPerCustomer;
//   },
//   totalPoundsPerHour:function() {
//     return this.brewedPoundsPerHour() + this.toGoPoundsPerHour();
//   }
// };
