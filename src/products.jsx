import React from "react";
import axios from "axios";
import Cart from "./cart.jsx"


function Products(){
    var [products,setProducts]=React.useState([])
    var [cartItems,setCartItems]=React.useState([])
    React.useEffect(()=>{
        axios.get("http://fakestoreapi.com/products").then((res)=>{
        setProducts([...res.data])})},[])

        function addToCart(product){
            if(product.quantity){
                product.quantity++
            }
            else{
            product.quantity=1
            setCartItems([...cartItems,{...product}])
            }
      
        }
        React.useEffect(()=>{
         console.log(products)
        },[products])
        

    return(
        <div className="d-flex" >
         <div className="d-flex flex-wrap w-75" >
            {
                products?.map((product)=>{
                  return(
                   
                        <div className="card  m-4 " style={{width:"200px"}}  >
                        <img src={product.image} class="card-img-top" id="img" />
                        <div class="card-body d-flex flex-column justify-content-between" >
                            <h4 class="card-title">{product.title}</h4>
                            <p class="card-text"><small class="text-body-secondary">{product.category}</small></p>
                            <button className="btn btn-primary" onClick={()=>{addToCart(product)}}>Add to cart</button>
                        </div>
                    </div>

                  )
                })
            }
     </div>
     <div className="border border-dark w-25" style={{backgroundColor:"pink"}}>
        <Cart cartItems={cartItems}></Cart>
        </div>
     </div>
   
    )}

export default Products

