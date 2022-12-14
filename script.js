const productos = [
    {
        nombre:"remera",
        color:"rojo",
        talle:"S",
        precio: 1500,
    },
    {
        nombre:"remera",
        color:"verde",
        talle:"M",
        precio: 2500,
    },
    {
        nombre:"remera",
        color:"amarillo",
        talle:"L",
        precio: 3500,
    },
    {
        nombre:"remera",
        color:"Blanco",
        talle:"XL",
        precio: 4500,
    },
    {
        nombre:"pantalon",
        color:"mostaza",
        talle:"S",
        precio: 1500,
    },
    {
        nombre:"pantalon",
        color:"rosado",
        talle:"M",
        precio: 2500,
    },
    {
        nombre:"pantalon",
        color:"turquesa",
        talle:"L",
        precio: 3500,
        
    },
    {
        nombre:"pantalon",
        color:"fucsia",
        talle:"XL",
        precio: 4500,   
    },
    {
        nombre:"camisa",
        color:"azul",
        talle:"S",
        precio: 1500,
    },
    {
        nombre:"camisa",
        color:"rojo",
        talle:"M",
        precio: 2500,
    },
    {
        nombre:"camisa",
        color:"beige",
        talle:"L",
        precio: 3500,
    },
    {
        nombre:"camisa",
        color:"salmon",
        talle:"XL",
        precio: 4500,
    },
    {
        nombre:"medias",
        color:"negro",
        talle:"unico",
        precio: 1500,
    },
    {
        nombre:"medias",
        color:"blanco",
        talle:"unico",
        precio: 1500,
    },
    {
        nombre:"gorra",
        color:"negro",
        talle:"unico",
        precio: 1500,
    },
]


alert("Bienvenidos a Tienda OnLine \nContamos con la mas surtida variedad de productos en:\nRemeras\nPantalones\nCamisas\n")


var productoElegido = Number(prompt("Por favor ingrese la opcion del producto que desea comprar\n 1-Remeras\n 2-Pantalones\n 3-Camisas\n-4 Salir\n"))

if (productoElegido == 1){

let salida = productos.filter(producto => producto.nombre === "remera")

let seleccion = ""

for (const producto of salida) {
  
  seleccion = seleccion + producto.nombre+" "+producto.talle+" "+producto.precio+"\n" 
}
console.log(salida)

const seleccion2 = Number(prompt("Elija la opcion del producto deseado:\n1-Talle S\n2-Talle M\n3-Talle L\n4-Talle XL"))

if(seleccion2 == 1){
  //let carrito = seleccion.filter(producto => producto.talle === "S")
  const chango = []
  chango.push(salida[0])
  
  console.log(chango)

  let seleccion3 = prompt("Desea hacer otra compra?\1-Si\2-No")

  if(seleccion3 == 1){
    var productoElegido = Number(prompt("Por favor ingrese la opcion del producto que desea comprar\n 1-Remeras\n 2-Pantalones\n 3-Camisas\n-4 Salir\n"))

  }else{
    let salida2 = ""
    for (const elemento of chango) {
      salida2 = salida2 + elemento.nombre+" talle "+elemento.talle+" "+elemento.precio
    }
    alert("Usted ha comprado:"+ " " + salida2+"."+"\n"+"Gracias por comprar en Tienda Online")
    
    }
     
  }
    else if(seleccion2 == 2){
  //let carrito = seleccion.filter(producto => producto.talle === "S")
  const chango = []
  chango.push(salida[1])
  
  console.log(chango)

  let seleccion3 = prompt("Desea hacer otra compra?\1-Si\2-No")

  if(seleccion3 == 1){
    var productoElegido = Number(prompt("Por favor ingrese la opcion del producto que desea comprar\n 1-Remeras\n 2-Pantalones\n 3-Camisas\n-4 Salir\n"))

  }else{
    let salida2 = ""
    for (const elemento of chango) {
      salida2 = salida2 + elemento.nombre+" talle "+elemento.talle+" "+elemento.precio
    }
    alert("Usted ha comprado:"+ " " + salida2+"."+"\n"+"Gracias por comprar en Tienda Online")
    
    }
     
  }
    else if (productoElegido == 2){

    let salida = productos.filter(producto => producto.nombre === "pantalon")
    
    let seleccion = ""
    
    for (const producto of salida) {
      
      seleccion = seleccion + producto.nombre+" "+producto.talle+" "+producto.color + " "+ producto.precio+"\n" 
    }
    console.log(salida)
    
    let seleccion2 = Number(prompt("Elija la opcion del producto deseado:\n1-Talle S\n2-Talle M\n3-Talle L\n4-Talle XL"))
    
    if(seleccion2 == 1){
      //let carrito = seleccion.filter(producto => producto.talle === "S")
      const chango = []
      chango.push(salida[0])
      
      console.log(chango)
    
      let seleccion3 = prompt("Desea hacer otra compra?\1-Si\2-No")
    
      if(seleccion3 == 1){
        var productoElegido = Number(prompt("Por favor ingrese la opcion del producto que desea comprar\n 1-Remeras\n 2-Pantalones\n 3-Camisas\n-4 Salir\n"))
    
      }else{
        let salida2 = ""
        for (const elemento of chango) {
          salida2 = salida2 + elemento.nombre+" color "+elemento.color+" talle "+elemento.talle+" "+ "$ " + elemento.precio
        }
        alert("Usted ha comprado:"+ " " + salida2+"."+"\n"+"Gracias por comprar en Tienda Online")
        
        }
         
      }
  
    }
    /* else if (productoElegido == 3){

      let salida = productos.filter(producto => producto.nombre === "camisa")
      
      let seleccion = ""
      
      for (const producto of salida) {
        
        seleccion = seleccion + producto.nombre+" "+producto.talle+" "+producto.color + " "+ producto.precio+"\n" 
      }
      console.log(salida)
      
      let seleccion2 = Number(prompt("Elija la opcion del producto deseado:\n1-Talle S\n2-Talle M\n3-Talle L\n4-Talle XL"))
      
      if(seleccion2 == 1){
        //let carrito = seleccion.filter(producto => producto.talle === "S")
        const chango = []
        chango.push(salida[0])
        
        console.log(chango)
      
        let seleccion3 = prompt("Desea hacer otra compra?\1-Si\2-No")
      
        if(seleccion3 == 1){
          var productoElegido = Number(prompt("Por favor ingrese la opcion del producto que desea comprar\n 1-Remeras\n 2-Pantalones\n 3-Camisas\n-4 Salir\n"))
      
        }else{
          let salida2 = ""
          for (const elemento of chango) {
            salida2 = salida2 + elemento.nombre+" color "+elemento.color+" talle "+elemento.talle+" "+ "$ " + elemento.precio
          }
          alert("Usted ha comprado:"+ " " + salida2+"."+"\n"+"Gracias por comprar en Tienda Online")
          
          }
           
        }
    
      } */
}

  






  /* let talleElegido = prompt("Por favor elija el talle que desea comprar\n1-Talle S\n2-Talle M\n3-Talle L\n4-Talle XL")

  if(talleElegido == 1){
    carrito.push(eleccion[0])
  }
  else if (talleElegido == 2){
    carrito.push(eleccion[1])
  }
  else if (talleElegido == 3){
    carrito.push(eleccion[2])
  }
  else{
    carrito.push(eleccion[3])
  }

  console.log(Object.values(carrito))
   */
  
/* else if (productoElegido == 2){

  let salida = productos.filter(producto => producto.nombre === "pantalon")
  const eleccion = []
  const carrito = []
  for (const producto of salida) {
    eleccion.push(producto)
  }  
    let talleElegido = prompt("Por favor elija el talle que desea comprar\n1-Talle S\n2-Talle M\n3-Talle L\n4-Talle XL")
  
    if(talleElegido == 1){
      carrito.push(eleccion[0])
    }
    else if (talleElegido == 2){
      carrito.push(eleccion[1])
    }
    else if (talleElegido == 3){
      carrito.push(eleccion[2])
    }
    else{
      carrito.push(eleccion[3])
    }
    console.log(carrito)
  } else if (productoElegido == 3){

    let salida = productos.filter(producto => producto.nombre === "camisa")
    const eleccion = []
    const carrito = []
    for (const producto of salida) {
      eleccion.push(producto)
    }  
      let talleElegido = prompt("Por favor elija el talle que desea comprar\n1-Talle S\n2-Talle M\n3-Talle L\n4-Talle XL")
    
      if(talleElegido == 1){
        carrito.push(eleccion[0])
      }
      else if (talleElegido == 2){
        carrito.push(eleccion[1])
      }
      else if (talleElegido == 3){
        carrito.push(eleccion[2])
      }
      else{
        carrito.push(eleccion[3])
      }
      console.log(carrito)
    } else{
      alert("usted eligio una opcion incorrecta")
    } */
/* else if (productoElegido == 2){

  let salida = productos.filter(producto => producto.nombre === "pantalon")
  const eleccion = []
  for (const producto of salida) {
    eleccion.push(producto) 
  }
  console.log(eleccion)
  }
else if (productoElegido == 3){

  let salida = productos.filter(producto => producto.nombre === "medias")
  const eleccion = []
  for (const producto of salida) {
    eleccion.push(producto) 
  }
  console.log(eleccion)
  }
else if (productoElegido == 4){

  let salida = productos.filter(producto => producto.nombre === "gorra")
  const eleccion = []
  for (const producto of salida) {
    eleccion.push(producto) 
  }
  console.log(eleccion)
  }
  else{
    alert("Usted eligio una opcion incorrecta")
  } */


/* else if (productoElegido == 2) {

  let salida = productos.filter(producto => producto.nombre === "pantalon")

for (const producto of salida) {
   eleccion = eleccion + " " + producto.nombre + " " + "color" + " " +  producto.color + " " + "talle" + " " + producto.talle + " " + " $ " + producto.precio + "\n"
  
}
} else if (productoElegido == 3) {
  let salida = productos.filter(producto => producto.nombre === "medias")

  const eleccion = ""

for (const producto of salida) {
   eleccion = eleccion + " " + producto.nombre + " " + "color" + " " +  producto.color + " " + "talle" + " " + producto.talle + " " + " $ " + producto.precio + "\n"
  
}
  
} else {
  let salida = productos.filter(producto => producto.nombre ==="gorra")

const eleccion = ""

for (const producto of salida) {
   eleccion = eleccion + " " + producto.nombre + " " + "color" + " " +  producto.color + " " + "talle" + " " + producto.talle + " " + " $ " + producto.precio + "\n"
  
} 
}

alert(eleccion)



let eleccion2 = prompt("Que articulo desea comprar? Por favor copie en el campo correspondiente la descripcion del producto y el precio : \n" + eleccion)

let carrito = []

carrito.push(eleccion2);

console.log(carrito)

alert("usted cargó en su carrito el siguiente producto:\n" + carrito)

var eleccion3 = Number(prompt("Desea hacer alguna compra mas? \n 1-SI\n2-NO"))

if(eleccion3 == 1){
var productoElegido = Number(prompt("Por favor ingrese la opcion del producto que desea comprar\n 1-Remeras\n 2-Pantalones\n 3-Medias \n 4 Gorras"))
let salida = productos.filter(producto => producto.nombre === "remera")

const eleccion = []

for (const producto of salida) {
   eleccion = eleccion + " " + producto.nombre + " " + "color" + " " +  producto.color + " " + "talle" + " " + producto.talle + " " + " $ " + producto.precio + "\n"
}
}
  else{
    const total = eleccion.reduce((acumulador,precio) => acumulador + numero, 0)
    
  }
  alert("Su compra es un total de :" + total )
  */