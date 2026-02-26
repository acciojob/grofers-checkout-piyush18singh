document.getElementById('calculate-btn').addEventListener('click', function() {
    // 1. Get all price elements
    const priceElements = document.querySelectorAll('.prices');
    let total = 0;

    // 2. Loop through and calculate the sum
    priceElements.forEach(element => {
        const priceValue = parseFloat(element.textContent);
        if (!isNaN(priceValue)) {
            total += priceValue;
        }
    });

    // 3. Create the new row and cell
    const table = document.getElementById('grocery-table');
    
    // Check if total row already exists to avoid duplicates
    const existingTotal = document.getElementById('total-row');
    if (existingTotal) {
        existingTotal.remove();
    }

    const newRow = document.createElement('tr');
    newRow.id = 'total-row';

    // We create one cell that spans both columns (optional) or just two cells
    const totalLabelCell = document.createElement('td');
    totalLabelCell.textContent = "Grand Total";
    
    const totalPriceCell = document.createElement('td');
    totalPriceCell.textContent = total.toFixed(2);
    // Use data-ns-test attribute if required by specific testing platforms
    totalPriceCell.setAttribute('data-ns-test', 'total');

    newRow.appendChild(totalLabelCell);
    newRow.appendChild(totalPriceCell);

    // 4. Append to table
    table.appendChild(newRow);
});