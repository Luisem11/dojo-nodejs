const axios = require("axios").default;
const qs = require("querystring");

const config = {
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
};

let token = "";

const getToken = async () => {
    let token;
    const promise = await axios
        .post(
            "https://accounts.spotify.com/api/token",
            qs.stringify({
                grant_type: "client_credentials",
                client_id: "a57d56e1305d4f40bc8001eb8a8a30e3",
                client_secret: "59b408168f804694b36e712cab5077ef",
            }),
            config
        )
    token = promise.data;
    return token.access_token;
}

module.exports = getToken;