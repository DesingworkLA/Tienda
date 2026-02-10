// Productos
const products = [
  { 
    name: "Camiseta Oversize", 
    price: 29, 
    img: "https://images.unsplash.com/photo-1523381294911-8d3cead13475",
    desc: "Camiseta oversize cómoda y moderna, ideal para cualquier estilo casual.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blanco", "Negro", "Gris"]
  },
  { 
    name: "Sudadera Premium", 
    price: 49, 
    img: "img/sudadera_premium.png",
    desc: "Sudadera premium de alta calidad, suave y cálida, perfecta para invierno.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Azul", "Negro", "Gris"]
  },
  { 
    name: "Jeans Slim Fit", 
    price: 55, 
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
    desc: "Jeans slim fit que se ajustan perfectamente a tu cuerpo sin perder comodidad.",
    sizes: ["28", "30", "32", "34"],
    colors: ["Azul Claro", "Azul Oscuro"]
  },
  { 
    name: "Zapatillas Urbanas", 
    price: 89, 
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    desc: "Zapatillas urbanas cómodas y resistentes, perfectas para caminar todo el día.",
    sizes: ["38", "39", "40", "41", "42"],
    colors: ["Negro", "Blanco", "Gris"]
  },
  { 
    name: "Gorra Minimal", 
    price: 19, 
    img: "img/Gorra.png",
    desc: "Gorra minimalista de algodón, ajustable y con estilo moderno.",
    sizes: ["Única"],
    colors: ["Negro", "Blanco", "Beige"]
  },
  { 
    name: "Mochilas Elegantes", 
    price: 65, 
    img: "img/mochila.png",
    desc: "Mochila elegante y resistente, ideal para el trabajo o viajes.",
    sizes: ["Única"],
    colors: ["Negro", "Gris", "Azul"]
  }
];

// Modal
let currentProduct = null;
function openDetail(index) {
  currentProduct = products[index];

  document.getElementById('modalImg').src = currentProduct.img;
  document.getElementById('modalName').innerText = currentProduct.name;
  document.getElementById('modalPrice').innerText = "$" + currentProduct.price;
  
  // Descripción
  document.getElementById('modalDesc').innerText = currentProduct.desc;

  // Cantidad
  document.getElementById('modalQty').value = 1;

  // Tallas
  const sizeSelect = document.getElementById('modalSize');
  sizeSelect.innerHTML = '';
  currentProduct.sizes.forEach(size => {
    const opt = document.createElement('option');
    opt.value = size;
    opt.innerText = size;
    sizeSelect.appendChild(opt);
  });

  // Colores
  const colorSelect = document.getElementById('modalColor');
  colorSelect.innerHTML = '';
  currentProduct.colors.forEach(color => {
    const opt = document.createElement('option');
    opt.value = color;
    opt.innerText = color;
    colorSelect.appendChild(opt);
  });

  document.getElementById('productModal').classList.add('show');
}

function closeDetail() {
  document.getElementById('productModal').classList.remove('show');
}

// Carrito
let cart = [];

function addToCart() {
  const qty = parseInt(document.getElementById('modalQty').value);
  const size = document.getElementById('modalSize').value;
  const color = document.getElementById('modalColor').value;

  // Revisar si ya existe en el carrito (mismo nombre, talla y color)
  const existingIndex = cart.findIndex(item => 
    item.name === currentProduct.name && 
    item.size === size && 
    item.color === color
  );

  if (existingIndex > -1) {
    cart[existingIndex].qty += qty;
  } else {
    cart.push({ ...currentProduct, qty, size, color });
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
        ${item.name} (${item.size}, ${item.color}) x ${item.qty} - $${(item.price * item.qty).toFixed(2)}
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

