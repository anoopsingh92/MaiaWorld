$(document).ready(function() {
 
  $("#coaches").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
 
      // "singleItem:true" is a shortcut for:
      items : 1
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});

$(function() {
  $('.chosen-select').chosen();
  $('.chosen-select-deselect').chosen({ allow_single_deselect: true });
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})