let productos=[[0,"coca",12],
			   [1,"galletas",8],
			   [2,"agua",5],
			   [3,"panditas",7],
			   [4,"picafresas",1]];
let carrito=[];

window.addEventListener("load",cargar);

function cargar(){
	//Almacenamos en la variable s el elemento HTML section
	s=document.querySelector('section');
	//recorrer todo nuestro arreglo de productos
	for(i=0; i<productos.length;i++){
		//imprimir en S los productos
		s.innerHTML+="<div id='"+productos[i][0]+"'>"+
					     "<h1>"+productos[i][1]+"</h1>"+
					     "<p>$"+productos[i][2]+"</p>"+
					     "<button onclick='agregar("+productos[i][0]+")'>+</button>"
					  "</div>"
	}
}

function agregar(id){
	carrito.push(id);
	document.querySelector('s').innerHTML=carrito.length;
}

function mostrarCarrito(){
	let listaProductos="";
	for(i=0;i<carrito.length;i++){
		for(j=0;j<productos.length;j++){
			if(productos[j][0]==carrito[i]){
				listaProductos+="- "+productos[j][1]+" $"+productos[j][2]+"\n";
			}
		}
	}
	alert("CARRITO DE COMPRAS:\n"+listaProductos);
}

function visibilidad(){
	document.querySelector('nav').classList.toggle("visible");
	document.querySelector('section').classList.toggle("sn");
	mostrarCarrito();
}