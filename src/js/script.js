//DOM

const pesquisa = document.querySelector('.input-cidade')
const botao = document.querySelector('.botao-busca')
const nome_cidade = document.querySelector('.cidade')
const temp = document.querySelector('.temp')
const previsao = document.querySelector('.texto-previsao')
const key = 'c2c7719ee3fe20b0b92d6190f9d50bdb'

//EVENTO/FUNÇÃO

botao.addEventListener('click', buscarCidade)

async function buscarCidade(){

    const cidade = pesquisa.value

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    console.log(dados)

    nome_cidade.textContent = `Tempo em ${dados.name}`
    temp.textContent = `${(dados.main.temp).toFixed(0)}°C`
    previsao.textContent = `${dados.weather[0].description}`
}