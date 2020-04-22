import { romanized as defaultLayout } from './layouts';

function format(dirtyStr, dirtyOptions) {
    const str = String(dirtyStr);
    const options = dirtyOptions || {};

    const layout = options.layout || defaultLayout;

    return layout.format(str);
}

function attachToId(dirtyIdSelector, dirtyOptions) {
  const selector = String(dirtyIdSelector);
  const options = dirtyOptions || {};

  const layout = options.layout || defaultLayout;
  const el = document.getElementById(selector);

  var enabled = false;

  function handleKeypress(event) {
    if(_valid_target(event.target)) {
      let formattedKey = layout.formatKey(event.key);// use .key instead of deprecated .which
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

  function _valid_target(target) {
    return (target.type === 'text' || target.type === 'textarea');
  }

  function enable() {
    el.addEventListener('keypress', handleKeypress);
    enabled = true;
  }

  function disable() {
    el.removeEventListener('keypress', handleKeypress);
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
  format: format,
  attachToId: attachToId
}

export default nepalify
