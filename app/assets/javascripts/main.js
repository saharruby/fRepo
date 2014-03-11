// 'use strict';

/* App Module */
var autoModuleApp = angular.module("main", [
    'ngRoute',
    'ngResource',
    'autoServices',
    'autoControllers',
    'autoDirectives'
]);

autoModuleApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/articles', {
            templateUrl: 'partials/allArticles.html',
            controller: 'ArticleListCtrl'
        }).when('/articles/:articleId', {
            templateUrl: 'partials/article.html',
            controller: 'ArticleCtrl'
        }).when('/articles/category/:categoryId', {
            templateUrl: 'partials/allArticlesOfCategory.html',
            controller: 'ArticlesCategoryCtrl'
        }).otherwise({
            redirectTo: '/articles'
        });
    }
]);