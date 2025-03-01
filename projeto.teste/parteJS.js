function carregar(){
    var imge = document.getElementById("img")
    var msg =  document.getElementById("horario")
    var a = new Date()
    var b = a.getHours()
     
     if ( b >= 5 && b<=12){
             msg.innerHTML = `agora são ${b} horas BOMDIA`
             img.src = 'manhã.png'
        
               
     } else if (b >= 17 && b <= 23 ){
        msg.innerText = ` agora são ${b} horas boa noite`
         img.src = 'noite.png'
          

     } else(
        msg.innerText = `agora são ${b} horas, boa tarde`
        

     )

     

}