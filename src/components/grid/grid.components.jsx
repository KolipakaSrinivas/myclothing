import React, { Fragment } from 'react'



import Card from '../Card/Card.component'

function GridItem({product}) {

    const {items} = product
    return(
        <Fragment>
            <div className="out">
                <h1>{product.title}</h1>
            </div>

           <div className="grid">
            {
                items.map((items)=>(<Card items={items} key={items.id}/>))
            }
            </div>
        </Fragment>
    )
}

export default GridItem
