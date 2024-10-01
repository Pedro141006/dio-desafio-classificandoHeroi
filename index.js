const { stdin } = require('node:process')
const readline = require('node:readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let totalDeXP
let nome

rl.question('Qual o seu nome?\n', ansawer => {
  nome = String(ansawer)

  rl.question('Qual o seu nível de XP?\n', ansawer => {
    totalDeXP = parseInt(ansawer)

    let nivel

    if (totalDeXP < 1000) {
      nivel = 'Ferro'
    } else if (totalDeXP >= 1001 && totalDeXP <= 2000) {
      nivel = 'Bronze'
    } else if (totalDeXP >= 2001 && totalDeXP <= 5000) {
      nivel = 'Prata'
    } else if (totalDeXP >= 5001 && totalDeXP <= 7000) {
      nivel = 'Ouro'
    } else if (totalDeXP >= 7001 && totalDeXP <= 8000) {
      nivel = 'Platina'
    } else if (totalDeXP >= 8001 && totalDeXP <= 9000) {
      nivel = 'Ascendente'
    } else if (totalDeXP >= 9001 && totalDeXP <= 10000) {
      nivel = 'Imortal'
    } else if (totalDeXP >= 10001) {
      nivel = 'Radiante'
    }

    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`)

    rl.close()
  })
})
