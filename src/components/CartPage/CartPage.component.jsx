import React, { Fragment,useContext } from 'react'
import {Context} from "../../Context"

    // cartItems
import Srinivas from '../Cart-item/Srinivas'


function CartPage() {

    // useState
    const {cartItems,emptyCart} = useContext(Context)
    const [ButtonText,setButtonText] = React.useState('Place Order')

        // total price  method reducing
    const initialValue =0
    const totalCost = cartItems.map(item=>item.price).reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
      )


    const totalCostDisplay = totalCost.toLocaleString("en-IN", {style: "currency", currency: "INR"})


    const cartItemElements = cartItems.map(item=>(
        <Srinivas key={item.id} item={item}/>
    ))


    function placeOrder() {
        setButtonText("Ordering...")
        setTimeout(() => {
            setButtonText("Place Order")
            emptyCart()
            alert("Order placed!")
        }, 3000)
    }
    
    return(
        <Fragment>
            <main className="cart-page">
                
               <h1>Check out</h1>
               {cartItemElements}

               <p className="total-cost">Total:{totalCostDisplay} </p>
            {
                cartItems.length > 0 ?
                <div className="order-button">
                    <button onClick={placeOrder}>{ButtonText}</button>
                </div> :
                <p>You have no items in your cart.</p>
            }
            </main>
        </Fragment>
    )
}

export default CartPage