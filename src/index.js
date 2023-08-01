
module.exports = function toReadable (number) {
	function numToArray(number){
		
		let digitArr = [];
		let n = number;
		for(let i = number.toString().length; i > 0; i--){
			if(n < 10){
				digitArr[i-1] = n;
			}
			else {
				digitArr[i-1] = n % 10; 
				n = Math.floor(n / 10);
			}
		}
	 	return digitArr;
	}

	function uniqNum(n){
		let uniqNumArr = ['one','two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
	 		'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
		return uniqNumArr[n-1];
	}


	function createDozen(n){
			let dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
			let digitArr = numToArray(n);
			if(number % 10 === 0)
				return dozens[digitArr[0]-1];
			else
				return dozens[digitArr[0]-1] + ' ' + uniqNum(digitArr[1]);
	}

	function getHundred(n){ 
				return uniqNum(n) + ' ' + 'hundred';
	}
///--------------------------------------------------
    
	let str = '';
	if(number === 0)
		str = 'zero';

	else if(number < 20){ //1 -20
		str = uniqNum(number);
	}
	else if (number >= 20 && number < 100){ //20 - 99
		
		str = createDozen(number);

	}
	else if (number > 99 && number < 1000){ // 100 до 999
		let s = numToArray(number)[0];
		let d = number - s * 100;
		if(number % 100 === 0){
			str = getHundred(s);
		}		
		else if (d > 19)
			str = getHundred(s) + ' ' +  createDozen(d);
		else
			str = getHundred(s) + ' ' +  uniqNum(d);
	}	

	return str;
}

