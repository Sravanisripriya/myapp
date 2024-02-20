import React from "react";
import axios from 'axios';


function Cart() {
    var [items, setItems] = React.useState([]);
    // var [isloading, setIslaoding] = React.useState(null);
    React.useEffect(() => {
    
        axios.get('https://dummyjson.com/carts').then((res) => {
            console.log(res.data.carts[0].products)
            setItems([...res.data.carts[0].products])
          
        });
    },[])
     function inc(item){
        var temp=[...items];
        temp=temp.map((titem)=>{
            if(titem.id==item.id){
             titem.quantity=titem.quantity+1;
            }
            return titem
        })
        setItems([...temp])

     }
     function dec(item){
        var temp=[...items];
        temp=temp.map((titem)=>{
            if(titem.id==item.id){
             titem.quantity=titem.quantity-1;
            }
            return titem
        })
        setItems([...temp])

     }
    return (
        <div className="mybox">
                <h1 style={{textAlign:"center", color:"brown"}}>Cart</h1>
                <ul className="cartlist">
                {
                    items?.map((item)=>{
                        return <li className="cartItem">
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
                    })
                }
                <h1 class="itemstotal">Total{items.reduce((sum,item)=>{
                    return sum+(item.quantity*item.price)
                },0)}</h1>
                </ul>
        </div>
    )
}

export default Cart;
