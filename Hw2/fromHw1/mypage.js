

var number_tweets = 0;


function addCard(interest) {
  number_tweets++;
  var tweet = $('<div class="card"></div>');
  $(tweet).attr('id', 'tweet' + number_tweets);
  var id = $(tweet).attr('id');
  var tweet_box = $('<div class="card-body" style="text-align: right"><div style="text-align:left"><img src="twitter_logo.jpg" alt="Twitter logo" height="100" width="140"></div><h3>Tweet</h3> <p>Sample tweet will go here!</p></div>');
  var button = $('<button class="btn btn-danger btn-sm" onClick=deleteCard(\'' + id + '\')>x</button>');
  button.prependTo(tweet_box);
  tweet_box.appendTo(tweet);
  tweet.appendTo(interest);
}

function deleteCard(id) {
  document.getElementById(id).remove();
}
