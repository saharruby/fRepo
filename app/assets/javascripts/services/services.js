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

autoServices.factory('ArticleServices', ['$resource',
    function($resource) {
        return $resource('articles.json');
    }
]);