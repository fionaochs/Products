import bakedGoods from '../data/bakedGoods.js';
import renderBakedGoods from '../render-bakedGoods.js';

const list = document.getElementById('bakedGoods');
//id tag on products, html page

for (let i = 0; i < bakedGoods.length; i++){
    const bakedGood = bakedGoods[i];
    const dom = renderBakedGoods(bakedGood);
    list.appendChild(dom);
    //send rendered baked goods info to products.html
}