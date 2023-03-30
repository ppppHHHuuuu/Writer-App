
let editorData;

document.querySelector('#store-file').addEventListener('click', () => {
    
    const link = document.createElement('a');
    editorData = editor.getData();
    assign_data();
    console.log(document.querySelector('#name').value);
    console.log(doc_name.value);
    const file = new Blob([editorData], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    window.localStorage.setItem(JSON.stringify(doc_name.value), editorData);
    URL.revokeObjectURL(link.href);
})

document.querySelector('#download').addEventListener('click', downloadFile);
function downloadFile() {

    let data = new Blob([editor.getData()], { type: 'text/plain' });
    console.log(data.size);
    saveAs(data, 'DownloadFIle.txt');
}


// $('#name').each(function(){
//     i++;
//     var newID='file'+i;
//     $(this).attr('id',newID);
//     $(this).val(i);
// });

