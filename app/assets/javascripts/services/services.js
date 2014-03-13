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

autoServices.factory('CatalogServices', ['$routeParams',
    function($routeParams) {
        var msgService = {};
        msgService.manufactureId = '';
        msgService.manufacturer = {};
        msgService.modelId = '';
        msgService.model = {};
        msgService.newOrUsed = '';

        msgService.setManufacturerId = function(id) {
            msgService.manufactureId = id;
        };

        msgService.setManufacturer = function(manufacturer) {
            msgService.manufacturer = manufacturer;
        };

        msgService.getManufacturer = function() {
            if ($routeParams.isSelected) {
                return msgService.manufacturer;
            }
            return null;
        };

        msgService.getManufacturerId = function() {
            if ($routeParams.isSelected) {
                return msgService.manufactureId;
            }
            return 0;
        };

        msgService.setModelId = function(id) {
            msgService.modelId = id;
        };

        msgService.setModel = function(model) {
            msgService.model = model;
        };

        msgService.getModel = function() {
            if ($routeParams.isSelected) {
                return msgService.model;
            }
            return null;
        };

        msgService.getModelId = function() {
            if ($routeParams.isSelected) {
                return msgService.modelId;
            }
            return 0;
        };

        msgService.setNewOrUsed = function(id) {
            msgService.newOrUsed = id;
        };

        msgService.getNewOrUsed = function() {
            if ($routeParams.isSelected) {
                return msgService.newOrUsed;
            }
            return 0;
        };

        return msgService;
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

autoServices.factory('SearchServices', ['$http',
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

        // resource.getAllManufacturerModelsByManufacturerId = function(mId) {
        //     return $http.get('manufacturers/' + mId + '/models.json', {
        //         headers: {
        //             'Content-type': 'application/json'
        //         }
        //     });
        // };

        return resource;
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