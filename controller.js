//gerador de numeros aleatorios para mega sena
function Gerador(){ 
    let jogo = []

    while(jogo.length < 6){
        numeroDaVez = Math.floor(Math.random() * 60) + 1
        if(jogo.includes(numeroDaVez)){
            null
        } else {
            jogo.push(numeroDaVez)
        }
        jogo = jogo.sort((a, b)=> a - b)
        console.log(jogo)
    }
    return jogo.join(',').replace(/,/g," - ")
}


//-----------------------------------------------------
//document session-------------------------------------
//-----------------------------------------------------





let butao = document.getElementById('jogar')


function mostrar(){
    let seis = Gerador()
    console.log(seis)
    let display = document.querySelector('h1')
    let boasorte = document.querySelector('h2')
    display.innerText = `${seis}`
    boasorte.innerText = 'Boa Sorte!'
    butao.innerText = `Gerar outro jogo de Megasena`
    
}

butao.addEventListener('click', mostrar)