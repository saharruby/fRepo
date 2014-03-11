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
                    var textArr = newContent.split('<iframe');
                    var tmpText = textArr[1] + "";
                    tmpText = tmpText.replace(/width="\d+"/, "width='100%'");
                    newContent = textArr[0] + "<iframe " + tmpText;
                    element.html($sce.trustAsHtml(newContent));
                });
            }
        };
    }
]);