import { products } from './card.js';

const list = document.querySelector('.list');
const filterForm = document.querySelector('.filter');
const searchInput = document.querySelector('.search-bar input[name="name"]');
const searchButton = document.getElementById('find');
const listPageContainer = document.querySelector('.listPage');

let filteredProducts = products; // hien thi sau khi loc sp
let thisPage = 1; 
const limit = 8; //limit sp 1 trang

// render sp
function renderProducts(productsToRender) {
    list.innerHTML = ''; // xoa ds cu~

    const beginGet = limit * (thisPage - 1);
    const endGet = limit * thisPage;

    productsToRender.slice(beginGet, endGet).forEach(product => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="name"> ${product.name}</div>
            <div class="price">Giá: ${product.price.toLocaleString()}</div>
            <div class="sl">Số lượng còn: ${product.sl.toLocaleString()}</div>
            <button class="button" onclick="addToCart(${product.id})">Thêm vào giỏ hàng</button>
        `;
        list.appendChild(newDiv);
    });

    listPage(productsToRender.length);
}

// Hàm tạo danh sách số trang
function listPage(totalItems) {
    const count = Math.ceil(totalItems / limit); // Tổng số trang
    listPageContainer.innerHTML = ''; // Xóa các trang cũ

    // Nút "Prev"
    if (thisPage > 1) {
        const prev = document.createElement('li');
        prev.innerText = 'Prev';
        prev.addEventListener('click', () => changePage(thisPage - 1));
        listPageContainer.appendChild(prev);
    }

    // Các số trang
    for (let i = 1; i <= count; i++) {
        const newPage = document.createElement('li');
        newPage.innerText = i;
        if (i === thisPage) {
            newPage.classList.add('active'); // Trang hiện tại
        }
        newPage.addEventListener('click', () => changePage(i));
        listPageContainer.appendChild(newPage);
    }

    // Nút "Next"
    if (thisPage < count) {
        const next = document.createElement('li');
        next.innerText = 'Next';
        next.addEventListener('click', () => changePage(thisPage + 1));
        listPageContainer.appendChild(next);
    }
}

// Hàm thay đổi trang
function changePage(page) {
    thisPage = page;
    renderProducts(filteredProducts);
}

// Hàm tìm kiếm sản phẩm theo tên
function searchProducts() {
    const searchTerm = searchInput.value.trim().toLowerCase(); // Lấy giá trị tìm kiếm
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm)
        );
    }
}

// Hàm lọc sản phẩm
function filterProducts(event) {
    if (event) event.preventDefault(); // Ngăn không cho form reload trang

    // Lấy giá trị từ các trường lọc
    const cardType = filterForm.querySelector('select[name="card-type"]').value;
    const category = filterForm.querySelector('select[name="category"]').value;

    // Lọc sản phẩm
    filteredProducts = products;

    // Lọc theo loại thẻ bài
    if (cardType) {
        filteredProducts = filteredProducts.filter(product =>
            product.cardType.toLowerCase() === cardType.toLowerCase()
        );
    }

    // Lọc theo giá tiền
    if (category) {
        filteredProducts = filteredProducts.slice(); // Tạo bản sao
        if (category === 'up') {
            filteredProducts.sort((a, b) => a.price - b.price); // Giá từ thấp đến cao
        } else if (category === 'down') {
            filteredProducts.sort((a, b) => b.price - a.price); // Giá từ cao xuống thấp
        }
    }

    // Lọc thêm theo tìm kiếm tên
    searchProducts();

    // Reset trang hiện tại
    thisPage = 1;

    // Render danh sách sản phẩm và phân trang
    renderProducts(filteredProducts);
}

// Gắn sự kiện vào form lọc
filterForm.addEventListener('submit', filterProducts);

// Gắn sự kiện tìm kiếm vào nút và Enter
searchButton.addEventListener('click', event => {
    event.preventDefault();
    filterProducts();
});

searchInput.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        event.preventDefault();
        filterProducts();
    }
});

// Hiển thị toàn bộ sản phẩm ban đầu
renderProducts(filteredProducts);
