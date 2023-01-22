import React, { Fragment } from 'react'


function Filter({getFilterResult}) {
    return(
        <Fragment>
            <aside className="filters">
        <h2>filter</h2>
        <label>
          <input 
          type="radio"
          onClick={event=>getFilterResult(event,"title")}
          value='Hates'
          name='shop'
          
          />
          Hats
        </label>
        <label>
          <input 
          type="radio"
          onClick={event=>getFilterResult(event,"title")}
          value='Sneakers'
          name='shop'
          />
          Sneakers

        </label>
        <label>
          <input 
          type="radio"
          onClick={event=>getFilterResult(event,"title")}
          value='Jackets'
          name='shop'
          />
          Jackets

        </label>
        <label>
          <input 
          type="radio"
          onClick={event=>getFilterResult(event,"title")}
          value='Womens'
          name='shop'
          />
          Womens

        </label>
        <label>
          <input 
          type="radio"
          onClick={event=>getFilterResult(event,"title")}
          value='Mens'
          name='shop'
          />
          Mens
        </label>
      </aside>
        </Fragment>
    )
}

export default Filter