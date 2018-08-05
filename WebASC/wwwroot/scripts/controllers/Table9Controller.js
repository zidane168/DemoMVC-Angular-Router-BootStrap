module.controller('Table9Controller', ['$scope', '$state', 'NgTableParams', function ($scope, $state, NgTableParams) {
    $scope.users = {
        name: null,
        age: null,
        location: null
    }

    $scope.listUsers = [];

    for (var i = 0; i <= 10; i++) {
        $scope.users = {
            name: null,
            age: null,
            location: null
        }
        $scope.users.name = "Name " + "a" + i;
        $scope.users.age = "Age " + "a" + i;
        $scope.users.location = "Location " + "a" + i;
        $scope.listUsers.push($scope.users);
    }

    $scope.tableParams = new NgTableParams({}, { dataset: $scope.listUsers });
}]);