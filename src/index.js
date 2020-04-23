import layouts from './layouts';

const defaultLayout = layouts.romanized;

function format(dirtyStr, dirtyOptions) {
    const str = String(dirtyStr);
    const options = dirtyOptions || {};

    const layout = options.layout || defaultLayout;

    return layout.format(str);
}

function wrapHandlerwithLayout(layout) {

  function _valid_target(target) {
    return (target.type === 'text' || target.type === 'textarea');
  }

  const handler = function handleKeypress(event) {
    if(_valid_target(event.target)) {
      let formattedKey = layout.formatKey(event.key);
      if(formattedKey) {
        event.preventDefault();
        event.stopPropagation();

        let selectionStart = event.target.selectionStart;
        let selectionEnd = event.target.selectionEnd;

        let beforeSelection = event.target.value.substring(0, selectionStart);
        let afterSelection = event.target.value.substring(selectionEnd);

        event.target.value =  beforeSelection + formattedKey + afterSelection;
        let newSelectionPos = selectionStart + formattedKey.length;

        event.target.setSelectionRange(newSelectionPos, newSelectionPos);
      }
    }
  }

  return handler;
}

function interceptAtId(dirtyIdSelector, dirtyOptions) {
  const defaultOptions = {
    layout: defaultLayout,
    enable: true
  };

  const options = {...defaultOptions, ...dirtyOptions };
  const selector = String(dirtyIdSelector);
  const el = document.getElementById(selector);

  var layout = options.layout;
  var handler = wrapHandlerwithLayout(layout);
  var enabled = false;

  if(options.enable){
    enable()
  }

  function enable() {
    el.addEventListener('keypress', handler);
    enabled = true;
  }

  function disable() {
    el.removeEventListener('keypress', handler);
    enabled = false;
  }

  function is_enabled(){
    return enabled;
  }

  return {
    el: el,
    enable: enable,
    disable: disable,
    is_enabled: is_enabled
  }
}

const nepalify = {
  layouts: layouts,
  format: format,
  interceptAtId: interceptAtId
}

export default nepalify
