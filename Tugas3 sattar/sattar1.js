// Ambil elemen tbody dari HTML
const tableBody = document.getElementById('tableBody');

// Data mahasiswa
const DataMahasiswa = [
    { no: 1, nama: "Sattar Putra Hervia", umur: 19 },
    { no: 2, nama: "Muhammad Ottmar Makhtar", umur: 19 },
    { no: 3, nama: "M Zikri Al Haq", umur: 19 },
    { no: 4, nama: "Faiq", umur: 19 },
    { no: 5, nama: "Bintang Hikmatullah", umur: 19 }
];

// Fungsi untuk menampilkan data mahasiswa di tabel
function displayDataMahasiswa() {
    tableBody.innerHTML = ''; // Kosongkan tabel terlebih dahulu
    DataMahasiswa.forEach((Data, index) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td class="py-3 px-4 border-b">${Data.no}</td>
            <td class="py-3 px-4 border-b">${Data.nama}</td>
            <td class="py-3 px-4 border-b">${Data.umur}</td>
            <td class="py-3 px-4 border-b">
                <button id="btn-${index}" class="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700" onclick="handleButtonClick(${index}, '${Data.nama}')">
                    Tambah
                </button>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Fungsi ketika tombol "Tambah" diklik
function handleButtonClick(index, nama) {
    // Tampilkan alert
    alert("Anda menambahkan data untuk: " + nama);
    
    // Ambil tombol yang diklik berdasarkan id
    const button = document.getElementById(`btn-${index}`);
    
    // Ubah warna tombol menjadi hijau
    button.classList.remove('bg-blue-500', 'hover:bg-blue-700');
    button.classList.add('bg-green-500');
    
    // Ubah teks tombol menjadi "Ditambahkan"
    button.textContent = "Ditambahkan";
    
    // Nonaktifkan tombol setelah diklik
    button.disabled = true;
}

// Tampilkan data mahasiswa ketika halaman dimuat pertama kali
window.onload = displayDataMahasiswa;
