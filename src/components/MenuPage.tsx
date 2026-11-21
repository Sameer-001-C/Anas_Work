import { useState } from 'react';
import { Search, ArrowLeft, ShoppingCart } from 'lucide-react';
import { Category, MenuItem } from '../types';
import { MENU_ITEMS } from '../data/menu';
import { filterMenuItems } from '../utils/cartLogic';
import { AddToCartButton } from './AddToCartButton';

interface MenuPageProps {
  cartCount: number;
  onSelectItem: (item: MenuItem) => void;
  onAddToCart: (item: MenuItem, qty?: number) => void;
  onGoCart: () => void;
  onGoHome: () => void;
}

export function MenuPage({
  cartCount,
  onSelectItem,
  onAddToCart,
  onGoCart,
  onGoHome,
}: MenuPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>(
    'All'
  );

  const filteredItems = filterMenuItems(
    MENU_ITEMS,
    selectedCategory,
    searchQuery
  );

  const toggleCategory = (cat: Category) => {
    setSelectedCategory((prev) => (prev === cat ? 'All' : cat));
  };

  return (
    <main className="max-w-[1728px] mx-auto px-4 sm:px-10 lg:px-16 py-8 sm:py-12">
      {/* Top Bar: Back + Centered Pill Search + Cart Icon */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
        <button
          type="button"
          onClick={onGoHome}
          className="self-start sm:self-auto flex items-center gap-2 font-abeezee text-base px-4 py-2 bg-[#FFF7ED] hover:bg-[#FFF600] border border-black cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Home
        </button>

        <div className="w-full max-w-4xl flex items-center gap-3 px-6 py-3.5 sm:py-4 rounded-[50px] border border-black bg-white">
          <Search className="w-6 h-6 text-black shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for items..."
            aria-label="Search for items"
            className="w-full bg-transparent outline-none font-abeezee text-lg sm:text-xl text-black placeholder:text-neutral-500"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="font-abeezee text-sm text-neutral-600 hover:text-black cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>

        <button
          type="button"
          onClick={onGoCart}
          aria-label="Go to shopping cart"
          className="relative shrink-0 p-3 bg-[#FFF7ED] hover:bg-[#FFF600] border border-black rounded-[15px] transition-colors cursor-pointer"
        >
          <ShoppingCart className="w-8 h-8 text-black" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 min-w-6 h-6 px-1.5 rounded-full bg-[#F97316] border border-black text-black font-jua text-sm flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Filter by row */}
      <div className="flex flex-wrap items-center gap-4 sm:gap-10 mb-10">
        <span className="font-abeezee text-2xl sm:text-3xl text-[#171717]">
          Filter by:
        </span>
        {(['Starters', 'Beverages', 'Dinner'] as Category[]).map((cat) => {
          const active = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => toggleCategory(cat)}
              className={`font-abeezee text-xl sm:text-2xl transition-colors cursor-pointer px-3 py-1 rounded-lg ${
                active
                  ? 'text-[#00B2FF] underline underline-offset-4'
                  : 'text-[#171717] hover:text-[#00B2FF]'
              }`}
            >
              {cat}
            </button>
          );
        })}
        {selectedCategory !== 'All' && (
          <button
            type="button"
            onClick={() => setSelectedCategory('All')}
            className="font-abeezee text-sm px-3 py-1 bg-[#FFF7ED] border border-black cursor-pointer hover:bg-[#FFF600]"
          >
            Show All
          </button>
        )}
      </div>

      {/* 6-column Menu Grid matching Figma Menu Page */}
      {filteredItems.length === 0 ? (
        <div className="py-20 text-center border border-dashed border-black/30 rounded-xl">
          <p className="font-jua text-3xl text-black mb-2">No items found</p>
          <p className="font-abeezee text-neutral-600 mb-6">
            Try clearing your search or switching category filters.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="font-abeezee px-6 py-2.5 bg-[#FFF7ED] hover:bg-[#FFF600] border border-black cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center group"
            >
              <button
                type="button"
                onClick={() => onSelectItem(item)}
                className="w-full flex flex-col items-center cursor-pointer"
              >
                <div className="w-full aspect-[205/224] bg-white border-2 border-[#F97316] group-hover:border-[#33FF00] transition-colors overflow-hidden mb-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <h3 className="font-jua text-2xl sm:text-3xl text-black leading-tight">
                  {item.name}
                </h3>
                <p className="font-jua text-base text-black mt-1 mb-3">
                  Price: {item.price}$
                </p>
              </button>

              <AddToCartButton
                onClick={() => onAddToCart(item, 1)}
                className="w-full max-w-[152px] h-9 text-sm"
              />
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
