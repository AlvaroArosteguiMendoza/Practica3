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

const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
        const submenu = menuItem.querySelector('.submenu');
        if (submenu) {
            if (menuItem.classList.contains('active')) {
                menuItem.classList.remove('active');
            } else {
                closeOpenSubmenus();
                menuItem.classList.add('active');
            }
        }
    });
});

function closeOpenSubmenus() {
    const activeMenuItems = document.querySelectorAll('.menu-item.active');
    activeMenuItems.forEach((item) => {
        item.classList.remove('active');
    });
}

function showSubmenu(submenuId) {
    const submenus = document.querySelectorAll('.submenu2');
    submenus.forEach((submenu) => {
        if (submenu.id === submenuId) {
            submenu.style.display = 'block';
        } else {
            submenu.style.display = 'none';
        }
    });
}
const divs = document.querySelectorAll('.race-div');
const startButton = document.getElementById('startRace');
const resetButton = document.getElementById('resetRace');

let raceInterval;
let winner;

startButton.addEventListener('click', startRace);
resetButton.addEventListener('click', resetRace);

function startRace() {
    if (raceInterval) return; // Evita que se inicie otra carrera antes de que termine la actual
    winner = null;
    startButton.disabled = true;
    resetButton.disabled = true;

    divs.forEach((div) => {
        const speed = Math.random() * 10 + 5; // Velocidad aleatoria
        moveDiv(div, speed);
    });
}

function moveDiv(div, speed) {
    let left = 0;
    raceInterval = setInterval(() => {
        if (left >= window.innerWidth - 100) {
            clearInterval(raceInterval);
            if (!winner) {
                winner = div.style.backgroundColor;
                alert(`Gana el div de color ${winner}`);
                startButton.disabled = false;
                resetButton.disabled = false;
            }
        } else {
            left += speed;
            div.style.left = left + 'px';
        }
    }, 100);
}

function resetRace() {
    if (raceInterval) {
        clearInterval(raceInterval);
    }
    divs.forEach((div) => {
        div.style.left = '0px';
    });
    startButton.disabled = false;
    resetButton.disabled = false;
}

const spoilerButton = document.getElementById('spoiler-button');
const spoilerContent = document.getElementById('spoiler-content');

spoilerButton.addEventListener('click', toggleSpoiler);

function toggleSpoiler() {
    if (spoilerContent.style.display === 'none' || spoilerContent.style.display === '') {
        spoilerContent.style.display = 'block';
        spoilerButton.textContent = 'Ocultar';
    } else {
        spoilerContent.style.display = 'none';
        spoilerButton.textContent = 'Mostrar';
    }
}






