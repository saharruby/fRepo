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
        $routeProvider
            .when('/articles', {
                templateUrl: 'partials/allArticles.html',
                controller: 'ArticleListCtrl'
            })
            .when('/articles/carcatalog', {
                templateUrl: 'partials/catalog.html',
                controller: 'CatalogCtrl'
            })
            .when('/articles/carcatalog/manufacturers', {
                templateUrl: 'partials/manufacturers.html',
                controller: 'ManufacturersCtrl'
            })
            .when('/articles/carcatalog/manufacturers/:id', {
                templateUrl: 'partials/allManufacturerModelsView.html',
                controller: 'AllManufacturerModelsCtrl'
            })
            .when('/articles/carcatalog/manufacturers/:id/models/:id', {
                templateUrl: 'partials/carModelView.html',
                controller: 'CarModelCtrl'
            })
            .when('/articles/carcatalog/models', {
                templateUrl: 'partials/modelsView.html',
                controller: 'ModelsCtrl'
            })
            .when('/articles/carcatalog/models/:id', {
                templateUrl: 'partials/carModelView.html',
                controller: 'CarModelCtrl'
            })
            .when('/articles/:articleId', {
                templateUrl: 'partials/article.html',
                controller: 'ArticleCtrl'
            })
            .when('/articles/category/:categoryId', {
                templateUrl: 'partials/allArticlesOfCategory.html',
                controller: 'ArticlesCategoryCtrl'
            })
            .otherwise({
                redirectTo: '/articles'
            });
    }
]);