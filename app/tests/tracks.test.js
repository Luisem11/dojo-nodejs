const assert = require("chai").assert;
const getTracks = require("../services/spotify/spotify.service");

describe("Spotify services", function () {
    it("get tracks", async function () {
        const result = await getTracks("bajotierra");
        console.log(result);
    });
});