const productos = [
    { nombre: " Cheese Burger", precio: 3100 },
    { nombre: "Cheese Bacon Burger", precio: 3100 },
    { nombre: "Cuarto de Libra Burger", precio: 3100 },
    { nombre: "Like Burger", precio: 3100 },
    { nombre: "Crispy Burger", precio: 3100 },
    { nombre: "Onion Burger", precio: 3100 },
    { nombre: "Oklahoma Burger", precio: 3100 },
    { nombre: "CBO Burger", precio: 3100 },
]

let carro = []

let seleccion = prompt("Bienvenido a Like Burgers, ¿Desea comerse una hamburguesa hoy?")

while(seleccion != "si" && seleccion !="no"){
    alert("Por favor, ingrese si o no")
    seleccion = prompt("¿Desea comprar una hamburguesa hoy? \n Si \n No")
}

if(seleccion == "Si"){
    alert("Le mostramos nuestras hamburguesas")
    let hamburguesas = productos.map((productos) => productos.nombre + " " + "$" + productos.precio)
    alert(hamburguesas.join(" \n "))
} else if (seleccion == "No"){
    alert ("Gracias esperamos que vuelva la proxima vez que quiera nuestra hamburguesa, hasta pronto")
}

while(seleccion != "no"){
    let producto = prompt("Agregue una hamburguesa a su pedido")
    let precio = 0

    if(producto == "Cheese Burger" || producto == "Cheese Bacon Burger" || producto == "Cuarto de Libra Burger" || producto == "Like Burger" || producto == "Crispy Burger" || producto == "Onion Burger" || producto == "Oklahoma Burger" || producto == "CBO Burger"){
        switch(producto) {
            case "Cheese Burger":
                precio = 3000
                break;
            case "Cheese Bacon Burger":
                precio = 3100
                break;
            case "Cuarto de Libra Burger":
                precio = 3200
                break;
            case "Like Burger":
                precio = 3200
                break;
            case "Crispy Burger":
                precio = 3200
                break;
            case "Onion Burger":
                precio = 3200
                break;
            case "Oklahoma Burger":
                precio = 3200
                break;
            case "CBO Burger":
                precio = 3200
                break;
            default:
                break;
        }
    let cantidad = parseInt(prompt("¿Cuantas hamburguesas le gustaria llevar?"))

    carro.push({producto, cantidad, precio})
    } else {
        alert("No contamos con esa hamburguesa")
    }

    seleccion = prompt("¿Desea pedir otra hamburguesa?")

    while(seleccion === "no"){
        alert ("Gracias por pedir en Like Burger, no olvide recomendarnos en las redes.")
        carro.forEach((carritoFinal) => {
            alert(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total: ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }
}

const total = carro.reduce((ecc, el) => ecc + el.precio * el.unidades, 0)
alert(`el total a pagar por su compra es de: ${total}`)
