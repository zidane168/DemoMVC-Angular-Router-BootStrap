
//var module = angular
//    .module('KingAdmin', ['ui.router', 'oc.lazyLoad', 'ngTable']);

var app = angular.module('app', ['ui.router']);
app.controller('ControlCtrl', ['$scope', function ($scope) {
    $scope.demoTextBoxModel = { number: 1, name: 'testing' };

    $scope.dateModel = new Date('2017 08 08')


    $scope.notBlackListed = function (value) {
        var blacklist = ['bad@domain.com', 'verybad@domain.com'];
        return blacklist.indexOf(value) === -1;
    }

    // $scope.dateModel = '2017 08 08';    //Expected `2017 08 08` to be a date
}]);


app.directive('numbersonly', function () {
    return {
        restrict: 'A',
        link: function (scope, elm, attrs, ctrl) {
            elm.on('keydown', function (event) {
                if (event.which == 64 || event.which == 16) {
                    // to allow numbers  
                    return false;
                } else if (event.which >= 48 && event.which <= 57) {
                    // to allow numbers  
                    return true;
                } else if (event.which >= 96 && event.which <= 105) {
                    // to allow numpad number  
                    return true;
                } else if ([8, 13, 27, 37, 38, 39, 40].indexOf(event.which) > -1) {
                    // to allow backspace, enter, escape, arrows  
                    return true;
                } else {
                    event.preventDefault();
                    // to stop others  
                    return false;
                }
            });
        }
    }
});


app.directive('numberOnlyInput', function () {
    return {
        restrict: 'EA',
        template: '<input name="{{inputName}}" class="form-control"  ng-model="inputValue" />',
        scope: {
            inputValue: '=',
            inputName: '='
        },
        link: function (scope) {
            scope.$watch('inputValue', function (newValue, oldValue) {
                var arr = String(newValue).split("");
                if (arr.length === 0) return;
                if (arr.length === 1 && (arr[0] == '-' || arr[0] === '.')) return;
                if (arr.length === 2 && newValue === '-.') return;
                if (isNaN(newValue)) {
                    scope.inputValue = oldValue;
                }
            });
        }
    };
});


app.directive('restrictInput', [function(){
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var ele = element[0];
            var regex = RegExp(attrs.restrictInput);
            var value = ele.value;

            ele.addEventListener('keyup',function(e){
                if (regex.test(ele.value)){
                    value = ele.value;
                }else{
                    ele.value = value;
                }
            });
        }
    };
}]);    