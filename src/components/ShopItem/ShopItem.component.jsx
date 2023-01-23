import React, { Fragment,useContext } from 'react'

import { Context } from "../../Context"

import { useNavigate } from 'react-router-dom';


import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';




import './shop-item.css'

function ShopItem({item,}) {

    const navigate =useNavigate()

    const {removeFromCart,addToCart,cartItems,} = useContext(Context)


    function cartIcon() {
        const alreadyInCart = cartItems.some(kkk => kkk.id === item.id)
        
        if(alreadyInCart) {
            return <ShoppingCartIcon onClick={()=>removeFromCart(item.id)}/>
    
        } else{
    
            return <ShoppingCartCheckoutOutlinedIcon onClick={() => addToCart(item)}/>
        }
    }





    return(
        <Fragment>
            <div className='menu-item'>
            <div 
             className='background-image'
             style={{
            backgroundImage:`url(${item.imageUrl})`
         }} />
            <div className='buy'    onClick={() => [addToCart(item), navigate('/cart')]}>
                <a href="#" className="btn-flip" data-back="Back Now" data-front="Buy"/>
            </div>
            <div className='content'>
               <h1 className='title'>Price:{item.price}</h1>
               <h2 className='subtitle'>{item.name}</h2>
               {cartIcon()}
            </div>
        </div>  
        </Fragment>

    )
}

export default ShopItem