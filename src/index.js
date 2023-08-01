
module.exports = function toReadable (number) {
//function toReadable (number) {
	function numToArray(number){
		let len = number.toString().length; //длинна числа
		let digitArr = [];
		let n = number;
		for(let i = len; i > 0; i--){
		//console.log('i: ' + i + ' n: ' + n)
			if(n < 10){
				digitArr[i-1] = n;
			}
			else {
				digitArr[i-1] = n % 10; //отрезаем последнюю цифру
				n = Math.floor(n / 10);
			}
		}
	 	return digitArr;
	}

	function uniqNum(n){
		
		let uniqNumArr = ['one','two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
	 		'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
		let str = '';
		if(n < 20){
			str = uniqNumArr[n-1];
		}
		return str;
	}


	function createDozen(n){
			let dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
			let digitArr = numToArray(n);
			let str = '';
			if(number % 10 === 0)
				str = dozens[digitArr[0]-1];
			else
				str = dozens[digitArr[0]-1] + ' ' + uniqNum(digitArr[1]);
			return str
	}

	function getHundred(n){ //20
		let str = '';
		str = uniqNum(n) + ' ' + 'hundred'
		return str;
	}

///--------------------------------------------------
    
	let str = '';
	if(number === 0)
		str = 'zero';

	else if(number < 20){
		str = uniqNum(number);
	}
	else if (number >= 20 && number < 100){ //для случая от 20 до 99
		
		str = createDozen(number);

	}
	else if (number > 99 && number < 1000){ //для случая от 100 до 999
		

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

//console.log(toReadable(999))

