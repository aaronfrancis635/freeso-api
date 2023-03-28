module.exports = (fetch) => {
    return {
        getElectionsByNeighbourhood(neighbourhood) {
            return fetch(`/userapi/neighbourhood/${neighbourhood}/elections`).then((res) => res.json());
        },
    };
}