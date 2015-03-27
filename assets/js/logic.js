$('body').scrollspy({
  target: '#sidebar'
})
$(document).ready(function() {
  var $grid = $('#grid'),
    $sizer = $grid.find('.shuffle__sizer');

  $grid.shuffle({
    itemSelector: '.grid-item',
    sizer: $sizer
  });

  var $btns = $('#news-filter').children();
  $btns.on('click', function() {
    event.preventDefault();
    var $this = $(this),
      isActive = $this.hasClass('active'),
      group = isActive ? 'all' : $this.data('group');

    // Hide current label, show current label in title
    if (!isActive) {
      $('#news-filter .active').removeClass('active');
    }

    $this.toggleClass('active');

    // Filter elements
    $grid.shuffle('shuffle', group);
  });

  $(".nav-area li a").on('click', function(e) {
     // prevent default anchor click behavior
     e.preventDefault();

     // animate
     $('html, body').animate({
         scrollTop: $(this.hash).offset().top
       }, 1000, function(){

         // when done, add hash to url
         // (default click behaviour)
         window.location.hash = this.hash;
       });

  });


});
