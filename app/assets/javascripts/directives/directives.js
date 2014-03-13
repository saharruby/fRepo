var autoDirectives = angular.module('autoDirectives', []);

autoDirectives.directive('articlecontentparser', ['$sce',
    function($sce) {
        return {
            restrict: 'E',
            scope: {
                trustedhtml: '@'
            },
            link: function(scope, element) {
                scope.$watch('trustedhtml', function(newContent) {
                    var iframe = $(newContent).find('iframe').attr({
                        width: "100%"
                    });

                    var s = newContent.indexOf('<iframe');
                    var e = newContent.indexOf('</iframe>');
                    newContent = newContent.substring(0, s) + iframe.prop('outerHTML') + newContent.substring(e + 9);

                    // TODO: remove links & iframe num2

                    //var textArr = newContent.split('<iframe');
                    // var tmpText = textArr[1] + "";
                    // tmpText = tmpText.replace(/width="\d+"/, "width='100%'");
                    // newContent = textArr[0] + "<iframe " + tmpText;

                    element.html($sce.trustAsHtml(newContent));
                });
            }
        };
    }
]);

autoDirectives.directive('texthtmlparser', ['$sce',
    function($sce) {
        return {
            restrict: 'A',
            scope: {
                texthtml: '@'
            },
            link: function(scope, element) {
                scope.$watch('texthtml', function(newContent) {
                    element.html($sce.trustAsHtml(newContent));
                });
            }
        };
    }
]);

autoDirectives.directive('catalog',
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
                    scope.modelflag = (value == 0 ? true : false);;
                    console.log("watch : " + value);
                });

                scope.$watch('modelselected', function(value) {
                    scope.continueflag = (value == 0 ? true : false);;
                    console.log("watch : " + value);
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