/*
// Hàm lấy dữ liệu giỏ hàng từ Local Storage
function loadCartFromLocalStorage() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
}

// Hàm hiển thị giỏ hàng trên giao diện
function renderCartToHTML() {
    // Lấy phần tử hiển thị danh sách giỏ hàng
    const listCartHTML = document.querySelector('.returnCart .list');
    listCartHTML.innerHTML = ''; // Xóa dữ liệu cũ

    // Lấy phần tử hiển thị tổng số lượng và tổng tiền
    const totalQuantityHTML = document.querySelector('.totalQuantity');
    const totalPriceHTML = document.querySelector('.totalPrice');

    let totalQuantity = 0;
    let totalPrice = 0;

    // Kiểm tra nếu có sản phẩm trong giỏ hàng
    if (cart.length > 0) {
        cart.forEach(item => {
            if (item) {
                // Tìm thông tin sản phẩm dựa trên `productId`
                const product = findProductById(item.productId);

                if (product) {
                    // Tính tổng số lượng và tổng tiền
                    totalQuantity += item.quantity;
                    totalPrice += product.price * item.quantity;

                    // Tạo phần tử hiển thị sản phẩm trong giỏ hàng
                    const newCart = document.createElement('div');
                    newCart.classList.add('item');
                    newCart.innerHTML = `
                        <img src="${product.image}" alt="${product.name}">
                        <div class="info">
                            <div class="name">${product.name}</div>
                            <div class="price">${product.price.toLocaleString()}₫ / 1 sản phẩm</div>
                        </div>
                        <div class="quantity">${item.quantity}</div>
                        <div class="returnPrice">${(product.price * item.quantity).toLocaleString()}₫</div>
                    `;
                    listCartHTML.appendChild(newCart);
                }
            }
        });
    }

    // Cập nhật tổng số lượng và tổng tiền
    totalQuantityHTML.innerText = totalQuantity;
    totalPriceHTML.innerText = totalPrice.toLocaleString() + '₫';
}

// Hàm tìm sản phẩm dựa trên `id` (sử dụng dữ liệu sản phẩm toàn cục)
function findProductById(productId) {
    return products.find(product => product.id === productId);
}

// Khởi tạo ứng dụng
function initCheckout() {
    loadCartFromLocalStorage(); // Lấy dữ liệu giỏ hàng từ Local Storage
    renderCartToHTML(); // Hiển thị giỏ hàng trên giao diện
}

// Gọi hàm khởi tạo khi tải trang
initCheckout();
*/
