/**
 *
 * @param app
 * Routes for API endpoints
 *
 * @Author Isaac
 */



export default function (app) {
    app.route("api")
        .get( (req, res) => {
            res.send("tested")
        } )

}