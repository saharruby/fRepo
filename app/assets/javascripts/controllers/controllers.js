//'use strict';

/* Controllers */

var autoControllers = angular.module('autoControllers', []);

autoControllers.controller('ArticleListCtrl', ['$scope', '$http', 'NavServices', // 'AutoService',
    function($scope, $http, NavServices) { //, AutoService) {
        //$scope.allArticles = AutoService.get();
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

        var url = 'articles.json';
        $http.get(url, {
            headers: {
                'Content-type': 'application/json'
            }
        }).success(function(data) {
            angular.forEach(data, function(item, index) {
                $scope.articles[item.categoryId].art.push(item);
            });
            //NavServices.broadcastNavIdMsg('2');
        });
    }
]);

autoControllers.controller('ArticleCtrl', ['$scope', '$http', '$routeParams', '$sce',
    function($scope, $http, $routeParams, $sce) {
        $scope.article_id = $routeParams.articleId;
        var url = 'articles/' + $scope.article_id + '.json';
        $http.get(url, {
            headers: {
                'Content-type': 'application/json'
            }
        }).success(function(data) {
            $scope.article = data[0];
        });
    }
]);

autoControllers.controller('ArticlesCategoryCtrl', ['$scope', '$http', '$routeParams',
    function($scope, $http, $routeParams) {
        $scope.category_id = $routeParams.categoryId;
        $scope.firstArticle = {};

        var url = 'articles.json?category=' + $scope.category_id;
        $http.get(url, {
            headers: {
                'Content-type': 'application/json'
            }
        }).success(function(data) {
            $scope.firstArticle = data[0];
            $scope.articles = data.slice(1, data.length);
            console.log(data);
        });
    }
]);

autoControllers.controller('NavCtrl', ['$scope', 'NavServices',
    function($scope, NavServices) {
        // $scope.$on('handelNavIdChanged', function() {
        //     $scope.currentNav = NavServices.navIdMsg;

        //     angular.forEach($scope.navs, function(nav, i) {
        //         if (nav.navId == $scope.currentNav) {
        //             nav.route = '#';
        //         }
        //     });
        // });

        $scope.navs = [{
            name: 'קטלוג הרכב',
            img: '......',
            route: '#',
            navId: '1'
        }, {
            name: 'כתבות',
            img: '......',
            route: 'articles',
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