document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Lấy giá trị từ các trường input
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Gửi thông tin đăng ký đến server hoặc thực hiện xử lý logic ở đây
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
    });
});
