const api = require('./api');

document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const productForm = document.getElementById('product-form');
    const productIdInput = document.getElementById('product-id');
    const productNameInput = document.getElementById('product-name');
    const productPriceInput = document.getElementById('product-price');

    const loadProducts = async () => {
        const products = await api.fetchProducts();
        productList.innerHTML = '';
        products.forEach(product => {
            const li = document.createElement('li');
            li.textContent = `${product.name} - $${product.price}`;
            li.appendChild(createEditButton(product));
            li.appendChild(createDeleteButton(product.id));
            productList.appendChild(li);
        });
    };

    const createEditButton = (product) => {
        const button = document.createElement('button');
        button.textContent = 'Edit';
        button.onclick = () => {
            productIdInput.value = product.id;
            productNameInput.value = product.name;
            productPriceInput.value = product.price;
        };
        return button;
    };

    const createDeleteButton = (id) => {
        const button = document.createElement('button');
        button.textContent = 'Delete';
        button.onclick = async () => {
            await api.deleteProduct(id);
            loadProducts();
        };
        return button;
    };

    productForm.onsubmit = async (e) => {
        e.preventDefault();
        const id = productIdInput.value;
        const name = productNameInput.value;
        const price = productPriceInput.value;

        if (id) {
            await api.updateProduct(id, { name, price });
        } else {
            await api.createProduct({ name, price });
        }

        productIdInput.value = '';
        productNameInput.value = '';
        productPriceInput.value = '';
        loadProducts();
    };

    loadProducts();
});