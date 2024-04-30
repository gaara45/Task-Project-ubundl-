document.addEventListener('DOMContentLoaded', function () {
    const chocolateOptionsContainer = document.querySelector('.chocolateOptions');
    const checkedItems = document.getElementById('selectedItems');
    const totalPricelist = document.getElementById('overallPrice');
    const checkboxesItem = document.querySelectorAll('.chocolateOptions input[type="checkbox"]');
    const maximumItems = 8;

    checkboxesItem.forEach(checkbox => {
        checkbox.addEventListener('change', updateSelectedItems);
    });

    function updateSelectedItems() {
        let totalPrice = 0;
        let selectedItemsCount = 0;

        checkedItems.innerHTML = '';

        checkboxesItem.forEach(checkbox => {
            if (checkbox.checked) {
                const itemName = checkbox.getAttribute('name');
                const itemPrice = parseFloat(checkbox.getAttribute('price'));

                if (selectedItemsCount < maximumItems) {
                    totalPrice += itemPrice;
                    selectedItemsCount++;

                    const listItem = document.createElement('li');
                    listItem.textContent = itemName;
                    checkedItems.appendChild(listItem);
                } else {
                    checkbox.checked = false;
                    alert('You can select a maximum of 8 items.');
                }
            }
        });

        totalPricelist.textContent = totalPrice.toFixed(2);
    }
});