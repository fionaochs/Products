export function findById(someId, bakedGoods){
    for (let i = 0; i < bakedGoods.length; i++){
        const selectedGood = bakedGoods[i];
        if (selectedGood.id === someId){
            return selectedGood;
        }
        return null;
    }
}

export function calcLineItem(quantity, price){
    const amount = quantity * price;
    const answer = Math.round((amount * 100) / 100);
    return answer;
}

