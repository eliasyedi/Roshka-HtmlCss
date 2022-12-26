


const ruc = document.querySelector("#ruc");
const check = document.querySelector("#guardar");
const form = document.querySelector("#form")
const invalid = document.querySelector(".invalid-feedback")

check.addEventListener('change',()=>{
    console.log(check.checked);
    if(check.checked){
        if (checkValidity()) {
            form.classList.add('was-validated')  
            invalid.style.display="none"
            ruc.classList.remove("invalid-feedback")
            ruc.classList.add("valid-feedback")
            form.submit();

            return;
        }

        form.classList.add("is-invalid")
        ruc.classList.add("invalid-feedback")
        invalid.style.display="contents"
        console.log(ruc.classList)
        check.checked=false;
    }
        
}
)



const numeros = ['0' , '1', '2', '3' , '4', '5', '6', '7', '8', '9']

function checkValidity(){
    let numero = ruc.value;
    let contadorGuion = 0;
    if(numero.length<3)
        return false;


    if(numero.charAt(0)==='-')
        return false;
    
    for(let i = 0 ; i<numero.length ; i++){
       if(ruc.value.charAt(i)==='-'){
            contadorGuion++;
            if(i+2 !== numero.length ){
                return false;
            }
            continue;
        }
        
        if(!numeros.includes(numero.charAt(i)))
            return false;
        
    }
    if(contadorGuion !== 1)
        return false;

    return true;
        


}







