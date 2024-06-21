const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo")
const tempo = document.querySelectorAll(".contador")
tempo[0].textContent = "ola"
const tempoObjetivo1 = new Date(2007,4,16,03);
const tempoObjetivo2 = new Date(03);
const tempoObjetivo3 = new Date(2007);
const tempoObjetivo4 = new Date(30);
const tempoObjetivo5 = new Date(06);
const agora = new Date();
let segundos;
let minutos;
let horas;
let dias;
Segundos = (tempoObjetivo1 - agora)/1000
Minutos = segundos/60
Horas = minutos/60
Dias = horas/24
segundos=Math.floor(segundos);
minutos=Math.floor(minutos)
horas=Math.floor(horas)
dias=Math.floor(dias);
tempo[0].textContent = `Faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`
tempo[0].textContent = tempoObjetivo1 - agora
tempo[1].textContent = tempoObjetivo1
console.log(botoes);
for(let i = 0; i < botoes.length ; i++){
    botoes[i].onclick = function() {
        for (j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            conteudo[j].classList.remove("ativo")
        }
        botoes[i].classList.add("ativo")
        conteudo[i].classList.add("ativo")
    }
}
