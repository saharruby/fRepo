// 'use strict';

/* Services */

var autoServices = angular.module('autoServices', ['ngResource']);

autoServices.factory('NavServices', ['$rootScope',
    function($rootScope) {
        var sharedService = {};

        sharedService.navIdMsg = '';

        sharedService.broadcastNavIdMsg = function(id) {
            this.navIdMsg = id;
            this.broadcast('handelNavIdChanged');
        };

        sharedService.broadcast = function(eventMsg) {
            $rootScope.$broadcast(eventMsg);
            console.log('SEND EVENT : ' + eventMsg);
        };

        return sharedService;
    }
]);

autoServices.factory('ManufacturersServices', ['$http',
    function($http) {
        var resourcemf = {};

        resourcemf.getAllManufacturers = function() {
            return $http.get('manufacturers.json', {
                headers: {
                    'Content-type': 'application/json'
                }
            });
        };

        return resourcemf;
    }
]);


autoServices.factory('ArticlesServices', ['$http',
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