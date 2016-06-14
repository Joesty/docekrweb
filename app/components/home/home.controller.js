export default class HomeController {
  constructor($scope, users) {
    var getData = function (){
      users.getContainers().then(function(resolve){
        for(var i = 0; i<resolve.length; i++){
          if (resolve[i].Status.split(' ')[0] == 'Up'){
            resolve[i].start = true;
          }
          else {
            resolve[i].start = false;
          }
        };
        $scope.containers = resolve;
      });
    };
    $scope.name = 'home';
    $scope.start = function (id, index){
      
      users.startContainer(id).then(
        function(resolve){
          getData();
        },
        function(error){
          $scope.containers[index].start = false;
        }
      );
    };
    $scope.stop = function (id, index){
      
      users.stopContainer(id).then(
        function(resolve){
          getData();
        },
        function(error){
          $scope.containers[index].start = false;
        }
      );
    };
    getData();
  }
}

HomeController.$inject = ['$scope','users'];

