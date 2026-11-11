// Navigasi seluler dan submenu produk
const toggle = document.querySelector('.hamburger');
const nav = document.querySelector('.navlinks');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}
document.querySelectorAll('.submenu-toggle').forEach(link => {
  link.addEventListener('click', e => {
    if (window.matchMedia('(max-width: 760px)').matches) {
      e.preventDefault();
      link.parentElement.classList.toggle('open');
    }
  });
});
// Form contoh: tidak mengirim pesan atau menyimpan data
const form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    document.querySelector('#form-note').textContent = 'Ini adalah contoh tampilan formulir untuk tugas UTS. Pesan belum dikirim ke server.';
  });
}
