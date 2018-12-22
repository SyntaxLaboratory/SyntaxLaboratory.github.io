$(document).ready(function(){
  $(".sticky-window").sticky({topSpacing:56});
  $(".info-name").sticky({topSpacing:58});
  $(".info-position").sticky({topSpacing:80});
  $(window).bind('scroll', function() {
    if ($(window).scrollTop() > 145) {
      $(".profile-name").addClass("profile-name-shrink").removeClass("profile-name");
      $(".sticky-window").addClass("sticky-window-change");
      $(".info-name").addClass("info-name-change");
    } else {
      $(".profile-name-shrink").removeClass("profile-name-shrink").addClass("profile-name");
      $(".sticky-window").removeClass("sticky-window-change");
      $(".info-name").removeClass("info-name-change");
    }
    if ($(window).scrollTop() > 155) {
      $(".profile-company").addClass("profile-company-shrink").removeClass("profile-company");
      $(".info-position").addClass("info-position-change");
    } else {
      $(".profile-company-shrink").removeClass("profile-company-shrink").addClass("profile-company");
      $(".info-position").removeClass("info-position-change");
    }

  });
});
