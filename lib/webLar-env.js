var scmodel;

$(function () {
  var contactContainer = $('#weblar-container-contact');
  var aboutContainer = $('#weblar-container-about');

  var contactButton = $('#weblar-link-contact');
  var aboutButton = $('#weblar-link-about');

  var containers = $('.weblar-container');
  var loading = $('#loading');

  contactButton.on('click', function () {
    contactContainer.toggle();
  });

  aboutButton.on('click', function () {
    aboutContainer.toggle();
  });

  containers.on('mousewheel', function (event) {
    event.stopPropagation();
  });

  $(document).on('keyup', function (event) {
    if(event.keyCode == 27) {
      clear();
    }
  });

});