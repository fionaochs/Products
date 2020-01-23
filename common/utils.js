export function findById(bakedGoods, someId){
    for (let i = 0; i < bakedGoods.length; i++){
        const selectedGood = bakedGoods[i];
        if (selectedGood.id === someId){
            return selectedGood;
        }
    }
    return null;
}

export function calcLineItem(quantity, price){
    const amount = quantity * price;
    return amount;
}

export function calcOrderTotal(cart, bakedGoods){
    let orderTotal = 0;

    for (let i = 0; i < cart.length; i++){
        const cartItem = cart[i];
        const bakedGood = findById(bakedGoods, cartItem.id);
        console.log(bakedGood);
        const lineTotal = calcLineItem(cartItem.quantity, bakedGood.price);
        orderTotal += lineTotal;
    }
    return orderTotal;
}

