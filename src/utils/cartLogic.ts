import { CartItem, Category, MenuItem } from '../types';

export function addToCart(
  cart: CartItem[],
  item: MenuItem,
  quantity = 1
): CartItem[] {
  if (quantity <= 0) return cart;
  const existing = cart.find((e) => e.item.id === item.id);
  if (existing) {
    return cart.map((e) =>
      e.item.id === item.id ? { ...e, quantity: e.quantity + quantity } : e
    );
  }
  return [...cart, { item, quantity }];
}

export function updateCartQuantity(
  cart: CartItem[],
  itemId: string,
  delta: number
): CartItem[] {
  return cart
    .map((e) =>
      e.item.id === itemId ? { ...e, quantity: e.quantity + delta } : e
    )
    .filter((e) => e.quantity > 0);
}

export function removeFromCart(cart: CartItem[], itemId: string): CartItem[] {
  return cart.filter((e) => e.item.id !== itemId);
}

export function getCartCount(cart: CartItem[]): number {
  return cart.reduce((sum, entry) => sum + entry.quantity, 0);
}

export function getCartTotal(cart: CartItem[]): number {
  const total = cart.reduce(
    (sum, entry) => sum + entry.item.price * entry.quantity,
    0
  );
  return Number(total.toFixed(2));
}

export function filterMenuItems(
  items: MenuItem[],
  category: Category | 'All',
  searchQuery: string
): MenuItem[] {
  const q = searchQuery.trim().toLowerCase();
  return items.filter((item) => {
    const matchesCategory = category === 'All' || item.category === category;
    const matchesSearch =
      q === '' ||
      item.name.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });
}
