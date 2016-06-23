export default class AttachContainerController {
  constructor($scope, $location) {
    this.name = 'attachContainer';
    $scope.WebSocketTest = function(id)
     {
        if ("WebSocket" in window)
        {
           alert("WebSocket is supported by your Browser!");

           // Let us open a web socket
           $scope.ws = new WebSocket('ws://119.vlabs.knu.ua:4243/containers/'+id+'/attach/ws?stream=1');

           $scope.ws.onopen = function()
           {
           };

           $scope.ws.onmessage = function (evt)
           {
              var received_msg = evt.data;
            document.getElementById('123').innerHTML += evt.data + '<br/>';
           };

           $scope.ws.onclose = function()
           {
              // websocket is closed.
              alert("Connection is closed...");
           };
        }

        else
        {
           // The browser doesn't support WebSocket
           alert("WebSocket NOT supported by your Browser!");
        }
     }
    $scope.senddata = function()
     {
            var sendData = document.getElementById('123input').value;
              $scope.ws.send(sendData + "\n");
    }
    
    $scope.id = $location.search().id.split("'")[0];
      
      console.log($scope.id.split("'"));
  }
}
AttachContainerController.$inject = ['$scope','$location'];
