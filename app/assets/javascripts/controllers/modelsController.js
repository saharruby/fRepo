angular.module('autoControllers')
    .controller('ModelsCtrl', ['$scope', 'ManufacturersServices', 'CatalogServices',
        function($scope, ManufacturersServices, CatalogServices) {
            $scope.manufacturerId = CatalogServices.getManufacturerId();
            $scope.models = {};
            $scope.newOrUsed = 'true';

            ManufacturersServices.getAllModelsByManufacturerId($scope.manufacturerId).success(function(data) {
                console.log(data);
                angular.forEach(data, function(item, index) {
                    if (!$scope.models[item.name.charAt(0)]) {
                        $scope.models[item.name.charAt(0)] = {};
                        $scope.models[item.name.charAt(0)].key = '';
                        $scope.models[item.name.charAt(0)].collection = [];
                    }
                    $scope.models[item.name.charAt(0)].key = item.name.charAt(0);
                    $scope.models[item.name.charAt(0)].collection.push(item);
                });
            });

            $scope.onSelectM = function(model) {
                CatalogServices.setModel(model);
            };
        }
    ]);