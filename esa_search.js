var getResultHtml = function(credential, post){
  var postUrl = 'https://' + credential.team + '.esa.io/posts/' + post.number;
  return '<div style="border: solid #000 1px;"><a href="' + postUrl + '">' + post.full_name + '</div>';
};

function getQuery(){
  var rawQuery = location.search.replace('?', '');
  var queries = rawQuery.split('&');
  for(var i = 0; i < queries.length; i++) {
    if(queries[i].indexOf('q=') != 0){
      continue;
    }
    return queries[i].split('=')[1];
  }
}

var query = function(credential){
  $.get('https://api.esa.io/v1/teams/' + credential.team + '/posts',
        {
          access_token: credential.token,
          q: getQuery()
        },
        function(data){
          for(var i = 0; i < data.posts.length; i++){
            var post = data.posts[i];
            $('#rhs_block').prepend(getResultHtml(credential, post));
          }
        });
};

var load = function(){
  var team = $('#team').val();
  var token = $('#token').val();
  chrome.runtime.sendMessage({method: "getCredential"},
      function(credential) {
        if(credential.team && credential.token){
          query(credential);
        }
      });
};

load();
