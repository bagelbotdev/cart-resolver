const params = new URLSearchParams(document.location.search);
const cartGuid = params.get('cart');

window.localStorage.setItem('toast-oo-restaurant', JSON.stringify({ '7fb7d7c2-7204-4fbe-ae03-ce2324ecab68': { cartGuid } }));


if (params.get('rl') == '1') {
  params.set('rl', '0');
  window.location.search = params.toString();
}


