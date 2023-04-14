function tocar_som(tecla){
    document.querySelector(tecla).play()
}

const teclas = document.querySelectorAll('.tecla');


for(let i = 0 ; i < teclas.length; i++){
    const sons = teclas[i].classList[1];
    const instrumento = "#som_"+sons
    teclas[i].onclick = function () { 
        tocar_som(instrumento);
    }

}