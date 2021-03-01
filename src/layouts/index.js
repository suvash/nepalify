import romanized from "./romanized";
import traditional from "./traditional";

const layoutStore = {
  romanized: romanized,
  traditional: traditional,
};

function availableLayouts() {
  return Object.keys(layoutStore);
}

function isValidLayout(layout) {
  return availableLayouts().includes(layout);
}

function fetchLayout(layout) {
  if (isValidLayout(layout)) {
    return layoutStore[layout];
  } else {
    const msg = "Invalid Layout : " + layout;
    throw new Error(msg);
  }
}

const layouts = {
  fetchLayout: fetchLayout,
  isValidLayout: isValidLayout,
  availableLayouts: availableLayouts,
};

export default layouts;
