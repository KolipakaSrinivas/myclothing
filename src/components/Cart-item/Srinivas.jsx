import React, {useContext, useState} from "react"

import {Context} from "../../Context"

// import {useNavigate} from 'react-router-dom'

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DeleteIcon from '@mui/icons-material/Delete';


import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import './style.css'
// import useHover from "../hooks/useHover"

function Srinivas({item}) {

    const {removeFromCart} = useContext(Context)


   

    

    const [hovered,setHovered] = useState(false)
                                           
    const iconClassName = hovered ? 
        (<Tooltip title="Delete">
             <IconButton>
                <DeleteIcon />
             </IconButton>
          </Tooltip>)
        : (<DeleteOutlineIcon/>)



    return (
        <div className="cart-item">
            <div className="cart-item">
            <i 
                
                onClick={() => removeFromCart(item.id)}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                // ref={ref}
                >
                {iconClassName}
            </i>
            <img src={item.imageUrl} width="130px" />
            <p> ₹{item.price}</p>
        </div>
        </div>
    )
}

export default Srinivas


 