$(document).ready(function(){
  var $usr = $('.usr');
  var $msg = $('.msg');
  var $button = $('button');
  
  for (var i = 0; i < users.length; i++) {
	var $user = $('<li></li>');
	$user.text(users[i]).addClass(users[i]);
	$user.appendTo($usr);
  };

  $button.on('click', function() {
    $msg.html('');
    var index = streams.home.length - 1;
    while(index >= 0) {
      var tweet = streams.home[index];
      var $tweet = $('<p></p>');
      var $time = $('<p></p>');
      $tweet.text('@' + tweet.user + ': ' + tweet.message).addClass('text');
      $time.text(tweet.created_at).addClass('time');
      $tweet.appendTo($msg);
      $time.appendTo($msg);
      index -= 1;
    };
    $(this).closest('body').children('.nav').children('.usr').children().removeClass('highlighted');
  });

  $('li').on('click', function() {
    var $name = $(this).attr('class');
    $msg.html('');
    var $hisTweets = streams.users[$name];
    for (var i = 0; i < $hisTweets.length; i++) {
      var $tweet = $('<p></p>');
      var $time = $('<p></p>');
      $tweet.text('@' + $name + ': ' + $hisTweets[i]['message']).addClass('text');
      $time.text($hisTweets[i]['created_at']).addClass('time');
      $tweet.appendTo($msg);
      $time.appendTo($msg);
    };
    $(this).siblings().removeClass('highlighted');
    $(this).addClass('highlighted');
  });

}); 