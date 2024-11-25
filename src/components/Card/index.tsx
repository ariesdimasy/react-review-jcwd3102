import style from "./Card.module.css"

interface ICard {
    title : string
    children: JSX.Element
}

export default function Card(props:ICard){
    return (<div className={style.card}>
        <div> Header Card : {props.title} </div>
        <div>{props.children}</div>
    </div>)
}