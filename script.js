document.querySelector('button').addEventListener('click', () => {
    // 1. Select all current price elements
    const priceElements = document.querySelectorAll('.prices');
    let sum = 0;

    // 2. Calculate sum based on current text content
    priceElements.forEach((el) => {
        const value = parseFloat(el.textContent);
        if (!isNaN(value)) {
            sum += value;
        }
    });

    // 3. Handle the display of the result
    const table = document.querySelector('table');
    
    // Check if a result element already exists to avoid duplicates
    let ansElement = document.getElementById('ans');
    
    if (!ansElement) {
        // Create a new row for the total
        const newRow = document.createElement('tr');
        const newCell = document.createElement('td');
        
        // The test specifically looks for #ans
        newCell.id = 'ans';
        // Set colspan so it occupies the whole row width if desired
        newCell.setAttribute('colspan', '2'); 
        
        newRow.appendChild(newCell);
        table.appendChild(newRow);
        
        ansElement = newCell;
    }

    // 4. Update the content with the calculated sum
    ansElement.textContent = sum;
});