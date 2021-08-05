
let adultos = document.getElementById("adultos")
let criancas = document.getElementById("criancas")
let duracao = document.getElementById("duracao")
let carne = document.getElementById('carne')
let linguica = document.getElementById('linguica')
let frango = document.getElementById('frango')
let resultado = document.getElementById("resultado")



function carnePessoa(duracao) {
  if (duracao >= 6) {
    return 350
  } else {
    return 200
  }
}

function linguicaPessoa(duracao) {
  if (duracao >= 6) {
    return 150
  } else {
    return 100
  }
}

function frangoPessoa(duracao) {
  if (duracao >= 6) {
    return 150
  } else {
    return 100
  }
}


function cervejaPessoa(duracao) {
  if (duracao >= 6) {
    return 2000
  } else {
    return 1200
  }
}
function bebidasPessoa(duracao) {
  if (duracao >= 6) {
    return 1500
  } else {
    return 1000
  }
}

function calcBarbecue() {
  let totalAdultos = adultos.value
  let totalCriancas = criancas.value
  let totalDuracao = duracao.value
  let caixinha1 = carne.checked
  let caixinha2 = linguica.checked
  let caixinha3 = frango.checked

  let quantidadeCarne = carnePessoa(duracao) * totalAdultos + (carnePessoa(duracao) / 2 * (totalCriancas))
  let quantidadeLinguica = linguicaPessoa(duracao) * totalAdultos + (linguicaPessoa(duracao) / 2 * (totalCriancas))
  let quantidadeFrango = frangoPessoa(duracao) * totalAdultos + (linguicaPessoa(duracao) / 2 * (totalCriancas))
  let quantidadeCerveja = cervejaPessoa(duracao) * totalAdultos
  let quantidadeBebidas = bebidasPessoa(duracao) * totalAdultos + (bebidasPessoa(duracao) / 2 * (totalCriancas))

  if (caixinha1 == true){
      resultado.innerHTML += `<p>🥩  ${quantidadeCarne} gramas de Carne`
  }
  if (caixinha2 == true){
    resultado.innerHTML += `<p><img class="imagem2" src="https://img.icons8.com/fluency/48/000000/sausage.png" height="20px">     ${quantidadeLinguica} gramas de Linguiça`
  }
  if(caixinha3 == true){
    resultado.innerHTML += `<p>🍗  ${quantidadeFrango} gramas de Frango`
  }
  
  resultado.innerHTML += `<p>🍺  ${Math.ceil(quantidadeCerveja / 355)} Latinhas de cerveja (355ml)`
  resultado.innerHTML += `<p>🥤  ${Math.ceil(quantidadeBebidas / 2000)} Garrafas de Bebidas (2L)`
  
}

function resetar(){
  resultado.innerHTML = null
  document.getElementById("form").reset()
}

