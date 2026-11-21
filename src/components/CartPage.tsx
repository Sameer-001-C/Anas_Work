import { Plus, Minus, ArrowLeft } from 'lucide-react';
import { CartItem } from '../types';

interface CartPageProps {
  cart: CartItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onCheckout: () => void;
  onGoMenu: () => void;
}

export function CartPage({
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  onGoMenu,
}: CartPageProps) {
  const subtotal = cart.reduce(
    (sum, entry) => sum + entry.item.price * entry.quantity,
    0
  );
  const formattedTotal = Number(subtotal.toFixed(2));

  return (
    <main className="max-w-[1728px] mx-auto px-4 sm:px-10 lg:px-20 py-8 sm:py-12">
      <div className="flex items-center justify-between mb-8">
        <button
          type="button"
          onClick={onGoMenu}
          className="inline-flex items-center gap-2 font-abeezee text-base px-4 py-2 bg-[#FFF7ED] hover:bg-[#FFF600] border border-black cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Menu
        </button>

        <h1 className="font-jua text-3xl sm:text-4xl text-black">
          Shopping Cart
        </h1>
      </div>

      {cart.length === 0 ? (
        <div className="py-20 text-center border border-black bg-[#FFF7ED]/40 rounded-xl">
          <p className="font-jua text-3xl text-black mb-3">
            Your cart is empty
          </p>
          <p className="font-abeezee text-lg text-neutral-700 mb-8">
            Add delicious items from the menu to start your order.
          </p>
          <button
            type="button"
            onClick={onGoMenu}
            className="font-abeezee text-lg px-8 py-3.5 bg-[#FFF7ED] hover:bg-[#5BFF5B] border border-black cursor-pointer transition-colors"
          >
            Explore Menu
          </button>
        </div>
      ) : (
        <div>
          <div className="flex flex-col">
            {cart.map((entry, idx) => {
              const lineTotal = Number(
                (entry.item.price * entry.quantity).toFixed(2)
              );

              return (
                <div key={entry.item.id}>
                  <div className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    <div className="flex flex-col sm:flex-row items-start gap-6">
                      <div>
                        <p className="font-abeezee text-xl sm:text-2xl text-black mb-3">
                          Item no. {idx + 1}
                        </p>
                        <div className="w-44 h-48 sm:w-[205px] sm:h-[224px] bg-white border-2 border-[#F97316] overflow-hidden shrink-0">
                          <img
                            src={entry.item.image}
                            alt={entry.item.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      <div className="sm:pt-10 flex flex-col items-start">
                        <h2 className="font-jua text-2xl sm:text-3xl text-black">
                          {entry.item.name}
                        </h2>
                        <p className="font-jua text-lg sm:text-xl text-black mt-1 mb-4">
                          Price: {entry.item.price}$
                        </p>

                        {/* Stepper matching Group 32 / Group 33 */}
                        <div className="flex items-center gap-3 mb-5">
                          <button
                            type="button"
                            aria-label={`Increase ${entry.item.name} quantity`}
                            onClick={() => onUpdateQuantity(entry.item.id, 1)}
                            className="w-11 h-11 rounded-full bg-white hover:bg-[#FFF7ED] border border-black flex items-center justify-center cursor-pointer transition-colors"
                          >
                            <Plus className="w-5 h-5 text-black" />
                          </button>

                          <span className="font-abeezee text-sm sm:text-base text-black min-w-[92px] text-center">
                            Quantity: {entry.quantity}
                          </span>

                          <button
                            type="button"
                            aria-label={`Decrease ${entry.item.name} quantity`}
                            onClick={() => onUpdateQuantity(entry.item.id, -1)}
                            className="w-11 h-11 rounded-full bg-white hover:bg-[#FFF7ED] border border-black flex items-center justify-center cursor-pointer transition-colors"
                          >
                            <Minus className="w-5 h-5 text-black" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => onRemoveItem(entry.item.id)}
                          className="w-40 h-9 bg-[#FFF7ED] hover:bg-[#FFF600] border border-black font-abeezee text-sm text-black cursor-pointer transition-colors"
                        >
                          Remove Item
                        </button>
                      </div>
                    </div>

                    <div className="sm:text-right">
                      <p className="font-jua text-3xl sm:text-4xl text-black">
                        Price: {lineTotal}$
                      </p>
                    </div>
                  </div>

                  {/* Orange divider bar matching Rectangle 14 / 15 */}
                  {idx < cart.length - 1 && (
                    <div className="w-full h-3 bg-[#F97316] rounded-[25px] my-2" />
                  )}
                </div>
              );
            })}
          </div>

          <div className="w-full h-3 bg-[#F97316] rounded-[25px] my-6" />

          {/* Summary & Checkout matching bottom right */}
          <div className="flex flex-col items-end gap-3 mt-4">
            <p className="font-jua text-2xl sm:text-4xl text-black">
              Subtotal: {formattedTotal}$
            </p>
            <p className="font-jua text-3xl sm:text-5xl text-black mb-4">
              Total: {formattedTotal}$
            </p>
            <button
              type="button"
              onClick={onCheckout}
              className="w-64 sm:w-72 h-14 bg-[#FFF7ED] hover:bg-[#5BFF5B] border border-black font-abeezee text-2xl text-black cursor-pointer transition-colors"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
