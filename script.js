document.getElementById('calculate-btn').addEventListener('click', function() {
    // 1. Select all elements with class 'price'
    const priceElements = document.querySelectorAll('.price');
    let totalPrice = 0;

    // 2. Loop through the NodeList and add prices to the total
    priceElements.forEach(item => {
        // Convert text content to a number
        totalPrice += parseFloat(item.textContent);
    });

    // 3. Check if a total row already exists to avoid duplicates
    const existingTotal = document.querySelector('.total-row');
    if (existingTotal) {
        existingTotal.remove();
    }

    // 4. Create a new row and a single cell for the total
    const table = document.getElementById('grocery-table');
    const newRow = document.createElement('tr');
    newRow.className = 'total-row';

    const totalCell = document.createElement('td');
    
    // Make the cell span across both columns
    totalCell.setAttribute('colspan', '2');
    totalCell.textContent = `Total Price: ₹${totalPrice}`;
    totalCell.style.textAlign = 'center';

    // 5. Append cell to row, and row to table
    newRow.appendChild(totalCell);
    table.appendChild(newRow);
});