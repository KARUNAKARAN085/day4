const removeDuplicates = ((arr) => {
	return arr.filter((item,
		index) => arr.indexOf(item) === index);
})(["apple", "mango", "apple",
"orange", "mango", "mango", 'graps'])
console.log(removeDuplicates);