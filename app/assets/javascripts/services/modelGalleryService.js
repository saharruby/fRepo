angular.module('autoServices')
    .factory('GalleryServices', ['$http',
        function($http) {
            var resource = {};

            resource.getAllModelGalleryByGalleryId = function(galleryId) {
                return $http.get('gallery/' + galleryId + '.json', {
                    headers: {
                        'Content-type': 'application/json'
                    }
                });
            };

            return resource;
        }
    ]);