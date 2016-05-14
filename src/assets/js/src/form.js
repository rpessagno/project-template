(function (window, document, $, undefined) {
  'use strict';
  // place entire program inside of this closure


$('.form-input').change(function() {
  var inputVal = $(this).val();
  $(this).attr('value', inputVal);
});


// End Document Ready
})(window, document, jQuery);