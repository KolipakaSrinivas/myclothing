import React, { Fragment,useState,useEffect } from "react";





import Filters from '../filter/Filter.component'
import Grid from '../grid/grid.components'

import shopData from './shopData'

function Preview() {

    //   useState
    const [data,setData] = useState([])


    // useEffect
    useEffect(()=>{
        setData(shopData)
    })

    console.log(data)

    return(
        <Fragment>
              <section>
                <Filters/>
                    
                   { data.map((shop)=>(
                    <Grid key={shop.id} product={shop}/>
                   ))}
                    
              </section>
        </Fragment>
    )
}

export default Preview