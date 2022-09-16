
  //valores de hora e min
 const hours = new Date();
 const horas = hours.getHours();
 const min = hours.getMinutes();


//exibe horas na div 
const hrs = document.getElementById('exibirhoras');
hrs.innerHTML = `${horas} : ${min}`;
   


const msg = document.getElementById('message');

let img = document.getElementById('imagem');


//Altera a imagem conforme o resultado da variavel horas
if (horas < 12 ){
    msg.innerHTML = 'Bom dia '; 
    img.style.backgroundImage = "url('imgs/morning.jpg')";  
    img.style.color = "silver"  
    img.style.boxShadow = "1px 1px 100px white"
}


else if(horas < 18 ){
    msg.innerHTML = 'Boa Tarde';   
    img.style.backgroundImage = "url('imgs/sunrise.jpg')";
    img.style.color = "orange";
    img.style.boxShadow = "1px 1px 100px chocolate";
 }


else {

    msg.innerHTML = 'Boa Noite';
    img.style.backgroundImage = "url('imgs/night.jpg')";
    img.style.color = "silver";
    img.style.boxShadow = "1px 1px 800px black";
}







