angular.module('autoControllers')
    .controller('ManufacturersCtrl', ['$scope', 'ManufacturersServices', 'CatalogServices',
        function($scope, ManufacturersServices, CatalogServices) {
            $scope.manufacturers = {};

            ManufacturersServices.getAllManufacturers().success(function(data) {
                angular.forEach(data, function(item, index) {
                    if (!$scope.manufacturers[item.name.charAt(0)]) {
                        $scope.manufacturers[item.name.charAt(0)] = {};
                        $scope.manufacturers[item.name.charAt(0)].key = '';
                        $scope.manufacturers[item.name.charAt(0)].collection = [];
                    }
                    $scope.manufacturers[item.name.charAt(0)].key = item.name.charAt(0);
                    $scope.manufacturers[item.name.charAt(0)].collection.push(item);
                });
            });

            $scope.onSelectMF = function(manufacturer) {
                CatalogServices.setManufacturer(manufacturer);
                CatalogServices.setModel({});
            };
        }
    ]);