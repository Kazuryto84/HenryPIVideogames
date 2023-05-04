const axios = require ('axios');
require('dotenv').config()
const { Videogame, Genre} = require('../db');
const { API_KEY } = process.env;

const newPostGame = async(name, description, rating, image, released, genres, platforms) =>{
  
      const [newVideogame , created ] = await Videogame.findOrCreate({
      where:{
        name: name,
      }, defaults:{
      description:description,  
      rating:rating,
      platforms:platforms,
      image:image,
      released:released,
      }
      
    });
    
    for (const e of genres) {
      const newGenre = await Genre.findOne({where: {name: e}});
      console.log(newGenre)
      await newVideogame.addGenre(newGenre);  
    }
  
     return newVideogame;
    }
    

console.log(newPostGame)
module.exports= {
  newPostGame
  
};

