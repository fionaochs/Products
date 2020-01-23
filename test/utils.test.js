import bakedGoods from "../data/bakedGoods.js";
import cart from "../data/cart.js";
import { findById, calcLineItem, } from "../common/utils.js";

const test = QUnit.test;
QUnit.module('Utilities');

test('product id gives correct baked good', expect => {
    const id = 'muffin';
    const expected = 'muffin';

    const foundBakedGood = findById(bakedGoods, id);


    expect.equal(foundBakedGood.name, expected);
});