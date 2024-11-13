import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null)
const StoreContextProvider =(props)=>{
    const[CartItems,setCartItems] = useState({});

    const addToCart =(ItemId)=>{
        if(!CartItems[ItemId]){
            setCartItems((prev)=>({...prev, [ItemId]:1}))
        }else{
            setCartItems((prev)=>({...prev, [ItemId]:prev[ItemId]+1}))
        }
    }
    const removeFromCart=(ItemId)=>{
        setCartItems((prev)=>({...prev, [ItemId]:prev[ItemId]-1}))
    }
    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in CartItems){
            if(CartItems[item]>0){
                let itemInfo = food_list.find((product)=>product._id===item);
                totalAmount +=itemInfo.price*CartItems[item];
            }
        }
        return totalAmount;
    }
    const contextValue={
         food_list,
         CartItems,
         setCartItems,
         addToCart,
         removeFromCart,
         getTotalCartAmount
    }
    useEffect(()=>{
        console.log(CartItems)
    },[CartItems])
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider> 
    )
}
export default StoreContextProvider;