export const cart = [];
let cartQuantity = 0;
const addedToCartTimeOutIdMap = new Map();

export const modifyCartQuantity = (quantity) => {
  cartQuantity += quantity;
  document.querySelector('.cart-quantity').innerText = cartQuantity;
}

export const showAddedMessage = (productId) => {
  let addedMessage = document.querySelector(`.in-cart-${productId}`);
  addedMessage.classList.add('opacity-one');
  let removeOpacity = () => addedMessage.classList.remove('opacity-one');
  if(addedToCartTimeOutIdMap.has(productId)){
    clearTimeout(addedToCartTimeOutIdMap.get(productId));
  }
  addedToCartTimeOutIdMap.set(productId, setTimeout(removeOpacity, 2000));
}

export const modifyCartContents = (existingItem, quantity, productId) => {
  if(existingItem){
    existingItem.quantity += quantity;
  }
  else{
    cart.push({
      productId,
      quantity
    })
  }
}
