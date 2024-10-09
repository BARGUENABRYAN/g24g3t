const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json';

async function buscarInformacoes(){
    const res =await fetch(url);
    const dados = await res.json();
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container__texto');
    const pessoas_conectadas = dados.total_pessoas_conectadas / 1e9;
    const pessoas_mundo = dados.total_pessoas_mundo / 1e9;
    const horas = parseInt(dados.total_medio);
    const minutos = Math.round(dados.total_medio - horas * 60);
    const porcentgemConectada = ((porcentgemConectada/pessoas_mundo) *100).toFixed(2);
    
    paragrafo.innerHTML = `vocẽ sabia que o mundo tem
    <span>${pessoas_mundo}</span> de pessoass e
    que proximadamente <span>${pessoas_conectadas}bilhões</span>
    estão conectada em alguma rede social e passam em média
    <span>${horas}</span> horas e <span> ${minutos}</span> conectadas.
    <br> Isso significa  que aproximadamente ${porcentgemConectada}%
    pessoas estão conectadas em alguma rede social.`;   

    document.getElementById('graficos-container').appendChild(paragrafo);
}
buscarInformacoes();