let products;
(function(){
  fetch("./product.json")
.then((resp)=>resp.json())
.then((data)=>{
  products = data.products.items;
  renderProdItems(products);
  console.log(data)
  })
.catch((err)=>console.log(err));
})();
function renderProdItems(products){
  const productsContainer = document.getElementById("products-container");
  products.map((item)=>{
    productsContainer.innerHTML+=`<div class="product">
    <div class="prod-img"></div> 
    <div class="details">
    <h4>${item.name}</h4>
    <p>&#8377;${item.price}</p>
    </div>
    </div>`
    console.log(item);
  });
}