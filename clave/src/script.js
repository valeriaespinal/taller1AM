window.onload=init;

let teclado;
let borrar;
let caja;
//let prueba;

function init(){
  teclado=document.querySelectorAll(".tecla");
  borrar=document.querySelector(".borrar");
  caja=document.querySelector(".clave");
  //prueba=document.querySelector(".prueba");
  
  agregarEventos();
}

function agregarEventos(){

  teclado.forEach(function(tecla) {
    tecla.addEventListener("click", agg);
    tecla.addEventListener("mouseover", hide);
    tecla.addEventListener("mouseout", show);
  });
  borrar.addEventListener("click",botonBorrar);
  
}

function agg(event){
  caja.value += event.target.dataset.originalValue;
  //prueba.value=caja.value;
}

function botonBorrar(event){
  caja.value = "";
  //prueba.value="";
}

function hide(event){
  teclado.forEach(function(tecla) {
    tecla.dataset.originalValue = tecla.value;
    tecla.value = "*";
  });
}

function show(event){
  teclado.forEach(function(tecla) {
    tecla.value = tecla.dataset.originalValue;
  });
}