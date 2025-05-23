let isLogin = true;

const formTitle = document.getElementById("form-title");
const fullnameField = document.getElementById("fullname");
const form = document.getElementById("auth-form");
const toggleBtn = document.getElementById("toggle-mode");
const toggleText = document.getElementById("toggle-text");
const submitButton = form.querySelector("button");

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  isLogin = !isLogin;

  formTitle.textContent = `MBBank ${isLogin ? "Đăng nhập" : "Đăng ký"}`;
  fullnameField.classList.toggle("hidden", isLogin);
  submitButton.textContent = isLogin ? "Đăng nhập" : "Đăng ký";
  toggleText.innerHTML = isLogin
    ? `Chưa có tài khoản? <button id="toggle-mode" class="text-blue-600 underline">Đăng ký</button>`
    : `Đã có tài khoản? <button id="toggle-mode" class="text-blue-600 underline">Đăng nhập</button>`;

  // Gắn lại sự kiện vì innerHTML xoá sự kiện cũ
  document.getElementById("toggle-mode").addEventListener("click", toggleBtn.click);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(`${isLogin ? "Đăng nhập" : "Đăng ký"} thành công (demo UI)!`);
});
