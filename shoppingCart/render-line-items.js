function renderBakedGoods(lineItem, bakedGoods){
    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.className = 'align left';
    nameCell.textContent = bakedGoods.name;
    tr.appendChild(nameCell);

    const quantityCell = document.createElement('td');
    quantityCell.textContent = lineItem.quantity;
    tr.appendChild(quantityCell);

    const priceCell = document.createElement('td');
    nameCell.className = 'line-item-total';
    priceCell.textContent = lineItem.price;
    tr.appendChild(priceCell);

    const totalCell = document.createElement('td');
    const total = lineItem.quantity * bakedGoods.price;
    totalCell.textContent = total;
    tr.appendChild(totalCell);

    return tr;

}

export default renderBakedGoods;