const axios = require ('axios');
require('dotenv').config()

const { API_KEY } = process.env;

const getById = async (id) => {
    try{
        const apiVideo = await axios( `https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
        const data = await apiVideo.data;
        const dataVideo ={
            id: data.id,
            name: data.name,
            description: data.description,
            released: data.released,
            rating: data.rating,
            platforms: data.platforms.map((e) => e.platform.name).join(', '),
            img: data.background_image,
            genres: data.genres.map((e) => e.name)
        }
        return dataVideo
    
    }catch(e){
        console.log(e)
    }
    }

   

module.exports = {getById}