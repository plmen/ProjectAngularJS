app.factory('categoriesData', ['$resource', 'baseServiceUrl', function ($resource, baseServiceUrl) {
        //var $resource = $resource(baseServiceUrl + 'categories');

        function getCategories() {
            return $resource(baseServiceUrl + 'categories').query();
        }

        return {
            getCategories: getCategories
        }
    }
]);