//https://edabit.com/challenge/KcMmQE3bhxvfiYquQ

function countOnes(number) {
	if(number>0){
  	binaryNum = number.toString(2);
		return (binaryNum.split("1").length)-1;
	}else{
		return 0;
	}
}

console.log(countOnes(7));