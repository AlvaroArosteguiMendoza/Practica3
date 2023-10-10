function mostrar_valores(){
    var tabla = document.getElementById("tabla");
    if (tabla){
        var anchura = tabla.clientWidth;
        var altura = tabla.clientHeight;
    alert("La tabla tiene una anchura de " + anchura + "px, y una altura de " + altura + "px");
    
  } else {
    console.log("El objeto no se encontró.");
  }
  var anchura2 = prompt("Dime una nueva anchura para la tabla");
  var altura2 = prompt("Dime una nueva altura para la tabla"); 
  document.getElementById("tabla").style.width = anchura2 + "px";
  document.getElementById("tabla").style.height = altura2 + "px";
}



function valor_border(){
    var tabla = document.getElementById("tabla");
    var estiloBorde = window.getComputedStyle(tabla); // para obtener el grosor del borde necesitas los estilos de la tabla
        var borde = estiloBorde.getPropertyValue("border-width"); 
        alert("La tabla tiene una borde de " + borde);
        var nuevoValorBorde = prompt("Ingrese un nuevo valor para el borde de la tabla:");
        if (nuevoValorBorde !== null && !isNaN(parseInt(nuevoValorBorde))) {
            tabla.style.borderWidth = nuevoValorBorde + "px";
          } else {
            alert("Por favor, ingrese un valor numérico válido.");
          }
}
function alinear(){
    var tabla = document.getElementById("tabla");
    var posicionTabla = window.getComputedStyle(tabla).getPropertyValue("float");
    if(posicionTabla ==="none"){
            tabla.style.float = "right";
}else if(posicionTabla ==="right"){
    tabla.style.float = "left";
}else{
    tabla.style.float = "none";
}
}


function sumar(){
    var divNumero = document.getElementById("miDiv");
    var numeroActual = parseInt(divNumero.textContent);
    numeroActual++;
    divNumero.textContent = numeroActual;
}


function restar(){
    var divNumero = document.getElementById("miDiv");
    var numeroActual = parseInt(divNumero.textContent);
    numeroActual--;
    divNumero.textContent = numeroActual;
}

function color_fondo(){
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const color = button.value;
            document.body.style.backgroundColor = color;
        });
    });

}

