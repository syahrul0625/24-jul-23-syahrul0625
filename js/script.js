var bannerIndex = 1;

function nextbanner(n) {
    showbanner(bannerIndex += n);
}

function showbanner(n) {
    var i;
    var banner = document.getElementsByClassName("banner");

    if (n > banner.length) {
        bannerIndex = 1;
    }
    if (n < 1) {
        bannerIndex = banner.length;
    }
    for (i = 0; i < banner.length; i++) {
        banner[i].style.display = "none";
    }

    banner[bannerIndex - 1].style.display = "block";
}

function nextBannerAuto() {
    nextbanner(1);
}

setInterval(nextBannerAuto, 3000);


function validateForm() {
    var name = document.getElementById("input-name");
    var email = document.getElementById("input-email");
    var destination = document.getElementById("input-destination");

    var textName = name.value;
    var textEmail = email.value;
    var textDest = destination.value;

    const arrInput = [textName,textEmail,textDest];
    const arrLabel = Array.from(document.querySelectorAll('.label-error'));
    const arrMsg   = ['Silahkan isi nama lengkap anda','Format email tidak ditemukan','Silahkan pilih tujuan anda']
    
    var checker = false;

    for (let i = 0; i < arrInput.length; i++) {
        if (arrInput[i].trim() === '') {
            arrLabel[i].textContent = arrMsg[i];
            arrLabel[i].style.display = 'block';
            checker = false;
        } else {
            arrLabel[i].style.display = 'none';
            checker = true ;
        }
    }

    if (!isValidEmail(arrInput[1])) {
        arrLabel[1].textContent = arrMsg[1];
        arrLabel[1].style.display = 'block';
        checker = false;
    }

    if(!checker) return false;

    alertSuccess(textName,textEmail,textDest);
}

function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function scrollToSectionCallus() {
    var sectionCallus = document.getElementById('section-callus');
    sectionCallus.scrollIntoView({ behavior: 'instant' });
}

function alertSuccess(name,email,dest) {
    var modal = document.getElementById('alert-success');
    var dataName = document.getElementById('data-name');
    var dataEmail = document.getElementById('data-email');
    var dataDest = document.getElementById('data-destination');

    modal.style.display = 'block';
    dataName.textContent = name;
    dataEmail.textContent = email;
    dataDest.textContent = dest;
}

function closeAlertSuccess() {
    var modal = document.getElementById('alert-success');
    modal.style.display = 'none';
    
    document.getElementById("form-callus").reset();
}

