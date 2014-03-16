angular.module('autoDirectives')
    .directive('catalog',
        function() {
            return {
                restrict: 'E',
                scope: {
                    manufactureselected: '@',
                    modelselected: '@',
                    lookurl: '@',
                    manufacturename: '@',
                    modelname: '@'
                },
                link: function(scope, element) {
                    scope.$watch('manufactureselected', function(value) {
                        scope.modelflag = (value == 0 ? true : false);
                    });

                    scope.$watch('modelselected', function(value) {
                        scope.continueflag = (value == 0 ? true : false);
                    });

                    scope.$watch('lookurl', function(value) {
                        scope.url = value;
                    });

                    scope.$watch('manufacturename', function(value) {
                        scope.manufactrureName = value;
                    });

                    scope.$watch('modelname', function(value) {
                        scope.modelName = value;
                    });
                },
                template: '<div class="row" >' +
                    '<div class="twelve columns text-center">' +
                    '<a href="#/articles/carcatalog/manufacturers" class="button [radius round]" style="width:100%">' +
                    '<span style="float:right">בחר יצרן</span>' +
                    '<span style="float:left">{{manufactrureName}}</span>' +
                    '</a>' +
                    '</div>' +
                    '</div>' +
                    '<div class="row" >' +
                    '<div class="twelve columns text-center">' +
                    '<a href="#/articles/carcatalog/models?isSelected" class="button  [radius round]" ng-disabled="modelflag"  style="width:100%">' +
                    '<span style="float:right">בחר דגם</span>' +
                    '<span style="float:left">{{modelName}}</span>' +
                    '</a>' +
                    '</div>' +
                    '</div>' +
                    '<div class="row" >' +
                    '<div class="twelve columns text-center">' +
                    '<a href="#/articles/carcatalog/{{url}}" class="button  [alert round]" ng-disabled="modelflag" style="width:100%">חפש</a>' +
                    '</div>' +
                    '</div>'
            };
        }
);