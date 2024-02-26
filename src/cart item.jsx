import React from "react";
 function CartItem({item,inc,dec}){
    return(
        <div>
             <li className="cartItem">
                            <img src={item.thumbnail}/>
                            <b class="itemtitle">{item.title}</b>
                            <b class="itemprice">price:{item.price}</b>
                            <div>
                                <button onClick={()=>{inc(item)}}>+</button>
                                <b>{item.quantity}</b>
                                <button onClick={()=>{dec(item)}}>-</button>
                            </div>
                            <b class="itemTotal">Rs:{item.price*item.quantity}</b>
                            </li>
        </div>
    )
 }
 export default  CartItem
 