const removeDuplicates = function(arr) {
	return arr.filter((item,
		index) => arr.indexOf(item) === index);
}
let arr = ["apple", "mango", "apple",
		"orange", "mango", "mango", 'graps'];
console.log(removeDuplicates(arr));