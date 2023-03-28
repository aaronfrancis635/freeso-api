
# FreeSO-API

This package contains the definitions to interact with [FreeSO](https://github.com/riperiperi/FreeSO) server APIs.




## Features

- Full coverage of the known public APIs
- Ability to get thumbnails of lots




## Installation

Install FreeSO-API with npm

```bash
  npm install freeso-api
```
    
    


## Usage/Examples

```javascript
const FreeSOAPI = require('freeso-api');

const SOAPI = new FreeSOAPI("https://api.freeso.org"); //can be used to change freeso server

const lotsApi = SOAPI.lots();

lotsApi.getLotsByPage(1, 1, 100).then((res) => {
  res.lots.forEach((lot) => {
    console.log(lot.name);
  });
});
```


