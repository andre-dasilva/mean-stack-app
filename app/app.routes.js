(function() {
    angular
        .module("mean-app")
        .config(routeConfig);

    function routeConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/error");

        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "home/home.html"
            })
            .state('error', {
                url: "/error",
                templateUrl: "errors/404.html"
            })
            .state('users', {
                url: "/users",
                views: {
                    "": {
                        templateUrl: "users/users.html"
                    },
                    "user-list@users": {
                        templateUrl: "users/users.list.html",
                        controller: "usersController as users"
                    }
                }
            })
            .state('users_detail', {
                url: "/users/{userId: [0-9a-fA-F]{24}}",
                templateUrl: "users/users.detail.html",
                controller: function($scope, $stateParams) {
                    $scope.clickedUser = $stateParams.userId;
                }
            })
            .state('users_add', {
                url: "/users/add",
                templateUrl: "users/users.add.html",
                controller: "addUsersController as addUser"
            });
            // Nested state config
            // .state('users.detail', {
            //     url: "/{userId:[0-9]}",
            //     templateUrl: "users/users.detail.html",
            //     controller: function($scope, $stateParams) {
            //         $scope.clickedUser = $stateParams.userId;
            //     }
            // })
    }
})();