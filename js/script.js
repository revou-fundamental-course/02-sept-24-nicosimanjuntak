// Ini JavaScript

// untuk button pilihan segitiga dan jajar genjang
function tryDOM() {
    document.getElementById('jajar-genjang-btn').style.backgroundColor = 'cadetblue';
}

// Link ke Jajar genjang
// Fungsi untuk menggulir ke section Jajar Genjang
function scrollToSection() {
    document.querySelector(".second-content").scrollIntoView({
        behavior: 'smooth'
    });
}

// Event listener untuk tombol Jajar Genjang
document.getElementById("jajar-genjang-btn").addEventListener("click", scrollToSection);


// untuk submit luas segitiga
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



// untuk fungsi luas dan keliling jajar genjang

// Menghitung luas jajar genjang
document.getElementById('jajargenjangForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Retrieve input elements and error message elements
    const lengthluasjar = parseFloat(document.getElementById('lengthluasjar').value);
    const heightluasjar = parseFloat(document.getElementById('heightluasjar').value);
    const luasjarResult = document.getElementById('luasjarResult');
    const lengthluasjarError = document.getElementById('lengthluasjarError');
    const heightluasjarError = document.getElementById('heightluasjarError');

    let isValid = true;

    // Validate 'base' input
    if (isNaN(lengthluasjar) || lengthluasjar <= 0) {
        lengthluasjarError.style.display = 'block';
        document.getElementById('lengthluasjar').classList.add('error');
        isValid = false;
    } else {
        lengthluasjarError.style.display = 'none';
        document.getElementById('lengthluasjar').classList.remove('error');
    }

    // Validate 'height' input
    if (isNaN(heightluasjar) || heightluasjar <= 0) {
        heightluasjarError.style.display = 'block';
        document.getElementById('heightluasjar').classList.add('error');
        isValid = false;
    } else {
        heightluasjarError.style.display = 'none';
        document.getElementById('heightluasjar').classList.remove('error');
    }

    // If all inputs are valid, calculate the area
    if (isValid) {
        const luasjar = lengthluasjar * heightluasjar; // Correct formula for the area of a parallelogram
        luasjarResult.textContent = `Luas Jajar Genjang: ${luasjar}`;
        luasjarResult.style.color = "black";
    } else {
        luasjarResult.textContent = "Please enter valid numbers for both dimensions.";
        luasjarResult.style.color = "red";
    }
});

// Button reset functionality for clearing inputs and error messages
document.getElementById("resetluasjarButton").addEventListener('click', function () {
    const inputs = document.querySelectorAll('input');
    const errorMessages = document.querySelectorAll('.error-message');

    inputs.forEach(input => {
        input.classList.remove('error');
        input.value = ''; // Clear input values as well
    });
    errorMessages.forEach(error => error.style.display = 'none');
});


// Menghitung keliling jajar genjang
document.getElementById('kelilingjajarForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // input element
    const lengthkeljar = parseFloat(document.getElementById('lengthkeljar').value);
    const heightkeljar = parseFloat(document.getElementById('heightkeljar').value);
    const keljarResult = document.getElementById('keljarResult');
    const lengthkeljarError = document.getElementById('lengthkeljarError');
    const heightkeljarError = document.getElementById('heightkeljarError');

    let isValid = true;

    // Validate 'base' input
    if (isNaN(lengthkeljar) || lengthkeljar <= 0) {
        lengthkeljarError.style.display = 'block';
        document.getElementById('lengthkeljar').classList.add('error');
        isValid = false;
    } else {
        lengthkeljarError.style.display = 'none';
        document.getElementById('lengthkeljar').classList.remove('error');
    }

    // Validate 'height' input
    if (isNaN(heightkeljar) || heightkeljar <= 0) {
        heightkeljarError.style.display = 'block';
        document.getElementById('heightkeljar').classList.add('error');
        isValid = false;
    } else {
        heightkeljarError.style.display = 'none';
        document.getElementById('heightkeljar').classList.remove('error');
    }

    // If all inputs are valid, calculate the area
    if (isValid) {
        const keljar = 2 * (lengthkeljar + heightkeljar); 
        keljarResult.textContent = `Keliling Jajar Genjang: ${keljar}`;
        keljarResult.style.color = "black";
    } else {
        keljarResult.textContent = "Please enter valid numbers for both dimensions.";
        jarResult.style.color = "red";
    }

    
});


// Button Reset Keliling
document.getElementById("resetkeljarButton").addEventListener('click', function () {
    const inputs = document.querySelectorAll('input');
    const errorMessages = document.querySelectorAll('.error-message');

    inputs.forEach(input => {
        input.classList.remove('error');
        input.value = ''; // Clear input values as well
    });
    errorMessages.forEach(error => error.style.display = 'none');
});
