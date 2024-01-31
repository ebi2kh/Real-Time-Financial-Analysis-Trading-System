(function($) {
  'use strict';
  var iconTochange;
  dragula([document.getElementById("dragula-left"), document.getElementById("dragula-right")]);
  dragula([document.getElementById("profile-list-left"), document.getElementById("profile-list-right")]);
  dragula([document.getElementById("dragula-event-left"), document.getElementById("dragula-event-right")])
    .on('drop', function(el) {
      console.log($(el));
      iconTochange = $(el).find('.typcn');
      if (iconTochange.hasClass('typcn-tick')) {
        iconTochange.removeClass('typcn-tick text-primary').addClass('typcn-input-checked text-success');
      } else if (iconTochange.hasClass('typcn-input-checked')) {
        iconTochange.removeClass('typcn-input-checked text-success').addClass('typcn-tick text-primary');
      }
    })
})(jQuery);