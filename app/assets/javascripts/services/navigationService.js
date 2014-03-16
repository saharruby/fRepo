angular.module('autoServices')
    .factory('NavServices', ['$rootScope',
        function($rootScope) {
            var sharedService = {};

            sharedService.navIdMsg = '';

            sharedService.broadcastNavIdMsg = function(id) {
                this.navIdMsg = id;
                this.broadcast('handelNavIdChanged');
            };

            sharedService.broadcast = function(eventMsg) {
                $rootScope.$broadcast(eventMsg);
                console.log('SEND EVENT : ' + eventMsg);
            };

            return sharedService;
        }
    ]);