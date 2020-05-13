let teclado = document.getElementsByClassName('teclado')[0]
let display = document.getElementById('display')
let num1 = ''
let num2 = ''
let op = 0
let result = 0

let Calculadora = {
  init: function () {
    teclado.onmousedown = this.presionarBoton
    teclado.onmouseup = this.soltarBoton
    document.getElementById('1').onclick = this.imprimirNumeros
    document.getElementById('2').onclick = this.imprimirNumeros
    document.getElementById('3').onclick = this.imprimirNumeros
    document.getElementById('4').onclick = this.imprimirNumeros
    document.getElementById('5').onclick = this.imprimirNumeros
    document.getElementById('6').onclick = this.imprimirNumeros
    document.getElementById('7').onclick = this.imprimirNumeros
    document.getElementById('8').onclick = this.imprimirNumeros
    document.getElementById('9').onclick = this.imprimirNumeros
    document.getElementById('0').onclick = this.addCeros
    document.getElementById('on').onclick = this.limpiarPantalla
    document.getElementById('punto').onclick = this.agregarPunto
    // document.getElementById('sign').onclick = this.cambiarSigno
    document.getElementById('mas').onclick = this.operaciones
    document.getElementById('menos').onclick = this.operaciones
    document.getElementById('por').onclick = this.operaciones
    document.getElementById('dividido').onclick = this.operaciones
    document.getElementById('igual').onclick = this.igual
  },
  presionarBoton: (event) => {
    if (event.target.classList[0] == 'tecla') {
      event.target.style.transform = 'scale(0.95, 0.95)'
    }
  },
  soltarBoton: (event) => {
    if (event.target.classList[0] == 'tecla') {
      event.target.style.transform = 'scale(1, 1)'
    }
  },
  imprimirNumeros: (event) => {
    if (op === 0) {
      num1 = num1 + event.target.id
      display.innerHTML = num1
    } else {
      num2 = num2 + event.target.id
      display.innerHTML = num2
    }
  },
  addCeros: (event) => {
    if (op === 0) {
      if (display.innerHTML !== '0') {
        num1 = num1 + event.target.id
        display.innerHTML = num1
      }
    } else {
      if (display.innerHTML !== '0') {
        num2 = num2 + event.target.id
        display.innerHTML = num2
      }
    }
  },
  limpiarPantalla: () => {
    display.innerHTML = '0'
    op = 0
    num1 = ''
    num2 = ''
  },
  agregarPunto: () => {
    if (op === 0) {
      if (!display.innerHTML.includes('.')) {
        num1 = num1 + '.'
        display.innerHTML = num1
      }
    } else {
      if (!display.innerHTML.includes('.')) {
        num2 = num2 + '.'
        display.innerHTML = num2
      }
    }
  },

  operaciones: (event) => {
    if (display.innerHTML !== '0') {
      switch (event.target.id) {
        case 'dividido':
          op = 4
          display.innerHTML = ''
          num1 = Number(num1)
          break

        case 'por':
          op = 3
          display.innerHTML = ''
          num1 = Number(num1)
          break

        case 'menos':
          op = 2
          display.innerHTML = ''
          num1 = Number(num1)
          break

        case 'mas':
          op = 1
          display.innerHTML = ''
          num1 = Number(num1)
          break

        default:
          op = 0
          break
      }
    }
  },
  igual: () => {
    if (op !== 0) {
      switch (op) {
        case 1:
          num2 = Number(num2)
          result = num1 + num2
          display.innerHTML = result
          num1 = result
          num2 = ''
          break

        case 2:
          num2 = Number(num2)
          result = num1 - num2
          display.innerHTML = result
          num1 = result
          num2 = ''
          break

        case 3:
          num2 = Number(num2)
          result = num1 * num2
          display.innerHTML = result
          num1 = result
          num2 = ''
          break

        case 4:
          num2 = Number(num2)
          result = num1 / num2
          display.innerHTML = result
          num1 = result
          num2 = ''
          break

        default:
          break
      }
    }
  },
  cambiarSigno: () => {},
  limiteEnPantalla: () => {
    if (display.innerHTML.length >= 8) {
      display.innerHTML = display.innerHTML.slice(0, 8)
    }
  },
}

Calculadora.init()
