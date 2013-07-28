



app.controller('HomeCtrl', function ($scope, navSvc, $navigate) {
    

    init();

    function init() {
        $scope.$navigate = $navigate;
        $scope.slidePage = function (path, type) {
            navSvc.slidePage(path, type);
        };
        $scope.back = function () {
            navSvc.back();
        };
        $scope.names = ['Dave', 'Napur', 'Heedy', 'Shriva'];
    }

  
});



app.controller('menueCtrl', function ($scope, navSvc, $navigate, DietFoodDb) {


    init();

    function init() {
        $scope.foodsName = DietFoodDb.getListOfFoods();
        $scope.$navigate = $navigate;
        $scope.slidePage = function (path, type) {
            navSvc.slidePage(path, type);
        };
        $scope.back = function () {
            navSvc.back();
        };
        $scope.names = ['Dave', 'Napur', 'Heedy', 'Shriva'];
    }


});



