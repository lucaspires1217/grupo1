const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date ("2024-10-05T00-:00:00");
const tempoObjetivo2 = new Date ("2024-10-05T00-:00:00");
const tempoObjetivo3 = new Date ("2024-10-05T00-:00:00");
const tempoObjetivo4 = new Date ("2024-10-05T00-:00:00");
const tempo=[tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

contadores[0]
contadores[0]. textContent = caucula (tempo[0]);

for (let i = 0; i < botoes.length; i++)
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }

function calculadoraTempo(tempoObjetivo){
    let tempoAtual = new date();
    let tempofinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempofinal / 1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(dias/24);
    segundos%=60;
    minutos%=60;
    horas%=24;

    return dias + " dias "+ horas + " horas " + minutos + " minutos " + segundos + "segundos";
}
for (let i=0; i< contadores.length; i++){
    contadores[i]. textContent = caucula (tempo[i]);
    contadores[i].textContent= calculadoraTempo(tempo[i]);

atualizaCronometro(i);
setInterval(atualizaCronometro, 1000);
}

//comecaCronometro();


