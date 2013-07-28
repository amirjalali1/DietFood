angular.module('app.services', []).
  value('version', '0.1');


app.factory('navSvc', function ($navigate) {
    return {
        slidePage: function (path, type) {
            $navigate.go(path, type);
        },
        back: function () {
            $navigate.back();
        }
    };
});

app.factory('DietFoodDb', function () {
    'use strict';
    var dietFoods = [
     {
         id: 1,
         FoodName: "قرمه سبزی",
         recepie: "ابتدا آب را گرم کرده"
     }
    ];
    return {
        getListOfFoods : function() {
            return dietFoods;
        }
    };
        
    


 

});