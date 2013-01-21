'use strict';

(function (nepalify) {

  // array to hold unicode values - maps unicode values with ascii indices
  /* --------------------------------------------------------------------------
     ASCII printable characters begin at decimal 32 and end at 126
     but Array begins at 0 and ends at 94
     hence necessary increment/decrement should be done ( by 32 )
     --------------------------------------------------------------------------
     */
  var unicodeRomanToNepaliMap = [ '\u0020',   // SPACE
                              '\u0021',   // ! -> !
                              '\u0953',   // ' -> '
                              '\u0023',   // # -> #
                              '\u0024',   // $ -> $
                              '\u0025',   // % -> %
                              '\u0026',   // & -> &
                              '\u0027',   // ' -> '
                              '\u0028',   // ( -> (
                              '\u0029',   // ) -> )
                              '\u002A',   // * -> *
                              '\u200C',   // + -> ZWNJ
                              '\u002C',   // , -> ,
                              '\u002D',   // - -> -
                              '\u0964',   // . -> ।
                              '\u094D',   // / -> ्
                              '\u0966',   // 0 -> ०
                              '\u0967',   // 1 -> १
                              '\u0968',   // 2 -> २
                              '\u0969',   // 3 -> ३
                              '\u096A',   // 4 -> ४
                              '\u096B',   // 5 -> ५
                              '\u096C',   // 6 -> ६
                              '\u096D',   // 7 -> ७
                              '\u096E',   // 8 -> ८
                              '\u096F',   // 9 -> ९
                              '\u003A',   // : -> :
                              '\u003B',   // ; -> ;
                              '\u0919',   // < -> ङ
                              '\u200D',   // = -> ZWJ
                              '\u0965',   // > -> ॥
                              '\u003F',   // ? -> ?
                              '\u0040',   // @ -> @
                              '\u0906',   // A -> आ
                              '\u092D',   // B -> भ
                              '\u091A',   // C -> च
                              '\u0927',   // D -> ध
                              '\u0948',   // E -> ै
                              '\u090A',   // F -> ऊ
                              '\u0918',   // G -> घ
                              '\u0905',   // H -> अ
                              '\u0940',   // I -> ी
                              '\u091D',   // J -> झ
                              '\u0916',   // K -> ख
                              '\u0933',   // L -> ळ
                              '\u0902',   // M -> ं
                              '\u0923',   // N -> ण
                              '\u0913',   // O -> ओ
                              '\u092B',   // P -> फ
                              '\u0920',   // Q -> ठ
                              '\u0943',   // R -> ृ
                              '\u0936',   // S -> श
                              '\u0925',   // T -> थ
                              '\u0942',   // U -> ू
                              '\u0901',   // V -> ँ
                              '\u0914',   // W -> औ
                              '\u0922',   // X -> ढ
                              '\u091E',   // Y -> ञ
                              '\u090B',   // Z -> ऋ
                              '\u0907',   // [ -> इ
                              '\u0950',   // \ -> ॐ
                              '\u090F',   // ] -> ए
                              '\u005E',   // ^ -> ^
                              '\u0952',   // _ -> ॒
                              '\u093D',   // ` -> ऽ
                              '\u093E',   // a -> ा
                              '\u092C',   // b -> ब
                              '\u091B',   // c -> छ
                              '\u0926',   // d -> द
                              '\u0947',   // e -> े
                              '\u0909',   // f -> उ
                              '\u0917',   // g -> ग
                              '\u0939',   // h -> ह
                              '\u093F',   // i -> ि
                              '\u091C',   // j -> ज
                              '\u0915',   // k -> क
                              '\u0932',   // l -> ल
                              '\u092E',   // m -> म
                              '\u0928',   // n -> न
                              '\u094B',   // o -> ो
                              '\u092A',   // p -> प
                              '\u091F',   // q -> ट
                              '\u0930',   // r -> र
                              '\u0938',   // s -> स
                              '\u0924',   // t -> त
                              '\u0941',   // u -> ु
                              '\u0935',   // v -> व
                              '\u094C',   // w -> ौ
                              '\u0921',   // x -> ड
                              '\u092F',   // y -> य
                              '\u0937',   // z -> ष
                              '\u0908',   // { -> ई
                              '\u0903',   // | -> ः
                              '\u0910',   // } -> ऐ
                              '\u093C'    // ~ -> ़
                                ];

  // Default class to be nepalified
  var nepalifyClass = 'nepalify';

  // Return the unicode of the key passed ( else return the key itself )
  function romanToNepaliUnicodeChar(keyCode, array)
  {
    return array[keyCode - 32];
  }

  // Wrapper function for the keymap function
  function unicodify(character)
  {
    return romanToNepaliUnicodeChar(character, unicodeRomanToNepaliMap);
  }

  // Extracted from StackOverflow
  // http://stackoverflow.com/questions/3622818/ies-document-selection-createrange-doesnt-include-leading-or-trailing-blank-li
  function getInputSelection(el) {
    var start = 0, end = 0, normalizedValue, range,
    textInputRange, len, endRange;

    if (typeof el.selectionStart === 'number' && typeof el.selectionEnd === 'number') {
      start = el.selectionStart;
      end = el.selectionEnd;
    } else {
      range = document.selection.createRange();

      if (range && range.parentElement() === el) {
        len = el.value.length;
        normalizedValue = el.value.replace(/\r\n/g, '\n');

        // Create a working TextRange that lives only in the input
        textInputRange = el.createTextRange();
        textInputRange.moveToBookmark(range.getBookmark());

        // Check if the start and end of the selection are at the very end
        // of the input, since moveStart/moveEnd doesn't return what we want
        // in those cases
        endRange = el.createTextRange();
        endRange.collapse(false);

        if (textInputRange.compareEndPoints('StartToEnd', endRange) > -1) {
          start = end = len;
        } else {
          start = -textInputRange.moveStart('character', -len);
          start += normalizedValue.slice(0, start).split('\n').length - 1;

          if (textInputRange.compareEndPoints('EndToEnd', endRange) > -1) {
            end = len;
          } else {
            end = -textInputRange.moveEnd('character', -len);
            end += normalizedValue.slice(0, end).split('\n').length - 1;
          }
        }
      }
    }

    return {
      start: start,
      end: end
    };
  }


  function initialize() {
    // Only on the selected classes
    $('.' + nepalifyClass).keypress(function (event) {
      // Only on input fields and textareas
      if (event.target.type === 'text' || event.target.type === 'textarea') {
        var eventKey = event.which;
        if (eventKey < 126 && eventKey > 32) {
          event.preventDefault();
          event.stopPropagation();

          var target = event.target;

          var selectionTarget = getInputSelection(target);
          var selectionStart = selectionTarget.start;
          var selectionEnd = selectionTarget.end;

          var nepalifiedKey = unicodify(eventKey);

          target.value =  target.value.substring(0, selectionStart) + nepalifiedKey + target.value.substring(selectionEnd);
          target.setSelectionRange(selectionStart + nepalifiedKey.length, selectionStart + nepalifiedKey.length);

        }
      }
    });
  }

  nepalify.setNepalifyClass = function(customClass) {
    $('.' + nepalifyClass).unbind('keypress');
    if (customClass === undefined || customClass === '') {
      nepalifyClass = 'nepalify';
    } else {
      nepalifyClass = customClass;
    }
    initialize();
  };

  initialize();

})(window.nepalify = window.nepalify || {});
