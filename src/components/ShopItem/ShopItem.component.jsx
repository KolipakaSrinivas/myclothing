import React, { Fragment,useState,useEffect } from 'react'




import './shop-item.css'

function ShopItem({item,}) {




    return(
        <Fragment>
            <div className='menu-item'>
            <div 
             className='background-image'
             style={{
            backgroundImage:`url(${item.imageUrl})`
         }} />
            <div className='buy'>
                <a href="#" className="btn-flip" data-back="Back Now" data-front="Buy"></a>
            </div>
            <div className='content'>
               <h1 className='title'>Price:{item.price}</h1>
               <h2 className='subtitle'>{item.name}</h2>
            </div>
        </div>  
        </Fragment>

    )
}

export default ShopItem