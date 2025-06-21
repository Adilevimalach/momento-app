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
}

// Removes one of the given id from the cart (if present)
export function removeFromCart(id) {
  const cart = getCart();
  if (cart[id]) {
    cart[id] -= 1;
    if (cart[id] <= 0) delete cart[id];
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }
}

// Removes all of the given id from the cart
export function removeAllFromCart(id) {
  const cart = getCart();
  if (cart[id]) {
    delete cart[id];
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }
}

// Clears the entire cart
export function clearCart() {
  localStorage.removeItem(CART_KEY);
}
