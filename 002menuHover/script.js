const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');

menuToggle.onclick = function (){
    navigation.classList.toggle('open');
};

const list = document.querySelectorAll('.list')
function activarLink(){
    list.forEach((item)=>
    item.classList.remove('active'))
    /*Este this es para que se seleccione este elemento en particular, al mismo elemento al cual le hemos dado click*/
    this.classList.add('active')
}

list.forEach((item)=>
/*Ese mouse over se puede cambiar por click u otras opciones de esuchado*/
item.addEventListener('mouseover', activarLink))