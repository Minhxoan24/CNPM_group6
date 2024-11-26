// Ví dụ: Hiển thị thông báo khi nhấn nút "Thêm"
document.querySelectorAll('.btn-danger').forEach(button => {
    button.addEventListener('click', () => {
        alert('Bạn đã thêm sản phẩm vào giỏ hàng!');
    });
});
// Load header từ header.html
document.addEventListener("DOMContentLoaded", function () {
    fetch("/components/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
        });
});


// Gắn sự kiện scroll để theo dõi vị trí trang
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section"); // Các phần tương ứng (Ưu đãi, Món mới,...)
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
            current = section.getAttribute("id"); // Lấy ID của phần hiện tại
        }
    });

    // Gỡ bỏ lớp active khỏi tất cả các nav-link
    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

function toggleMenu() {
    const sidebarMenu = document.getElementById("sidebarMenu");
    const overlay = document.getElementById("overlay");
    
    // Toggle trạng thái của sidebar và overlay
    sidebarMenu.classList.toggle("active");
    overlay.classList.toggle("active");
}

let currentSlide = 0; // Slide hiện tại
const banners = document.querySelectorAll(".banner"); // Lấy danh sách các ảnh
const totalSlides = banners.length; // Tổng số ảnh

function changeSlide(direction) {
    // Ẩn ảnh hiện tại
    banners[currentSlide].style.display = "none";

    // Cập nhật chỉ số ảnh
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Hiển thị ảnh mới
    banners[currentSlide].style.display = "block";
}

// Hiển thị ảnh đầu tiên khi trang tải
document.addEventListener("DOMContentLoaded", () => {
    banners.forEach((banner, index) => {
        banner.style.display = index === 0 ? "block" : "none";
    });
});


