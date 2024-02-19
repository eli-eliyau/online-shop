import { ICart } from "../atom";


export const quantity = (data: ICart[]) => {
    let count = 0;

    data.forEach((element) => {
        count += element.quantity;
    })
    return count
}

export const  totalPrice= (data: ICart[])=>{
    let count = 0;

    data.forEach((element) => {
        count += element.price *  element.quantity ;
    })
    return count
}