//app.controller('RegisterCtrl', ['$scope', 'townsData', , function ($scope, townsData) {
//    townsData.getTowns()
//        .$promise
//        .then(function (data) {
//            $scope.towns = data;
//        });

//    $scope.register = function (user) {
//        userData.register(user);
//    }
//}]);

app.controller('RegisterCtrl',
    function ($scope, $rootScope, $location, townsData, userData) {
        $rootScope.pageTitle = "Register";

        $scope.userData = { townId: null };
        $scope.towns = townsData.getTowns();

        $scope.register = function (user) {
            //console.log(user)
            userData.register(user);
        }
    }
);
