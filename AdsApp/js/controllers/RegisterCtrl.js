'use strict';

app.controller('RegisterCtrl',
    function ($scope, $rootScope, $location, townsService) {
        $rootScope.pageTitle = "Register";

        $scope.userData = { townId: null };
        $scope.towns = townsService.getTowns();

       
    }
);
