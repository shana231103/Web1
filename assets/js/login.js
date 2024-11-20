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
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    if (!user || !pass) {
        alert('Vui lòng nhập đầy đủ thông tin!');
        return;
    }

    if (!isValidPassword(pass)) {
        alert('Mật khẩu không được chứa ký tự có dấu hoặc dấu cách!');
        return;
    }

    alert('Đăng nhập thành công!');
    document.getElementById('login-container').style.display = 'none';
}

