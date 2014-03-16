angular.module('autoControllers')
    .controller('CatalogCtrl', ['$scope', 'ManufacturersServices', 'CatalogServices',
        function($scope, ManufacturersServices, CatalogServices) {
            $scope.manufacturer = {};
            $scope.model = {};
            $scope.manufactureId = 0;
            $scope.modelId = 0;
            $scope.newOrUsed = '';
            $scope.searchUrl = '';
            $scope.manufacturerName = '<  כל היצרנים';
            $scope.modelName = '<  כל הדגמים';

            $scope.$watch(CatalogServices.manufacturer, function(newData) {
                $scope.manufacturer = CatalogServices.getManufacturer();
                if ($scope.manufacturer && $scope.manufacturer.name) {
                    $scope.manufactureId = $scope.manufacturer.id;
                    $scope.manufacturerName = '<  ' + $scope.manufacturer.name;
                    $scope.searchUrl = 'manufacturers/' + $scope.manufacturer.id + '?isSelected';
                }
            }, true);

            $scope.$watch(CatalogServices.model, function(newData) {
                $scope.model = CatalogServices.getModel();
                if ($scope.model && $scope.model.name) {
                    $scope.modelId = $scope.model.id;
                    $scope.modelName = '<  ' + $scope.model.name;
                    $scope.searchUrl = 'manufacturers/' + $scope.manufacturer.id + '/models/' + $scope.model.id + '?isSelected';
                    //console.log($scope.newOrUsed);
                }
            }, true);
        }
    ]);