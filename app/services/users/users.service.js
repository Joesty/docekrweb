let usersService = function usersServiceFn ($http, $q) {
  const url = 'http://119.vlabs.knu.ua:4243';
  var exports = {};

    exports.getContainers = function () {

        var params = {
          method: 'get',
          mode: 'no-cors',
          dataType: "jsonp",
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true'
          }
        };
        var url = 'http://119.vlabs.knu.ua:4243/containers/json?all=1';
        
        var deferred = $q.defer();
        
        // fetch(url, params).then(function(response) {  
        //   return response.blob();  
        // })  
        // .then(function(text) {  
        //   console.log('Request successful', text);  
        // });  
        
        // var h = {
        //   'Access-Control-Allow-Headers': 'Content-Type',
        //   'Access-Control-Allow-Methods': 'GET',
        //   'Access-Control-Allow-Origin': '*'
        // }

        $http.get(url).then(function (response) { deferred.resolve(response.data); }, function (error) { deferred.reject(error); });

        return deferred.promise;
    };
    
    exports.startContainer = function (id) {
      var deferred = $q.defer();
      var api_url = '/containers/' + id + '/start';
      $http.post(url+api_url).then(
        function(response){
          deferred.resolve(response);
        }, 
        function(error){
          deferred.reject(error);
        }
      );
      return deferred.promise;
    };
    
    exports.stopContainer = function (id) {
      var deferred = $q.defer();
      var api_url = '/containers/' + id + '/stop';
      $http.post(url+api_url).then(
        function(response){
          deferred.resolve(response);
        }, 
        function(error){
          deferred.reject(error);
        }
      );
      return deferred.promise;
    };
    
    exports.deleteContainer = function (id) {
      var deferred = $q.defer();
      var api_url = '/containers/' + id + '?v=1';
      $http.delete(url+api_url).then(
        function(response){
          deferred.resolve(response);
        }, 
        function(error){
          deferred.reject(error);
        }
      );
      return deferred.promise;
    };

    return exports;
};

usersService.$inject = ['$http', '$q'];

export default usersService;
