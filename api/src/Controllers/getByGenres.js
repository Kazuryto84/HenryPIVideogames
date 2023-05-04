const axios = require ("axios");
const {Genre} = require ('../db')
const { API_KEY } = process.env;

const getByGenres = async(req,res) => {

    try{
        const genresApi = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
        const genres =  genresApi.data.results.map((genre)=> ({
            name:genre.name,

        }))
     
        genres.forEach(async(genre) => await Genre.findOrCreate({ //lo uso para guardar los generos que me traje de la API a la base de datos
            where: {name: genre.name } // en el caso de genres solamente queremos buscar x su name , por eso no le defino un id en su modelo.
        }))
        let genresList = await Genre.findAll()

        return genresList;
    
    
    }catch(error){
        throw Error(error)
    
    }
    
    }
    module.exports = { getByGenres }