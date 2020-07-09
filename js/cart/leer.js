/*let productlist = JSON.parse(localStorage.getItem("productos"));

if(localStorage.getItem("productos") != null){
    load();
}

function eliminar(value){
    productlist.forEach(element =>{
        if(element['id'] == value.toString()){
            if(element['incart'] > 1){
                element['incart'] -= 1;
            }else{
                let index = productlist.indexOf(element);
                productlist.splice(index, 1);
            }
        }
    });

    load();

    localStorage.setItem("productos", JSON.stringify(productlist));
}

function load(){
    let contenedor = document.getElementById("contener");
    
    contenedor.innerHTML = "";

    productlist.forEach(element => {
        contenedor.innerHTML +=
            '<h1>'+element['Marca']+'</h1>'+
            '<button class="remove" onclick="eliminar('+element['id']+')">Remove from cart</button>';
    });
}*/