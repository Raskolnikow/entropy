console.log(function (par) {
	return par;
} ('Hello World!') );

// console.log(str);

function f(param) {
	return param;
};

console.log(f('Hello World!'));

var add = function(a, b) {
	if(typeof a !== 'number' || typeof b !== 'number') {
		throw {
			name : 'TypeError',
			message : 'add needs numbers'
		}
	}
	return a + b;
}

console.log(add(4,5));

console.log("© ®")