'use strict';

(function eventmap(){

  $(document).keypress(function(event) {
    // Check if its a textinput and the right class applied
    var key = nepalify.unicodify(event.which);
    // console.log(key);

    var target = event.target;

    var selectionStart = target.selectionStart;
    var selectionEnd = target.selectionEnd;

    if (target.setSelectionRange) {  //text fields

      target.value =  target.value.substring(0, selectionStart) + key + target.value.substring(selectionEnd);
      target.setSelectionRange(selectionStart + key.length,selectionStart + key.length);

    }
    event.preventDefault();
  });
})();
