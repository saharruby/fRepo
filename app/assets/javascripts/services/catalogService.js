angular.module('autoServices')
    .factory('CatalogServices', ['$routeParams',
        function($routeParams) {
            var msgService = {};
            msgService.manufacturer = {};
            msgService.model = {};
            msgService.newOrUsed = '';

            msgService.setManufacturer = function(manufacturer) {
                msgService.manufacturer = manufacturer;
            };

            msgService.getManufacturer = function() {
                if ($routeParams.isSelected) {
                    return msgService.manufacturer;
                }
                return null;
            };

            msgService.getManufacturerId = function() {
                if ($routeParams.isSelected) {
                    return msgService.manufacturer.id;
                }
                return 0;
            };

            msgService.setModel = function(model) {
                msgService.model = model;
            };

            msgService.getModel = function() {
                if ($routeParams.isSelected) {
                    return msgService.model;
                }
                return null;
            };

            msgService.getModelId = function() {
                if ($routeParams.isSelected) {
                    if (msgService.model.id)
                        return msgService.model.id;
                    return msgService.model.model_id;
                }
                return 0;
            };

            msgService.setNewOrUsed = function(id) {
                msgService.newOrUsed = id;
            };

            msgService.getNewOrUsed = function() {
                if ($routeParams.isSelected) {
                    return msgService.newOrUsed;
                }
                return 0;
            };

            return msgService;
        }
    ]);