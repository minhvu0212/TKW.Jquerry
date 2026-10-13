/**
 * JavaScript xử lý menu mobile (hamburger)
 * Tailwind không có sẵn hành vi JS như Bootstrap → cần tự viết
 */

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      // Toggle class hidden/flex của menu di động
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Đóng menu mobile khi click vào link
  const mobileLinks = mobileMenu?.querySelectorAll('a');
  mobileLinks?.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
});
