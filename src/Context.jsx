import React, {useState, useEffect} from "react"

const Context = React.createContext()




function ContextProvider({children}) {
    
    const [cartItems, setCartItems] = useState([])

    // console.log(cartItems)
 
    
    

    
    return (
        <Context.Provider value={{setCartItems,cartItems}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}