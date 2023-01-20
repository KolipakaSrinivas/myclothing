import React, { Fragment,useState,useEffect } from 'react';


import  SHOP_DATA from './shopData'



import Filter from '../Filter/Filter.componet'
import CollectionPreview from '../CollectionPreview/CollectionPreview.component'


function Home() {



    const [shopData,setShopData] = useState(SHOP_DATA)


    // useEffect(()=>{

    // },[])
    return(
        

        <Fragment>
            

        
            <section>
                <Filter/>
                <div className='main'>
                    {
                        shopData.map(shop=>(
                            <CollectionPreview key={shop.id} shop={shop}/>
                        ))
                    }      
                </div>
            </section>    
        </Fragment>
    )
}

export default Home