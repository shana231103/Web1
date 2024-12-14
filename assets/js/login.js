function toggleContainer(event, containerId) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    const container = document.getElementById(containerId);
    const currentDisplay = window.getComputedStyle(container).display;
    if (currentDisplay === 'none') {
        container.style.display = 'flex';
    } else {
        container.style.display = 'none';
    }
}

function toggleLogin(event) {
    toggleContainer(event, 'login-container');
}

function closeOnOverlay(event, containerId) {
    const container = document.getElementById(containerId);
    const form = container.querySelector('div');
    if (!form.contains(event.target)&& event.type === "click") {
        container.style.display = 'none';
    }
}

function isValidPassword(password) {
    const regex = /^[\w!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    return regex.test(password);
}

function checkSignIn() {
    const user = document.getElementById('user').value.trim();
    const pass = document.getElementById('pass').value.trim();
    if (!user || !pass) {
        alert('Vui lòng nhập đầy đủ thông tin!');
        return;
    }

    if (!isValidPassword(pass)) {
        alert('Mật khẩu không được chứa ký tự có dấu hoặc dấu cách!');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const isValidUser = users.some(u => u.username === user && u.password === pass);

    if (!isValidUser) {
        alert('Sai tên đăng nhập hoặc mật khẩu!');
        return;
    }

    alert('Đăng nhập thành công!');
    localStorage.setItem('currentUser', user);
    document.getElementById('login-container').style.display = 'none';
    displayLoggedInUser(user);
}

function displayLoggedInUser(username) {
    const loginBtn = document.querySelector('.login-btn');
    const registerBtn = document.querySelector('.register-btn');
    loginBtn.style.display = 'none';
    registerBtn.style.display = 'none';

    const userContainer = document.createElement('div');
    userContainer.classList.add('user-container');

    const userDisplay = document.createElement('div');
    userDisplay.classList.add('user-display');
    userDisplay.innerHTML = `Xin chào <br> <b>${username}</b> </br>`;

    const logoutButton = document.createElement('button');
    logoutButton.classList.add('logout-btn');
    logoutButton.innerText = 'Đăng xuất';

    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('cart');
        alert('Đăng xuất thành công');
        location.reload();
    });

    // Thêm tên người dùng và nút "Đăng xuất" vào container
    userContainer.appendChild(userDisplay);
    userContainer.appendChild(logoutButton);

    const headerMain = document.querySelector('.header-main');
    headerMain.appendChild(userContainer); 
}