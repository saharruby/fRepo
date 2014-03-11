//'use strict';

/* Controllers */

var autoControllers = angular.module('autoControllers', []);

autoControllers.controller('ArticleListCtrl', ['$scope', '$http', // 'AutoService',
    function($scope, $http) { //, AutoService) {
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

        //console.log($scope.articles);

        var url = 'articles.json';
        $http.get(url, {
            headers: {
                'Content-type': 'application/json'
            }
        }).success(function(data) {
            angular.forEach(data, function(item, index) {
                $scope.articles[item.categoryId].art.push(item);
            });
        });

        // $scope.goToArticle = function(id) {
        //     if (id) {
        //         $http.get('articles/' + id + '.json', {
        //             headers: {
        //                 'Content-type': 'application/json'
        //             }
        //         }).success(function(data) {
        //             console.log(data);
        //         });
        //     }
        // };
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

            // var textArr = $scope.article.content.split('<iframe');
            // console.log(textArr[0] + " :==: " + textArr[1]);

            //textArr[1].replace('width="')

            //$scope.trustedHtml = $sce.trustAsHtml($scope.article.content);
            console.log($scope.article);
        });
    }
]);

autoControllers.controller('NavCtrl', ['$scope', '$http',
    function($scope, $http) {
        $scope.navs = [];
        var url = 'home.json';
        $http.get(url, {
            headers: {
                'Content-type': 'application/json'
            }
        }).success(function(data) {
            $scope.navs = data;
        });
    }
]);