    const listContainer = document.querySelector('.list'); 
    const totalPriceHTML = document.querySelector('.totalPrice');
    const thanhToan = document.querySelector('.buttonCheckout');  

    // Lấy giỏ hàng từ localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const products = JSON.parse(localStorage.getItem('products')) || [];

    let totalQuantity = 0;
    let totalPrice = 0; 

    cart.forEach(item => {
        const products = JSON.parse(localStorage.getItem('products')) || [];
        const product = products.find(p => p.id === item.productId); 
    
        if (product) {
            totalQuantity += item.quantity;
            totalPrice += product.price * item.quantity;
    
            const newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.innerHTML = `
                <div class="image">
                    <img src="${product.image}" alt="${product.name}" style="width: 100px; height: auto;">
                </div>
                <div class="details">
                    <div class="name">${product.name}</div>
                    <div class="quantity">Số lượng: ${item.quantity}</div>
                    <div class="price">Giá: ${(product.price * item.quantity).toLocaleString()}₫</div>
                </div>
            `;
            listContainer.appendChild(newItem);
        }
    });
    
        totalPriceHTML.textContent = `Giá tiền: ${totalPrice.toLocaleString()}₫`;

        thanhToan.addEventListener('click', () => {
            alert('Thanh toán thành công.');
            localStorage.removeItem('cart');
            if (listContainer) {
                listContainer.innerHTML = ''; // Xóa toàn bộ nội dung bên trong
            }
        
            // Cập nhật lại tổng giá và tổng số lượng (nếu có)
            const totalQuantityElement = document.querySelector('.totalQuantity');
            const totalPriceElement = document.querySelector('.totalPrice');
            if (totalQuantityElement) totalQuantityElement.textContent = 'Số lượng: 0';
            if (totalPriceElement) totalPriceElement.textContent = 'Giá tiền: 0₫';
        });



