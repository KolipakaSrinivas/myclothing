import React, { Fragment } from 'react';


function Navbar () {
    return(
        <Fragment>
             <nav>
                <span className="material-symbols-outlined"> menu </span>
                    MyClothing
                <div>
                    <span className="material-symbols-outlined"> search </span>
                    <span className="material-symbols-outlined"> settings </span>
                    <span className="material-symbols-outlined"> apps </span>
                    <span className="material-symbols-outlined"> account_circle </span>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar