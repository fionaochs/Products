import renderBakedGoods from './render-line-items.js';
import cart from '../data/cart.js';
import bakedGoods from '../data/bakedGoods.js';
import { findById, calcOrderTotal } from '../common/utils.js';


const tbody = document.querySelector('.table');
//select tbody from html

const orderTotalCell = document.getElementById('orderTotalCell');
//get element for order total
for (let i = 0; i < bakedGoods.length; i++){
    //loop through the baked goods array
    const lineItem = cart[i];
    //set each item in the cart to line item
    const selectedGood = findById(bakedGoods, lineItem.id);
    //selected good is comparing baked goods list with line items id
    const dom = renderBakedGoods(lineItem, selectedGood);
    //render info and store in dom variable, use cart[i] and the baked good
    tbody.appendChild(dom);
    //append, add the changes to the tbody in html
}
const orderTotal = calcOrderTotal(cart, bakedGoods);
//go through our cart and find each baked good id, calculate total by using item quantity and baked good price
orderTotalCell.textContent = '$' + orderTotal;
//update text of total cell