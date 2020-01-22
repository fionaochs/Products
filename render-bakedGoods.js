function renderBakedGoods(bakedGoods){
    const li = document.createElement('li');
    li.className = bakedGoods.category;
    li.title = bakedGoods.description;

    const h3 = document.createElement('h3');
    h3.textContent = bakedGoods.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = bakedGoods.img;
    img.alt = bakedGoods.name + ' image';
    //img.id = bakedGoods.id + 'id';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = '$' + bakedGoods.price.toFixed(2);
    
    p.textContent = usd;

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = bakedGoods.id;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}


export default renderBakedGoods;