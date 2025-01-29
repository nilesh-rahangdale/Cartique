export const Add_To_Cart="add_to_cart";
export const Remove_From_Cart="remove_from_cart";
export const Show_User_List="show_user_list"
export const Set_User_List="set_user_list"
export interface Item {
    id: string;
    name: string;
    price?: number;
    Price?: number;
    imgSrc: string;
  }