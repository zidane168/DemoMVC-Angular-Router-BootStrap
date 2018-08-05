module.controller('MainController', ['$scope', '$state', function ($scope, $state) {
    $scope.gotoTable = function () {
        $state.go('main.table');
    }

    $scope.gotoTable1 = function () {
        $state.go('main.table1');
    }

    $scope.gotoTable2 = function () {
        $state.go('main.table2');
    }

    $scope.gotoTable3 = function () {
        $state.go('main.table3');
    }

    $scope.gotoTable4 = function () {
        $state.go('main.table4');
    }

    $scope.gotoTable5 = function () {
        $state.go('main.table5');
    }

    $scope.gotoTable6 = function () {
        $state.go('main.table6');
    }

    $scope.gotoTable7 = function () {
        $state.go('table7');
    }

    $scope.gotoTable8 = function () {
        $state.go('table8');
    }

    $scope.gotoTable9 = function () {
        $state.go('table9');
    }

    $scope.gotoTable10 = function () {
        $state.go('table10');
    }
}]);