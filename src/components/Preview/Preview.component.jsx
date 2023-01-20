import React, { Fragment } from 'react'


function Preview({item}){
    return(
        <Fragment>
            <div className="grid-item">
                <div className="skeleton">
                    <img src={item.imageUrl} className="img"/>
                </div>
                <div className="skeleton"></div>
            </div>

        </Fragment>
    )
}

export default Preview