angular.module('autoControllers')
    .controller('CarModelCtrl', ['$scope', 'SearchServices', 'CatalogServices',
        function($scope, SearchServices, CatalogServices) {
            $scope.modelId = CatalogServices.getModelId();
            //$scope.newOrUsed = CatalogServices.getNewOrUsed();
            //console.log($scope.newOrUsed);

            if ($scope.modelId > 0) {
                // SearchServices.getSearchResaulForModelByModelId($scope.modelId + '?used=' + $scope.newOrUsed).success(function(data) {
                SearchServices.getSearchResaulForModelByModelId($scope.modelId).success(function(data) {
                    $scope.model = data[0];
                });
            }
        }
    ]);