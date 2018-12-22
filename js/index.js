$(document).ready(function(){
  $(".profile-name").sticky({topSpacing:50});
  $(".profile-position").sticky({topSpacing:80});
  $(window).bind('scroll', function() {
  var navHeight = 145;
    if ($(window).scrollTop() > navHeight) {
      $(".profile-name").addClass("fixed-changed").removeClass("profile-name");
    } else {
      $(".fixed-changed").removeClass("fixed-changed").addClass("profile-name");
    }
  });
});
