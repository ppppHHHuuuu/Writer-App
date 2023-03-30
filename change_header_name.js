
document.getElementById("name").defaultValue = "";

let doc_name = document.getElementById("name");
//ocalStorage.getItem("blob:http://127.0.0.1:5500/e6dd38d7-0f86-4539-9552-990b66bb0f5a");


doc_name.addEventListener("keypress", function(e) {
    console.log(2);
    if (e.key === "Enter") {
        e.preventDefault();
        // localStorage.setItem(JSON.stringify(doc_name.value), );
        console.log(doc_name.value);
    }
});

let i = 0;
function assign_data() {
    if (doc_name.value === "") {
        document.getElementById("name").innerHTML = "file " + i; 
        i++;
    }
}