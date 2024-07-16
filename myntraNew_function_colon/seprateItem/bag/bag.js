
let bagProduct;
// let bagItems = JSON.parse(localStorage.getItem('bagItems')) || [];
loadBagItem();
displayBagItem();
bagSummary();

function loadBagItem(){
    bagProduct=bagItems.map(itemId=>{
        for(let i=0;i<items.length;i++){
            if(itemId==items[i].id){
                return items[i];
            }
        }
    });
    console.log(bagProduct);
}

function displayBagItem(){
    let bagItemContainer=document.querySelector(".bag-items-container");
    let innerHTML=' ';
    bagProduct.forEach(bagItem=> {
        innerHTML+=generateItem(bagItem);
    });
    bagItemContainer.innerHTML=innerHTML;
            
              
}

function generateItem(items){
   return `<div class="bag-item-container">
                <div class="item-left-part">
                  <img class="bag-item-img" src='${items.image}'>
                </div>
                <div class="item-right-part">
                  <div class="company-name">${items.company}</div>
                  <div class="item-name">${items.item_name}</div>
                  <div class="price-container">
                    <span class="current-price">Rs ${items.current_price}</span>
                    <span class="original-price">Rs ${items.original_price}</span>
                    <span class="discount-percentage">(${items.discount_percentage} % off)</span>
                  </div>
                  <div class="return-period">
                    <span class="return-period-days">${items.return_period} days</span> return available
                  </div>
                  <div class="delivery-details">
                    Delivery by
                    <span class="delivery-details-days">${items.delivery_date}</span>
                  </div>
                </div>
                <div class="remove-from-cart" onclick="removeItem(${items.id})">
                    X
                </div>
            </div>`;
}

function removeItem(itemsId){
    bagItems=bagItems.filter(bagItem=>bagItem!=itemsId);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    loadBagItem();
    displayBagIcon();
    displayBagItem();
    bagSummary();
}

function bagSummary(){
    let bagElement=document.querySelector(".bag-summary");
    
    let noOfItem=bagItems.length;
    let totalMRP= 0;
    let totalDiscount=0;
    let totalAmount=0;
    let ConvenienceFee=99;
    bagProduct.forEach(bagItems => {
        totalMRP=totalMRP+bagItems.original_price;
        totalDiscount=bagItems.original_price-bagItems.current_price;
        totalAmount=totalMRP-totalDiscount+ConvenienceFee;
    });
    
    bagElement.innerHTML=`
    <div class="bag-details-container">
    <div class="price-header">PRICE DETAILS (${noOfItem} Items) </div>
    <div class="price-item">
      <span class="price-item-tag">Total MRP</span>
      <span class="price-item-value">Rs${totalMRP}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Discount on MRP</span>
      <span class="price-item-value priceDetail-base-discount">-Rs${totalDiscount}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Convenience Fee</span>
      <span class="price-item-value">Rs 99</span>
    </div>
    <hr>
    <div class="price-footer">
      <span class="price-item-tag">Total Amount</span>
      <span class="price-item-value">Rs ${totalAmount}</span>
    </div>
  </div>
  <button class="btn-place-order">
    <div class="">PLACE ORDER</div>
  </button>`;
}