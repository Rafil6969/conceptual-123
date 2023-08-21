// setting the totalPrice to 0 
var totalPrice = 0;


// getting the button id from html 
const couponApplyBtn = document.getElementById('coupon-btn');
const makePurchaseBtn = document.getElementById('purchase-btn');



// addToCart function 
function addToCart(target) {
    const price = parseFloat(target.querySelector('.price').innerText);
    const productName = target.querySelector('.product-name').innerText;
    updateCart(productName, price);
}


// updateCart function with parameters
function updateCart(productName, price) {
    totalPrice = parseFloat(document.getElementById('total-price').innerText);
    totalPrice = totalPrice + price;
    document.getElementById('total').innerText = totalPrice;
    // removing disable attribute from couponApplyBtn if condition is met
    if(totalPrice>=200){
       
        couponApplyBtn.removeAttribute('disabled');
        couponApplyBtn.style.backgroundColor='#E527B2';

    }
    // setting totalPrice in id total-price as innerText
    document.getElementById('total-price').innerText = totalPrice;

    // removing disable attribute from makePurchaseBtn if something is added to cart
    makePurchaseBtn.removeAttribute('disabled');
    makePurchaseBtn.style.backgroundColor='#E527B2';

    // creating a new p tag for adding the products which are selected
    const selectedProductField = document.getElementById('selected-product');
    const count = selectedProductField.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `${count + 1}. ${productName}`;
    selectedProductField.appendChild(p);
    document.getElementById('price-list').style.display = 'block';
}
     



// coupon applying function
function applyCoupon() {
    const code = document.getElementById('coupon-code').value;
    if (code === 'SELL200') {
        const discountReceived = totalPrice * (20/100);
        
        document.getElementById('discount').innerText = discountReceived.toFixed(2);
        const bill = totalPrice - discountReceived;
        document.getElementById('total').innerText = bill;
    }
    else {
        alert('invalid coupon code');

    }
    document.getElementById('coupon-code').value = '';
}


// resetting everything when go home btn is clicked
function resetCart() {
    document.getElementById('selected-product').innerText = '';

    document.getElementById('price-list').style.display = 'none';

    document.getElementById('total-price').innerText = '00';

    document.getElementById('discount').innerText = '00';

    document.getElementById('total').innerText = '00';

    couponApplyBtn.setAttribute('disabled', true);
    couponApplyBtn.style.backgroundColor='#cccccc';

    makePurchaseBtn.setAttribute('disabled', true);
    makePurchaseBtn.style.backgroundColor='#cccccc';
}