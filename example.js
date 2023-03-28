const FreeSOAPI = require('./index');

const SOAPI = new FreeSOAPI("https://api.freeso.org"); //can be used to change freeso server

const lotsApi = SOAPI.lots();

lotsApi.getLotsByPage(1, 1, 100).then((res) => {
  res.lots.forEach((lot) => {
    console.log(lot.name);
  });
});
