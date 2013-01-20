(function eventmap(){

  $(document).keypress(function(event) {
    // Check if its a textinput and the right class applied
    var key = npiext.unicodify(event.which);
    // console.log(key);

    var target = event.target;

    var selection_start = target.selectionStart;
    var selection_end = target.selectionEnd;

    if (target.setSelectionRange) {  //text fields

      target.value =  target.value.substring(0, selection_start)
                      + key
                      + target.value.substring(selection_end);
    target.setSelectionRange(selection_start + key.length,selection_start + key.length);

    }
    event.preventDefault();
  });
})();
