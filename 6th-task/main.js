let products = JSON.parse(localStorage.getItem('products')) || [];
let editId = null;

const form = document.getElementById('product-form');
const tableBody = document.getElementById('product-table-body');
const searchInput = document.getElementById('search');
const filterCategory = document.getElementById('filter-category');
const submitBtn = document.getElementById('submit-btn');
const formTitle = document.getElementById('form-title');
const toggleBtn = document.querySelector('.mode-toggle');

toggleBtn.addEventListener('click', toggleMode);

function validateForm() {
  const name = document.getElementById('name').value.trim();
  const description = document.getElementById('description').value.trim();
  const price = Number(document.getElementById('price').value);
  const category = document.getElementById('category').value;

  const errors = {};
  if (!name) errors.name = 'Product Name is required';
  if (!description) errors.description = 'Description is required';
  if (price <= 0) errors.price = 'Price must be a positive number';
  if (!category) errors.category = 'Category is required';

  document.getElementById('name-error').textContent = errors.name || '';
  document.getElementById('description-error').textContent =
    errors.description || '';
  document.getElementById('price-error').textContent = errors.price || '';
  document.getElementById('category-error').textContent = errors.category || '';

  return Object.keys(errors).length === 0;
}

function renderTable() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = filterCategory.value;
  tableBody.innerHTML = '';

  const filteredProducts = products.filter(
    product =>
      (product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)) &&
      (!selectedCategory || product.category === selectedCategory)
  );

  filteredProducts.forEach(product => {
    const row = document.createElement('tr');
    row.innerHTML = `
                    <td>${product.name}</td>
                    <td>${product.description}</td>
                    <td>$${Number(product.price)}</td>
                    <td>${product.category}</td>
                    <td>${product.isAvailable ? 'Yes' : 'No'}</td>
                    <td>
                        <button class="edit-btn" onclick="editProduct(${
                          product.id
                        })">Edit</button>
                        <button class="delete-btn" onclick="deleteProduct(${
                          product.id
                        })">Delete</button>
                    </td>
                `;

    tableBody.appendChild(row);

    document
      .querySelector('.delete-btn')
      .addEventListener('click', deleteProduct);
    document.querySelector('.edit-btn').addEventListener('click', editProduct);
  });
}

function saveProducts() {
  localStorage.setItem('products', JSON.stringify(products));
}

form.addEventListener('submit', e => {
  e.preventDefault();
  if (!validateForm()) return;

  const product = {
    id: editId || Date.now(),
    name: document.getElementById('name').value,
    description: document.getElementById('description').value,
    price: Number(document.getElementById('price').value),
    category: document.getElementById('category').value,
    isAvailable: document.getElementById('isAvailable').checked,
  };

  if (editId) {
    products = products.map(p => (p.id === editId ? product : p));
    editId = null;
    submitBtn.textContent = 'Add Product';
    formTitle.textContent = 'Add New Product';
  } else {
    products.push(product);
  }

  form.reset();
  saveProducts();
  renderTable();
});

const editProduct = function (id) {
  const product = products.find(p => p.id === id);
  if (product) {
    document.getElementById('name').value = product.name;
    document.getElementById('description').value = product.description;
    document.getElementById('price').value = product.price;
    document.getElementById('category').value = product.category;
    document.getElementById('isAvailable').checked = product.isAvailable;
    editId = id;
    submitBtn.textContent = 'Update Product';
    formTitle.textContent = 'Edit Product';
  }
};

const deleteProduct = function (id) {
  products = products.filter(p => p.id !== id);
  saveProducts();
  renderTable();
};

searchInput.addEventListener('input', renderTable);
filterCategory.addEventListener('change', renderTable);

function toggleMode() {
  document.body.classList.toggle('light-mode');
  document.querySelector('.mode-toggle').textContent =
    document.body.classList.contains('light-mode') ? 'Dark Mode' : 'Light Mode';
}

renderTable();
