module.exports = (fetch) => {
  return {
        getNeighbourhoods(shard) {
            return fetch(`/userapi/city/${shard}/neighbourhoods/all`).then((res) =>
                res.json()
            );
        },
        getNeighbourhood(neighbourhood) {
            return fetch(`/userapi/neighbourhoods/${neighbourhood}`).then((res) =>
                res.json()
            );
        },
        getNeighbourhoodByName(name) {
            return fetch(`/userapi/neighbourhoods/${name}`).then((res) =>
                res.json()
            );
        }
  };
};
