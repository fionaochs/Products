import bakedGoods from '../data/bakedGoods.js';
import cart from '../data/cart.js';
import { findById, calcLineItem, calcOrderTotal } from '../common/utils.js';

const test = QUnit.test;
QUnit.module('Utilities');

test('product id gives correct baked good', expect => {
    const id = 'muffin';
    const expected = 'Muffin';

    const foundBakedGood = findById(bakedGoods, id);

    expect.ok(foundBakedGood);
    expect.equal(foundBakedGood.name, expected);
});

test('id does not match anything returns null', expect =>{
    const id = 'not found';
    const expected = null;

    const foundBakedGood = findById(bakedGoods, id);
    expect.equal(foundBakedGood, expected);
});

test('calculate line total for one good', expect => {
    const price = 4.00;
    const quantity = 4;
    const expected = 16.00;
    const calcLineItems = calcLineItem(quantity, price);

    expect.equal(calcLineItems, expected);
});

test('calculate total', expect => {
    const expected = 16.00;
    const total = calcOrderTotal(cart, bakedGoods);
    
    expect.equal(total, expected);
});