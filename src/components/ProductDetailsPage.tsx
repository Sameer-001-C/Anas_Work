import { useState } from 'react';
import { ArrowLeft, Plus, Minus } from 'lucide-react';
import { MenuItem } from '../types';
import { AddToCartButton } from './AddToCartButton';

interface ProductDetailsPageProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem, quantity: number) => void;
  onBack: () => void;
}

export function ProductDetailsPage({
  item,
  onAddToCart,
  onBack,
}: ProductDetailsPageProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <main className="max-w-[1728px] mx-auto px-4 sm:px-10 lg:px-20 py-8 sm:py-14">
      <button
        type="button"
        onClick={onBack}
        className="mb-8 inline-flex items-center gap-2 font-abeezee text-base px-4 py-2 bg-[#FFF7ED] hover:bg-[#FFF600] border border-black cursor-pointer transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Menu
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left: Large Product Image matching Rectangle 12 (565x545) */}
        <div className="lg:col-span-5">
          <div className="w-full aspect-[565/545] bg-white border border-black overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Item details, stepper, description, Add to cart */}
        <div className="lg:col-span-7 flex flex-col items-start pt-2">
          <span className="font-abeezee text-sm uppercase tracking-wider px-3 py-1 bg-[#FFF7ED] border border-black mb-4">
            {item.category}
          </span>

          <h1 className="font-jua text-4xl sm:text-5xl text-black mb-3">
            {item.name}
          </h1>

          <p className="font-jua text-2xl sm:text-3xl text-black mb-8">
            Price: {item.price}$
          </p>

          {/* Quantity Stepper matching Group 32 / Group 33 */}
          <div className="flex items-center gap-6 mb-8">
            <button
              type="button"
              aria-label="Increase quantity"
              onClick={() => setQuantity((q) => q + 1)}
              className="w-14 h-14 sm:w-[70px] sm:h-[70px] rounded-full bg-white hover:bg-[#FFF7ED] border border-black flex items-center justify-center cursor-pointer transition-colors"
            >
              <Plus className="w-7 h-7 text-black stroke-[2.5]" />
            </button>

            <span className="font-abeezee text-xl sm:text-2xl text-black min-w-[130px] text-center">
              Quantity: {quantity}
            </span>

            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-14 h-14 sm:w-[70px] sm:h-[70px] rounded-full bg-white hover:bg-[#FFF7ED] border border-black flex items-center justify-center cursor-pointer transition-colors"
            >
              <Minus className="w-7 h-7 text-black stroke-[2.5]" />
            </button>
          </div>

          <p className="font-jua text-xl sm:text-2xl text-black leading-relaxed max-w-2xl mb-10">
            {item.description}
          </p>

          <AddToCartButton
            onClick={() => onAddToCart(item, quantity)}
            className="w-full sm:w-72 h-16 text-xl"
          />
        </div>
      </div>
    </main>
  );
}
