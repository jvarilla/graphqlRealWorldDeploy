'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  server: {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || 'development',
    jwt: process.env.JWT || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZWQ4ZmIyODU0MjQxMTYwMDJhODJiMyIsInVzZXJuYW1lIjoianZhcmlsbGE5ODEiLCJleHAiOjE1NDc0Nzk0NzQsImlhdCI6MTU0MjI5NTQ3NH0.lDzxCuLrMcl_1D3G6f1XAdH021eBG6gRK7-R-V6pB-c'//'stubJWT'
  },
  api: {
	  base_url: process.env.BASE_URL || '//https://powerful-lake-14918.herokuapp.com/api'
  }
};
