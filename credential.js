var KEY_TEAM = "key.team";
var KEY_TOKEN = "key.token";

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.method == "getCredential"){
    sendResponse({
      team: localStorage.getItem(KEY_TEAM),
      token: localStorage.getItem(KEY_TOKEN)
    });
  }else if(request.method == "setCredential"){
    localStorage.setItem(KEY_TEAM, request.team);
    localStorage.setItem(KEY_TOKEN, request.token);
    sendResponse({});
  }
});
