let editor;
ClassicEditor
    .create( document.querySelector( '#editor' ) )
    .then( newEditor => {
        editor = newEditor;
        console.log(editor);
    })
    .catch( error => {
        console.error( error );     
    } 
);//editor = ClassicEditor.instance.content;