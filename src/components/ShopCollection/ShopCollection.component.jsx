import React, { Fragment,useState,useEffect } from 'react'

import axios from 'axios'
import './shop.style.css'




import ShopItem from '../ShopItem/ShopItem.component'
import { useParams } from "react-router-dom";



function ShopCollection() {
    
    const {id} = useParams()

        // useState
    const [collection,setCollection] = useState([])


        // getcollection from object
    let getCollectioDetails = async () => {
        let url = `http://localhost:4000/api/getshop-DataBy-Id/${id}`;
        let {data} = await axios.get(url)

        if (data.status === true) {
            setCollection(data.restaurants.items);
          } else {
            setCollection("nooo");
          }  
      };



      useEffect(()=>{
        getCollectioDetails()
      },[])

      
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