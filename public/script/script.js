const positive = document.querySelector('#positive');
const negative = document.querySelector('#negative');
const all = document.querySelector('#all');

const itemList = document.querySelector('.item-list');
const itemListP = document.querySelector('.item-list-p')
const itemListN = document.querySelector('.item-list-n')



positive.addEventListener("click" , function hide(){
    itemList.classList.add("hide");
    itemListN.classList.add("hide");
    itemListP.classList.remove("hide");
})

negative.addEventListener("click" , function hide(){
    itemList.classList.add("hide");
    itemListP.classList.add("hide");
    itemListN.classList.remove("hide");
})

all.addEventListener("click" , function hide(){
    itemListN.classList.add("hide");
    itemListP.classList.add("hide");
    itemList.classList.remove("hide");
})

//- COLOR DE FONDO DEL TYPE

const type = document.querySelectorAll('.type-p');

type.forEach(e => {
    if(e.innerHTML == "positive"){
        e.style.backgroundColor = "lightgreen";
    }else{
        e.style.backgroundColor = "lightcoral";
    }
})








