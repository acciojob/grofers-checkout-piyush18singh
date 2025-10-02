const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	 const prices = document.querySelectorAll(".price");

  let total = 0;

  // 2. Sare prices loop karke add karo
  prices.forEach(priceCell => {
    total += Number(priceCell.textContent); // text ko number me convert
  });

  // 3. New row banao jisme total show hoga
  const table = document.querySelector("table");
  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");

  totalCell.colSpan = 2; // dono column merge kar diye
  totalCell.style.fontWeight = "bold";
  totalCell.textContent = "Total Price = Rs " + total;

  // 4. row me cell add karo
  totalRow.appendChild(totalCell);

  // 5. table me row add karo
  table.appendChild(totalRow);

  // Button ko dobara click karne par new row bar bar na aaye
  getSumBtn.disabled = true;
};
  
};

getSumBtn.addEventListener("click", getSum);

