angular.module('myApp').factory("myEarningsService", [function () {
        var myearnings = {

                tipTotal: 0,
                mealCount: 0,
                avgTip: 0,

                get: function() {
                    return myearnings;
                },
                add: function(tip) {
                    myearnings.tipTotal += tip;
                    myearnings.mealCount++;
                    myearnings.avgTip = myearnings.tipTotal / myearnings.mealCount;
                },
                resetEarnings: function() {
                    myearnings.tipTotal = 0;
                    myearnings.mealCount = 0;
                    myearnings.avgTip = 0;
                }
        }
        return myearnings;
    }]);