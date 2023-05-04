import style from "../Card/Card.module.css";

const Card = (props)=> {
    return (
        <div className={style.card}>
        <p>Id:{props.id}</p>
        <p>Name:{props.name}</p>
        <p>Genres:{props.genres}</p>
        <p>Platforms:{props.platforms}</p>
        </div>
    )
}

export default Card