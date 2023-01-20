import React, { Fragment } from 'react'


function Filter() {
    return(
        <Fragment>
            <aside className="filters">
        <h2>filter</h2>
        <label>
          <input type="checkbox" />
          Hats
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

export default Filter