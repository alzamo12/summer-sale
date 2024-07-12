function getTheElement(prodNameId){

    const p = document.createElement('p');
   const prodName = document.getElementById(prodNameId);
   const prodValue = prodName.innerText
 //    console.log(prodValue)
    // p.innerText = prodValue; 

     const prodContainer = document.getElementById('cart-product');
     

     const count = prodContainer.childElementCount;
     p.classList = 'my-4 text-lg font-bold';
     p.innerHTML = `
         ${count+1}. ${prodValue}  
     `
     prodContainer.appendChild(p)
 
}

function getProductPrice(prodPriceId){
    const prodPriceElement = document.getElementById(prodPriceId)
    const prodPriceString = prodPriceElement.innerText;
    const prodPrice = parseFloat(prodPriceString);
    const totalPriceSpan = document.getElementById('total-price-span');
    totalPriceSpan.innerText = prodPrice;
}