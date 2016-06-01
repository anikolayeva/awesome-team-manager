'use strict';

angular.module('awesome-app', [
    'ui.router',
    'ui.bootstrap',
    'awesome-app.common',
    'awesome-app.home',
    'awesome-app.about'
]).
config(['$urlRouterProvider', function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
}]);
