import { findById } from './common/utils.js';

function renderBakedGoods(bakedGoods){
    const li = document.createElement('li');
    li.className = bakedGoods.category;
    li.title = bakedGoods.description;
//create list item with baked good info
    const h3 = document.createElement('h3');
    h3.textContent = bakedGoods.name;
    li.appendChild(h3);
//updat li with h3

    const img = document.createElement('img');
    img.src = bakedGoods.img;
    img.alt = bakedGoods.name + ' image';
    img.id = bakedGoods.id + 'id';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = '$' + bakedGoods.price.toFixed(2);
    
    p.textContent = usd;

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = bakedGoods.id;
    //create add button on baked good with value 'muffin'
    //button on products page updates local storage
    //shoppingCart.js reads updated JSON

    button.addEventListener('click', () => {
        let possiblyCartGood = localStorage.getItem('cart');
        //initiate cart and see whats there
        //schrodinger's cart
        //grab local storage of good possibly in cart
        let cart;
        //set cart
        if (possiblyCartGood){
            //if something in cart...
            cart = JSON.parse(possiblyCartGood);
            //return array of object of baked good
        } else {
            cart = [];
            //if nothing in cart return empty array
        }

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

    });

    p.appendChild(button);

    li.appendChild(p);

    return li;
}


export default renderBakedGoods;