import React, { Fragment,useState,useEffect } from 'react'


import './shop.style.css'

import sections from '../ShopCollection/ShopData'
import ShopItem from '../ShopItem/ShopItem.component'

function ShopCollection() {


    const [collection,setCollection] = useState()

    useEffect(()=>{
        setCollection(sections)

    },[])

    console.log(collection)
    return(
        <Fragment>
            <div className='homepage'>
              <div className='directory-menu'>



                {
                    collection  && collection.map(item=>(
                        
                        <ShopItem key={item.id} item={item}/>
                        
                        ))
                    }
               
                </div>
            </div>
        </Fragment>
    )
    
}

export default ShopCollection