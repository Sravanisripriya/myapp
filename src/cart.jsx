import React from "react";

function Cart({cartItems}){
    return(
        <div>
           <h1>Products Cart</h1>
           <ul>
            {
             cartItems?.map((item)=>{
               return <li>{item.title}</li>
             })
            }
          </ul>
          {
            cartItems.length===0 && <h1>Cart is Empty</h1>
          }
        </div>

    )
}
export default Cart
