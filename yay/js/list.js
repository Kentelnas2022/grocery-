function displayItems() {
    const groceryList = JSON.parse(localStorage.getItem('groceryList')) || [];

    groceryList.forEach(item => {
        addItem(item.name, item.brand, item.price, item.weight, item.quantity, item.store, item.category, item.image);
    });
}

document.addEventListener('DOMContentLoaded', displayItems);
