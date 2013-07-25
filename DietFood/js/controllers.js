



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
