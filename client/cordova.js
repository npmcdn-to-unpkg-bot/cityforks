import { Session } from 'meteor/session';

Meteor.startup(function(){
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
});

var onSuccess = function(position){
  Session.set('latitude', position.coords.latitude);
  Session.set('longitude', position.coords.longitude);
  console.log(Session.get('latitude'));
  console.log(Session.get('longitude'));
};

function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}
