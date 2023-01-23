import React, { Fragment } from 'react';

import { useNavigate } from 'react-router-dom';


import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';



import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';


function Navbar () {

    const navigate =useNavigate()


    return(
        <Fragment>
             <nav>
                <span className="material-symbols-outlined"> menu </span>
                   <p onClick={()=>navigate('/')}> MyClothing </p>
                <div>
                    <span className='' onClick={()=>navigate('/cart')}><RemoveShoppingCartIcon/> </span>
                    <Stack>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{width:"30px",height:"30px"}}></Avatar>
                    </Stack>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar