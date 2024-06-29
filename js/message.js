function validateForm() {
    var date = new Date();
    var name = document.forms["message-form"]["full-name"].value;
    var birthDate = document.forms["message-form"]["birth-date"].value;
    var gender = document.forms["message-form"]["gender"].value;
    var messages = document.forms["message-form"]["messages"].value;

    if (name == "" || birthDate == "" || gender == "" || messages == "") {
        alert("Maaf, Kami Harap Masukkan Data Anda dengan Lengkap");
        return false
    }

    setSenderUi(date, name, birthDate, gender, messages);
    
    var frm = document.getElementsByName("message-form")[0];
    frm.reset();
    return false;

}

// funsi setRenderUi
function setSenderUi(date, name, birthDate, gender, messages) {
    document.getElementById("current-date").innerText = date
    document.getElementById("sender-full-name").innerText = name;
    document.getElementById("sender-birth-date").innerText = birthDate;
    document.getElementById("sender-gender").innerText = gender;
    document.getElementById("sender-messages").innerText = messages;
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("img-slideshow");
    console.log({ imgList });
    if (n > imgList.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = imgList.length };
    for (let i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }
    imgList[slideIndex - 1].style.display = "block"
}

setInterval(() => {
    plusDivs(1);
}, 1000)