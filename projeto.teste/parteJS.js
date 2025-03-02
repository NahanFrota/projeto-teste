function carregar(){
    var img = document.getElementById("foto")
    var msg =  document.getElementById("horario")
    var a = new Date()
    var b = a.getHours()  
     if ( b >= 5 && b<=12){
             msg.innerHTML = `agora são ${b} horas bom dia`
             img.src = 'manhã.png'
             document.body.style.background = '#e2cd9f'
        
               
     } else if (b >= 17 && b <= 23 ){
        msg.innerHTML = `agora são ${b} horas boa noite`
         img.src = 'noite.png'
         
          

     } else if (b >=13 && b<= 17){
      img.src = "tarde.png"
      document.body.style.background = '#b9846f'
      msg.innerHTML = `agora são ${b} horas boa tarde`



     } else {
      img.src = "noite.png"
      msg.innerText = `agora são ${b} esta de madrugada`
      

     }
        
          
     

}