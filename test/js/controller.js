app.controller('myController', function ($scope, $location, $store) {
    $scope.data = 'index page';
    $scope.content = 'hello';

    $scope.changeData = function (data) {
        $store.commit('setStr', data);
    }
    $scope.pathToPage1 = function () {
        $location.path('/1');
    }
    $scope.pathToPage2 = function () {
        $location.path('/2');
    }
});

app.controller('page1Controller', function ($scope, $store) {
    $scope.data = 'page1';
    $scope.updateData = function () {
        $scope.data = $store.getters.getStr;
    }
});

app.controller('page2Controller', function ($scope, $store) {
    $scope.data = 'page2';
    $scope.updateData = function () {
        $scope.data = $store.getters.getStr;
    }
});