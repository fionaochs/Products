export function getCart(){
    const possiblyCartGood = localStorage.getItem('cart');
    //get local storage of possibly cart item
    //initiate cart and see whats there
    //schrodinger's cart
    //grab local storage of good possibly in cart
    let cart;
    //set cart
    if (possiblyCartGood){
        //if something in cart...
        cart = JSON.parse(possiblyCartGood);
        
        //return array of object of baked good
    }
    else {
        cart = [];
        //if nothing in cart return empty array
    }
    return cart;

}


export function addToCart(findById, bakedGoods){
    const cart = getCart();
    let bakedGoodInCart = findById(cart, bakedGoods.id);
        //find baked good by matching id to cart id
        
    if (!bakedGoodInCart){
            //if nothing in cart
        cart.push({
            id: bakedGoods.id,
            quantity: 1
        });
            //add the baked good to the cart and increase quantity
    } 
    else {
        bakedGoodInCart.quantity++;
            //if there is the baked good in cart, ++
    }

        //update local storage with string of cart
    const newCart = JSON.stringify(cart);
    localStorage.setItem('cart', newCart);
        // key: 'cart', value: newCart
        //set value of cart in local storage with updated newCart value of strings with baked goods

    alert('You added one ' + bakedGoods.name + ' to your cart');

}


export function clearCart(cart){
    //on click clear local storage of cart
    localStorage.clear('cart');
    alert('You placed your order of' + JSON.stringify(cart));
    window.location = '../';
}