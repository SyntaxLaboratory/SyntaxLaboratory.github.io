$(document).ready(function(){
  $(".info-name").sticky({topSpacing:56});
  $(".info-position").sticky({topSpacing:76});
  $(window).bind('scroll', function() {
    if ($(window).scrollTop() > 145) {
      $(".profile-name").addClass("profile-name-shrink").removeClass("profile-name");
    } else {
      $(".profile-name-shrink").removeClass("profile-name-shrink").addClass("profile-name");
    }
    if ($(window).scrollTop() > 155) {
      $(".profile-company").addClass("profile-company-shrink").removeClass("profile-company");
    } else {
      $(".profile-company-shrink").removeClass("profile-company-shrink").addClass("profile-company");
    }

  });
});
