angular.module('autoControllers')
    .controller('CarModelCtrl', ['$scope', 'SearchServices', 'CatalogServices',
        function($scope, SearchServices, CatalogServices) {
            $scope.tableData = [{
                title: 'חוות דעת מומחה',
                link: '#/carcatalog/model/review?isSelected'
            }, {
                title: 'גרסאות',
                link: '#/carcatalog/model/versions?isSelected'
            }, {
                title: 'תמונות גלריה',
                link: '#'
            }, {
                title: 'וידאו',
                link: '#'
            }, {
                title: 'מתחרים',
                link: '#'
            }, {
                title: 'דגמי יד שניה',
                link: '#'
            }];

            $scope.modelId = CatalogServices.getModelId();
            $scope.review = [];
            //$scope.newOrUsed = CatalogServices.getNewOrUsed();
            //console.log($scope.newOrUsed);

            if ($scope.modelId > 0) {
                // SearchServices.getSearchResaulForModelByModelId($scope.modelId + '?used=' + $scope.newOrUsed).success(function(data) {
                SearchServices.getSearchResaulForModelByModelId($scope.modelId).success(function(data) {
                    $scope.model = data[0];

                    $scope.review.push({
                        title: 'חוות דעת',
                        content: data[0].review.text
                    });
                    $scope.review.push({
                        title: 'עיצוב ונוכחות',
                        content: data[0].review.design
                    });
                    $scope.review.push({
                        title: 'תא נוסעים ומטען',
                        content: data[0].review.cabin
                    });
                    $scope.review.push({
                        title: 'מנוע וביצועים',
                        content: data[0].review.performance
                    });
                    $scope.review.push({
                        title: 'נוחות והתנהגות',
                        content: data[0].review.comfort
                    });
                    $scope.review.push({
                        title: 'תמורה למחיר',
                        content: data[0].review.valueForMoney
                    });
                    $scope.review.push({
                        title: 'סיכום',
                        content: data[0].review.summary
                    });
                    $scope.review.push({
                        title: 'יתרונות',
                        content: data[0].review.advantages
                    });
                    $scope.review.push({
                        title: 'חסרונות',
                        content: data[0].review.disadvantages
                    });

                    //console.log(data[0]);
                    console.log($scope.review);
                });
            }
        }
    ]);