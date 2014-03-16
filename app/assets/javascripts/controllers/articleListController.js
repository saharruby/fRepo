angular.module('autoControllers')
    .controller('ArticleListCtrl', ['$scope', 'NavServices', 'ArticlesServices',
        function($scope, NavServices, ArticlesServices) {
            $scope.articles = {};
            var dicTypes = {
                "1": 'חדשות הרכב',
                "2": 'מבחני רכב',
                "3": 'שטח',
                "4": 'ירוק',
                "5": 'ספורט מוטורי',
                "6": 'מגזין ודעות'
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
                //NavServices.broadcastNavIdMsg('2');
            });
        }
    ]);