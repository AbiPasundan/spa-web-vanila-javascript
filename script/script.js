
// Fungsi untuk memuat halaman dari file HTML eksternal
function loadPage(page) {
    fetch(`/pages/${page}.html`) // Ambil file HTML dari folder /pages
        .then(response => {
            if (!response.ok) throw new Error("Page not found");
            return response.text();
        })
        .then(content => {
            // Tampilkan konten di elemen #app
            document.getElementById("app").innerHTML = content;
        })
        .catch(error => {
            document.getElementById("app").innerHTML = "<h1>404</h1><p>Page not found.</p>";
            console.error(error);
        });
}

// Fungsi untuk menangani routing
function renderRoute() {
    const hash = location.hash.replace("#", "") || "home"; // Default ke home jika hash kosong
    loadPage(hash); // Panggil fungsi loadPage dengan nama halaman
    updateActiveLink(hash); // Perbarui link aktif
}

// Fungsi untuk memperbarui link navigasi aktif
function updateActiveLink(hash) {
    document.querySelectorAll("nav a").forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${hash}`);
    });
}

// Event listener untuk perubahan hash di URL
window.addEventListener("hashchange", renderRoute);
window.addEventListener("load", renderRoute); // Render saat pertama kali halaman dimuat

