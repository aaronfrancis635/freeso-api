module.exports = (fetch) => {
    return {
        getOAuthToken(username, password, permissionLevel) {
            let formData = new FormData();
            formData.append("username", username);
            formData.append("password", password);
            formData.append("permission_level", permissionLevel);
            return fetch(`/oauth/token`, {method: "POST", body: formData}).then((res) => res.json());
        }
    };
}