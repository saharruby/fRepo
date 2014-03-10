// 'use strict';

/* Services */

var autoServices = angular.module('autoServices', ['ngResource']);

autoServices.factory('ArticleServices', ['$resource',
    function($resource) {
        return $resource('articles.json');
    }
]);