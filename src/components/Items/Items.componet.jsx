import React, { Fragment , useEffect, useState } from 'react'



import Filters from './filters/Filters.component'
import Card from './Card/Card.component'
import shopdata from './shopData'




function Items() {


    //   useState
    const [data,setData] = useState([])






    // useEffect
    useEffect(()=>{
        setData(shopdata)
    })



    return(
        <Fragment>
             <section>
                <Filters/>
      <div className="grid">
        {/* {
            data.map(({id,...otherProps})=>(
                <Card key={id} {...otherProps}/>
            ))
        } */}
        <Card/>
      </div>
    </section>
        </Fragment>
    )
}

export default Items