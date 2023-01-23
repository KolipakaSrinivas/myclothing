import React, {useState, useEffect} from "react"

const Context = React.createContext()




function ContextProvider({children}) {
    
    const [cartItems, setCartItems] = useState([])

    function addToCart(newItem) {
        return setCartItems(prevItems => [...prevItems, newItem])
    }


    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    function emptyCart() {
        setCartItems([])
    }

 
    
    

    
    return (
        <Context.Provider value=
        {{
            removeFromCart,
            addToCart,
            cartItems,
            setCartItems,
            emptyCart
            
            
            
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}