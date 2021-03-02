import romanized from "./romanized";
import traditional from "./traditional";

const layoutStore = {
  romanized: romanized,
  traditional: traditional,
};

export const defaultLayout = "romanized";

export function availableLayouts() {
  return Object.keys(layoutStore);
}

export function isValidLayout(layout) {
  return availableLayouts().includes(layout);
}

export function fetchLayout(layout) {
  if (isValidLayout(layout)) {
    return layoutStore[layout];
  } else {
    const msg = "Invalid Layout : " + layout;
    throw new Error(msg);
  }
}
