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