import { useEffect, useState } from "react"
import Cart from "./Cart"
import axios from "axios"

function Products(){
 const [products, setProducts] = useState([])
 const [cart, setCart]=useState([])
useEffect(()=>{
    axios.get('https://dummyjson.com/carts').then((res)=>{setProducts([...res.data])})
},[])
  function addtocart(p){
    setCart([...cart, {...p}])}

    function isproductinCart(p){
        var X = cart.find(function(cp){
            if(cp.title===p.title){return true}
            else {return false}
        })
    
    return X
}
return(
  <div className=' d-flex flex-wrap border border-3  border-danger p-2 w-100'>
       {/* <h1>PRODUCTS</h1> */}
     <div className="w-50">
       {products.length>0 && products.map((p)=>{
        return <li className="d-flex">
            <img src={p.image} width="100px" alt=''/>
            <div className="p-4">
            <h4>{p.title}</h4>
            <h3>{p.price}</h3>
            {
               isproductinCart(p) && (<button onClick={()=>{}}>Go to Cart</button>) 
            }
            {
               !isproductinCart(p) &&  <button onClick={()=>{addtocart(p)}}>Add to Cart</button>
            }
           
            
            </div>
        </li>
       })}
     </div>
    <div className="w-50">
       <Cart cart={cart}></Cart>
    </div>
       
  </div>
)}

export default Products