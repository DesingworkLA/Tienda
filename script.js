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
