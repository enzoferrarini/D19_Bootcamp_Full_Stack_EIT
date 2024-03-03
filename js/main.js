let products=[];
let myToast = new bootstrap.Toast(document.getElementById('myToast'));

function resaltarCoincidencias(title) {    
    let busqueda=document.getElementById("idSearchTitle").value.trim();
   // Resalta las coincidencias
    if (busqueda !== '') {
        if (title.toLowerCase().includes(busqueda.toLowerCase())) {
            const index = title.toLowerCase().indexOf(busqueda.toLowerCase());
            const antes = title.substring(0, index);
            const coincidencia = title.substring(index, index + busqueda.length);
            const despues = title.substring(index + busqueda.length);
            title = `${antes}<span class="resaltado">${coincidencia}</span>${despues}`;
        }
    }
    return title;
}

const showMessageToast=(msg)=>{
    let msgToast =document.getElementById("idMsgToast");
    msgToast.innerHTML=msg;
    myToast.show();
}

async function readJSONFile() {
    try {  
        const response = await fetch('https://my-json-server.typicode.com/enzoferrarini/jsonFiles/electro');
        products = await response.json();
        showProducts(products);
    } catch (error) {
      console.error('Error al leer el archivo JSON:', error);
    }
}
readJSONFile();

document.addEventListener('DOMContentLoaded', function() {
    let modal=new bootstrap.Modal(document.getElementById("idModal"));
    modal.show();
});

const searchProduct=()=>{
    let searchInput=document.getElementById("idSearchTitle");
    searchInput.value=searchInput.value.trim();
    let searchInputWord=searchInput.value;     
    let searchProductResult = products.filter(function(objeto) {
        return objeto.title.toLowerCase().includes(searchInputWord.toLowerCase());
    });    
    showProducts(searchProductResult);  
    showMessageToast(`Para la búsqueda se encontraron <strong>${searchProductResult.length} producto/s</strong>`);
}