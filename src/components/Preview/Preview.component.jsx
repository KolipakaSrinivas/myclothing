import React, { Fragment } from 'react'
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Preview({item}){
    return(
        <Fragment>
            <div className="grid-item">
                <div className="skeleton">
                    <img src={item.imageUrl} className="img" alt='hart'/>
                    <div className='icon'>
                        <li><FavoriteBorderIcon /></li>
                         <li><ShoppingCartCheckoutOutlinedIcon/></li>
                    </div>
                </div>
                    <div className="footer">
                        <div>
                              <span>Price:{item.price}</span>
                             <span>Name:{item.name}</span>
                        </div> 
                        <li><StoreIcon/></li>
                    </div>
            </div>

        </Fragment>
    )
}

export default Preview