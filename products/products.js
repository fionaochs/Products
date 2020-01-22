import bakedGoods from '../data/bakedGoods.js';
import renderBakedGoods from '../render-bakedGoods.js';

const list = document.getElementById('bakedGoods');

for (let i = 0; i < bakedGoods.length; i++){
    const bakedGood = bakedGoods[i];
    const dom = renderBakedGoods(bakedGood);
    list.appendChild(dom);
}