import { findById } from '../common/utils.js';


const makeCart = () => {
    const possibleCart = localStorage.getItem('cart');

    if (possibleCart){
        return JSON.parse(possibleCart);
    } 
    else {
        return [];
    }
};

function renderBakedGoods(bakedGoods) {
    const li = document.createElement('li');
    li.className = bakedGoods.category;
    li.title = bakedGoods.description;

    const h3 = document.createElement('h3');
    h3.textContent - bakedGoods.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = bakedGoods.image;
    img.alt = bakedGoods.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = '$' + bakedGoods.price;
    p.textContent = usd;

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = bakedGoods.id;

    button.addEventListener('click', () => {
        const cart = makeCart();

        let bakedGoodsInCart = findById(cart, bakedGoods.id);

        if (!bakedGoodsInCart){
            const initialGood = {
                id: bakedGoods.id,
                quantity: 1
            };
            cart.push(initialGood);
        } else bakedGoodsInCart.quantity++;

        const newCartState = JSON.stringify(cart);
        localStorage.setItem('cart', newCartState);
    });    
    p.appendChild(button);
    li.appendChild(p);

    return li;
}
export default renderBakedGoods;