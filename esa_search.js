var token = '';
var team = '';

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

$.get('https://api.esa.io/v1/teams/' + team + '/posts',
    {
      access_token: token,
      q: getQuery()
    },
    function(data){
      for(var i = 0; i < data.posts.length; i++){
        var post = data.posts[i];
        $('#rhs_block').prepend('<div style="border: solid #000 1px;"><a href="https://' + team + '.esa.io/posts/' + post.number + '">' + post.full_name + '</div>');
      }
    });
