angular.module('autoControllers')
    .controller('ArticlesCategoryCtrl', ['$scope', '$routeParams', 'ArticlesServices',
        function($scope, $routeParams, ArticlesServices) {
            $scope.category_id = $routeParams.categoryId;
            $scope.firstArticle = {};

            ArticlesServices.getAllArticlesByCatregoryId($scope.category_id).success(function(data) {
                $scope.firstArticle = data[0];
                $scope.articles = data.slice(1, data.length);
            });
        }
    ]);