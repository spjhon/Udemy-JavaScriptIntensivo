//aqui buscamos por edio del query el que tenga ese id en especifico
const display = document.querySelector('#display');
//Aqui recojemos todos los buttons
const buttons = document.querySelectorAll('button');

//vamos a recorrer todos los botones que y hemos mapeado con el query
buttons.forEach((item) => {
    item.onclick = () =>{
        if(item.id == 'clear'){
            setTimeout(() => display.innerText='DISPLAY',500);
            display.innerText='Deleted';
        }
        else if(item.id == 'borrar'){ 
            let string = display.innerText.toString();
            //Aqui se muestra una forma de buscar un caracter dentro del string
            //la cossa es que aqui a medida que se agregan caracteres ese primer caracter quedo con el index en 0 por lo que el orden queda invertido por eso se indica en la fucino que se borre el caracter 0.
            display.innerText = string.substr(0,string.length-1)
        }
        else if(display.innerText != '' && item.id == 'igual' && display.innerText != 'DISPLAY' && display.innerText != 'DISPLA' && display.innerText != 'DISPL' && display.innerText != 'DISP' && display.innerText != 'DIS' && display.innerText != 'DI' && display.innerText != 'D'){
            //el eval lo toma como operacion aritmetica, que lo que hace es de una vez lo que le llegue lo ejecute osea si le llega un 2+2 no muestre 2+2 sino 4 
            try {
                display.innerText = eval(display.innerText);
              } 
            catch (error) {
                setTimeout(() => display.innerText='DISPLAY',500);
                display.innerText = 'Error';
            }
        }
        else if(display.innerText == 'DISPLAY' && item.id == 'igual' || display.innerText == '' || display.innerText == 'DISPLA' || display.innerText == 'DISPL' || display.innerText == 'DISP' || display.innerText == 'DIS' || display.innerText == 'DI' || display.innerText == 'D'){
            setTimeout(() => display.innerText='DISPLAY',500);
            display.innerText = 'Null';
        }
        else{
            let replace = display.innerText;
            replace = replace.replace('DISPLAY', '');
            display.innerText = replace;
            display.innerText += item.id;
        }
    }
})
