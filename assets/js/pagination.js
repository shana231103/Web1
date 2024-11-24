let thisPage = 1; // Trang hiện tại
const limit = 8; // Số phần tử trên mỗi trang

// Hàm tải các mục hiện có dựa trên trang hiện tại
function loadItem() {
    // Lấy tất cả các phần tử `.item` từ DOM
    const list = document.querySelectorAll('.list .item');

    // Tính toán phần tử bắt đầu và kết thúc của trang
    const beginGet = limit * (thisPage - 1);
    const endGet = limit * thisPage;

    // Hiển thị hoặc ẩn các phần tử dựa trên phân trang
    list.forEach((item, index) => {
        if (index >= beginGet && index < endGet) {
            item.style.display = 'block'; // Hiển thị phần tử
        } else {
            item.style.display = 'none'; // Ẩn phần tử
        }
    });

    // Gọi hàm để tạo danh sách số trang
    listPage(list.length);
}

// Hàm tạo danh sách số trang
function listPage(totalItems) {
    const count = Math.ceil(totalItems / limit); // Tổng số trang
    const listPageContainer = document.querySelector('.listPage');
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
    thisPage = page; // Cập nhật trang hiện tại
    loadItem(); // Tải lại danh sách phần tử
}

// Gọi hàm để khởi động phân trang sau khi phần tử đã được render
loadItem();
