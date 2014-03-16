angular.module('autoServices')
    .factory('ManufacturersServices', ['$http',
        function($http) {
            var resourcemf = {};

            resourcemf.getAllManufacturers = function() {
                return $http.get('manufacturers.json', {
                    headers: {
                        'Content-type': 'application/json'
                    }
                });
            };

            resourcemf.getAllModelsByManufacturerId = function(mId) {
                return $http.get('manufacturers/' + mId + '/models.json', {
                    headers: {
                        'Content-type': 'application/json'
                    }
                });
            };

            resourcemf.getAllManufacturerModelsByManufacturerId = function(mId) {
                return $http.get('manufacturers/' + mId + '/models.json', {
                    headers: {
                        'Content-type': 'application/json'
                    }
                });
            };

            return resourcemf;
        }
    ]);