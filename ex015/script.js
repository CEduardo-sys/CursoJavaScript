function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if(fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e digite novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value) 
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked ){
            genero = "Homem"
            if(idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'menino bebe.jpg')
            } else if(idade < 21){
                //Jovem
                img.setAttribute('src','menino jovem.jpg')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src','homem.jpg')
            } else{
                //Idoso
                img.setAttribute('src','homem idoso.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'menina bebe.jpg')
            } else if(idade < 21){
                //Jovem
                img.setAttribute('src','menina jovem.jpg')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src','mulher.jpg')
            } else{
                //Idoso
                img.setAttribute('src','mulher idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}