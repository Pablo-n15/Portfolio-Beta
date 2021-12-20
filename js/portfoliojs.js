window.addEventListener('scroll' , function(){
let animacion = document.getElementById('skills');
let posicion = animacion.getBoundingClientRect().top;

console.log(posicion);
let tamanioPantalla = window.innerHeight;

 if(posicion < tamanioPantalla   ){
    animacion.style.animation= 'mover 2s forwards'
     
   
} 
})


window.addEventListener('scroll' , function(){
    let animacion = document.getElementById('skills2');
    let posicion = animacion.getBoundingClientRect().top;
    
    console.log(posicion);
    let tamanioPantalla = window.innerHeight;
    
     if(posicion < tamanioPantalla   ){
        animacion.style.animation= 'mover2 2s forwards'
         
       
    } 
    })

    window.addEventListener('scroll' , function(){
        let animacion = document.getElementById('skills3');
        let posicion = animacion.getBoundingClientRect().top;
        
        console.log(posicion);
        let tamanioPantalla = window.innerHeight;
        
         if(posicion < tamanioPantalla  ){
            animacion.style.animation= 'mover3 2s forwards'
             
           
        } 
        })

        window.addEventListener('scroll' , function(){
            let animacion = document.getElementById('skills4');
            let posicion = animacion.getBoundingClientRect().top;
            
            console.log(posicion);
            let tamanioPantalla = window.innerHeight;
            
             if(posicion < tamanioPantalla  ){
                animacion.style.animation= 'mover4 2s forwards'
                 
               
            } 
            })
