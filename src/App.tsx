import { useState } from 'react';
import {
  CartItem,
  Category,
  ConfirmedOrder,
  MenuItem,
  Screen,
} from './types';
import { MENU_ITEMS } from './data/menu';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { MenuPage } from './components/MenuPage';
import { ProductDetailsPage } from './components/ProductDetailsPage';
import { CartPage } from './components/CartPage';
import { OrderConfirmationPage } from './components/OrderConfirmationPage';
import { CategoryModal } from './components/CategoryModal';

import {
  addToCart,
  getCartCount,
  removeFromCart,
  updateCartQuantity,
  getCartTotal,
} from './utils/cartLogic';

function getInitialScreen(): Screen {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    if (params.get('autostart') === '1') {
      return 'home';
    }
  }
  return 'loading';
}

export function App() {
  const [screen, setScreen] = useState<Screen>(getInitialScreen);
  const [selectedItem, setSelectedItem] = useState<MenuItem>(MENU_ITEMS[0]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [modalCategory, setModalCategory] = useState<Category | 'Promo' | null>(
    null
  );
  const [confirmedOrder, setConfirmedOrder] = useState<ConfirmedOrder | null>(
    null
  );

  const totalCount = getCartCount(cart);

  const handleAddToCart = (item: MenuItem, quantity = 1) => {
    setCart((prev) => addToCart(prev, item, quantity));
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCart((prev) => updateCartQuantity(prev, itemId, delta));
  };

  const handleRemoveItem = (itemId: string) => {
    setCart((prev) => removeFromCart(prev, itemId));
  };

  const handleSelectItem = (item: MenuItem) => {
    setSelectedItem(item);
    setScreen('details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    const total = getCartTotal(cart);
    const eta = new Date(Date.now() + 35 * 60 * 1000);
    const pad = (n: number) => String(n).padStart(2, '0');
    const arrivalTime = `${pad(eta.getHours())}:${pad(eta.getMinutes())}`;
    const arrivalDate = `${pad(eta.getDate())}/${pad(
      eta.getMonth() + 1
    )}/${eta.getFullYear()}`;

    setConfirmedOrder({
      items: [...cart],
      total,
      arrivalTime,
      arrivalDate,
    });
    setCart([]);
    setScreen('confirmation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContinueShopping = () => {
    setConfirmedOrder(null);
    setScreen('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (screen === 'loading') {
    return <LoadingScreen onComplete={() => setScreen('home')} />;
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar
        currentScreen={screen}
        cartCount={totalCount}
        onNavigate={(next) => {
          setScreen(next);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenCategoryPopup={(cat) => setModalCategory(cat)}
        onOpenPromo={() => setModalCategory('Promo')}
      />

      {screen === 'home' && (
        <HomePage
          onSelectItem={handleSelectItem}
          onOpenPromo={() => setModalCategory('Promo')}
        />
      )}

      {screen === 'menu' && (
        <MenuPage
          cartCount={totalCount}
          onSelectItem={handleSelectItem}
          onAddToCart={handleAddToCart}
          onGoCart={() => setScreen('cart')}
          onGoHome={() => setScreen('home')}
        />
      )}

      {screen === 'details' && (
        <ProductDetailsPage
          item={selectedItem}
          onAddToCart={handleAddToCart}
          onBack={() => setScreen('menu')}
        />
      )}

      {screen === 'cart' && (
        <CartPage
          cart={cart}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onCheckout={handleCheckout}
          onGoMenu={() => setScreen('menu')}
        />
      )}

      {screen === 'confirmation' && confirmedOrder && (
        <OrderConfirmationPage
          order={confirmedOrder}
          onContinueShopping={handleContinueShopping}
        />
      )}

      <CategoryModal
        category={modalCategory}
        onClose={() => setModalCategory(null)}
        onSelectItem={handleSelectItem}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}

export default App;
