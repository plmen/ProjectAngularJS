app.factory('townsData', ['$resource', 'baseServiceUrl',
    function ($resource, baseServiceUrl) {
        var $resource = $resource(baseServiceUrl + 'towns');
        
        function getAllTowns() {
            return $resource.query();
        }

        return {
            getTowns: getAllTowns           
        }
    }
]);

//app.factory('townsData',
//    function ($resource, baseServiceUrl) {
//        var townsResource = $resource(
//            baseServiceUrl + 'towns'
//        );

//        return {
//            getTowns: function (success, error) {
//                return townsData.query(success, error);
//            }
//        }
//    }
//);