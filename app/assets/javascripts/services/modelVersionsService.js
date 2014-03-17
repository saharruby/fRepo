angular.module('autoServices')
    .factory('VersionsServices', ['$http',
        function($http) {
            var resource = {};

            resource.getAllModelVersionsByModelId = function(modelId) {
                return $http.get('models/' + modelId + '/versions.json', {
                    headers: {
                        'Content-type': 'application/json'
                    }
                });
            };

            return resource;
        }
    ]);