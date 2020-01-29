// import bakedGoods from '../data/bakedGoods.js';
import { getBakedGoods } from '../common/utils.js';
import renderBakedGoods from '../add-product/render-baked-goods.js';

const bakedGoods = getBakedGoods();
const list = document.getElementById('bakedGoods');
//id tag on products, html page

for (let i = 0; i < bakedGoods.length; i++){
    const bakedGood = bakedGoods[i];
    const dom = renderBakedGoods(bakedGood);
    list.appendChild(dom);
    //send rendered baked goods info to products.html
}