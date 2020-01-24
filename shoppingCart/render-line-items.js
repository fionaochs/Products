function renderBakedGoods(lineItem, bakedGoods){
    const tr = document.createElement('tr');
//create table row
    const nameCell = document.createElement('td');
    nameCell.className = 'align-center';
    nameCell.textContent = bakedGoods.name;
    //add baked good name to table cell
    tr.appendChild(nameCell);
//update row with cells
    const quantityCell = document.createElement('td');
    quantityCell.textContent = lineItem.quantity;
    tr.appendChild(quantityCell);
    //quantity from baked good item to add

    const priceCell = document.createElement('td');
    nameCell.className = 'line-item-total';
    priceCell.textContent = '$' + bakedGoods.price;
    tr.appendChild(priceCell);

    const totalCell = document.createElement('td');
    const total = lineItem.quantity * bakedGoods.price;
    totalCell.textContent = '$' + total;
    tr.appendChild(totalCell);

    return tr;
    //call the table row

}

export default renderBakedGoods;