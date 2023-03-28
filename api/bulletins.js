module.exports = (fetch) => {
  return {
      getBulletinsByNeighbourhood(neighbourhood) {
            return fetch(
              `/userapi/neighbourhood/${neighbourhood}/bulletins`
            ).then((res) => res.json());
      },
      getBulletinById(neighbourhood, bulletinId) {
            return fetch(
              `/userapi/neighbourhood/${neighbourhood}/bulletins/${bulletinId}`
            ).then((res) => res.json());
      },
      getBulletinsByType(neighbourhood, type) {
            return fetch(
              `/userapi/neighbourhood/${neighbourhood}/bulletins/type/${type}`
            ).then((res) => res.json());
      }
  };
};
