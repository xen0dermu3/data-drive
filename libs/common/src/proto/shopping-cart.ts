/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "shopping_cart";

export interface AddItemDto {
  name: string;
  price: number;
}

export interface ShoppingCartItem {
  id: string;
  name: string;
  price: number;
}

export interface ShoppingCartItems {
  shoppingCartItems: ShoppingCartItem[];
}

export interface Empty {
}

export const SHOPPING_CART_PACKAGE_NAME = "shopping_cart";

export interface ShoppingCartGetItemServiceClient {
  getItems(request: Empty): Observable<ShoppingCartItems>;
}

export interface ShoppingCartGetItemServiceController {
  getItems(request: Empty): Promise<ShoppingCartItems> | Observable<ShoppingCartItems> | ShoppingCartItems;
}

export function ShoppingCartGetItemServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getItems"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("ShoppingCartGetItemService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("ShoppingCartGetItemService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const SHOPPING_CART_GET_ITEM_SERVICE_NAME = "ShoppingCartGetItemService";

export interface ShoppingCartAddItemServiceClient {
  addItem(request: AddItemDto): Observable<ShoppingCartItem>;
}

export interface ShoppingCartAddItemServiceController {
  addItem(request: AddItemDto): Promise<ShoppingCartItem> | Observable<ShoppingCartItem> | ShoppingCartItem;
}

export function ShoppingCartAddItemServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["addItem"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("ShoppingCartAddItemService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("ShoppingCartAddItemService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const SHOPPING_CART_ADD_ITEM_SERVICE_NAME = "ShoppingCartAddItemService";
