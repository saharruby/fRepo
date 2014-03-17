angular.module("main")
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/articles', {
                    templateUrl: 'partials/allArticlesView.html',
                    controller: 'ArticleListCtrl'
                })
                .when('/articles/carcatalog', {
                    templateUrl: 'partials/catalogView.html',
                    controller: 'CatalogCtrl'
                })
                .when('/articles/carcatalog/manufacturers', {
                    templateUrl: 'partials/manufacturersView.html',
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
                .when('/carcatalog/model/review', {
                    templateUrl: 'partials/modelReviewView.html',
                    controller: 'CarModelCtrl'
                })
                .when('/articles/:articleId', {
                    templateUrl: 'partials/articleView.html',
                    controller: 'ArticleCtrl'
                })
                .when('/articles/category/:categoryId', {
                    templateUrl: 'partials/allArticlesOfCategoryView.html',
                    controller: 'ArticlesCategoryCtrl'
                })
                .otherwise({
                    redirectTo: '/articles'
                });
        }
    ]);