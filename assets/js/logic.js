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

});
