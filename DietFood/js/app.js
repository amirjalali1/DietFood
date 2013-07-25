var app = angular.module('DietFoodApp', ["ngMobile", 'ajoslin.mobile-navigate', 'app.services']);


app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'HomeCtrl',
                templateUrl: 'partials/homeView.html'
            })
        .when('/mainMenu',
        {
            controller: 'menueCtrl',
            templateUrl: 'partials/menueView.html'
        })
      .otherwise({redirectTo: '/'});
    
});
