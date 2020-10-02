$(document).ready(function () {
  $('#lightgallery').lightGallery({
    pager: true,
    share: false,
    download: false,
  });

  $('.filter-menu li').on('click', function () {
    $(this).addClass('active');
    $(this).siblings(".active").removeClass('active');
  });


  //Default options
  const options = {
    layout: 'sameWidth',
  }

  var filterizd = $(".filtr-container").filterizr({
    //options object
  });

  filterizd.filterizr('setOptions', options);
});