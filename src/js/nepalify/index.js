import { romanized as defaultLayout } from './layouts';

function format(dirtyStr, dirtyOptions) {
    var str = String(dirtyStr);
    var options = dirtyOptions || {};

    var layout = options.layout || defaultLayout;

    return layout.format(str);
}

var nepalify = {
    format: format,
}

export default nepalify
