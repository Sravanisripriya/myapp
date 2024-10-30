function Cart(props){
    return(
        <div  className='border border-3 border-danger p-2'>
            ADD TO CART
            {props.cart.map((pro)=>{
                return <li>{pro.title}
                           <img src={pro.image} width="100px"/>  
                        </li>})}
                
        </div>
    )
}
export default Cart