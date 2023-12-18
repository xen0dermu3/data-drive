export interface ShoppingCartService {
  getItems(): ShoppingCarts;
  addItem(addItemDto: AddItemDto): ShoppingCart;
}

export type ShoppingCart = {
  id: string;
  name: string;
  price: number;
};

export type ShoppingCarts = {
  shoppingCarts: ShoppingCart[];
};

export type AddItemDto = {
  name: string;
  price: number;
};
