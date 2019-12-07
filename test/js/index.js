var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/1', { templateUrl: 'page1.html', controller: 'page1Controller' });
    $routeProvider.when('/2', { templateUrl: 'page2.html', controller: 'page2Controller' })
});