//my js file will be here //
var pikePlace = {
  minCust: 14,
  maxCust: 55,
  avgCupPerCustomer: 1.2,
  avgLbsPerCustomer: 3.7,
  storeHrs: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
  averageCustomerPerHour: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  averageCupsPerHour: function() {
    return this.averageCustomerPerHour() * this.avgCupPerCustomer;
  },
  brewedPoundsPerHour: function() {
    return (this.averageCupsPerHour() / 20);
  },
  toGoPoundsPerHour: function() {
    return this.averageCustomerPerHour() * this.avgLbsPerCustomer;
  },
  totalPoundsPerHour:function() {
    return this.brewedPoundsPerHour() + this.toGoPoundsPerHour();
  }
};
