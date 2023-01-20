import React, { Fragment } from 'react'


import Preview from '../Preview/Preview.component'

function CollectionPreview({shop}) {

    return(
        <Fragment>
             <h1>{shop.title}</h1>
             <div className="grid">
             {
                shop.items.filter((item,index)=>index < 4).map(item=>(
                    <Preview key={item.id} item={item}/>                    
                ))
             }
            </div>
        </Fragment>
    )
}

export default CollectionPreview