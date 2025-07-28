// src/utils/cart.js

const CART_KEY = 'momento_cart';

// Returns the current cart as an object: { [id]: quantity }
export function getCart() {
  try {
    const cart = JSON.parse(localStorage.getItem(CART_KEY));
    return cart && typeof cart === 'object' ? cart : {};
  } catch {
    return {};
  }
}

// Adds one of the given id to the cart
export function addToCart(id) {
  const cart = getCart();
  cart[id] = (cart[id] || 0) + 1;
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new Event('cart_updated'));
}

// Removes one of the given id from the cart (if present)
export function removeFromCart(id) {
  const cart = getCart();
  if (cart[id]) {
    cart[id] -= 1;
    if (cart[id] <= 0) delete cart[id];
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    window.dispatchEvent(new Event('cart_updated'));
  }
}

// Removes all of the given id from the cart
export function removeAllFromCart(id) {
  const cart = getCart();
  if (cart[id]) {
    delete cart[id];
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    window.dispatchEvent(new Event('cart_updated'));
  }
}

// Clears the entire cart
export function clearCart() {
  localStorage.removeItem(CART_KEY);
}

/**
 * Calculates and returns the total number of individual items in the cart.
 * @returns {number} The total item count.
 */
export function getCartItemCount() {
  const cart = getCart(); // -> { 'wineA': 2, 'wineB': 1 }
  const quantities = Object.values(cart); // -> [2, 1]
  
  // Sums up all the quantities
  return quantities.reduce((total, quantity) => total + quantity, 0);
}
