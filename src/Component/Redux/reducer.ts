import { Add_To_Cart,Set_User_List } from "./constants";
import { Remove_From_Cart } from "./constants";
const initialState:any=[]

export const reducer = (state = initialState,action:any)=>{
    switch(action.type){
        case Add_To_Cart:
            return [
                ...state,
                action.payload
            ]
        case Remove_From_Cart:
            let res=state.filter((item:any)=>{ return item.id!==action.payload.id})
            return[ ...res ] 
        
        case Set_User_List:
            return action.payload
        default:
            return state
    }
}

// export const removeReducer=(state=initialState,action:any)=>{}