import { useState } from 'react';
import { X, ShoppingCart, Sparkles } from 'lucide-react';
import { Category, Screen } from '../types';

interface NavbarProps {
  currentScreen: Screen;
  cartCount: number;
  onNavigate: (screen: Screen) => void;
  onOpenCategoryPopup: (category: Category) => void;
  onOpenPromo: () => void;
}

export function Navbar({
  currentScreen,
  cartCount,
  onNavigate,
  onOpenCategoryPopup,
  onOpenPromo,
}: NavbarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleNavCategory = (cat: Category) => {
    setDrawerOpen(false);
    onOpenCategoryPopup(cat);
  };

  return (
    <>
      <header className="w-full bg-[#F97316] border-b border-black sticky top-0 z-30">
        <div className="max-w-[1728px] mx-auto px-4 sm:px-7 h-20 sm:h-24 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-7">
            {/* Hamburger Icon matching Group 1 */}
            <button
              type="button"
              aria-label="Open navigation menu"
              onClick={() => setDrawerOpen(true)}
              className="flex flex-col justify-between w-10 h-8 sm:w-12 sm:h-9 py-1 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <span className="block w-full h-2 bg-black rounded-sm" />
              <span className="block w-full h-2 bg-black rounded-sm" />
              <span className="block w-full h-2 bg-black rounded-sm" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="font-jua text-3xl sm:text-5xl text-[#171717] tracking-tight cursor-pointer hover:opacity-85 transition-opacity text-left"
            >
              Bite &amp; Bliss
            </button>
          </div>

          <nav className="hidden lg:flex items-center gap-12 xl:gap-20">
            <button
              type="button"
              onClick={() => handleNavCategory('Starters')}
              className="font-jua text-3xl text-[#171717] hover:text-[#00B2FF] transition-colors cursor-pointer"
            >
              Starters
            </button>
            <button
              type="button"
              onClick={() => handleNavCategory('Beverages')}
              className="font-jua text-3xl text-[#171717] hover:text-[#00B2FF] transition-colors cursor-pointer"
            >
              Beverages
            </button>
            <button
              type="button"
              onClick={() => handleNavCategory('Dinner')}
              className="font-jua text-3xl text-[#171717] hover:text-[#00B2FF] transition-colors cursor-pointer"
            >
              Dinner
            </button>
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => onNavigate('menu')}
              className={`font-abeezee text-base sm:text-xl px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-[15px] border border-black transition-colors cursor-pointer ${
                currentScreen === 'menu'
                  ? 'bg-[#9CFFA7] text-[#171717]'
                  : 'bg-white hover:bg-[#9CFFA7] text-[#171717]'
              }`}
            >
              Explore Menu
            </button>

            <button
              type="button"
              aria-label="Open shopping cart"
              onClick={() => onNavigate('cart')}
              className="relative p-2.5 sm:p-3 bg-white hover:bg-[#FFF7ED] border border-black rounded-[15px] transition-colors cursor-pointer"
            >
              <ShoppingCart className="w-6 h-6 text-black" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 min-w-6 h-6 px-1.5 rounded-full bg-black text-white font-abeezee text-xs flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Navigation Drawer */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 flex"
          onClick={() => setDrawerOpen(false)}
        >
          <aside
            className="w-72 sm:w-80 bg-white border-r border-black h-full p-6 flex flex-col justify-between shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b-2 border-[#F97316]">
                <span className="font-jua text-2xl text-[#171717]">
                  Bite &amp; Bliss
                </span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setDrawerOpen(false)}
                  className="p-1.5 rounded-lg border border-black hover:bg-[#FFF7ED] cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setDrawerOpen(false);
                    onNavigate('home');
                  }}
                  className="text-left font-jua text-2xl py-2 px-3 rounded-lg hover:bg-[#FFF7ED] cursor-pointer"
                >
                  Home
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setDrawerOpen(false);
                    onNavigate('menu');
                  }}
                  className="text-left font-jua text-2xl py-2 px-3 rounded-lg hover:bg-[#FFF7ED] cursor-pointer"
                >
                  Full Menu
                </button>
                <div className="border-t border-neutral-200 my-1" />
                <p className="font-abeezee text-xs uppercase tracking-wider text-neutral-500 px-3">
                  Quick Category Pop-ups
                </p>
                {(['Starters', 'Beverages', 'Dinner'] as Category[]).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleNavCategory(cat)}
                    className="text-left font-jua text-xl py-2 px-3 rounded-lg hover:text-[#00B2FF] hover:bg-[#FFF7ED] cursor-pointer"
                  >
                    {cat}
                  </button>
                ))}
                <div className="border-t border-neutral-200 my-1" />
                <button
                  type="button"
                  onClick={() => {
                    setDrawerOpen(false);
                    onOpenPromo();
                  }}
                  className="flex items-center gap-2 text-left font-jua text-xl py-2 px-3 rounded-lg bg-[#FFF7ED] border border-black hover:bg-[#FFF600] cursor-pointer"
                >
                  <Sparkles className="w-5 h-5 text-[#F97316]" />
                  Special Dish Promo
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setDrawerOpen(false);
                onNavigate('cart');
              }}
              className="w-full py-3 px-4 rounded-[12px] bg-[#FFF7ED] hover:bg-[#5BFF5B] border border-black font-abeezee text-lg flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              View Cart ({cartCount})
            </button>
          </aside>
        </div>
      )}
    </>
  );
}
