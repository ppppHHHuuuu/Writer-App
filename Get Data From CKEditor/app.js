let editor;
ClassicEditor
    .create( document.querySelector( '#editor' ) )
    .then( newEditor => {
        editor = newEditor;
    })
    .catch( error => {
        console.error( error );     
    } 
);


// var getData = document.getElementById( 'data-btn' );
// getData.addEventListener('click', getDataFunction());

// function getDataFunction() {
//     const data = editor.getData();
//     console.log(data);
//     alert();
// }

document.querySelector( '#submit').addEventListener('click',  () => {
    const editorData = editor.getData();
    alert( editorData);
});

