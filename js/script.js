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
    var name = document.getElementById("input-name").value;
    var email = document.getElementById("input-email").value;
    var destination = document.getElementById("input-destination").value;

    if (name.trim() === "") {
        alertError("Tolong isi nama anda");
        return false;
    }

    if (email.trim() === "") {
        alertError("Tolong isi email anda");
        return false;
    }

    if (!isValidEmail(email)) {
        alertError("Format email salah");
        return false;
    }

    if (destination.trim() === "") {
        alertError("Tolong isi tujuan anda");
        return false;
    }

    alertSuccess(name,email,destination);
}

function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function scrollToSectionCallus() {
    var sectionCallus = document.getElementById('section-callus');
    sectionCallus.scrollIntoView({ behavior: 'instant' });
}

function alertError(msg) {
    var modal = document.getElementById('alert-error');
    var messageElement = document.getElementById('alert-msg');
    
    modal.style.display = 'block';
    messageElement.textContent = msg;
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

function closeAlertError() {
    var modal = document.getElementById('alert-error');
    modal.style.display = 'none';
}

function closeAlertSuccess() {
    var modal = document.getElementById('alert-success');
    modal.style.display = 'none';
    
    document.getElementById("form-callus").reset();
}

