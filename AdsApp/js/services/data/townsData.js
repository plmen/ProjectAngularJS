﻿app.factory('townsService',
    function ($resource, baseServiceUrl) {
        var townsResource = $resource(
            baseServiceUrl + 'towns'
        );

        return {
            getTowns: function (success, error) {
                return townsResource.query(success, error);
            }
        }
    }
);