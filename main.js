const botoes = document.querySelectorAll(".botoes");
console.log(botoes)
for(let i=0;1<botoes.length; i++){
    
    botoes[i].onclick = function(){
        botoes[i].classList.add("ativo");
    }
}