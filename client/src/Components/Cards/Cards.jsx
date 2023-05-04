import Card from "../Card/Card"
import style from "../Cards/CardsContainer.module.css"
const Cards = ()=> {
    const Games = [
        {
            "id": 24138,
            "name": "Metroid",
            "genres": "Platformer, Adventure, Action",
            "img": "https://media.rawg.io/media/games/5fe/5fe62882f1af83e36480ded84c49b984.jpg",
            "released": "1986-08-06",
            "rating": 3.66,
            "platforms": "Nintendo 3DS, Wii U, Wii, Game Boy Advance, NES"
        },
        {
            "id": 745514,
            "name": "Metroïd",
            "genres": "Action",
            "img": "https://media.rawg.io/media/screenshots/1f7/1f703b2548f4b033b27b1707be28955a.jpg",
            "released": "2022-02-21",
            "rating": 0,
            "platforms": "PC"
        },
        {
            "id": 24366,
            "name": "Metroid: Other M",
            "genres": "Adventure, Action",
            "img": "https://media.rawg.io/media/screenshots/ddb/ddb18099d2d15e6af6c195206197779e.jpg",
            "released": "2010-08-31",
            "rating": 3.28,
            "platforms": "Wii U, Wii"
        },
        {
            "id": 43755,
            "name": "Metroid: Samus Returns",
            "genres": "Platformer, Action",
            "img": "https://media.rawg.io/media/games/c8a/c8a659feff775789bf3b23790229b204.jpeg",
            "released": "2017-09-15",
            "rating": 4.23,
            "platforms": "Nintendo 3DS"
        },
        {
            "id": 27711,
            "name": "Metroid: Zero Mission",
            "genres": "Platformer, Adventure, Action",
            "img": "https://media.rawg.io/media/games/a27/a271644f234ff3397938c424f6859851.jpg",
            "released": "2004-02-09",
            "rating": 4.39,
            "platforms": "Wii U, Game Boy Advance"
        },
        {
            "id": 23958,
            "name": "Metroid Prime: Trilogy",
            "genres": "Adventure, Action",
            "img": "https://media.rawg.io/media/screenshots/b86/b864ce981ace01517c6674723085a0bc.jpg",
            "released": "2009-08-24",
            "rating": 4.41,
            "platforms": "Wii U, Wii"
        },
        {
            "id": 56124,
            "name": "Metroid Prime 2: Echoes",
            "genres": "Adventure, Action",
            "img": "https://media.rawg.io/media/games/852/85222e407cba4c699ae7e6f4742b8b1a.jpg",
            "released": "2004-11-15",
            "rating": 4.41,
            "platforms": "Wii, GameCube"
        },
        {
            "id": 25198,
            "name": "Metroid Prime 3: Corruption",
            "genres": "Adventure, Action",
            "img": "https://media.rawg.io/media/games/1ed/1eded24fa739e8edfbae7a0ec931e8f7.jpg",
            "released": "2007-08-27",
            "rating": 4.38,
            "platforms": "Wii"
        },
        {
            "id": 24151,
            "name": "Metroid II - Return of Samus",
            "genres": "Platformer, Adventure, Action",
            "img": "https://media.rawg.io/media/screenshots/53c/53c20a60fcc1b8db845336082af5c9f2.jpg",
            "released": "1991-11-01",
            "rating": 3.47,
            "platforms": "Nintendo 3DS, Game Boy"
        },
        {
            "id": 56123,
            "name": "Metroid Prime",
            "genres": "Shooter, Adventure, Action",
            "img": "https://media.rawg.io/media/games/c86/c86bc047ba949959a90fe24209d59439.jpg",
            "released": "2002-11-17",
            "rating": 4.36,
            "platforms": "Wii, GameCube"
        },
        {
            "id": 27390,
            "name": "Metroid Fusion",
            "genres": "Platformer, Adventure, Action",
            "img": "https://media.rawg.io/media/screenshots/68a/68aae2ada648e3c09f22980bbc2e3f71.jpg",
            "released": "2002-11-17",
            "rating": 4.39,
            "platforms": "Nintendo 3DS, Wii U, Game Boy Advance"
        },
        {
            "id": 622495,
            "name": "Metroid Dread",
            "genres": "Platformer, Action, RPG",
            "img": "https://media.rawg.io/media/games/c26/c262f8b54b46edc72594c4a9bb8ee13e.jpg",
            "released": "2021-10-08",
            "rating": 4.41,
            "platforms": "Nintendo Switch"
        },
        {
            "id": 25002,
            "name": "Metroid Prime Hunters",
            "genres": "Adventure, Action",
            "img": "https://media.rawg.io/media/screenshots/7ed/7ed17d5ae0fa0cd3504705fb8ca970c2.jpg",
            "released": "2006-03-20",
            "rating": 3.67,
            "platforms": "Nintendo DS, Wii U"
        },
        {
            "id": 923014,
            "name": "Metroid Prime Remastered",
            "genres": "Platformer, Shooter, Adventure, Action",
            "img": "https://media.rawg.io/media/games/f2f/f2f9f11997ee841550ba2b8ccf3c51e9.jpg",
            "released": "2023-02-08",
            "rating": 4.52,
            "platforms": "Nintendo Switch"
        },
        {
            "id": 58858,
            "name": "Metroid Prime 4",
            "genres": "Shooter, Action",
            "img": "https://media.rawg.io/media/screenshots/a4d/a4d4c220ad3c7731c4624d12b7adb9d4.jpg",
            "released": null,
            "rating": 0,
            "platforms": "Nintendo Switch"
        }
    ]

    return (
        <div className={style.container}>
            {Games.map(game=>{
                return <Card
                    id={game.id}
                    name={game.name}
                    genres={game.genres}
                    platforms={game.platforms}
                />
            })}
        </div>
    )
}

export default Cards