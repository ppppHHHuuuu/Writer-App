

function getAge() {
    let input = document.getElementById('age-input');
    let age = document.getElementById('age');
    age.innerHTML = input.value;
}


let popup = document.getElementById('popup');

function openPopup() {
    popup.classList.add('open-popup');   
}

function closePopup() {
    popup.classList.remove('open-popup');
}

function lastEdit () {
    var lastestDate = new Date(document.lastModified);
    document.getElementById('last-edit').innerHTML = lastestDate;
}

function showSize() {
    var size = document.getElementById('size');
    document.getElementById('file-size').innerHTML = size;
}

lastEdit();