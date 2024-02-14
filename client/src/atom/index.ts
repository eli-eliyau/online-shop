import { atom } from "recoil";

export interface ICart {
  id: string
  name:string
  img:string
  categoryId: string | undefined
  productId: string
  price:number
  quantity: number
}


export const cart = atom<ICart[]>({
  key: 'cart',
  default: [],
});


export const indexTab = atom<number>({
  key: 'indexTab',
  default: 0,
});