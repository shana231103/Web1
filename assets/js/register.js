function toggleContainer(event, containerId) {
    if (event) {
        event.preventDefault(); // Ngăn hành vi mặc định
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

function closeOnOverlay(event, containerId) {
    const container = document.getElementById(containerId);
    const form = container.querySelector('div');
    if (!form.contains(event.target)) {
        container.style.display = 'none';
    }
}

function toggleRegister(event) {
    toggleContainer(event, 'register-container');
}

function isValidPassword(password) {
    const regex = /^[\w!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    return regex.test(password);
}

function checkSignUp() {
    const user = document.getElementById('reg-user').value.trim();
    const pass = document.getElementById('reg-pass').value.trim();
    const pass2 = document.getElementById('reg-pass2').value.trim();
    if (!user || !pass || !pass2) {
        alert('Vui lòng nhập đầy đủ thông tin');
        return;
    }

    if (pass !== pass2) {
        alert('Mật khẩu không khớp');
        return;
    }

    if (!isValidPassword(pass)) {
        alert('Mật khẩu không được chứa ký tự có dấu hoặc dấu cách');
        return;
    }

    if (!isValidPassword(pass2)) {
        alert('Mật khẩu không được chứa ký tự có dấu hoặc dấu cách');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const isExistingUser = users.some(u => u.username === user);
    if (isExistingUser) {
        alert('Tên đăng nhập đã tồn tại, vui lòng chọn tên khác!');
        return;
    }

    users.push({ username: user, password: pass });

    localStorage.setItem('users', JSON.stringify(users));

    alert('Đăng ký thành công! Vui lòng đăng nhập.');
    toggleRegister(); 
    toggleLogin(); 
    document.getElementById('register-container').style.display = 'none';
}
