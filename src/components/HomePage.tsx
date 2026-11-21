import { MenuItem } from '../types';
import { HERO_IMAGE, MENU_ITEMS } from '../data/menu';

interface HomePageProps {
  onSelectItem: (item: MenuItem) => void;
  onOpenPromo: () => void;
}

export function HomePage({ onSelectItem, onOpenPromo }: HomePageProps) {
  const featured = MENU_ITEMS.filter((i) => i.featured);
  const beverages = MENU_ITEMS.filter(
    (i) => i.id === 'pepsi' || i.id === '7up'
  );
  const dinner = MENU_ITEMS.filter(
    (i) =>
      i.id === 'biryani' ||
      i.id === 'nihari' ||
      i.id === 'pulao' ||
      i.id === 'chicken-tikka'
  );

  return (
    <main className="max-w-[1728px] mx-auto px-4 sm:px-10 lg:px-16 py-8 sm:py-12">
      {/* Top Row: Hero Image + Featured Items */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        <div className="lg:col-span-8 relative group">
          <div className="w-full h-[300px] sm:h-[440px] lg:h-[520px] overflow-hidden border border-black/15 bg-neutral-100">
            <img
              src={HERO_IMAGE}
              alt="Bite & Bliss Feast Spread"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <button
            type="button"
            onClick={onOpenPromo}
            className="mt-3 sm:mt-0 sm:absolute sm:bottom-4 sm:left-4 bg-[#FFF7ED]/95 hover:bg-[#FFF600] border border-black px-4 py-2 font-abeezee text-sm cursor-pointer transition-colors"
          >
            View Special Dish Promo →
          </button>
        </div>

        <div className="lg:col-span-4 flex flex-col items-center">
          <h2 className="font-jua text-3xl sm:text-4xl text-black mb-6 text-center">
            Featured Items
          </h2>
          <div className="grid grid-cols-2 gap-6 w-full max-w-md lg:max-w-none">
            {featured.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectItem(item)}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-full aspect-[205/224] bg-white border-2 border-[#F97316] group-hover:border-[#33FF00] transition-colors overflow-hidden mb-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <span className="font-jua text-2xl sm:text-3xl text-black">
                  {item.name}
                </span>
                <span className="font-jua text-base text-black mt-0.5">
                  Price: {item.price}$
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Row: Beverages | Divider | Dinner */}
      <section className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Beverages */}
        <div className="lg:col-span-4 flex flex-col items-center">
          <h2 className="font-jua text-3xl sm:text-4xl text-black mb-6 text-center">
            Beverages
          </h2>
          <div className="grid grid-cols-2 gap-6 w-full max-w-md lg:max-w-none">
            {beverages.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectItem(item)}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-full aspect-[205/224] bg-white border-2 border-[#F97316] group-hover:border-[#33FF00] transition-colors overflow-hidden mb-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <span className="font-jua text-2xl sm:text-3xl text-black">
                  {item.name}
                </span>
                <span className="font-jua text-base text-black mt-0.5">
                  Price: {item.price}$
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Vertical Grey Divider matching Rectangle 9 (14x324) */}
        <div className="hidden lg:flex lg:col-span-1 justify-center pt-4">
          <div className="w-3.5 h-80 bg-[#D9D9D9] rounded-[15px]" />
        </div>

        {/* Dinner */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <h2 className="font-jua text-3xl sm:text-4xl text-black mb-6 text-center">
            Dinner
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full">
            {dinner.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectItem(item)}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-full aspect-[205/224] bg-white border-2 border-[#F97316] group-hover:border-[#33FF00] transition-colors overflow-hidden mb-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <span className="font-jua text-2xl sm:text-3xl text-black leading-tight">
                  {item.name}
                </span>
                <span className="font-jua text-base text-black mt-0.5">
                  Price: {item.price}$
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
