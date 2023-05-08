import style from "../Card/Card.module.css";

const Card = (props)=> {
    return (
        <div className={style.card}>
        <p>Id:{props.id}</p>
        <p>Name:{props.name}</p>
        <p>Email:{props.email}</p>
        <p>Phone:{props.phone}</p>
        </div>
    )
}

export default Card