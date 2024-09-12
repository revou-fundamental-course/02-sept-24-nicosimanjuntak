// Ini JavaScript

function tryDOM() {
    document.getElementById('jajar-genjang-btn').style.backgroundColor = 'cadetblue';
}

document.getElementById('triangleForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah submit form

    // Masukkan element input Luas Segitiga
    const length = document.getElementById('length');
    const height = document.getElementById('height');

    // Mendapatkan error message element luas segitiga
    const lengthError = document.getElementById('lengthError');
    const heightError = document.getElementById('heightError');
    
    let isValid = true;

    // Validasi Panjang untuk luas segitiga
    if (length.value.trim() === "") {
        lengthError.style.display = 'block';
        length.classList.add('error');
        isValid = false;
    } else {
        lengthError.style.display = 'none';
        length.classList.remove('error');
    }

    // Validasi tinggi untuk luas segitiga
    if (height.value.trim() === "") {
        heightError.style.display = 'block';
        height.classList.add('error');
        isValid = false;
    } else {
        heightError.style.display = 'none';
        height.classList.remove('error');
    }


});

// Tombol reset untuk mengahpus pesan error dan mereset style input
document.getElementById("resetButton").addEventListener('click', function () {
    const inputs = document.querySelectorAll('input');
    const errorMessages = document.querySelectorAll('.error-message');

    // Reset semua input style dan error messages
    inputs.forEach(input => input.classList.remove('error'));
    errorMessages.forEach(error => error.style.display = 'none');
});

document.getElementById('triangleFormKel').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah submit form

    // Masukkan element input Keliling Segitiga
    const lengthKel = document.getElementById('lengthKel');
    const heightKel = document.getElementById('heightKel');
    const heightKel2 = document.getElementById('heightKel2');

    // Mendapatkan error message element luas segitiga
    const lengthKelError = document.getElementById('lengthKelError');
    const heightKelError = document.getElementById('heightKelError');
    const heightKel2Error = document.getElementById('heightKel2Error');
    
    let isValid = true;

    // Validasi Panjang alas untuk keliling segitiga
    if (lengthKel.value.trim() === "") {
        lengthKelError.style.display = 'block';
        lengthKel.classList.add('error');
        isValid = false;
    } else {
        lengthKelError.style.display = 'none';
        lengthKel.classList.remove('error');
    }

    // Validasi sisi 1 untuk keliling segitiga
    if (heightKel.value.trim() === "") {
        heightKelError.style.display = 'block';
        heightKel.classList.add('error');
        isValid = false;
    } else {
        heightKelError.style.display = 'none';
        heightKel.classList.remove('error');
    }

    // Validasi sisi 2 untuk keliling segitiga
    if (heightKel2.value.trim() === "") {
        heightKel2Error.style.display = 'block';
        heightKel2.classList.add('error');
        isValid = false;
    } else {
        heightKel2Error.style.display = 'none';
        heightKel2.classList.remove('error');
    }

 
});

// Tombol reset untuk menghapus pesan error dan mereset style input
document.getElementById("resetKelButton").addEventListener('click', function () {
    const inputs = document.querySelectorAll('input');
    const errorMessages = document.querySelectorAll('.error-message');

    // Reset semua input style dan error messages
    inputs.forEach(input => input.classList.remove('error'));
    errorMessages.forEach(error => error.style.display = 'none');
});

// Fungsi untuk menghitung luas segitiga
document.getElementById('triangleForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah form di-submit secara default

    const length = parseFloat(document.getElementById('length').value);
    const height = parseFloat(document.getElementById('height').value);
    const luasResult = document.getElementById('luasResult');

    // Validasi input
    if (isNaN(length) || isNaN(height)) {
        luasResult.style.color = "red";
    } else {
        // Rumus luas segitiga: 1/2 * alas * tinggi
        const luas = 0.5 * length * height;
        luasResult.textContent = `Luas Segitiga: ${luas}`;
        luasResult.style.color = "black";
    }
});

// Fungsi untuk menghitung keliling segitiga
document.getElementById('triangleFormKel').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah form di-submit secara default

    const lengthKel = parseFloat(document.getElementById('lengthKel').value);
    const heightKel = parseFloat(document.getElementById('heightKel').value);
    const heightKel2 = parseFloat(document.getElementById('heightKel2').value);
    const kelilingResult = document.getElementById('kelilingResult');

    // Validasi input
    if (isNaN(lengthKel) || isNaN(heightKel) || isNaN(heightKel2)) {
        kelilingResult.style.color = "red";
    } else {
        // Rumus keliling segitiga: alas + sisi 1 + sisi 2
        const keliling = lengthKel + heightKel + heightKel2;
        kelilingResult.textContent = `Keliling Segitiga: ${keliling}`;
        kelilingResult.style.color = "black";
    }
});
