var load = function(){
  var team = $('#team').val();
  var token = $('#token').val();
  chrome.runtime.sendMessage(
      {method: "getCredential"},
      function(credential) {
        if(credential.team && credential.token){
          $('#team').val(credential.team);
          $('#token').val(credential.token);
        }
      }
      );
};

var save = function(){
  var team = $('#team').val();
  var token = $('#token').val();
  chrome.runtime.sendMessage(
      {method: "setCredential",
        team: team,
        token: token },
      function(response) { }
      );
};

load();
$('#save').on('click', save);
