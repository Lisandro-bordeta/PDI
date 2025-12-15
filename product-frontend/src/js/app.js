document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('products');
    const productForm = document.getElementById('product-form');
    const productIdInput = document.getElementById('product-id');
    const productNombreInput = document.getElementById('product-nombre');
    const productCategoriaInput = document.getElementById('product-categoria');
    const productPrecioInput = document.getElementById('product-precio');
    const productImgUrlInput = document.getElementById('product-imgUrl');

    const loadProducts = async () => {
        const products = await window.api.fetchProducts();
        productList.innerHTML = '';
        products.forEach(product => {
            const li = document.createElement('li');
            li.textContent = `${product.nombre} - ${product.categoria} - $${product.precio}`;
            if (product.imgUrl) {
                const img = document.createElement('img');
                img.src = product.imgUrl;
                img.style.width = '50px';
                li.appendChild(img);
            }
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
            productNombreInput.value = product.nombre;
            productCategoriaInput.value = product.categoria;
            productPrecioInput.value = product.precio;
            productImgUrlInput.value = product.imgUrl || '';
        };
        return button;
    };

    const createDeleteButton = (id) => {
        const button = document.createElement('button');
        button.textContent = 'Delete';
        button.onclick = async () => {
            await window.api.deleteProduct(id);
            loadProducts();
        };
        return button;
    };

    productForm.onsubmit = async (e) => {
        e.preventDefault();
        const id = productIdInput.value;
        const nombre = productNombreInput.value;
        const categoria = productCategoriaInput.value;
        const precio = parseFloat(productPrecioInput.value);
        const imgUrl = productImgUrlInput.value;

        if (id) {
            await window.api.updateProduct(id, { nombre, categoria, precio, imgUrl });
        } else {
            await window.api.createProduct({ nombre, categoria, precio, imgUrl });
        }

        productIdInput.value = '';
        productNombreInput.value = '';
        productCategoriaInput.value = '';
        productPrecioInput.value = '';
        productImgUrlInput.value = '';
        loadProducts();
    };

    loadProducts();
});