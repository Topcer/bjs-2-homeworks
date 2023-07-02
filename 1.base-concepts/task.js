"use strict"
function solveEquation(a, b, c) {
	let arr = [];

	const d = Math.pow(b, 2) - 4 * a * c;
	console.log(d);


	if (d < 0) {
		arr = [];
	} else if (d === 0) {
		arr = [-b / (2 * a)];
	} else {
		arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
	}

	return arr;

}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	if (!isNaN(percent) && !isNaN(contribution) && !isNaN(amount) && !isNaN(countMonths)) {
		const percentMonth = percent / 100 / 12;

		const bodyCredit = amount - contribution;
		const payment = bodyCredit * (percentMonth + (percentMonth / (((1 + percentMonth) ** countMonths) - 1)));
		const allSum = parseFloat((payment * countMonths).toFixed(2));
		return allSum;

	}

	return false;

}