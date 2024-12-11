import { products } from './card.js';

const listCartHTML = document.querySelector('.listCart');
const body = document.querySelector('body');
const closeCart = document.querySelector('.close');
const iconCart = document.querySelector('.cart button');
const cartTotalHTML = document.querySelector('.cartTotal');

let cart = [];

const isUserLoggedIn = () => {
    const currentUser = localStorage.getItem('currentUser');
    return currentUser !== null;
};

// on/off gio hang
iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

// Them sp vao gio hang
window.addToCart = (productId) => {
    const currentUser = localStorage.getItem('currentUser');
    if (!isUserLoggedIn()) {
        alert('Bạn chưa đăng nhập.');
        return;
    }

    const product = products.find(p => p.id === productId);

    if (!product) {
        alert('Sản phẩm không tồn tại.');
        return;
    }

    const existingCartItem = cart.find(item => item.productId === product.id);

    if (existingCartItem) {
        if (existingCartItem.quantity < product.sl) {
            existingCartItem.quantity += 1;
        } else {
            alert('Không đủ sản phẩm trong kho.');
            return;
        }
    } else {
        cart.push({
            productId: product.id,
            quantity: 1,
        });
    }

    alert(`${product.name} đã được thêm vào giỏ hàng.`);
    addCartToHTML();
    addCartToMemory();
};

// Giao dien gio hang
const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    let totalAmount = 0;

    if (cart.length > 0) {
        cart.forEach(item => {
            const product = products.find(p => p.id === item.productId);

            if (product) {
                totalAmount += product.price * item.quantity;

                const newItem = document.createElement('div');
                newItem.classList.add('item');
                newItem.dataset.id = product.id;

                newItem.innerHTML = `
                    <div class="image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="name">${product.name}</div>
                    <div class="totalPrice">${(product.price * item.quantity).toLocaleString()}₫</div>
                    <div class="quantity">
                        <span class="minus">-</span>
                        <span>${item.quantity}</span>
                        <span class="plus">+</span>
                    </div>
                `;
                listCartHTML.appendChild(newItem);
            }
        });
        cartTotalHTML.innerText = `Tổng số tiền: ${totalAmount.toLocaleString()}₫`;
    } else {
        listCartHTML.innerHTML = `<p style="text-align: center; font-weight: bold;">Giỏ hàng trống</p>`;
        cartTotalHTML.innerText = 'Tổng số tiền: 0₫';
    }
};

// luu vao local
const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
};

// + - san pham
listCartHTML.addEventListener('click', (event) => {
    const positionClick = event.target;
    const productId = positionClick.parentElement.parentElement.dataset.id;

    if (positionClick.classList.contains('minus') || positionClick.classList.contains('plus')) {
        const type = positionClick.classList.contains('plus') ? 'plus' : 'minus';
        changeQuantityCart(productId, type);
    }
});
// + -
const changeQuantityCart = (productId, type) => {
    const cartItem = cart.find(item => item.productId === Number(productId));
    const product = products.find(p => p.id === Number(productId));

    if (!cartItem || !product) return;

    if (type === 'plus') {
        if (cartItem.quantity < product.sl) {
            cartItem.quantity += 1;
        } else {
            alert('Không đủ sản phẩm trong kho.');
        }
    } else if (type === 'minus') {
        if (cartItem.quantity > 1) {
            cartItem.quantity -= 1;
        } else {
            cart = cart.filter(item => item.productId !== Number(productId)); //Xoa sp khoi gio hang
        }
    }

    addCartToHTML();
    addCartToMemory();
};


const initApp = () => {
    addCartToHTML(); 

    //Lay du lieu tu local
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        addCartToHTML();
    }
};

initApp();
