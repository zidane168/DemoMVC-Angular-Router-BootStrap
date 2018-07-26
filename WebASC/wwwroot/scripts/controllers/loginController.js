 

app.controller('loginCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.title = "Login! ";
    $scope.btnText = "Login"; 
    $scope.login = function () {
        $scope.btnText = "Please wait ..!";
        $http.post('/Home/userLogin', $scope.user).then(
            function (res) { 
                //$location.path('/admin'); 
                if (res.data == 1) { 
                   
                    $location.path('/Dashboard');
                    $scope.btnText = "Login";
                } 
                 else {
                        alert('failed');
                        $scope.btnText = "Login"; 
                }
            }
        )
    }

}]);

