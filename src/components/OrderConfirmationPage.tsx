import { ConfirmedOrder } from '../types';

interface OrderConfirmationPageProps {
  order: ConfirmedOrder;
  onContinueShopping: () => void;
}

export function OrderConfirmationPage({
  order,
  onContinueShopping,
}: OrderConfirmationPageProps) {
  return (
    <main className="max-w-[1728px] mx-auto px-4 sm:px-10 lg:px-20 py-10 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Confirmation Message */}
        <div className="lg:col-span-7 flex flex-col items-center text-center pt-4 sm:pt-10">
          <div className="group transition-colors">
            <h1 className="font-abeezee text-4xl sm:text-6xl text-black group-hover:text-[#15FF00] transition-colors leading-tight mb-4">
              Your order has been confirmed.
            </h1>
            <p className="font-abeezee text-5xl sm:text-8xl text-black group-hover:text-[#00FF1E] transition-colors tracking-tight mb-10">
              THANK YOU!
            </p>
          </div>

          <p className="font-abeezee text-xl sm:text-3xl text-black mb-12">
            Your order will arrive at {order.arrivalTime} on {order.arrivalDate}.
          </p>

          <button
            type="button"
            onClick={onContinueShopping}
            className="w-full max-w-md h-20 sm:h-24 bg-[#FFF7ED] hover:bg-[#5BFF5B] border border-black font-abeezee text-2xl sm:text-3xl text-black cursor-pointer transition-colors"
          >
            Continue Shopping
          </button>
        </div>

        {/* Right Order Summary Card matching Rectangle 16 */}
        <div className="lg:col-span-5">
          <h2 className="font-abeezee text-2xl sm:text-3xl text-black text-center mb-4">
            Order Summary
          </h2>

          <div className="bg-white border border-black rounded-[10px] p-6 sm:p-8">
            <div className="flex flex-col gap-5">
              {order.items.map((entry) => (
                <div
                  key={entry.item.id}
                  className="flex items-start gap-4"
                >
                  <div className="w-24 h-24 sm:w-28 sm:h-28 bg-[#D9D9D9] border border-black overflow-hidden shrink-0">
                    <img
                      src={entry.item.image}
                      alt={entry.item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-jua text-2xl text-black">
                      {entry.item.name}
                    </h3>
                    <p className="font-jua text-base text-black">
                      Price: {entry.item.price}$
                    </p>
                    <p className="font-jua text-base text-black">
                      Quantity: {entry.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full h-3 bg-[#F97316] rounded-[25px] my-7" />

            <p className="font-jua text-2xl sm:text-3xl text-black">
              Order Total: {order.total}$
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
