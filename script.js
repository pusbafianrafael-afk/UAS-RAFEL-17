// Fungsi untuk menampilkan section yang dipilih
function showSection(sectionId) {
    // Sembunyikan semua section
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Tampilkan section yang dipilih
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    }
    
    // Update tombol navigasi yang aktif
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('data-target') === sectionId) {
            button.classList.add('active');
        }
    });
}

// Fungsi untuk inisialisasi event listener
function initNavigation() {
    // Ambil semua tombol navigasi
    const navButtons = document.querySelectorAll('.nav-btn');
    
    // Tambahkan event listener ke setiap tombol
    navButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Ambil target section dari atribut data-target
            const targetSection = this.getAttribute('data-target');
            
            // Tampilkan section yang dipilih
            showSection(targetSection);
            
            // Scroll ke atas halaman
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
}

// Fungsi untuk menampilkan section pertama saat halaman dimuat
function setInitialSection() {
    // Tampilkan section home pertama kali
    showSection('home');
}

// Fungsi untuk mengatur tahun di footer
function setCurrentYear() {
    const yearElement = document.querySelector('footer p:first-child');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2025', currentYear);
    }
}

// Fungsi utama yang dijalankan saat halaman siap
function init() {
    // Inisialisasi navigasi
    initNavigation();
    
    // Set section awal
    setInitialSection();
    
    // Set tahun di footer
    setCurrentYear();
    
    console.log('Website Portofolio siap digunakan!');
}

// Jalankan fungsi init saat halaman selesai dimuat
document.addEventListener('DOMContentLoaded', init);