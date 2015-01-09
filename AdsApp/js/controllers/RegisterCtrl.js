'use strict';

app.controller('RegisterCtrl',
    function ($scope, $rootScope, $location, townsData) {
        $rootScope.pageTitle = "Register";

        $scope.userData = { townId: null };
        $scope.towns = townsData.getTowns();

        $scope.register = function (user) {
            //console.log(user)
        }
    }
);
