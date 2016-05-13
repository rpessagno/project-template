(function (window, document, $, undefined) {
  'use strict';
  // place entire program inside of this closure

FastClick.attach(document.body);

$('.wrapper').fitVids();

var animate = new Waypoint({
  element: $('.animate'),
  handler: function() {
    this.element.addClass('animate-in');
  },
  offset: '75%'
});


// End Document Ready
})(window, document, jQuery);