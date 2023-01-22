import React, { Fragment,useContext } from 'react'


import {Context} from "../../Context"

import cartItem from '../Cart-item/cartItems'


function CartPage() {

    const {cartItems} = useContext(Context)   
    console.log(cartItems)


    const cartItemElements = cartItems.map(item=>(
        <cartItem key={item.id} item={item}/>
    ))
    
    return(
        <Fragment>
            <main className="cart-page">
               <h1>Check out</h1>
               {cartItemElements}
                

            </main>
        </Fragment>
    )
}

export default CartPage