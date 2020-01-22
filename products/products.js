import bakedGoods from '../data/bakedGoods.js/index.js';
import renderBakedGoods from '../render-bakedGoods.js';

const list = document.getElementById('bakedGoods');

for (let i = 0; i < bakedGoods.length; i++){
    const bakedGoods = bakedGoods[i];
    const dom = renderBakedGoods(bakedGoods);
    list.appendChild(dom);
}