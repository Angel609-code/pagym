
function guardar(value){
    let id = document.getElementById("Id-"+value).innerHTML;
    let name = document.getElementById("Marca-"+value).innerHTML;
    let price = document.getElementById("Precio-"+value).innerHTML;
    let stars = $('.mg'+value).val();

    let productlist = [];

    if (localStorage.getItem("productos") != null){
        productlist = JSON.parse(localStorage.getItem("productos"));
    }

    let exist = false;

    productlist.forEach(element =>{
        if(element['id'] == value.toString()){
            agregar(value);
            exist = true;
        }
    });

    if(productlist.length == 0){
        exist = false;
    }

    if (!exist){
        let product = {
            "id":id,
            "Marca":name,
            "Precio":price,
            "incart":1,
            "stars":stars
        }
    
        productlist.push(product);

        localStorage.setItem("productos", JSON.stringify(productlist));
    }
    
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

let productlist = JSON.parse(localStorage.getItem("productos"));

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

function agregar(value){
    
    productlist = JSON.parse(localStorage.getItem("productos"));

    productlist.forEach(element =>{
        if(element['id'] == value.toString()){
            element['incart'] += 1;
        }
    });

    localStorage.setItem("productos", JSON.stringify(productlist));

    load();
}

function load(){
    if(screen.width <= 595){
        let contenedor = document.getElementById("modocel");
        
        if (contenedor){
            contenedor.innerHTML = "";
            let total = 0;
            let num = 0;
            
            let vtotal = 0;

            productlist.forEach(element => {
                num += 1;
                total = parseInt(element['Precio']) * parseInt(element['incart']);
                
                contenedor.innerHTML +=
                    '<h3>Marca:</h3>' +
                    '<h6>' + element['Marca'] + '</h6>' +
                    '<br>' +
                    '<h3>Precio:</h3>' + 
                    '<h6>$ ' + element['Precio'] + '.00 </h6>' +
                    '<br>' +
                    '<h3>Cantidad:</h3>' +
                    '<div class="cantprod">' +
                    '<a href="#" onclick="eliminar(' + element['id'] + ')"><i class="fas fa-minus mr-2"></i></a>' + 
                    '<h6>'+ element['incart'] + '</h6>' +
                    '<a href="#" onclick="agregar(' + element['id'] + ')"><i class="fas fa-plus ml-2"></i></a>' +
                    '</div>' +
                    '<br>' +
                    '<h3>Total:</h3>' +
                    '<h6>$ ' + total + '.00 </h6>' +
                    '<br>'+
                    '<hr class ="prcart">' +
                    '<br>';
    
                vtotal += total;
            });

            if (num == 0){
                
                contenedor.innerHTML += '<tr>' + 
                '<td colspan=\'5\'>Tu carrito esta vacío</td>' +
                '</tr>' +
                '<tr>' +
                '<td colspan="4"><b>Gran total</b></td>'+
                '<td><b>$ 0.00 </b></td>' +
                '</tr>'+
                '<tr>' +
                '<td colspan="5">' +
                '<button class=\'scom btn btn-primary float-right\' onclick="window.location=\'/html\';">Continuar comprando</button>' +
                '</td>' +
                '</tr>';

            }else{
                contenedor.innerHTML += '<tr><td colspan="4"><b>Gran total</b></td>'+
                '<td><b>$ ' + vtotal + '.00 </b></td></tr>' +
                '<tr><td colspan="5">' +
                '<button class=\'ppag btn btn-success float-right ml-2\' id="submitBtn" >Proceder a pagar</button>' +
                '<button class=\'scom btn btn-primary float-right\' onclick="window.location=\'/html\';">Continuar comprando</button>' +
                '</td> </tr>\n';

            }
        }
    
    }else{
        let contenedor = document.getElementById("contener");
        
        if (contenedor){
            contenedor.innerHTML = "";
            let total = 0;
            let num = 0;
            
            let vtotal = 0;

            productlist.forEach(element => {
                num += 1;
                total = parseInt(element['Precio']) * parseInt(element['incart']);
                
                contenedor.innerHTML +=
                    '<tr>\n' +
                    '<th scope="row">' + num + '</th>' +
                    '<td>' + element['Marca'] + '</td>' +
                    '<td> $ ' + element['Precio'] + '.00 </td>' +
                    '<td>' +
                    '<a href="#" onclick="eliminar('+element['id']+')"><i class="fas fa-minus mr-2"></i></a>' +
                    element['incart'] +
                    '<a href="#" onclick="agregar('+element['id']+')"><i class="fas fa-plus ml-2"></i></a>' +
                    '</td>' +
                    '<td>$ ' +
                    total +
                    '.00 <a style=\'color: red;\' href="/html/order_summary.html" onclick="eliminarTodo('+element['id']+')">' +
                    '<i class="fas fa-trash float-right"></i>' +
                    '</a>' +
                    '</td>' +
                    '</tr>\n';
                
                vtotal += total;
            });

            if (num == 0){
                
                contenedor.innerHTML += '<tr>' + 
                '<td colspan=\'5\'>Tu carrito esta vacío</td>' +
                '</tr>' +
                '<tr>' +
                '<td colspan="4"><b>Gran total</b></td>'+
                '<td><b>$ 0.00 </b></td>' +
                '</tr>'+
                '<tr>' +
                '<td colspan="5">' +
                '<button class=\'scom btn btn-primary float-right\' onclick="window.location=\'/html\';">Continuar comprando</button>' +
                '</td>' +
                '</tr>';

            }else{
                contenedor.innerHTML += '<tr><td colspan="4"><b>Gran total</b></td>'+
                '<td><b>$ ' + vtotal + '.00 </b></td></tr>' +
                '<tr><td colspan="5">' +
                '<button class=\'ppag btn btn-success float-right ml-2\' id="submitBtn" >Proceder a pagar</button>' +
                '<button class=\'scom btn btn-primary float-right\' onclick="window.location=\'/html\';">Continuar comprando</button>' +
                '</td> </tr>\n';

            }

        }

    }
}


$(window).resize(function(){
    load();
 });
