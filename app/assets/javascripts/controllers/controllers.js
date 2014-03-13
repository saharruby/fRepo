//'use strict';

/* Controllers */

var autoControllers = angular.module('autoControllers', []);

autoControllers.controller('ArticleListCtrl', ['$scope', 'NavServices', 'ArticlesServices',
    function($scope, NavServices, ArticlesServices) {
        $scope.articles = {};
        var dicTypes = {
            "1": 'חדשות הרכב',
            "2": 'מבחני רכב',
            "3": 'שטח',
            "4": 'ירוק',
            "5": 'ספורט מוטורי',
            "6": 'מגזין ודעות',
        };

        angular.forEach(dicTypes, function(item, key) {
            $scope.articles[key] = {
                category: item,
                art: []
            };
        });

        ArticlesServices.getAllArticles().success(function(data) {
            angular.forEach(data, function(item, index) {
                $scope.articles[item.categoryId].art.push(item);
            });
            //console.log(data);
            //NavServices.broadcastNavIdMsg('2');
        });
    }
]);

autoControllers.controller('ArticleCtrl', ['$scope', '$routeParams', '$sce', 'ArticlesServices',
    function($scope, $routeParams, $sce, ArticlesServices) {
        $scope.article_id = $routeParams.articleId;

        ArticlesServices.getArticleById($scope.article_id).success(function(data) {
            $scope.article = data[0];
            console.log($scope.article);
            //console.log($scope.article.content);
        });
    }
]);

autoControllers.controller('ArticlesCategoryCtrl', ['$scope', '$routeParams', 'ArticlesServices',
    function($scope, $routeParams, ArticlesServices) {
        $scope.category_id = $routeParams.categoryId;
        $scope.firstArticle = {};

        ArticlesServices.getAllArticlesByCatregoryId($scope.category_id).success(function(data) {
            $scope.firstArticle = data[0];
            $scope.articles = data.slice(1, data.length);
        });
    }
]);

autoControllers.controller('ManufacturersCtrl', ['$scope', 'ManufacturersServices', 'CatalogServices',
    function($scope, ManufacturersServices, CatalogServices) {
        $scope.manufacturers = {};

        ManufacturersServices.getAllManufacturers().success(function(data) {
            angular.forEach(data, function(item, index) {
                if (!$scope.manufacturers[item.name.charAt(0)]) {
                    $scope.manufacturers[item.name.charAt(0)] = {};
                    $scope.manufacturers[item.name.charAt(0)].key = '';
                    $scope.manufacturers[item.name.charAt(0)].collection = [];
                }
                $scope.manufacturers[item.name.charAt(0)].key = item.name.charAt(0);
                $scope.manufacturers[item.name.charAt(0)].collection.push(item);
            });
        });

        $scope.onSelectMF = function(manufacturer) {
            CatalogServices.setManufacturerId(manufacturer.id);
            CatalogServices.setManufacturer(manufacturer);
        };
    }
]);

autoControllers.controller('ModelsCtrl', ['$scope', 'ManufacturersServices', 'CatalogServices',
    function($scope, ManufacturersServices, CatalogServices) {
        $scope.manufacturerId = CatalogServices.getManufacturerId();
        $scope.models = {};
        $scope.newOrUsed = 'new';

        ManufacturersServices.getAllModelsByManufacturerId($scope.manufacturerId).success(function(data) {
            console.log(data);
            angular.forEach(data, function(item, index) {
                if (!$scope.models[item.name.charAt(0)]) {
                    $scope.models[item.name.charAt(0)] = {};
                    $scope.models[item.name.charAt(0)].key = '';
                    $scope.models[item.name.charAt(0)].collection = [];
                }
                $scope.models[item.name.charAt(0)].key = item.name.charAt(0);
                $scope.models[item.name.charAt(0)].collection.push(item);
            });
        });

        $scope.onSelectM = function(model) {
            CatalogServices.setModelId(model.id);
            CatalogServices.setModel(model);
            CatalogServices.setNewOrUsed($scope.newOrUsed);
            console.log($scope.newOrUsed);
        };
    }
]);

autoControllers.controller('CatalogCtrl', ['$scope', 'ManufacturersServices', 'CatalogServices',
    function($scope, ManufacturersServices, CatalogServices) {
        $scope.manufacturer = {};
        $scope.model = {};

        $scope.manufactureId = 0;
        $scope.modelId = 0;

        $scope.newOrUsed = '';
        $scope.searchUrl = '';
        $scope.manufacturerName = '<  כל היצרנים';
        $scope.modelName = '<  כל הדגמים';

        $scope.$watch(CatalogServices.manufacturer, function(newData) {
            $scope.manufacturer = CatalogServices.getManufacturer();
            if ($scope.manufacturer && $scope.manufacturer.name) {
                $scope.manufactureId = $scope.manufacturer.id;
                $scope.manufacturerName = '<  ' + $scope.manufacturer.name;
                $scope.searchUrl = 'manufacturers/' + $scope.manufacturer.id + '?isSelected';
            }
        }, true);

        $scope.$watch(CatalogServices.model, function(newData) {
            $scope.model = CatalogServices.getModel();
            if ($scope.model && $scope.model.name) {
                $scope.modelId = $scope.model.id;
                $scope.modelName = '<  ' + $scope.model.name;
                $scope.searchUrl = 'manufacturers/' + $scope.manufacturer.id + '/' + $scope.model.id;
                console.log($scope.newOrUsed);
            }
        }, true);

        console.log('From Catalog CTRL');
    }
]);

autoControllers.controller('AllManufacturerModelsCtrl', ['$scope', 'SearchServices', 'CatalogServices',
    function($scope, SearchServices, CatalogServices) {
        $scope.test = "All_Manufacturer_Models_Ctrl";
        $scope.manufacturer = CatalogServices.getManufacturer();

        if ($scope.manufacturer && $scope.manufacturer.name) {
            SearchServices.getSearchResaulForAllManufacturerModels($scope.manufacturer.id).success(function(data) {
                $scope.models = data;
                console.log(data);
            });
        }
        console.log($scope.manufacturer);
    }
]);

autoControllers.controller('NavCtrl', ['$scope', 'NavServices',
    function($scope, NavServices) {
        // $scope.$on('handelNavIdChanged', function() {
        //     $scope.currentNav = NavServices.navIdMsg;

        //     angular.forEach($scope.navs, function(nav, i) {
        //         if (nav.navId == $scope.currentNav) {
        //             nav.route = '#';
        //             // $scope.curClass = "right-off-canvas-toggle";
        //         }
        //     });
        // });

        $scope.navs = [{
            name: 'קטלוג הרכב',
            img: '......',
            route: '#/articles/carcatalog',
            navId: '1'
        }, {
            name: 'כתבות',
            img: '......',
            route: '#/articles',
            navId: '2'
        }, {
            name: 'מדריך קניה',
            img: '......',
            route: '#',
            navId: '3'
        }, {
            name: 'יייעוץ חינם לקניית רכב',
            img: '......',
            route: '#',
            navId: '4'
        }, {
            name: 'מועדפים',
            img: '......',
            route: '#',
            navId: '5'
        }];
    }
]);