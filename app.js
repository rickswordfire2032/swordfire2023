

(function() {
    const cartInfo=document.getElementById("cart-info");
    const cart=document.getElementById("cart");

 cartInfo.addEventListener("click", function(){
     cart.classList.toggle("show-cart");
 });
})();

// add items to the cart

(function(){
    const cartBtn = document.querySelectorAll
    (".store-item-icon");

 cartBtn.forEach(function(btn){
   btn.addEventListener("click", function(event){
       //console.log(event.target);

       if(event.target.parenElement.classList.contains
        ("store-item-icon")){ListeningStateChangedEvent.src;
            let pos = fullPath. indexOf("img") + 3;
            let partPath = fullPath.slice(pos);

            const item = {};
            item.img = 'img-cart${partPath}';
            let name =
            event.target.parentElement.previousElementSibling
            .children[0].children[1].textConent;

            let finalPrice = pric.slice(1).trim();

            //console.log(finalPrice);
            
            //console.log(name);

            //console.log(item);

const cartItem = document.createElement("div");
cartItem.classList(
           "cart-item,"
           "d-flex",
           "justify-content-between",
           "text",
           "my-3"
);

cartItem.innerHTML = 
          <div class="cart-item d-flex justify-content-between text-capitalize my-3">
            <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
            <div class="item-text">

              <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
              <span>$</span>
              <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
            </div>
            <a href="#" id='cart-item-remove' class="cart-item-remove">
              <i class="fas fa-trash"></i>
            </a>
          </div>
          
    
// select cart"
const cart = document.getelementtbyID("cart");
const total = document.querySelector(".cart-total-container");

cart.insertBefore(cartItem, total);
alert("item added to the cart")
        }
    });
});
//show totals
function showTotals( {

    const total = [];
    const items - document.querySelectorAll(".cart-item-pr ice");

    items.forEach(function(item){
        to tal.push(parseFloat(item.textContent));
    });
    //console.log(total)
    const totalMoney = total.reduce(function(total, item) {
        total += item;
        return toatal;
    }, 0);
    const finalMoney = totalMoney.toFixed(2)

document.getElementById('cart-total').textContent = finalMoney;
document.querySelector('.item-total').textContent = finalMoney;
document.getElementById('item-count').textContent = total.legnth;    
}
})();