
//login module definition
var login = angular.module('login',['userSession']);

//login controller
login.controller('loginController', function($scope, $location, authSvc) {
    $scope.authenticate = function (username, passwd) {

        authSvc.authenticate(username, passwd).then(function (result) {
        	$location.path("/states");
        }, function (error) {
        	$scope.loginError = error;
        })
    }
})


