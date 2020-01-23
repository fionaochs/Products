export function findById(someId, bakedGoods){
    for (let i = 0; i < bakedGoods.length; i++){
        const selectedGood = bakedGoods[i];
        if (selectedGood.id === someId){
            return selectedGood;
        }
    }
}