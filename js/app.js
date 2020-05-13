let teclado = document.getElementsByClassName('teclado')[0]
let display = document.getElementById('display')
let num1 = '',
  num2 = '',
  op = 0,
  resultado = 0,
  expresion = ''

const seleccionarOperacion = () => {
  switch (event.target.id) {
    case 'dividido':
      op = 4
      num1 = Number(display.innerHTML)
      display.innerHTML = ''
      expresion = expresion + '/'
      break

    case 'por':
      op = 3
      num1 = Number(display.innerHTML)
      display.innerHTML = ''
      expresion = expresion + '*'
      break

    case 'menos':
      op = 2
      num1 = Number(display.innerHTML)
      display.innerHTML = ''
      expresion = expresion + '-'
      break

    case 'mas':
      op = 1
      num1 = Number(display.innerHTML)
      display.innerHTML = ''
      expresion = expresion + '+'
      break

    default:
      op = 0
      break
  }
}

const igualParaOperacionSencilla = () => {
  switch (op) {
    case 1:
      num2 = Number(display.innerHTML)
      resultado = num1 + num2
      if (resultado === Infinity || resultado === -Infinity) {
        display.innerHTML = 'Error'
      } else {
        display.innerHTML = resultado
      }
      break

    case 2:
      num2 = Number(display.innerHTML)
      resultado = num1 - num2
      if (resultado === Infinity || resultado === -Infinity) {
        display.innerHTML = 'Error'
      } else {
        display.innerHTML = resultado
      }
      break

    case 3:
      num2 = Number(display.innerHTML)
      resultado = num1 * num2
      if (resultado === Infinity || resultado === -Infinity) {
        display.innerHTML = 'Error'
      } else {
        display.innerHTML = resultado
      }
      break

    case 4:
      num2 = Number(display.innerHTML)
      resultado = num1 / num2
      if (resultado === Infinity || resultado === -Infinity) {
        display.innerHTML = 'Error'
      } else {
        display.innerHTML = resultado
      }
      break
  }
}

const igualParaOperacionSecuencia = () => {
  switch (op) {
    case 1:
      num2 = Number(num2)
      resultado += num2
      if (resultado === Infinity || resultado === -Infinity) {
        display.innerHTML = 'Error'
      } else {
        display.innerHTML = resultado
      }
      break

    case 2:
      num2 = Number(num2)
      resultado -= num2
      if (resultado === Infinity || resultado === -Infinity) {
        display.innerHTML = 'Error'
      } else {
        display.innerHTML = resultado
      }
      break

    case 3:
      num2 = Number(num2)
      resultado *= num2
      if (resultado === Infinity || resultado === -Infinity) {
        display.innerHTML = 'Error'
      } else {
        display.innerHTML = resultado
      }
      break

    case 4:
      num2 = Number(num2)
      resultado /= num2
      if (resultado === Infinity || resultado === -Infinity) {
        display.innerHTML = 'Error'
      } else {
        display.innerHTML = resultado
      }
      break
  }
}

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
    document.getElementById('0').onclick = this.imprimirNumeros
    document.getElementById('on').onclick = this.limpiarPantalla
    document.getElementById('punto').onclick = this.agregarPunto
    document.getElementById('sign').onclick = this.cambiarSigno
    document.getElementById('mas').onclick = this.operaciones
    document.getElementById('menos').onclick = this.operaciones
    document.getElementById('por').onclick = this.operaciones
    document.getElementById('dividido').onclick = this.operaciones
    document.getElementById('igual').onclick = this.igual
    document.onclick = this.numerosEnPantalla
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
    if (display.innerHTML === '0') {
      display.innerHTML = event.target.id
    } else {
      display.innerHTML += event.target.id
    }
  },
  limpiarPantalla: () => {
    display.innerHTML = '0'
    op = 0
    resultado = 0
    num1 = ''
    num2 = ''
    expresion = ''
  },
  agregarPunto: () => {
    if (!display.innerHTML.includes('.')) {
      if (display.innerHTML === '') {
        display.innerHTML += '0.'
      } else {
        display.innerHTML += '.'
      }
    }
  },
  cambiarSigno: () => {
    display.innerHTML = Number(display.innerHTML) * -1
  },
  numerosEnPantalla: () => {
    if (display.innerHTML.length >= 8) {
      display.innerHTML = display.innerHTML.slice(0, 8)
    }
  },
  operaciones: () => {
    if (display.innerHTML !== '0') {
      seleccionarOperacion()
    }
  },
  igual: () => {
    if (op !== 0) {
      expresion = expresion + '='
      if (expresion.endsWith('==')) {
        igualParaOperacionSecuencia()
      } else {
        igualParaOperacionSencilla()
      }
    }
  },
}

Calculadora.init()
