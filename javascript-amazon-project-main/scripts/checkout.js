import {cart} from '../data/cart.js';
import {products} from '../data/products.js';

let cartContentsHTML = '';

cart.forEach((cartItem) => {
  let matchingProduct = products.find(p => p.id === cartItem.productId);
  console.log(matchingProduct);
})