import { Add_To_Cart, Remove_From_Cart, Show_User_List } from "./constants";

export  function addToCart(item:any){
    return{
        type:Add_To_Cart,
        payload:item 
    }
}

export function removeFromCart(item:any){
    return{
        type:Remove_From_Cart,
        payload:item
    }
}

export function showUserList(){
    return{
        type:Show_User_List
    }
}