angular.module('autoServices')
    .factory('SearchServices', ['$http',
        function($http) {
            var resource = {};

            resource.getSearchResaulForAllManufacturerModels = function(manufacturerId) {
                return $http.get('manufacturer/' + manufacturerId + '.json', {
                    headers: {
                        'Content-type': 'application/json'
                    }
                });
            };

            resource.getSearchResaulForModelByModelId = function(modelId) {
                return $http.get('models/' + modelId + '.json', {
                    headers: {
                        'Content-type': 'application/json'
                    }
                });
            };

            // resource.getSearchModelsByModelId = function(mId) {
            //     return $http.get('manufacturers/' + mId + '/models.json', {
            //         headers: {
            //             'Content-type': 'application/json'
            //         }
            //     });
            // };

            return resource;
        }
    ]);