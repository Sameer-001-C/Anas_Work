import test from 'node:test';
import assert from 'node:assert/strict';
import {
  addToCart,
  filterMenuItems,
  getCartCount,
  getCartTotal,
  removeFromCart,
  updateCartQuantity,
} from './cartLogic';
import { MenuItem } from '../types';

const samplePizza: MenuItem = {
  id: 'pizza',
  name: 'Pizza',
  price: 20,
  category: 'Dinner',
  image: '/pizza.jpg',
  description: 'Pepperoni pizza',
};

const sampleFries: MenuItem = {
  id: 'fries',
  name: 'Fries',
  price: 2,
  category: 'Starters',
  image: '/fries.jpg',
  description: 'Crispy fries',
};

const sampleSushi: MenuItem = {
  id: 'sushi',
  name: 'Asian Special Sushi Set',
  price: 42.79,
  category: 'Dinner',
  image: '/sushi.jpg',
  description: 'Sushi platter',
};

test('addToCart adds new item and increments existing item quantity', () => {
  let cart = addToCart([], samplePizza, 1);
  assert.equal(cart.length, 1);
  assert.equal(cart[0].quantity, 1);

  cart = addToCart(cart, samplePizza, 2);
  assert.equal(cart.length, 1);
  assert.equal(cart[0].quantity, 3);

  cart = addToCart(cart, sampleFries, 1);
  assert.equal(getCartCount(cart), 4);
  assert.equal(getCartTotal(cart), 62);
});

test('updateCartQuantity adjusts quantity and removes at zero', () => {
  let cart = addToCart([], samplePizza, 2);
  cart = updateCartQuantity(cart, 'pizza', -1);
  assert.equal(cart[0].quantity, 1);

  cart = updateCartQuantity(cart, 'pizza', -1);
  assert.equal(cart.length, 0);
});

test('removeFromCart and floating-point total rounding work accurately', () => {
  let cart = addToCart([], sampleSushi, 2);
  cart = addToCart(cart, sampleFries, 1);
  assert.equal(getCartTotal(cart), 87.58);

  cart = removeFromCart(cart, 'fries');
  assert.equal(cart.length, 1);
  assert.equal(getCartTotal(cart), 85.58);
});

test('filterMenuItems filters by category and search query', () => {
  const items = [samplePizza, sampleFries, sampleSushi];
  assert.equal(filterMenuItems(items, 'All', '').length, 3);
  assert.equal(filterMenuItems(items, 'Starters', '').length, 1);
  assert.equal(filterMenuItems(items, 'Dinner', 'sushi').length, 1);
  assert.equal(filterMenuItems(items, 'Starters', 'pizza').length, 0);
});
