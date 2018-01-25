function getArea(inputs){
	var a = inputs[0];
	var b = inputs[1];
	if(inputs.length==2){
		if (!(typeof(a)=='number' && typeof(b)=='number')){
			return -1;
		}
		if(a>=0 && b>=0){
			return a*b;
		} else return -1;
	} else {
		return -1;
	}
	return -1;
}

/*
var input1;
var res1 = getArea(input1);
console.log(res1);
console.log(typeof(input1[0]));
console.log(typeof(input1[1]));
console.log(typeof(-2));
*/

module.exports = getArea;