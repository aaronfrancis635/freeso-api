module.exports = 
    (fetch) => {
        return {
          getLotsByPage(shard, page, lotsPerPage = 100) {
            return fetch(
              `/userapi/city/${shard}/lots/page/${page}?lots_on_page=${lotsPerPage}`
            ).then((res) => res.json());
          },
          getLotsByNeighbourhood(shard, neighbourhood) {
            return fetch(
              `/userapi/city/${shard}/lots/neighbourhood/${neighbourhood}`
            ).then((res) => res.json());
          },
          getOnlineLots(shard, compact = false) {
            return fetch(
              `/userapi/city/${shard}/lots/online?compact=${compact}`
            ).then((res) => res.json());
          },
          getLotsById(shard, lotIds) {
            return fetch(`/userapi/lots?id=${lotIds.join(",")}`).then((res) =>
              res.json()
            );
          },
          getLotById(shard, lotId) {
            return fetch(`/userapi/lots/${lotId}`).then((res) => res.json());
          },
          getLotByLocation(shard, location) {
            return fetch(
              `/userapi/city/${shard}/lots/location/${location}`
            ).then((res) => res.json());
          },
          getLotByName(shard, name) {
            return fetch(`/userapi/city/${shard}/lots/name/${name}`).then(
              (res) => res.json()
            );
            },
          getLotThumbnail(shard, lotLocation) {
            return fetch(`/userapi/city/${shard}/${lotLocation}.png`);
          }
        };
    }
