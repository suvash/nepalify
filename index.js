'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/nepalify.production.min.js');
} else {
  module.exports = require('./cjs/nepalify.development.js');
}
