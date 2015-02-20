angular.module('myApp').factory('newMealService', [function(){
	var charges = {	
			subtotal: 0, 
			tip: 0, 
			total: 0,

			// Customer Charges
			computeTotals : function(baseMealPrice, taxRate, tipPercentage) {
				charges.subtotal = (baseMealPrice * (1 + taxRate/100));
				charges.tip = charges.subtotal * tipPercentage/100;
				charges.total = charges.subtotal + charges.tip;
			}, 
			resetCharges : function() {
				charges.subtotal = 0; 
				charges.tip = 0;
				charges.total = 0;
			}

	}
	return charges;
}]);