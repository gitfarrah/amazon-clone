import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {loadProducts, loadProductsFetch} from '../data/products.js';
import {loadCart} from '../data/cart.js';


async function loadPage() {
    try{
        //throw 'error1';
        await loadProductsFetch();

        await new Promise((resolve , reject) => {
            loadCart(() => {
                //reject('error3')
                resolve('value2');    
            });
        });
        }catch(error) {
            console.error('Error loading page');
        }

    renderOrderSummary();
    renderPaymentSummary();

}

    
loadPage();

/*
Promise.all([
    loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve('value2');    
        });
    })

]).then((values) => {
    console.log(values)
    renderOrderSummary();
    renderPaymentSummary();
});
 

*/



/*
loadProducts(()=>{
    loadCart(() => {
        renderOrderSummary();
        renderPaymentSummary();
    }); 
});
*/