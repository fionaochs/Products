import renderBakedGoods from '../render-bakedGoods.js';

const test = QUnit.test;

test('render a baked good', assert => {
    const muffin = {
        id: 'muffin',
        name: 'Muffin',
        img: '../assets/muffin.png',
        description: 'Delicious breakfast snack, the top is the best part',
        category: 'breakfast',
        price: 4.00,
        cost: 1.50
    };
    const expected = '<li class="breakfast" title="Delicious breakfast snack, the top is the best part"><h3>Muffin</h3><img src="../assets/muffin.png" alt="Muffin image" id="muffinid"><p class="price">$4.00<button value="muffin">Add</button></p></li>';

    const dom = renderBakedGoods(muffin);
    const html = dom.outerHTML;
    assert.equal(html, expected);
});
