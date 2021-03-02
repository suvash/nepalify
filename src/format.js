import { fetchLayout, defaultLayout } from "./layouts";

export function format(dirtyStr, dirtyOptions) {
  const defaultOptions = {
    layout: defaultLayout,
  };
  const text = String(dirtyStr);
  const options = { ...defaultOptions, ...dirtyOptions };

  const layout = fetchLayout(options.layout);

  return Array.from(text, (c) => layout.formatKey(c) || c).join("");
}
