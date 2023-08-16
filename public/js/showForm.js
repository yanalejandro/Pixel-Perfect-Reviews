function showForm() {
    const checkBox = document.querySelector('#check');
    const form = document.querySelector('#hide');

    if(checkBox.checked == true) {
        form.style.display = "block";
    }
    else {
        form.style.display = "none";
    }
}

const form = document.querySelector('#hide');
form.style.display = "none";
