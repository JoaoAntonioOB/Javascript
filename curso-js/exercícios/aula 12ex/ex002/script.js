function verificar(){
    var data = new DataTransfer()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')
    if (fano.value.lenght == 0 || fano.value > ano){
    window.alert(`(ERRO) Verifique os dados e tente novamente)`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade =  ano - Number(fano.value)
       var genero = ''
       var img = document.createdElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checkend) {
        genero = 'homem'
        if (idade >= 0 && idade < 10){
            img.setAttribute('src', 'menino.jpg')
        } else if (idade < 21){
            img.setAttribute('src', 'homem.jpg')
        } else if(idade < 50) {
            img.setAttribute('src', 'homem.jpg')
        } else {
            img.setAttribute('src', 'velho.jpg')
        }
       }
       if (fsex[1].checkend){
        genero = 'mulher'
        if (idade >= 0 && idade < 10){
            img.setAttribute('src', 'menina.jpg')
        } else if (idade < 21){
            img.setAttribute('src', 'mulher.jpg')
        } else if(idade < 50) {
            img.setAttribute('src', 'mulher.jpg')
        } else {
            img.setAttribute('src', 'velha.jpg')
        }
       } 
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}

