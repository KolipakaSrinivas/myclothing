import React, { Fragment } from 'react'





function Card({items}) {
    return(
        <Fragment>
             <div className="grid-item">
               <div className="skeleton">
                     <img src={items.imageUrl} className="img"/>
                </div>
            </div>
        </Fragment>
    )
}

export default Card