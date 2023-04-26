import React from "react";
import Pstyle from "../scss/style.scss";
import iphone from "../Img/iphone.jpg";
import watch from "../Img/watch.jpg";
import Nfoto from "../Img/no-foto.jpg";

function Product(props){

    const remove = () => {
        props.onRemove(props.id)
    }

    return (
        <div className={Pstyle.product}>
            <div className={Pstyle.img}>
                <img src={props.image === "iphone" ? iphone : props.image ==="Watch" ? watch : Nfoto}></img>
            </div>
            <div className={Pstyle.body}>
                <h1 className={Pstyle.title}>{props.name}</h1>
                <div className={Pstyle.price}>{props.price}</div>
            </div>
            <button onClick={remove} type="button">Remove</button>
        </div>
    )
}

export default Product;