import { MenuItem } from '../types';
import heroFeastImg from '../assets/images/hero_feast_spread_1795269610193.jpg';
import promoSushiImg from '../assets/images/promo_sushi_banner_1795269610532.jpg';
import biryaniImg from '../assets/images/chicken_biryani_dish_1795269609459.jpg';
import nihariImg from '../assets/images/beef_nihari_bowl_1795269610529.jpg';
import pulaoImg from '../assets/images/spiced_pulao_plate_1795269609134.jpg';
import chickenTikkaImg from '../assets/images/grilled_chicken_tikka_1795269609800.jpg';
import pepsiImg from '../assets/images/chilled_pepsi_can_1795269609535.jpg';
import sevenUpImg from '../assets/images/chilled_sevenup_can_1795269609137.jpg';
import pizzaImg from '../assets/images/pepperoni_pizza_pie_1795269609932.jpg';
import burgerImg from '../assets/images/gourmet_beef_burger_1795269609702.jpg';
import friesImg from '../assets/images/crispy_french_fries_1795269612969.jpg';
import broastImg from '../assets/images/crispy_chicken_broast_1795269608887.jpg';
import gatoradeImg from '../assets/images/blue_gatorade_bottle_1795269610907.jpg';
import qeemaImg from '../assets/images/spiced_qeema_karahi_1795269609466.jpg';

export const HERO_IMAGE = heroFeastImg;
export const PROMO_IMAGE = promoSushiImg;

export const PROMO_ITEM: MenuItem = {
  id: 'asian-special-sushi',
  name: 'Asian Special Sushi Set',
  price: 42.79,
  category: 'Dinner',
  image: promoSushiImg,
  description:
    'Chef-curated nigiri and avocado maki platter served fresh with wasabi, pickled ginger, soy sauce, and chopsticks.',
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'biryani',
    name: 'Biryani',
    price: 20,
    category: 'Dinner',
    image: biryaniImg,
    description:
      'Fragrant saffron-infused basmati rice served in a hammered copper handi with crispy onions, fresh cilantro, egg, and cool mint raita.',
  },
  {
    id: 'nihari',
    name: 'Nihari',
    price: 15,
    category: 'Dinner',
    image: nihariImg,
    description:
      'Slow-simmered traditional beef stew served with julienned ginger, green chilies, lemon, and warm sesame naan.',
  },
  {
    id: 'pulao',
    name: 'Pulao',
    price: 15,
    category: 'Dinner',
    image: pulaoImg,
    description:
      'Delicate aromatic rice cooked in rich broth with caramelized onions, toasted almonds, whole spices, and tender chicken.',
  },
  {
    id: 'chicken-tikka',
    name: 'Chicken Tikka',
    price: 25,
    category: 'Dinner',
    image: chickenTikkaImg,
    description:
      'Char-grilled smoky red-spiced chicken served sizzling on cast iron with charred onion rings, lime wedges, and mint chutney.',
  },
  {
    id: 'pepsi',
    name: 'Pepsi',
    price: 5,
    category: 'Beverages',
    image: pepsiImg,
    description:
      'Frosty ice-cold classic cola served over crushed ice for a crisp, refreshing pairing with any meal.',
  },
  {
    id: '7up',
    name: '7up',
    price: 7,
    category: 'Beverages',
    image: sevenUpImg,
    description:
      'Crisp caffeine-free lemon-lime sparkling soda garnished with fresh lime and mint.',
  },
  {
    id: 'pizza',
    name: 'Pizza',
    price: 20,
    category: 'Dinner',
    image: pizzaImg,
    description:
      'Wood-fired artisanal crust topped with bubbling mozzarella, crispy cupped pepperoni, and fresh basil leaves.',
    featured: true,
  },
  {
    id: 'burger',
    name: 'Burger',
    price: 15,
    category: 'Dinner',
    image: burgerImg,
    description:
      'Thick seared beef patty stacked with melted aged cheddar, crisp lettuce, pickled red onions, and smoky house sauce on a toasted brioche bun.',
    featured: true,
  },
  {
    id: 'fries',
    name: 'Fries',
    price: 2,
    category: 'Starters',
    image: friesImg,
    description:
      'Golden crispy seasoned potato fries served in a fry basket with classic ketchup and creamy garlic aioli.',
  },
  {
    id: 'broast',
    name: 'Broast',
    price: 10,
    category: 'Starters',
    image: broastImg,
    description:
      'Extra-crunchy golden fried chicken served with a toasted garlic roll, fresh coleslaw, and spicy dipping sauce.',
  },
  {
    id: 'gatorade',
    name: 'Gatorade',
    price: 5,
    category: 'Beverages',
    image: gatoradeImg,
    description:
      'Chilled Cool Blue electrolyte sports drink to keep you hydrated and refreshed.',
  },
  {
    id: 'qeema',
    name: 'Qeema',
    price: 7,
    category: 'Dinner',
    image: qeemaImg,
    description:
      'Rich spiced minced meat simmered in a traditional iron karahi with roasted tomatoes, fresh cilantro, green chilies, and lemon.',
  },
];
