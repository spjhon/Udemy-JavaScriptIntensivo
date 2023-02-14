let toggleBtn = document.querySelector('.toggleBtn');
let container = document.querySelector('.container');

/*vamos a manipular el togglebtn*/

/*tambien se puede con el addeventlistener*/
toggleBtn.onclick=function (){
    /*con este toggle que es una funcion interna de javascript, se busca los que tengan clases active y activa lo que este dentro de ese active y efectua el on ya que por defecto esta en off*/
    container.classList.toggle('active');
    

}