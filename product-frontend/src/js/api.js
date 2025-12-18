const apiUrl = 'http://localhost:3000/api/productos'; 

const fetchProducts = async () => {
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    return await response.json();
};

const createProduct = async (product) => {
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    });
    if (!response.ok) {
        throw new Error('Failed to create product');
    }
    return await response.json();
};

const updateProduct = async (id, product) => {
    const response = await fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    });
    if (!response.ok) {
        throw new Error('Failed to update product');
    }
    return await response.json();
};

const deleteProduct = async (id) => {
    const response = await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Failed to delete product');
    }
    return await response.json();
};


window.api = {
    fetchProducts,
    createProduct,
    updateProduct,
    deleteProduct
};