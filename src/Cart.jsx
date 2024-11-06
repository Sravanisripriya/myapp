import React, { useEffect, useState } from "react"
import axios from "axios"
import CartItems from "./Cartitems"

function Cart(){
     const [items, setItems]=useState([])
     const [loading, setLoading]=useState(null)
     useEffect(()=>{
       setLoading(true)
       axios.get("https://dummyjson.com/carts").then((res)=>{console.log(res)
       setItems([...res.data.carts[4].products])
       setLoading(false) })
     },[])

     function incQut(item){
      var temp=[...items]
      temp =temp.map((titem)=>{
        if(titem.id==item.id){titem.quantity=titem.quantity+1}
        return titem
      })
      setItems([...temp])
     }
     function desQut(item){
      var temp=[...items]
      temp=temp.map((titem)=>{
        if(titem.id==item.id){titem.quantity=titem.quantity-1}
        return titem
      })
      setItems([...temp])
     }
     
  return(
    <div>
      <h1 className="text-center mb-4">Shopping Cart Refracting</h1>
      { loading && (<div className="d-flex justify-content-center mb-4">
                       <div class="spinner-border" role="status">
                       <span class="visually-hidden">Loading...</span>
                       </div>
                    </div>)
      }
      <ul className="P-List">
      {
        items?.map((item)=>{
          return <CartItems item={item} incQut={incQut} desQut={desQut}></CartItems>
        })
      }
             <h1 className="P-total">Total:{items?.reduce((sum,item)=>{
              return sum+(item.quantity* Math.round(item.price))
             },0)}</h1>
      </ul>
    </div>



  )}


export default Cart