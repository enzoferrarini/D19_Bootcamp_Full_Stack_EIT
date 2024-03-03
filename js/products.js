const createProduct=(element)=>{
    let value=`<tr  id="${element.id}">
        <td class="pt-2 pb-2 text-start d-blue text-wrap">
            <div class="fs-5">${resaltarCoincidencias(element.title)}</div>
            <div class="text-secondary">${element.description}</div>
        </td>
        <td class="pt-2 pb-2 align-middle text-end text-danger">$${element.price}</td>           
        <td class="pt-2 pb-2 align-middle text-center">${element.stock}</td>           
    </tr>`;
    return value;
}

const showProducts=(Products)=>{ 
    // alert(Products)
    Products.sort(function(a, b) {
        return a.title.localeCompare(b.title);
      });
    let count=0;
    let myProducttContainer=document.getElementById("myProducttContainer");
    let listProducts="";

    Products.forEach(function(objeto) {
        count++;
        listProducts+=createProduct(objeto);
    });
    
    if(Products.length==0)
    {
        myProducttContainer.innerHTML='<div class="alert alert-info text-center" role="alert">No se han encontrado Productos para la busqueda</div>';
    }
    else
    {
        myProducttContainer.innerHTML=`
        <div class="table-responsive">
            <table class="table table-hover table-sm">
                <thead>
                    <tr class=" fw-normal fs-6 ">
                        <th scope="col" class="text-wrap">Artículo</th>
                        <th scope="col" class="text-center">Precio</th>
                        <th scope="col" class="text-center">Stock</th>                       
                    </tr>                
                </thead>
                <tbody>
                    ${listProducts}
                </tbody>
            </table>
            <div  class="form-text text-start text-secondary">${count} artículo/s</div>
            
        </div>`;  
    }
}

const searchproduct=()=>{     
    let yearSelection = document.getElementById("idSelectYear");     
    let searchInputWord=document.getElementById("idSearchTitle").value.trim();      
   
    let searchProductResult = Products.filter(function(objeto) {
        if(yearSelection.value==-1)
            return objeto.Title.toLowerCase().includes(searchInputWord.toLowerCase());
        else
        {
            return objeto.Title.toLowerCase().includes(searchInputWord.toLowerCase()) && objeto.Year==yearSelection.options[yearSelection.selectedIndex].text;
        }
    });    
    showProducts(searchProductResult);  
}
