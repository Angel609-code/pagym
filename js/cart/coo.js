
function guardar(value){
    let id = document.getElementById("Id-"+value).innerHTML;
    let name = document.getElementById("Marca-"+value).innerHTML;
    let price = document.getElementById("Precio-"+value).innerHTML;
    let stars = $('.mg'+value).val()
    
    console.log(stars);

    let productlist = [];

    if (localStorage.getItem("productos") != null){
        productlist = JSON.parse(localStorage.getItem("productos"));
    }

    let exist = true;

    if(productlist.length == 0){    
        exist = false;
    }

    productlist.forEach(element =>{
        if(element['id'] == value.toString()){
            element['incart'] += 1;
            exist = true;
        }else{
            exist = false;
        }
    });

    if (!exist){
        let product = {
            "id":id,
            "Marca":name,
            "Precio":price,
            "incart":1,
            "stars":stars
        }
    
        productlist.push(product);
    }

    localStorage.setItem("productos", JSON.stringify(productlist));
}

function eliminarTodo(value){
    if (localStorage.getItem("productos") != null){
        productlist = JSON.parse(localStorage.getItem("productos"));  
        
        let newlist = [];

        productlist.forEach(element => {
           if(element['id'] != value.toString()){
               newlist.push(element);
           }
        });

        localStorage.setItem("productos", JSON.stringify(newlist));
    }
}