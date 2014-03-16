angular.module('autoControllers')
    .controller('ArticleCtrl', ['$scope', '$routeParams', '$sce', 'ArticlesServices',
        function($scope, $routeParams, $sce, ArticlesServices) {
            $scope.article_id = $routeParams.articleId;

            ArticlesServices.getArticleById($scope.article_id).success(function(data) {
                $scope.article = data[0];
            });
        }
    ]);