(function() {
    angular
        .module("mean-app")
        .service("userService", userService);

    function userService($http, $log, $q) {
        var deferred = $q.defer();

        this.getAllUsers = function() {
            $http({
                method: 'GET',
                url: 'http://localhost:4000/api/users'
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(response) {
                deferred.reject(response);
            });
            return deferred.promise;
        };

        this.saveUser = function(newUser) {
            $http({
                method: 'POST',
                data: newUser,
                url: 'http://localhost:4000/api/users'
            }).success(function(response) {
                deferred.resolve(response);
            }).error(function(response) {
                deferred.reject(response)
            });
            return deferred.promise;
        };
        
    }
})();