import { X } from 'lucide-react';
import { Category, MenuItem } from '../types';
import { MENU_ITEMS, PROMO_IMAGE, PROMO_ITEM } from '../data/menu';
import { AddToCartButton } from './AddToCartButton';

interface CategoryModalProps {
  category: Category | 'Promo' | null;
  onClose: () => void;
  onSelectItem: (item: MenuItem) => void;
  onAddToCart: (item: MenuItem, qty?: number) => void;
}

export function CategoryModal({
  category,
  onClose,
  onSelectItem,
  onAddToCart,
}: CategoryModalProps) {
  if (!category) return null;

  if (category === 'Promo') {
    return (
      <div
        className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-4xl bg-white border border-black overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            aria-label="Close promo pop-up"
            onClick={onClose}
            className="absolute top-3 right-3 z-10 w-10 h-10 bg-white/90 hover:bg-[#FFF600] border border-black rounded-full flex items-center justify-center cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <img
            src={PROMO_IMAGE}
            alt="Special Dish: Asian Special Sushi Set"
            referrerPolicy="no-referrer"
            className="w-full h-auto object-cover block"
          />

          <div className="p-5 sm:p-6 bg-white border-t border-black flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-jua text-2xl text-black">
                {PROMO_ITEM.name}
              </h3>
              <p className="font-jua text-base text-neutral-700">
                Special Price: ${PROMO_ITEM.price}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onSelectItem(PROMO_ITEM);
                }}
                className="font-abeezee text-sm px-5 py-2.5 bg-white hover:bg-[#9CFFA7] border border-black cursor-pointer"
              >
                View Details
              </button>
              <AddToCartButton
                onClick={() => onAddToCart(PROMO_ITEM, 1)}
                className="px-6 py-2.5 text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  const items = MENU_ITEMS.filter((item) => item.category === category);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl max-h-[88vh] overflow-y-auto bg-white border border-black p-6 sm:p-10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-8 pb-3 border-b-2 border-[#F97316]">
          <h2 className="font-jua text-3xl sm:text-4xl text-black">
            {category}
          </h2>
          <button
            type="button"
            aria-label={`Close ${category} pop-up`}
            onClick={onClose}
            className="w-10 h-10 bg-[#FFF7ED] hover:bg-[#FFF600] border border-black rounded-full flex items-center justify-center cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center group cursor-pointer"
              onClick={() => {
                onClose();
                onSelectItem(item);
              }}
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
              <AddToCartButton
                onClick={() => onAddToCart(item, 1)}
                className="w-40 h-9 text-sm"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
