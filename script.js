const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", this.window.scrollY > 100);
});
// Mengambil elemen dengan kelas 'navlist'
let navlist = document.querySelector('.navlist a');

// Mendefinisikan fungsi yang akan dijalankan saat elemen dengan ID 'menu-icon' diklik
menu.onclick = () => {
    // Menggunakan toggle untuk menambah atau menghapus kelas 'bx-x' pada elemen dengan ID 'menu-icon'
    menu.classList.toggle('bx-x');

    // Menggunakan toggle untuk menambah atau menghapus kelas 'open' pada elemen dengan kelas 'navlist'
    navlist.classList.toggle('open');

    // Menetapkan properti CSS 'display' dari elemen 'navlist' menjadi 'block'
    navlist.style.display = 'block';
};
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}