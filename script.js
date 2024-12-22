let namesData = [];

// Load data JSON
fetch('nama.json')
    .then(response => response.json())
    .then(data => {
        namesData = data;
    })
    .catch(error => console.error('Error fetching data:', error));

// Fungsi untuk mencari nama
function searchName() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    const resultDiv = document.getElementById('result');

    if (searchInput === '') {
        resultDiv.innerHTML = '<div class="alert alert-warning">Masukkan nama terlebih dahulu.</div>';
        return;
    }

    const result = namesData.find(item => item.nama.toLowerCase() === searchInput);

    if (result) {
        resultDiv.innerHTML = `
            <div class="table-responsive">
                <table class="table text-center shadow-sm">
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>Arti</th>
                            <th>Asal</th>
                            <th>Kelamin</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${result.nama}</td>
                            <td>${result.arti}</td>
                            <td>${result.asal}</td>
                            <td>${result.kelamin}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    } else {
        resultDiv.innerHTML = '<div class="alert alert-danger">Nama yang Anda masukkan tidak ditemukan.</div>';
    }
}

// Fungsi untuk reset pencarian
function resetSearch() {
    document.getElementById('searchInput').value = '';
    document.getElementById('result').innerHTML = '';
}