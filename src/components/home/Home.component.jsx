import React, { Fragment,useState,useEffect } from 'react';

import axios from 'axios';





import Filter from '../Filter/Filter.componet'
import CollectionPreview from '../CollectionPreview/CollectionPreview.component'


function Home() {

    
    // useState
    const [shopData,setShopData] = useState([])

    const getshopData = async () => {
        const url = 'http://localhost:4000/api/get-shop-data'
        const {data} = await  axios.get(url)
        setShopData(data.data)

    }

        // useEffect
    useEffect(()=>{
        getshopData(shopData)
    },[])

    



    

    return(
        

        <Fragment>
            

        
            <section>
                <Filter/>
                <div className='main'>
                    {
                       shopData && shopData.map(shop=>(
                            <CollectionPreview key={shop.id} shop={shop}  sri={shop._id}/>
                        ))
                    }      
                </div>
            </section>    
        </Fragment>
    )
}

export default Home