// Hannah's modulus function!

function mod(x, y) {
	let arrayMod = Array.prototype.slice.call(arguments);
	let store = [];
	arrayMod.forEach(function (i) {
		if (typeof i != "number") {
			store.push(i);
		}
	});
	if (store.length > 0) {
		if (arguments.length != 2) {
			return "MOD only accpets numbers AND takes EXACTLY two arguments!"
		}
		return "MOD only accpets numbers!"
	} else if (arguments.length != 2) {
		return 'MOD takes EXACTLY two arguments!';
	} else {
		let division = x / y;
		let floor = Math.floor(division);
		let yfloor = y * floor;
		return x - yfloor;
	}
}

let result = mod(10, 9);

console.log(result);
