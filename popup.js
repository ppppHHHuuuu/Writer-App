//open and close pop up
let popup = document.getElementById('popup');
function openPopup(e) {
    popup.classList.add('open-popup');
}

// popup.addEventListener('mouseover', openPopup);

function closePopup() {
    popup.classList.remove('open-popup');
}


function getFileSize() {
    editorData = editor.value;
    let fileSize = new Blob([editor], {type: 'text/plain'});
    document.getElementById('file-size').innerHTML = fileSize.size;
    console.log(fileSize.size);
    console.log('hello');
}

(function lastEdit () {
    var latestDate = new Date(document.lastModified);
    var seconds = latestDate.getSeconds();
    var minutes = latestDate.getMinutes();    
    var hour = latestDate.getHours();
    document.getElementById('last-modified').innerHTML = `${hour}h ${minutes}m ${seconds}s`;
})();
