const inNome   = document.getElementById("inNome")
const btnAdicionar  = document.getElementById("btnAdicionar")
const btnListar   = document.getElementById("btnListar")
const btnTabela  = document.getElementById("btnTabela")
const outLista  = document.getElementById("outLista")

const clubes = []

const adicionarClube = () => {
 const clube = inNome.value

 if(clube === ''){
     alert("Digite os valores corretos")
     inNome.focus()
     return
 }

 if(!clubes.includes(clube)){
  clubes.push(clube)
 }else{
  alert(`${clube} já existe! Digite outro.`)
 }

 console.log(clubes)
 inNome.value = ''
}

btnAdicionar.addEventListener("click", adicionarClube)

const listarClubes = () => {
 if(clubes.length == 0){
     alert('Não há clubes no sistema')
     return    
 }
 let lista = ''
clubes.forEach((clube, index) =>{
     return (lista += `${index + 1}. ${clube}\n`)
 })
 console.log(lista)
 outLista.textContent = lista
}
 btnListar.addEventListener('click', listarClubes)

 const tabelaClubes = () => {
    if(clubes.length == 0 || clubes.length % 2 != 0 ){
       alert('ERRO..: Número de clubes ímpar ou 0')
        return    
    }

    const metadeInicio = clubes.slice(0, clubes.length / 2)
    console.log(metadeInicio)

    const metadeFim = clubes.slice(clubes.length / 2, clubes.length).reverse()
    console.log(metadeFim)

   lista = ''
   for(let i = 0; i < metadeInicio.length; i++){
    lista += `${i + 1}º Jogo - ${metadeInicio[i]} x ${metadeFim[i]}\n`
   }

   console.log(lista)
   outLista.textContent = lista
  }
  btnTabela.addEventListener("click", tabelaClubes)
