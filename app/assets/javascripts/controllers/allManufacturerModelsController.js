angular.module('autoControllers')
    .controller('AllManufacturerModelsCtrl', ['$scope', 'SearchServices', 'CatalogServices',
        function($scope, SearchServices, CatalogServices) {
            $scope.manufacturer = CatalogServices.getManufacturer();
            //$scope.newOrUsed = CatalogServices.getNewOrUsed();

            if ($scope.manufacturer && $scope.manufacturer.name) {
                // SearchServices.getSearchResaulForAllManufacturerModels($scope.manufacturer.id + '?used=' + $scope.newOrUsed).success(function(data) {
                SearchServices.getSearchResaulForAllManufacturerModels($scope.manufacturer.id).success(function(data) {
                    $scope.models = data;
                });
            }

            $scope.setModelId = function(model) {
                CatalogServices.setModel(model);
            };
        }
    ]);