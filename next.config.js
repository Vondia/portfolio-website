// next.config.js
const withLinaria = require('next-linaria');
module.exports = withLinaria({
  linaria: {
    /* linaria options here */
  },
  experimental: { images: { allowFutureImage: true } }
});
