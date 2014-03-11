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