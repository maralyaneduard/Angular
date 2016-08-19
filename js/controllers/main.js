angular.module('mainController', [])
    // inject the Todo service factory into our controller
    .controller('testController', ['$location','$scope', '$http','$route','$routeParams', 'Test', function ($location,$scope,$http,$route,$routeParams, Test) {
        // GET =====================================================================
        // when landing on the page, get all todos and show them
        // use the service to get all the todos

        Test.get().success(function (data) {
            if(data[0] == undefined)
            {
                $scope.hasNoItems = true;
            }
            else
            {
                $scope.test = data;
                $scope.hasItems = true;
                $scope.hasNoItems = false;
            }
        });

        $scope.update = function(index){
            $location.path("/tests/edit/"+$scope.test[index]._id);
        }

        $scope.delete = function()
        {
            Test.delete().success(function (data) {
                $scope.test = data;
                $scope.hasItems = false;
                $scope.hasNoItems = true;
                $route.reload();
            });
        }

        $scope.deleteItem = function(id)
        {
            Test.deleteItem(id).success(function (data) {
                $scope.test = data;
                $route.reload();
            });
        }

        $scope.sendPost = function()
        {
            Test.add($scope.newTest).then(function(data){
                $scope.test = data;
                $location.path("/tests");
            },function(error){
                console.log("faild " + error);
            });
        }

        $scope.updateTest = function()
        {
            Test.update($scope.editTest).then(function(data){
                $scope.test = data;
                $location.path("/tests");
            },function(error){
                console.log("faild " + error);
            });
        }

        var init = function()
        {
            $scope.newTest = {
                title : "",
                description : "",
                rating: 0
            };

            var id = $routeParams.id;
            if(id != undefined)
            {
                Test.getById(id).then(function(data) {
                  $scope.editTest = data;
              });
            }

        }
        init();
    }]);