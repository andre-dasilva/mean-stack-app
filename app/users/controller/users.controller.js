(function() {
    "use strict";
    angular
        .module("mean-app")
        .controller("usersController", usersController);
    
    function usersController($stateParams, userService) {
        var vm = this;

        userService.getAllUsers().then(
            function(data) {
                vm.usersList = data;
            },
            function(reason) {
                if (reason == null) {
                    alert("Backend not running");
                } else {
                    alert("Failed: " + reason);
                }
            }
        );
    }
})();