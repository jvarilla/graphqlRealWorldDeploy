'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  server: {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || 'production',//'development',
    jwt: process.env.JWT || 'stubJWT'
  },
  api: {
      base_url: process.env.BASE_URL || 'https://powerful-lake-14918.herokuapp.com/api'
      //base_url: process.env.BASE_URL || 'https://conduit.productionready.io/api'
  }
};
