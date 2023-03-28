class FreeSOAPI {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
        this.fetch = require('./base-api')(apiUrl);
    }

    lots(){
        return require('./api/lots')(this.fetch);
    }

    avatars() {
        return require('./api/avatars')(this.fetch);
    }

    neighbourhoods() {
        return require('./api/neighbourhoods')(this.fetch);
    }

    bulletins() {
        return require('./api/bulletins')(this.fetch);
    }

    elections() {
        return require('./api/elections')(this.fetch);
    }

    oauth() {
        return require('./api/oauth')(this.fetch);
    }

    city() {
        return require('./api/city')(this.fetch);
    }
}

module.exports = FreeSOAPI;