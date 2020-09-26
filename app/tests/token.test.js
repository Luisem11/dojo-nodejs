const assert = require("chai").assert;
const getToken = require("../services/token.service.js");

describe("Spotify services", function () {
    it("get token", async function () {
        const result = await getToken();
        console.log(result);
    });
});