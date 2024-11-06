import React from "react"

function CartItems({item,incQut,desQut}){
    return(
        <li className="P-item">
        <img src={item.thumbnail} alt=""/>
        <b className="P-title">{item.title}</b>
        <b className="P-Price">Price:{Math.round(item.price)}</b>
         <div>
            <button onClick={()=>{incQut(item)}}>+</button>
            <b>{item.quantity}</b>
            <button onClick={()=>{desQut(item)}}>-</button>
         </div>
        <b className="PQ-total">Rs:{Math.round(item.price)*item.quantity}</b>
     </li> 
    )
   
}
export default CartItems