let thisPage = 1;
let limit = 8;

// Hàm tải danh sách các phần tử
function loadItem() {
    // Lấy lại danh sách các phần tử `.item`
    let list = document.querySelectorAll('.list .item');
    
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;

    // Hiển thị hoặc ẩn các phần tử dựa trên phân trang
    list.forEach((item, key) => {
        if (key >= beginGet && key <= endGet) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    // Tạo danh sách số trang
    listPage(list.length);
}

// Hàm tạo danh sách số trang
function listPage(totalItems) {
    let count = Math.ceil(totalItems / limit); // Tổng số trang
    let listPageContainer = document.querySelector('.listPage');
    listPageContainer.innerHTML = '';

    // Nút "Prev"
    if (thisPage != 1) {
        let prev = document.createElement('li');
        prev.innerText = 'Prev';
        prev.setAttribute('onclick', `changePage(${thisPage - 1})`);
        listPageContainer.appendChild(prev);
    }

    // Các số trang
    for (let i = 1; i <= count; i++) {
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if (i == thisPage) {
            newPage.classList.add('active');
        }
        newPage.setAttribute('onclick', `changePage(${i})`);
        listPageContainer.appendChild(newPage);
    }

    // Nút "Next"
    if (thisPage != count) {
        let next = document.createElement('li');
        next.innerText = 'Next';
        next.setAttribute('onclick', `changePage(${thisPage + 1})`);
        listPageContainer.appendChild(next);
    }
}

// Hàm thay đổi trang
function changePage(i) {
    thisPage = i;
    loadItem();
}

// Khởi động phân trang sau khi thêm sản phẩm
initApp(); // Gọi từ file card.js
loadItem();
