import React, { Fragment,useState,useEffect } from "react";

import './style.css'






import Filters from '../filter/Filter.component'

import sections from './shopData'

function Home() {

    const [shopadata,setShopData] = useState([])

    useEffect(()=>{
        setShopData(sections)
    })

    



    return(
        <Fragment>
              <section>
                   <Filters/>
                        <div className="homepage">
                            <div className='directory-menu'>
                                {
                                    shopadata.map(item=>(

                                        <div className='menu-item'>
                                                <img src={item.imageUrl} style={{width:"200px",position:"absolute"}}/>
                                            <div className='content'>      
                                                <h1 className='title'>{item.title}</h1>
                                                <span className='subtitle'>Shop Now</span>
                                            </div>
                                        </div> 
                                    ))
                                
                                }               
                            </div>
                        </div>
              </section>
        </Fragment>
    )
}

export default Home