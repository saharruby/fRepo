var storeApp = angular.module('AppStore', []);

storeApp.directive('itemprod', function($scope, element) {
    return {
        restrice: "E",
        trasclude: true,
        scope: {},
        template: "<div ng-trasclude ng-click='clickFunc()'></div>",
        link: function(scope, element) {
            scope.isClicked = false;
        },
        controller: function($scope, element) {
            $scope.clickFunc = function() {
                $scope.isClicked = !$scope.isClicked;
            }
        }
    };
});

storeApp.controller('dataCtrl', function($scope, Data) {
    $scope.storeData = Data;
});