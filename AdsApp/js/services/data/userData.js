app.factory('userData', 'baseServiceUrl', ['$resource', function ($resource, baseServiceUrl) {

    function registerUser(user) {
        return $resource(baseServiceUrl + 'user/register')
            .save(user);
    }

    function loginUser(user) {

    }

    function logoutUser() {

    }

    return {
        register: registerUser,
        login: loginUser,
        logout: logoutUser
    }
}])
    