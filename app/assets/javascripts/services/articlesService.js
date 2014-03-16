angular.module('autoServices')
    .factory('ArticlesServices', ['$http',
        function($http) {
            var resource = {};

            resource.getAllArticles = function() {
                return $http.get('articles.json', {
                    headers: {
                        'Content-type': 'application/json'
                    }
                });
            };

            resource.getAllArticlesByCatregoryId = function(categoryId) {
                return $http.get('articles.json?category=' + categoryId, {
                    headers: {
                        'Content-type': 'application/json'
                    }
                });
            };

            resource.getArticleById = function(articleId) {
                return $http.get('articles/' + articleId + '.json', {
                    headers: {
                        'Content-type': 'application/json'
                    }
                });
            };

            return resource;
        }
    ]);