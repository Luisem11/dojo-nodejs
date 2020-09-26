const axios = require("axios").default;
const getToken = require("../token.service.js");
const qs = require("querystring");


async function getTracks(criteria) {

    let headers = await getHeaders();
    let stringheaders = headers.headers
    // await findTrack()
    const datos = await axios
        .get(
            "https://api.spotify.com/v1/search", {
                headers: stringheaders,
                params: {
                    q: criteria,
                    type: 'track',
                    market: 'CO',
                    limit: 1
                }
            }
        ).then(res => res.data.tracks.items).then(items => {
            track = {}

            for (i in items) {
                track.name = items[i].name
                track.artista = items[i].album.artists
                track.album = items[i].album.name
                track.url = items[i].uri
                track.id = items[i].id
                track.img = items[i].album.images
            }

            return track
        }).catch(e => console.log(e));
    return datos;
}

async function getHeaders() {

    const token = await getToken();
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
    };

    return config;
}

module.exports = getTracks;