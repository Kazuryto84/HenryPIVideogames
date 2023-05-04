const axios = require ('axios');
require('dotenv').config()

const { API_KEY } = process.env;

const getAllGames = async ()=> {
    const apiInfo = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`) 
    
    const infoVideo = await apiInfo.data.results.map((e)=>{
        return {
            id: e.id,
            name: e.name,
            genres: e.genres.map(e=> e.name).join(', '),
            img: e.background_image,
            description: e.description,
            released: e.released,
            rating: e.rating,
            platforms: e.platforms.map((e) => e.platform.name).join(', '),//le hago un mapeo a plataform por nombre y uno los elementos con el join. si no me trae demasiada info!!
            
        };
    });
    return infoVideo;
};

module.exports = {getAllGames}