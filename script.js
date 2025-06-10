function createPromise(index) {
  const delay = Math.random() * 2000 + 1000; // 1000–3000 ms
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve((delay / 1000).toFixed(3)); // Convert to seconds
    }, delay);
  });
}
const promises = [createPromise(1), createPromise(2), createPromise(3)];

const tbody = document.getElementById("output");
Promise.all(promises).then((times) =>{
	const load = document.getElementById("loading");
	if(load){
		load.remove();
	}
	times.forEach((time, index) => {
		const row = document.createElement("tr");
		const cell1 = document.createElement("td");
		cell1.textContent = `Promise ${index + 1}`;
		const cell2 = document.createElement("td");
		cell2.textContent = time;

		row.appendChild(cell1);
		row.appendChild(cell2);
		tbody.appendChild(row);
	})
	const total = document.createElement("tr");
	const totalLabel = document.createElement("td");
	totalLabel.textContent = "Total";
	total.appendChild(totalLabel);
	const totalVal = document.createElement("td");
	totalVal.textContent = Math.max(...times.map(Number)).toFixed(3);
	total.appendChild(totalVal);
	tbody.appendChild(total);
})