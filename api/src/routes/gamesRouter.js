const {Router} = require('express')
const {getAllGames} = require("../Controllers/getAllGames") 
const {getById} = require("../Controllers/getGamesById")
const {newPostGame} = require("../Controllers/newPostGame")
const {getVideoByName} = require("../Controllers/getGamebyName")
const gamesRouter = Router()

gamesRouter.get("/all", async (req, res) => {
    
    try {
        const getGames = await getAllGames();
        res.status(200).json(getGames)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
} )

gamesRouter.get("/", async (req, res) => {
    const {name} = req.query
    
    try {
        const getGames = await getVideoByName(name);
        res.status(200).json(getGames)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
} )


gamesRouter.get("/:id", async (req, res) => {
    const {id} = req.params
   try{
    let vgamesTotal = await getById(id)
    res.status(200).json(vgamesTotal)
    }catch(e){
        res.status(404).send(console.log(e))
    }
    })


gamesRouter.post("/post", async (req, res) => {
    const  { name, description, released, rating, platforms, image, genres } = req.body
    
    try {
        if (!name || !description || !rating){
      
            return res.status(400).json({error: "Faltan Datos en el Body"})
          }
        
        const newGame = await newPostGame(name, description, rating, image, released, genres, platforms)
        res.status(200).json(newGame)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
} )

module.exports = {gamesRouter}