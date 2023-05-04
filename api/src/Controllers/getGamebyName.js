const axios = require ('axios');
require('dotenv').config()
const { Videogame, Genre } = require('../db');
const { API_KEY } = process.env;
const {Op} = require('sequelize');

const getVideoByName = async (name)=> {
    
    const apiByInfo = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`) 
    const infoVideoName = await apiByInfo.data.results.slice(0,15).map((e)=>({
        
            id: e.id,
            name: e.name,
            genres: e.genres.map(e=> e.name).join(', '),
            img: e.background_image,
            description: e.description,
            released: e.released,
            rating: e.rating,
            platforms: e.platforms.map((e) => e.platform.name).join(', '),
            
      })
    );
    
const getVideoDb = await Videogame.findAll({
    where:{
        name:
    {[Op.iLike]:`%${name}%`}
    },  
    include: {
            model: Genre,
            attributes: ["name"],
            through : {
                attributes: [],
            }
        }
    });
    const getVideoList = Array.isArray(getVideoDb) ? getVideoDb.map((game) => ({
        id: game.id,
        name: game.name,
        genres: game.genres.map((gen) => gen.name),
        platforms: game.platforms ? game.platforms.split(', ').join(', ') : null,
        released: game.released,
        image: game.image,
        rating: game.rating,

    })) : [];

    const games = infoVideoName.concat(getVideoList)

    return games;
}



module.exports = {getVideoByName}