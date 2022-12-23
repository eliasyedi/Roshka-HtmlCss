


let a=2 , b=4, c=1;
const input = prompt("Number?");

if(4*a*c<b*b && typeof(Number)){
	console.log(raices(a,b,c));

}else{
	console.log('no cumple condicion');
}



function raices(a, b, c) {
	return (-b + Math.pow(b*b -4*a*c , 1/2))/(2*a);	
}