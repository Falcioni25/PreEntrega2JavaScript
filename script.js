const autos = [ {
  marca: "ford",
  color: "rojo",
  modelo: "mondeo",
  anio: 1998,
  precio: 150000,  
},
{
  marca: "ford",
  color: "verde",
  modelo: "mondeo",
  anio: 1998,
  precio: 150000,  
},
{
  marca: "ford",
  color: "azul",
  modelo: "sierra",
  anio: 1995,
  precio: 180000     
},
{
  marca: "ford",
  color: "Amarillo",
  modelo: "falcon",
  anio: 1995,
  precio: 200000,       
},
{
  marca: "ford",
  color: "Verde",
  modelo: "taunus",
  anio: 1995,
  precio: 220000,       
},
{
  marca: "chevrolet",
  color: "azul",
  modelo: "camaro",
  anio: 2018,
  precio: 250000,      
},
{
  marca: "chevrolet",
  color: "gris",
  modelo: "onix",
  anio: 2015,
  precio: 300000,      
},
{
  marca: "chevrolet",
  color: "Blanco",
  modelo: "prisma",
  anio: 2019,
  precio: 150000,       
},
{
  marca: "chevrolet",
  color: "Negro",
  modelo: "corsa",
  anio: 2008,
  precio: 500000,       
}
]
//-------------------------------FUNCION DECLARADA-----------------------------------------
function venderMiAuto (){
  let marca = prompt("Ingrese la marca de su vehiculo");
  let color = prompt("Ingrese el color de su vehiculo");
  let modelo = prompt("Ingrese el modelo de su vehiculo");
  let anio= prompt("Ingrese el año de fabricacion de su vehiculo");
  let precio = prompt("Ingrese monto pretendido por su vehiculo");
  let auto = new Auto(marca, color, modelo, anio,precio);
  autos.push(auto);
  alert("Auto Agregado:"+"\n"+ "Marca :" + auto.marca+"\n"+ "Color: " +auto.color+"\n"+ "Modelo :" + auto.modelo+"\n"+"Año :" +auto.anio+"\n"+"Precio $: "+ auto.precio+".")
}
//-----------------------FUNCION CONSTRUCTORA------------------------------------------------
function Auto(marca, color, modelo, anio, precio){
  this.marca = marca;
  this.color = color;
  this.modelo = modelo;
  this.anio = anio;
  this.precio = precio;   
}
//------------------------------------------INICIO-----------------------------------------------------
alert("Bienvenidos a Automotores Usados Facundo")
let eleccion1 = Number(prompt("Ingrese la opcion de la marca que le interese.\n1-Ford\n2-Chevrolet\n3-Si le interesa vender su usado"))
if(eleccion1 == 1){
let eleccionMarca = autos.filter((auto)=>auto.marca === "ford")
//--------------------------------------CONSOLE.LOG []-------------------------------------------
let salida =[]
for (const auto of eleccionMarca) {
salida.push(auto)
}
console.log(salida)
//---------------------------------------ALERT PARA MOSTRAR POR PANTALLA ""-----------------------
let salida2 = ""
for (const auto of eleccionMarca){
salida2 = salida2 + " " + auto.modelo + " " +   auto.color + " " + " " + auto.anio + " " + auto.precio+ " ." + "\n"}
//----------------------------------ELECCION DE MODELO------------(FORD)------------------------------
let eleccion2 = prompt(salida2 + "\n"+ "Ingrese el modelo de usado que le interese:").toLowerCase();
const usadoElegido = salida.filter(auto => auto.modelo == eleccion2);
let salida3 = []
let salida4 = ""   
//------------------------------------CONSOLE.LOG []-----(FORD)--------------------------------------------
for (const auto of usadoElegido) {
  salida3.push(auto)
}
console.log(salida3)
//----------------------------------ALERT PARA MOSTRAR POR PANTALLA ""---(FORD)----------------------------
for (const auto of usadoElegido) {
  salida4= salida4 + "Usted eligió " + auto.modelo.charAt(0).toUpperCase() + auto.modelo.slice(1) + " color " + auto.color + " que vale $ " + auto.precio + "\n"}
  alert(salida4)
//-----------------------------------SI EL CLIENTE ELIGE CHEVROLET-------------------------------------------------------
}else if(eleccion1 == 2){
let eleccionMarca = autos.filter((auto)=>auto.marca === "chevrolet")
//------------------------------------CONSOLE.LOG []----(CHEVROLET)--------------------------------------------
let salida3 =[]
for (const auto of eleccionMarca) {
  salida3.push(auto)
}
console.log(salida3)
//-----------------------------------ALERT "" PARA MOSTRAR POR PANTALLA --(CHEVROLET)---------------------------
let salida4 = ""
for (const auto of eleccionMarca) {
salida4 = salida4 + " " + " " +   auto.modelo + " "  + auto.color + " " + auto.anio + " " + auto.precio+ " ." + "\n"
}
//----------------------------------ELECCION DE MODELO--------(CHEVROLET)-----------------------
let eleccion2 = prompt(salida4 + "\n"+ "Ingrese el modelo de usado que le interese:").toLowerCase();
let usadoElegido2 = salida3.filter(auto => auto.modelo == eleccion2);
let salida5 = [""]
let salida6 = ""
//------------------------------------CONSOLE.LOG []--------------------------------------------
for (const auto of usadoElegido2) {
  salida5.push(auto)
}
console.log(salida5)
//----------------------------------ALERT ""  PARA MOSTRAR POR PANTALLA ----------------------------
for (const auto of usadoElegido2) {
  salida6= salida6 + " " + auto.modelo.charAt(0).toUpperCase() + auto.modelo.slice(1) + " " + auto.color + " " + auto.precio + "\n"}
  alert(salida6)
}
//-----------------------------------PARA AGREGAR UN AUTO PARA LA VENTA-------------------------------------------------
else{
venderMiAuto();
alert("Su auto se agregó correctamente. Gracias por publicar en Automotores Facundo")
stock = ""
autos.forEach(auto=>
stock=stock +" "+ auto.marca.charAt(0).toUpperCase() + auto.marca.slice(1) + " "+ auto.modelo.charAt(0).toUpperCase() + auto.modelo.slice(1)+" $ "+auto.precio+"\n" )
alert("Nuestra flota de autos es : \n" + stock+"\n"+"Lo esperamos nuevamente")  
}