document.getElementById('search-bar').addEventListener('input', function(e) {
    const searchQuery = e.target.value.toLowerCase();
    const items = document.querySelectorAll('#grocery-list li');

    items.forEach(item => {
        const itemName = item.querySelector('.item-details').querySelector('strong').textContent.toLowerCase();
        const itemBrand = item.querySelector('.item-details').textContent.toLowerCase();

        if (itemName.includes(searchQuery) || itemBrand.includes(searchQuery)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
});
