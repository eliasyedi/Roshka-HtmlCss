

class Calculadora{
	constructor(){
		this.numero1 = '';
		this.numero2 = '';
		this.operacion = '';
		this.display = document.getElementById("display");
	}


	showDispaly(){
		this.display.value = this.numero1 + this.operacion + this.numero2;

	}


	addDigit(digito){
		//codigo
		console.log(digito);
		if(this.operacion === ''){
			this.numero1+= digito;
			console.log(this.numero1);
			return;
		}

		this.numero2+= digito;

	}

	operationChosen(operacion){
		if(operacion === 'C'){
			this.operacion = '';
			this.numero1 = '';
			this.numero2 = '';
			return;	
		}
		
		if(this.operacion ===''){
			this.operacion += operacion;
			return;
		}
		
		alert("ya elegiste operacion");
	}



	operationEquals(){
		if(this.operacion === ''){
			this.display.value = parseFloat(this.numero1);
		}
		
		if(this.numero2 === ''){
			this.display.value = "MathError";
		}
		if(this.operacion ==='+')
			this.display.value = parseFloat(this.numero1)+parseFloat(this.numero2);
		if(this.operacion === '-')
			this.display.value = parseFloat(this.numero1)-parseFloat(this.numero2);
		if(this.operacion ==='*')
			this.display.value = parseFloat(this.numero1)*parseFloat(this.numero2);
		if(this.operacion === '/' && this.numero2 !== '0')
			this.display.value = parseFloat(this.numero1)/parseFloat(this.numero2);
		
		this.numero1 = this.display.value;
		this.operacion = '';
		this.numero2 = '';
			
	}

		
	



}







const botonesNumericos = document.querySelectorAll(".botonNumero");
const botonesSimbolos = document.querySelectorAll(".botonSimbolo");
const botonEquals = document.querySelector(".botonEquals");

const calculadora = new Calculadora();



botonEquals.addEventListener('click' , ()=>{
	calculadora.operationEquals();
})





botonesSimbolos.forEach((boton)=>{
	boton.addEventListener('click' , () =>{
		//codigo
		calculadora.operationChosen(boton.value);
		calculadora.showDispaly();
	});
});


botonesNumericos.forEach((boton)=>{
	boton.addEventListener('click' , () =>{
		calculadora.addDigit(boton.value);
		calculadora.showDispaly();
	});
});

