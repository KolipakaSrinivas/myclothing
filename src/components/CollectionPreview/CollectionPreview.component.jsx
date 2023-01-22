import React, { Fragment } from 'react'


import Preview from '../Preview/Preview.component'

function CollectionPreview({shop,sri}) {

    return(
        <Fragment>
            <div className='titlel'>
             <h1>{shop.title}</h1>
            </div>
             <div className="grid">
             {
                shop.items.filter((item,index)=>index < 4).map(item=>(
                    <Preview key={item.id} item={item} sri={sri}/>                    
                ))
             }
            </div>
        </Fragment>
    )
}

export default CollectionPreview