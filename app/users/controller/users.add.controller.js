(function() {
    "use strict";
    angular
        .module("mean-app")
        .controller("addUsersController", addUsersController);

    function addUsersController(userService) {
        var vm = this;

        vm.saveUser = function(newUser) {
            userService.saveUser(newUser).then(
                function(data) {
                    alert("Saved: \n" + angular.toJson(data, true));
                },
                function(reason) {
                    alert("Error: " + reason);
                }
            )
        };
    }
})();