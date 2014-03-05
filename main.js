var storeApp = angular.module('AppStore', []);

storeApp.directive('item', function($scope, element) {
    return {
        restrice: "E",
        template: ""
    };
});

storeApp.controller('dataCtrl', function($scope) {
    $scope.storeData = [{
        id: "2",
        type: "G",
        name: "@@@",
        price: "100",
        description: "..."
    }, {
        id: "3",
        type: "P",
        name: "@@@",
        price: "100",
        description: "..."
    }, {
        id: "1",
        type: "G",
        name: "@@@",
        price: "100",
        description: "..."
    }, {
        id: "4",
        type: "P",
        name: "@@@",
        price: "100",
        description: "..."
    }, {
        id: "5",
        type: "G",
        name: "@@@",
        price: "100",
        description: "..."
    }, {
        id: "6",
        type: "V",
        name: "@@@",
        price: "100",
        description: "..."
    }, {
        id: "7",
        type: "V",
        name: "@@@",
        price: "100",
        description: "..."
    }, {
        id: "8",
        type: "V",
        name: "@@@",
        price: "100",
        description: "..."
    }, {
        id: "9",
        type: "G",
        name: "@@@",
        price: "100",
        description: "..."
    }, {
        id: "10",
        type: "P",
        name: "@@@",
        price: "100",
        description: "..."
    }, {
        id: "11",
        type: "P",
        name: "@@@",
        price: "100",
        description: "..."
    }, {
        id: "12",
        type: "G",
        name: "@@@",
        price: "100",
        description: "..."
    }, {
        id: "13",
        type: "P",
        name: "@@@",
        price: "100",
        description: "..."
    }];
});