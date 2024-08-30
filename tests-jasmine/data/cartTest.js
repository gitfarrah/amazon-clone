import { addToCart , cart , loadFromStorage} from "../../data/cart.js";

describe('test suite: addToCart' , () => {
    it('add an existing product to the cart', () => {
        spyOn(localStorage, 'setItem');
        spyOn(localStorage , 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: 'bc2847e9-5323-403f-b7cf-57fde044a955',
                quantity: 1,
                deliveryOptionId: '1'
            }]);
        });
        loadFromStorage();

        addToCart('bc2847e9-5323-403f-b7cf-57fde044a955');
        expect(cart.length).toEqual(1);
        //works only when there is a mock 
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('bc2847e9-5323-403f-b7cf-57fde044a955');
        expect(cart[0].quantity).toEqual(2);


    });

    it('add a new product to the cart', () => {

        spyOn(localStorage, 'setItem');

        spyOn(localStorage , 'getItem').and.callFake(() => {
            return JSON.stringify([]);
        });

        loadFromStorage();


        addToCart('bc2847e9-5323-403f-b7cf-57fde044a955');
        expect(cart.length).toEqual(1);
        //works only when there is a mock 
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('bc2847e9-5323-403f-b7cf-57fde044a955');
        expect(cart[0].quantity).toEqual(1);
    });

});
