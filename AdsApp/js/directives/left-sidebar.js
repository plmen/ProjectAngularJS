app.directive('leftPublicSidebar', function () {
    return {
        controler: 'HomeCtrl',
        restrict: 'E',
        templateUrl: 'templates/left-sidebar.html',
        replace: true,
    };
}); 