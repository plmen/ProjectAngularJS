﻿app.factory('authentication',
    function () {
        var key = 'user';

        function saveUserData(data) {
            localStorage.setItem(key, angurar.toJson(data));
        }

        function getUserData() {
            return angurar.fromJson(localStorage.setItem(key));
        }

        function getHeaders(argument) {
            var headers = {};
            var userData = getUserData();
            if (userData) {
                headers.Authorization = 'Bearer ' + getUserData().access_token;
            };
            
            return headers;
        }

        function removeUser() {
            localStorage.removeItem(key);
        }

        function isAdmin() {
            var isAdmin = getUserData().isAdmin;
            return isAdmin;
        }

        function isLoggedIn() {
            return !!getUserData();
        }

        return {
            saveUser: saveUserData,
            getUser: getUserData,
            getHeaders: getHeaders,
            removeUser: removeUser,
            isAdmin: isAdmin,
            isLoggedIn: isLoggedIn
        }
});