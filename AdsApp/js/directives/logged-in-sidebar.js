app.directive('loggedInSidebar', function () {
    return {
        controller: 'LoggedInSidebarCtrl',
        restrict: 'E',
        templateUrl: 'templates/left-sidebar.html',
        replace: true,
    };
});