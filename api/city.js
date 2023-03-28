module.exports = (fetch) => {
    return {
        getCity(shard) {
            return fetch(`/userapi/city/${shard}/city.json`).then((res) => res.json());
        }
    };
};