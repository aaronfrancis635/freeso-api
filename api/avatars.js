module.exports = (fetch) => {
    return {
        getAvatarsByPage(shard, page, avatarsPerPage = 100) {
            return fetch(
                `/userapi/city/${shard}/avatars/page/${page}?avatars_on_page=${avatarsPerPage}`
            ).then((res) => res.json());
        },
        getAvatarsByNeighbourhood(shard, neighbourhood) {
            return fetch(
                `/userapi/city/${shard}/avatars/neighbourhood/${neighbourhood}`
            ).then((res) => res.json());
        },
        getOnlineAvatars(shard, compact = false) {
            return fetch(
                `/userapi/city/${shard}/avatars/online?compact=${compact}`
            ).then((res) => res.json());
        },
        getAvatarsById(shard, avatarIds) {
            return fetch(`/userapi/avatars?id=${avatarIds.join(",")}`).then((res) =>
                res.json()
            );
        },
        getAvatarById(shard, avatarId) {
            return fetch(`/userapi/avatars/${avatarId}`).then((res) => res.json());
        },
        getAvatarByName(shard, name) {
            return fetch(`/userapi/city/${shard}/avatars/name/${name}`).then(
                (res) => res.json()
            );
        },
        getAvatarByUserId() {
            return fetch(`/userapi/user/avatars`).then(
                (res) => res.json()
            );
        }
    }
}