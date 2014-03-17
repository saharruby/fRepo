angular.module('autoControllers')
    .controller('ModelVersionsCtrl', ['$scope', 'VersionsServices', 'CatalogServices',
        function($scope, VersionsServices, CatalogServices) {
            $scope.modelId = CatalogServices.getModelId();

            if ($scope.modelId > 0) {
                VersionsServices.getAllModelVersionsByModelId($scope.modelId).success(function(data) {
                    $scope.versions = data;
                    console.log(data);
                });
            }
        }
    ]);