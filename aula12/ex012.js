var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
console.log(`Agora são exatamente ${hora}h : ${minutos}min `)
if(hora < 12) {
    console.log('Bom Dia!')
} else if (hora <=18){
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noie!')
}