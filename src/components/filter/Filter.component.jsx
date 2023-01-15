import React, { Fragment } from 'react'


function Filters() {
    return(
        <Fragment>
             <aside className="filters">
        <h2>Filters</h2>
        <label>
          <input type="checkbox" />
          Trainers
        </label>
        <label>
          <input type="checkbox" />
          Tees
        </label>
        <label>
          <input type="checkbox" />
          Jeans
        </label>
        <label>
          <input type="checkbox" />
          Jackets
        </label>
        <label>
          <input type="checkbox" />
          Socks
        </label>
      </aside>
        </Fragment>
    )
}

export default Filters