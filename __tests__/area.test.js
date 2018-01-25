const getArea = require('../area');

test('more than 2 array elements',() => {
	expect(getArea([2,3,4])).toBe(-1)
});

test('less than 2 array elements',() => {
	expect(getArea([4])).toBe(-1)
});

test('one array element is null',() => {
	expect(getArea([2,null])).toBe(-1)
});

test('second array element is not a number',() => {
	expect(getArea([2,'abc'])).toBe(-1)
});

test('first array element is not a number',() => {
	expect(getArea(['abc',2])).toBe(-1)
});

test('correct area computation',() => {
	expect(getArea([3,2])).toBe(6)
});

test('correct area computation with zeroes',() => {
	expect(getArea([0,3])).toBe(0)
});

//Qui il test fallisce
test ('one parameter is not an integer', () => {
	expect(getArea([2.5,3])).toBe(-1);
});

test ('one parameter is a string that is a number', () => {
	expect(getArea(['1',2])).toBe(-1);
});

test ('one parameter is undef', () => {
	expect(getArea([1,])).toBe(-1);
});

test ('parameter is an object', () => {
	expect(getArea({a:1,b:2})).toBe(-1);
});

test ('negative integers', () => {
	expect(getArea([-2,6])).toBe(-1);
});

test ('no pars', () => {
	expect(getArea()).toBe(-1);
});

test ('two pars instead of one', () => {
	expect(getArea([[2,3],5])).toBe(-1);
});

