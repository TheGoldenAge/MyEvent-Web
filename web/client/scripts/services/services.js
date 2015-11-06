/**
 * Created by vedorhto on 04/09/2015.
 */
angular.module('myApp.services',[])
    .service('sharedProperties',function(){
        var _isConnected = false;
        var MyEventBackEnd = "";

        return{
            isConnected:function(){
                return _isConnected;
            },
            setConnected:function(val){
                _isConnected = val;
            }
        }
    });
