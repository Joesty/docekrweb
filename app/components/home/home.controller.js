export default class HomeController {
  constructor($scope, users) {
    users.getContainers().then(function(resolve){
      $scope.containers = resolve;
    });
    $scope.name = 'home';
  }
}

HomeController.$inject = ['$scope','users'];

