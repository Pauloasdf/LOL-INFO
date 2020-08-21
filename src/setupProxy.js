const proxy = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        proxy("/lol/summoner/v4/summoners/by-name/",
            {
                target: "https://br1.api.riotgames.com",
                secure: false,
                changeOrigin: true
            })
    )
}