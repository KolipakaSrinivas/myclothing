import React, { Fragment, useState,useContext } from 'react'


import { Context } from "../../Context"

import StoreIcon from '@mui/icons-material/Store';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';


import { useNavigate } from 'react-router-dom';








function Preview({item,sri}){
    
    const navigate =useNavigate()
    const [hovered, setHovered] = useState(false)
    

    // useContext
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
            <div className="grid-item">
                <div className="skeleton">
                    <img src={item.imageUrl} className="img" alt='hart'/>
                    <div className='icon'>
                        <li><FavoriteBorderIcon/></li>
                         <li
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}          
                         >
                            {cartIcon()}
                        
                        </li>
                    </div>
                </div>
                    <div className="footer">
                        <div>
                              <span>Price:{item.price}</span>
                             <span
                             
                             onClick={()=>removeFromCart(item.id)}
                             
                             >Name:{item.name}</span>
                        </div> 
                        <li 
                        onClick={() => navigate(`/shop/${sri}`)}
                         onMouseEnter={() => setHovered(true)}
                         onMouseLeave={() => setHovered(false)} >  
                            {
                                 hovered ? <StoreIcon/>: <StoreOutlinedIcon/>
                             } 

                        </li>
                    </div>
                    <button  onClick={()=>navigate('/cart')}>hhh</button>
            </div>

            

        </Fragment>
    )
}

export default Preview