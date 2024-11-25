import style from "./Card.module.css"

interface ICard {
    title : string
    children: JSX.Element
}

export default function Card(props:ICard){
    return (<div className={style.card}>
        <h1> Header Card : {props.title} </h1>
        <div>{props.children}</div>
    </div>)
}