// Productos
const products = [
  { name: "Camiseta Oversize", price: 29, img: "https://images.unsplash.com/photo-1523381294911-8d3cead13475" },
  { name: "Sudadera Premium", price: 49, img: "img/sudadera_premium.png" },
  { name: "Jeans Slim Fit", price: 55, img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c" },
  { name: "Zapatillas Urbanas", price: 89, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
  { name: "Gorra Minimal", price: 19, img: "img/Gorra.png" },
  { name: "Mochilas Elegantes", price: 65, img: "img/mochila.png" }
];

// Modal
let currentProduct = null;
function openDetail(index) {
  currentProduct = products[index];
  document.getElementById('modalImg').src = currentProduct.img;
  document.getElementById('modalName').innerText = currentProduct.name;
  document.getElementById('modalPrice').innerText = "$" + currentProduct.price;
  document.getElementById('modalQty').value = 1;
  document.getElementById('productModal').classList.add('show');
}
function closeDetail() {
  document.getElementById('productModal').classList.remove('show');
}

// Carrito
let cart = [];

function addToCart() {
  const qty = parseInt(document.getElementById('modalQty').value);
  const existingIndex = cart.findIndex(item => item.name === currentProduct.name);

  if (existingIndex > -1) {
    cart[existingIndex].qty += qty; // suma si ya existe
  } else {
    cart.push({ ...currentProduct, qty });
  }

  updateCart();
  closeDetail();
  openCart();
}

function updateCart() {
  const cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.qty;
    cartItems.innerHTML += `
      <div class="cart-item">
        ${item.name} x ${item.qty} - $${(item.price * item.qty).toFixed(2)}
      </div>
    `;
  });

  document.getElementById('cartTotal').innerText = total.toFixed(2);
}

// Sidebar carrito
function openCart() {
  document.getElementById('cartSidebar').classList.add('open');
}
function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
}

function checkout() {
  alert("En esta demo, se simula el pago. Aquí podrías redirigir a WhatsApp o PayPal.");
}
