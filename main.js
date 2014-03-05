var storeApp = angular.module('AppStore', []);

storeApp.directive('item', function($scope, element) {
    return {
        restrice: "E",
        template: "<div><h3 ng-click=''>{{name}}</h3>" +
            "<div ng-show=''>{{description}}</div></div>"
    };
});

storeApp.controller('dataCtrl', function($scope, Data) {
    $scope.storeData = Data;
});