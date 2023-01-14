import React from 'React'




function NavBar() {
    return(
        <React.Fragment>
            <nav>
                <span className="material-symbols-outlined"> menu </span>
                        Dashboard
            <div>
                <span className="material-symbols-outlined"> search </span>
                <span className="material-symbols-outlined"> settings </span>
                <span className="material-symbols-outlined"> apps </span>
                <span className="material-symbols-outlined"> account_circle </span>
            </div>
            </nav>
        </React.Fragment>
    )
}

export default NavBar