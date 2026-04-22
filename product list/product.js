var heading = document.getElementById("heading");
heading.innerHTML = "Product List";

async function getAllproducts() {
const response=await fetch("https://fakestoreapi.com/products");
const products=await response.json();
  
var productcardlist = document.getElementById("productcardcontainer");
var productcards = "";

for (var p of products) {
  productcards =
    productcards +
    `
        <div class="productcards shadow-lg p-3 mb-5  rounded-3">
            <div class="productimage">
            <img src="${p.image}" alt="">
            </div>

            <div class="productinfo">
                <div class="title">${p.title}</div>
                <div class="price">$${p.price}</div>
            </div>

            <div class="useroption">
                <button class="buy btn  btn-danger ">Purchase</button>
                
            </div>

                
        </div>
    `;
}
productcardlist.innerHTML = productcards;


  
}

getAllproducts();