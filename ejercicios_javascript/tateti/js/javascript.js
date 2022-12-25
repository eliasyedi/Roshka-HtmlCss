

const cuadrados = document.querySelectorAll(".cuadrado");
const boton = document.querySelector(".retry");



//true turrno de x false turno de o
let turno = true;
//contador de numero de jugadas;
let contador = 0;
let gameOver = false;




cuadrados.forEach((cuadrado)=>{
    cuadrado.addEventListener('click',()=>{
       let inner = cuadrado.querySelector("p").innerHTML;
       if(inner !== "" || contador===9 || gameOver){
        return;
       }
       console.log(inner === "")

       if(turno){
        cuadrado.querySelector("p").innerHTML= "X";
        if(comprobar()){
            gameOver = true;
            alert("GANO X");
        }
        turno = false;
        contador++;
        return;
       }
        cuadrado.querySelector("p").innerHTML = "O";
        if(comprobar()){
            alert("GANO O");
            gameOver = true;
        }
            
    
        contador++;
        turno = true;
    });
});





function comprobar(){
    if(cuadrados[0].querySelector("p").innerHTML === cuadrados[1].querySelector("p").innerHTML && cuadrados[0].querySelector("p").innerHTML === cuadrados[2].querySelector("p").innerHTML && cuadrados[0].querySelector("p").innerHTML!=="" )
        return true;
    if(cuadrados[0].querySelector("p").innerHTML === cuadrados[3].querySelector("p").innerHTML && cuadrados[0].querySelector("p").innerHTML === cuadrados[6].querySelector("p").innerHTML && cuadrados[0].querySelector("p").innerHTML!=="")
        return true;

    if(cuadrados[0].querySelector("p").innerHTML === cuadrados[4].querySelector("p").innerHTML && cuadrados[0].querySelector("p").innerHTML === cuadrados[8].querySelector("p").innerHTML && cuadrados[0].querySelector("p").innerHTML!=="")
        return true;
    if(cuadrados[8].querySelector("p").innerHTML === cuadrados[5].querySelector("p").innerHTML && cuadrados[8].querySelector("p").innerHTML === cuadrados[2].querySelector("p").innerHTML && cuadrados[8].querySelector("p").innerHTML!=="")
        return true;
    if(cuadrados[8].querySelector("p").innerHTML === cuadrados[6].querySelector("p").innerHTML && cuadrados[8].querySelector("p").innerHTML === cuadrados[7].querySelector("p").innerHTML && cuadrados[8].querySelector("p").innerHTML!=="")
        return true;
    if(cuadrados[4].querySelector("p").innerHTML === cuadrados[5].querySelector("p").innerHTML && cuadrados[4].querySelector("p").innerHTML === cuadrados[3].querySelector("p").innerHTML && cuadrados[4].querySelector("p").innerHTML!=="")
        return true;
    if(cuadrados[4].querySelector("p").innerHTML === cuadrados[7].querySelector("p").innerHTML && cuadrados[4].querySelector("p").innerHTML === cuadrados[1].querySelector("p").innerHTML && cuadrados[4].querySelector("p").innerHTML !=="")
        return true;
    if(cuadrados[4].querySelector("p").innerHTML === cuadrados[2].querySelector("p").innerHTML && cuadrados[4].querySelector("p").innerHTML === cuadrados[6].querySelector("p").innerHTML && cuadrados[4].querySelector("p").innerHTML !=="")
        return true;
    
    return false;
}


boton.addEventListener('click', ()=>{
    cuadrados.forEach((cuadrado)=>{
        cuadrado.querySelector("p").innerHTML="";
        contador = 0;
        gameOver = false;
    })
})
