﻿app.factory('userData', ['$resource', 'baseServiceUrl', 'authentication', function ($resource, baseServiceUrl, authentication) {

    function registerUser(user) {
        return $resource(baseServiceUrl + 'user/register')
            .save(user)
            .$promise
            .then(function (data) {
                authentication.saveUser(data);
            });      
    }

    function loginUser(user) {
        return $resource(baseServiceUrl + 'user/login')
            .save(user);
            //.$promise
            //.then(function (data) {
            //   authentication.getUser(data);
            //});
    }

    function logoutUser() {

    }

    return {
        register: registerUser,
        login: loginUser,
        logout: logoutUser
    }
}])
    