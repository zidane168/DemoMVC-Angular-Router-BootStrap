
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

    $scope.showImage = function (base64string, imageType, fileEx) {
        base64String = base64string.replace('data:image/png; base64,')
    }


    $scope.AddUploadImage = function (file, imageType, fileEx) {

        if (!file)
            return;

        var base64prefix = 'data:image/png; base64,';
        var imageModel = {};
        imageModel.isUploaded = false;
        imageModel.imageType = imageType;

        $scope.ImageWait.push(imageModel);

        // convert file to base64

        var reader = new FileReader();
        reader.onload = function (e) {
            var arrayBuffer = reader.result;

            $scope.$apply(function () {
                $scope.showImage(arrayBuffer, imageType, fileEx);
            });
        }

        reader.readAsDataURL(file);

    }

    $scope.NavigateFunction = function (file, imageType, isExistImage, fileEx) {

        if (isExistImage)
            $scope.AddUploadImage(file, imageType, fileEx);
        else
            $scope.UploadImage(file, imageType);
    }

    $scope.onClickSelectFile = function ($files, imageType) {
        var file = $files[0];

        var arrayFileExtend = $files[0].name.split('.');
        var strExtend = arrayFileExtend[arrayFileExtend.length - 1];

        $scope.NavigateFunction(file, imageType, $scope.imageShow, strExtend);
    }

    // $scope.dateModel = '2017 08 08';    //Expected `2017 08 08` to be a date



    // ----------------------------------  upload image

   

    
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



// ------------ 
app.directive("ngFileSelect", function (fileReader, $timeout) {
    return {
        scope: {
            ngModel: '='
        },
        link: function ($scope, el) {
            function getFile(file) {


                console.log(file.name);
                console.log(file.size);

                // kiểm tra định dạng                
                var extension = file.name.substr(file.name.lastIndexOf(".") + 1, file.name.length - file.name.lastIndexOf("."));
                var arrExtension = ["png", "jpg"];
                var flag = false;
                for (var i = 0; i < arrExtension.length; i++) {
                    if (arrExtension[i] == extension) flag = true;
                }

                if (flag === false) {
                    alert("không hỗ trợ định dạng này!")
                    return;
                }

                // kiểm tra kích thước ảnh
                if (file.size > 200 * 10000)
                {
                    alert("không thể show image vì kích thước quá lớn");
                    return;
                }


                fileReader.readAsDataUrl(file, $scope)
                  .then(function (result) {
                      $timeout(function () {
                          $scope.ngModel = result;
                      });
                  });
            }

            el.bind("change", function (e) {
                var file = (e.srcElement || e.target).files[0];
                getFile(file);
            });
        }
    };
});

app.factory("fileReader", function ($q, $log) {
    var onLoad = function (reader, deferred, scope) {
        return function () {
            scope.$apply(function () {
                deferred.resolve(reader.result);
            });
        };
    };

    var onError = function (reader, deferred, scope) {
        return function () {
            scope.$apply(function () {
                deferred.reject(reader.result);
            });
        };
    };

    var onProgress = function (reader, scope) {
        return function (event) {
            scope.$broadcast("fileProgress", {
                total: event.total,
                loaded: event.loaded
            });
        };
    };

    var getReader = function (deferred, scope) {
        var reader = new FileReader();
        reader.onload = onLoad(reader, deferred, scope);
        reader.onerror = onError(reader, deferred, scope);
        reader.onprogress = onProgress(reader, scope);
        return reader;
    };

    var readAsDataURL = function (file, scope) {
        var deferred = $q.defer();

        var reader = getReader(deferred, scope);
        reader.readAsDataURL(file);

        return deferred.promise;
    };

    return {
        readAsDataUrl: readAsDataURL
    };
});