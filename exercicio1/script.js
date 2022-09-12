let coxinha = prompt('Deseja comer uma coxinha?')
let conta = 0

while(coxinha === 'S'){
    conta += 2.50
    coxinha = prompt('Deseja comer mais coxinhas?')
}

if (coxinha === 'N'){
    console.log(`Nª de coxinhas consumidas: ${conta/2.50}\nValor da conta: R$${conta}`)
}