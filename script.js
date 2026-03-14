const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    // 1. Get all price elements (using .prices as required by the test)
    const priceElements = document.querySelectorAll(".prices");
    let sum = 0;

    // 2. Sum up the values
    priceElements.forEach((el) => {
        const val = parseFloat(el.textContent) || 0;
        sum += val;
    });

    // 3. Check if the total row already exists to avoid duplicates
    const oldTotal = document.getElementById("ans-row");
    if (oldTotal) {
        oldTotal.remove();
    }

    // 4. Create the new row for the total
    const table = document.querySelector("table");
    const row = document.createElement("tr");
    row.id = "ans-row";

    // The test specifically looks for text inside an element with id="ans"
    row.innerHTML = `
        <td colspan="2" id="ans">${sum}</td>
    `;

    table.appendChild(row);
});