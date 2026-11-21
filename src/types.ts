export type Category = 'Starters' | 'Beverages' | 'Dinner';

export type Screen =
  | 'loading'
  | 'home'
  | 'menu'
  | 'details'
  | 'cart'
  | 'confirmation';

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: Category;
  image: string;
  description: string;
  featured?: boolean;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

export interface ConfirmedOrder {
  items: CartItem[];
  total: number;
  arrivalTime: string;
  arrivalDate: string;
}
