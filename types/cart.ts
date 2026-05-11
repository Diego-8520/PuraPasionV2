export interface CartItem {
  productId: string;
  name: string;
  team?: string;
  image: string;
  size: string;
  quantity: number;
  price: number;
  stock: number;
}
