// 'use strict';

/* App Module */
var autoModuleApp = angular.module("main", [
    'ngRoute',
    'ngResource',
    'autoServices',
    'autoControllers'
]);

autoModuleApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/articles', {
            templateUrl: 'partials/allArticles.html',
            controller: 'ArticleListCtrl'
        }).when('/articles/:articleId', {
            templateUrl: 'partials/article.html',
            controller: 'ArticleCtrl'
        }).otherwise({
            redirectTo: '/articles'
        });
    }
]);