const URL = "https://fakestoreapi.com/products";


document.addEventListener("DOMContentLoaded", async function (e) {
  data = await fetchData(URL);
  showProducts(data); // Llamada a la función que muestra la lista de productos
});

async function fetchData(url) {

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }

}

// Función para mostrar los productos en el HTML
function showProducts(productsData) {
  let divproducts = document.getElementById("products");

  productsData.forEach(product => {

    divproducts.innerHTML += `<div class="list-group-item">
      <h3>${cutString(product.title)}</h3>
      <p>${getCurrentDateTime()}` + ` - ` + `${stars(product.rating.rate)}</p> 
      
    </div>`;
    
  });
}

// Función para agregar estrellas a los articulos segun su ratio
function stars(cantidadStars) {

  let starsHTML = ``;
  for(let i=1; i<=5; i++){
    if(i<=cantidadStars){
      starsHTML += `<span class="fa fa-star checked"></span>`
    }else{
      starsHTML += `<span class="fa fa-star"></span>`
    }
  }
  return starsHTML;  
}

// Funcion para cortar el largo del titulo
function cutString(string) {

  if (string.length > 20) {
    string = string.substring(0, 20)+`...`; // Reducir string a 20 caracteres y agregar "..."
  }
  return string
    
}

// Función para agregar la fecha en cada producto
function getCurrentDateTime() {

  const fecha = new Date(); // Tomamos la fecha actual
  return fecha.toLocaleString(); // Cambiamos el formato de la fecha y la retornamos
}
