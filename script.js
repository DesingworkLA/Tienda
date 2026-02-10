// Modal
function openDetail(index){
  currentProduct = products[index];
  document.getElementById('modalImg').src = currentProduct.img;
  document.getElementById('modalName').innerText = currentProduct.name;
  document.getElementById('modalPrice').innerText = "$" + currentProduct.price;
  document.getElementById('modalQty').value = 1;
  const modal = document.getElementById('productModal');
  modal.classList.add('show');
}

function closeDetail(){
  const modal = document.getElementById('productModal');
  modal.classList.remove('show');
}

// Carrito
function openCart(){
  document.getElementById('cartSidebar').classList.add('open');
}

function closeCart(){
  document.getElementById('cartSidebar').classList.remove('open');
}

// 1️⃣ Definir productos (coincide con tus productos HTML)
const products = [
  {
    name: "Camiseta Oversize",
    price: 29,
    img: "https://images.unsplash.com/photo-1523381294911-8d3cead13475"
  },
  {
    name: "Sudadera Premium",
    price: 49,
    img: "img/sudadera_premium.png"
  },
  {
    name: "Jeans Slim Fit",
    price: 55,
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
  },
  {
    name: "Zapatillas Urbanas",
    price: 89,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },
  {
    name: "Gorra Minimal",
    price: 19,
    img: "img/Gorra.png"
  },
  {
    name: "Mochilas Elegantes",
    price: 65,
    img: "img/mochila.png"
  }
];

// 2️⃣ Funciones del modal
function openDetail(index){
  const product = products[index];
  document.getElementById('modalImg').src = product.img;
  document.getElementById('modalName').innerText = product.name;
  document.getElementById('modalPrice').innerText = "$" + product.price;
  document.getElementById('modalQty').value = 1;
  document.getElementById('productModal').classList.add('show');
}

function closeDetail(){
  document.getElementById('productModal').classList.remove('show');
}

// 3️⃣ Carrito simple (solo ejemplo)
let cart = [];

function addToCart(){
  const name = document.getElementById('modalName').innerText;
  const price = parseFloat(document.getElementById('modalPrice').innerText.replace('$',''));
  const qty = parseInt(document.getElementById('modalQty').value);
  
  cart.push({name, price, qty});
  alert(`${qty} ${name} agregado(s) al carrito!`);
  closeDetail();
}
