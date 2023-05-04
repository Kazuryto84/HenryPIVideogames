const {Router} = require('express')
const genresRouter = Router()
const {getByGenres} = require('../Controllers/getByGenres')

genresRouter.get("/", async (req, res) => {
    try {
        let genres = await getByGenres()
        res.status(200).json(genres)
    }   catch (err) {
        res.status(400).json({error:err.message})
    }}
    )


module.exports = {genresRouter}
