document.getElementById('grocery-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const itemName = document.getElementById('item-name').value;
    const itemBrand = document.getElementById('item-brand').value;
    const itemPrice = document.getElementById('item-price').value;
    const itemWeight = document.getElementById('item-weight').value;
    const itemQuantity = document.getElementById('item-quantity').value;
    const itemStore = document.getElementById('item-store').value;
    const itemCategory = document.getElementById('item-category').value;
    const itemImageFile = document.getElementById('item-image').files[0];

    const reader = new FileReader();
    reader.onload = function(e) {
        const itemImage = e.target.result;
        
        const item = {
            name: itemName,
            brand: itemBrand,
            price: itemPrice,
            weight: itemWeight,
            quantity: itemQuantity,
            store: itemStore,
            category: itemCategory,
            image: itemImage
        };

        let groceryList = JSON.parse(localStorage.getItem('groceryList')) || [];
        groceryList.push(item);
        localStorage.setItem('groceryList', JSON.stringify(groceryList));

        document.getElementById('grocery-form').reset();
    };

    if (itemImageFile) {
        reader.readAsDataURL(itemImageFile);
    }
});
