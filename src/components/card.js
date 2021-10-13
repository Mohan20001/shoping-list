import React from "react";
import {useState} from "react";



const Card = ({name,price,color}) => {

    let [quantity,setQuantity]=useState(0);

    function incrimant() {
       setQuantity(quantity + 1);
    }

    function decrimant() {
        if(quantity != 0){
        setQuantity(quantity - 1);
        }
     }

     function shift(name, q, price) {
         if(q != 0)
           if(q==1)
             alert(`You buy a ${name} Mobile, total cost:$${q * price}/-`);
           else
            alert(`You buy ${q} ${name} Mobiles, total cost:$${q * price}/-`);
    }

    return (
        <div class="card">
            <h1>{name}</h1>
            <p>${price}</p>
            <button onClick={()=>decrimant()}>-</button><span>{quantity}</span><button onClick={()=>incrimant()}>+</button>
        <div><button onClick={()=>shift(name, quantity, price)} style={buy} class="buy">Buy</button></div>
        </div>
    )
}

let buy={
    width:"100%",
    padding:"10px 10px",
    margin:"1rem auto",
    background:"blue",
    border:"none"
}

Card.propType={
    name:String,
    price:Number
}

export default Card;