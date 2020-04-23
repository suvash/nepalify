import layouts from "./layouts";

const defaultLayout = layouts.romanized;

function format(dirtyStr, dirtyOptions) {
  const str = String(dirtyStr);
  const options = dirtyOptions || {};

  const layout = options.layout || defaultLayout;

  return layout.format(str);
}

function wrapHandlerwithLayout(layout) {
  function validTarget(target) {
    return target.type === "text" || target.type === "textarea";
  }

  const handler = function handleKeypress(event) {
    if (validTarget(event.target)) {
      const formattedKey = layout.formatKey(event.key);
      if (formattedKey) {
        event.preventDefault();
        event.stopPropagation();

        const selectionStart = event.target.selectionStart;
        const selectionEnd = event.target.selectionEnd;

        const beforeSelection = event.target.value.substring(0, selectionStart);
        const afterSelection = event.target.value.substring(selectionEnd);

        event.target.value = beforeSelection + formattedKey + afterSelection;
        const newSelectionPos = selectionStart + formattedKey.length;

        event.target.setSelectionRange(newSelectionPos, newSelectionPos);
      }
    }
  };

  return handler;
}

function interceptElementById(dirtyIdSelector, dirtyOptions) {
  const defaultOptions = {
    layout: defaultLayout,
    enable: true,
  };

  const options = { ...defaultOptions, ...dirtyOptions };
  const selector = String(dirtyIdSelector);
  const el = document.getElementById(selector);

  var layout = options.layout;
  var handler = wrapHandlerwithLayout(layout);
  var enabled = false;

  if (options.enable) {
    enable();
  }

  function enable() {
    el.addEventListener("keypress", handler);
    enabled = true;
  }

  function disable() {
    el.removeEventListener("keypress", handler);
    enabled = false;
  }

  function isEnabled() {
    return enabled;
  }

  return {
    el: el,
    enable: enable,
    disable: disable,
    isEnabled: isEnabled,
  };
}

const nepalify = {
  layouts: layouts,
  format: format,
  interceptElementById: interceptElementById,
};

export default nepalify;
