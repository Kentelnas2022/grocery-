function addItem(name, brand, price, weight, quantity, store, category, image) {
    const li = document.createElement('li');

    const img = document.createElement('img');
    img.className = 'item-image';
    img.src = image;
    img.alt = name;
    li.appendChild(img);

    const itemDetails = document.createElement('div');
    itemDetails.className = 'item-details';
    itemDetails.innerHTML = `<strong>${name}</strong> (${brand})<br>
                              Price: ₱${price}<br>
                              Weight/Volume: ${weight}<br>
                              Quantity: ${quantity}<br>
                              Store: ${store}<br>
                              Category: ${category}`;
    li.appendChild(itemDetails);

    const editButton = document.createElement('button');
    editButton.className = 'edit';
    editButton.textContent = 'Edit';
    editButton.onclick = () => editItem(li, name, brand, price, weight, quantity, store, category, image);
    li.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => {
        li.remove();
        let groceryList = JSON.parse(localStorage.getItem('groceryList')) || [];
        groceryList = groceryList.filter(item => item.name !== name);
        localStorage.setItem('groceryList', JSON.stringify(groceryList));
    };
    li.appendChild(deleteButton);

    document.getElementById('grocery-list').appendChild(li);
}

function editItem(li, name, brand, price, weight, quantity, store, category, image) {
    const itemName = prompt('Edit Product Name', name);
    const itemBrand = prompt('Edit Brand', brand);
    const itemPrice = prompt('Edit Price', price);
    const itemWeight = prompt('Edit Weight/Volume', weight);
    const itemQuantity = prompt('Edit Quantity', quantity);
    const itemStore = prompt('Edit Store', store);
    const itemCategory = prompt('Edit Category', category);
    const itemImage = prompt('Edit Image URL', image);

    li.querySelector('.item-image').src = itemImage;
    li.querySelector('.item-image').alt = itemName;
    li.querySelector('.item-details').innerHTML = `<strong>${itemName}</strong> (${itemBrand})<br>
                                                      Price: ₱${itemPrice}<br>
                                                      Weight/Volume: ${itemWeight}<br>
                                                      Quantity: ${itemQuantity}<br>
                                                      Store: ${itemStore}<br>
                                                      Category: ${itemCategory}`;

    let groceryList = JSON.parse(localStorage.getItem('groceryList')) || [];
    groceryList = groceryList.map(item => {
        if (item.name === name) {
            return {
                name: itemName,
                brand: itemBrand,
                price: itemPrice,
                weight: itemWeight,
                quantity: itemQuantity,
                store: itemStore,
                category: itemCategory,
                image: itemImage
            };
        }
        return item;
    });
    localStorage.setItem('groceryList', JSON.stringify(groceryList));
}
