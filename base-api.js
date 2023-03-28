const fetch = require("node-fetch");
module.exports =
  (baseUrl) =>
  (url, ...otherParams) =>
    url.startsWith("/")
      ? fetch(baseUrl + url, ...otherParams)
      : fetch(url, ...otherParams);


