
app.controller('page1Ctrl', ['$scope', function ($scope) {
    $scope.hello = "page_1 "; 
    $scope.NoiDung = [
        { id: '0', text: 'nội dung 1' },
        { id: '1', text: 'nội dung 2' },
        { id: '2', text: 'nội dung 3' },
        { id: '3', text: 'nội dung 4' }
    ];
}]); 