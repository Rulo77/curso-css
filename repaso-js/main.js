var nombre="Raul Gomez";
var altura=180;

const concatenacion= nombre + " " + altura;

//document.write(nombre+ " "+ altura+ "cm");

// var datos=document.getElementById("datos");

// datos.innerHTML= `
// <h1>soy la caja de datos</h1>
// <h2>Mi nombre es: ${nombre}</h2>
// <h3>Mido: ${altura}</h3>`;

if(altura >= 180){
    datos.innerHTML += `<h1>Eres una persona alta</h1>`;
}else{
    datos.innerHTML += `<h1>Eres una persona chaparra</h1>`;
}

for(var i=2000; i<=2020; i++){
    datos.innerHTML +=`<h4>Estamos en el año: ${i} </h4>` ;
}

function MuestraMiNombre(nombre, altura){ 

    var misDatos= `
    <h1>soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura}</h3>`;

    return misDatos;
}

function imprimir(){
    var datos=document.getElementById("datos");
    datos.innerHTML =MuestraMiNombre("Raul", 180);
    
}

imprimir();

var nombres= ['raul', 'brenda','lupita'];
//alert(nombres[1]);

document.write('<h1>Listado de nombres</h1>');

nombres.forEach(function(nombre){
     document.write(nombre+ `<br/>`);
});

nombres.forEach((nombre) => {
    document.write(nombre+ `<br/>`);
})