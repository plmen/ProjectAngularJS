﻿'use strict';
app.controller('TownsCtrl', ['$scope', 'townsData', function ($scope, townsData) {
   townsData.getTowns()
    .$promise
    .then(function (data) {
        $scope.townsData = data;
        //console.log(data);
    })
}])