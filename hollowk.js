let name=`Даниил`;
const month=`Июнь`;
const yearofbirth=`2002`;
newstr=name+' '+month+' '+yearofbirth;
console.log(newstr);
console.log('Вывод массива');
let mas=[-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
for(let i=0;i<mas.length;i++){
	console.log(mas[i]);
}
console.log('Вывод чётных элементов массива');
for (let i=0;i<mas.length;i++){
	if(mas[i]%2==0){
		console.log(mas[i]);
	}
}
console.log('Среднее арифметическое');
let a=15;
let b=42;
let c=20;
function avg(x,y,z){
	let z=(x+y)/2;
	return z;
}
avg(a,b,c);
console.log(c);
function square(a){
	return Math.sqrt(a);
}
let number =12;
function square(number) {
  return number * number;
}
function kk(a,b){
	a=a*a*a;
	b=b*b;
	return a-b;
}
