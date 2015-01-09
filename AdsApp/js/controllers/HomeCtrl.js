app.controller('HomeCtrl', ['$scope', 'authentication', function ($scope, authentication) {
    $scope.headerTitle = 'HomePage';
    $scope.isLoggedIn = authentication.isLoggedIn;
}]);