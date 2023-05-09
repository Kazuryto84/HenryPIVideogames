import Card from "../Card/Card"
import style from "../Cards/CardsContainer.module.css"
import { useSelector } from "react-redux"
const Cards = ()=> {
    const Games = useSelector(state=>state.users)

    return (
        <div className={style.container}>
            {Games.map(game=>{
                return <Card
                    id={game.id}
                    name={game.name}
                    platforms={game.platforms}
                    genres={game.genres}
                />
            })}
        </div>
    )
}

export default Cards