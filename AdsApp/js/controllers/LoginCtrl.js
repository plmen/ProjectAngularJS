app.controller('LoginCtrl',
    function ($scope, $rootScope, $location, userData) {
        $rootScope.pageTitle = "Register";

        $scope.login = function (user) {
            //console.log(user)
            userData.login(user);
        }
    }
);