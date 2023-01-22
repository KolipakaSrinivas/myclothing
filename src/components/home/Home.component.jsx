import React, { Fragment,useState,useEffect } from 'react';

import axios from 'axios';





import Filter from '../Filter/Filter.componet'
import CollectionPreview from '../CollectionPreview/CollectionPreview.component'


function Home() {

    const [shopData,setShopData] = useState()

    const [filterData,setFilterData] = useState({})

    // console.log(filterData)
    
    // useState
    
    const getshopData = async () => {
        const url = 'http://localhost:4000/api/get-shop-data'
        const {data} = await  axios.get(url)
        setShopData(data.data)

    }


    // const filter = async () => {
    //     const url = "http://localhost:5003/api/filter";
    //     const { data } = await axios.post(url, filterData);
    //     if (data.status === true) {
    //       setRestaurantList();
    //     } else {
    //       setRestaurantList([]);
    //     }
    //   };

    const getFilterResult = (event,type) => {

        let {value} = event.target

        let _filterObj = {}

        switch(type){

            case "title" :
                _filterObj['title'] = value

        }
        setFilterData({_filterObj})    
    }

        // useEffect
    useEffect(()=>{
        getshopData(shopData)
    },[])

    



    

    return(
        

        <Fragment>
            

        
            <section>
                <Filter getFilterResult={getFilterResult}/>
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