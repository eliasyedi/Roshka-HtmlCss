

$(document).ready(function(){
        
            
       imagenes("https://rickandmortyapi.com/api/character")
       
        function imagenes(a){
            if(a === null)
                return;
            $.ajax({
                url: a,
                type:"get",
                contentType: "application/json",
                dataType: 'json',
                success: function(result){
                    console.log(result)
                    let className = ''
                    let id = ''
                    result.results.forEach((dato,contador)=>{
                        
                        id= 'columna' + contador
                        className = '#columna'+ contador;
                    
                        $(".row").append(" <div id="+id+" class='col-md-2 col-sm-4 col-6'></div>")
                        $(className).append("<img id = 'personaje' src="+dato.image+" class='img-fluid'>")
                        $(className).append("<label for='personaje'>" + dato.name + "</label>")
                
                    })
                    imagenes(result.info.next)
                }
            })
        
        }
        

    
    
  //  }while(a !==null);
});




