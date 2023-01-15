import React, { Fragment,useState,useEffect } from "react";



function Preview() {

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
                       
                    </div>
              </section>
        </Fragment>
    )
}

export default Preview