(function (window, document, $, undefined) {
  'use strict';
  // place entire program inside of this closure

FastClick.attach(document.body);

$('.wrapper').fitVids();

$('.waypoint').waypoint(function() {
  $(this).addClass('animate-in');
}, {
  offset: '80%',
  triggerOnce: true
});

// End Document Ready
})(window, document, jQuery);