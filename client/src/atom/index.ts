import { atom } from "recoil";

export interface ICart {
    id:string
    categoryId:string |undefined
    productId:string
    quantity:number
}


export const cart = atom<ICart[]>({
    key: 'cart',
    default: [],
  });