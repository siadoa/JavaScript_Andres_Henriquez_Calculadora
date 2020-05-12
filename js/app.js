let teclado = document.getElementsByClassName('teclado')[0]
let display = document.getElementById('display')
let log = ''

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
    display.innerHTML = log + event.target.alt
    log = log + event.target.alt
  },
  addCeros: (event) => {
    if (display.innerHTML !== '0') {
      display.innerHTML = log + event.target.alt
      log = log + event.target.alt
    }
  },
  limpiarPantalla: () => {
    display.innerHTML = '0'
    log = ''
  },
  agregarPunto: () => {
    if (!display.innerHTML.includes('.')) {
      display.innerHTML = log + '.'
      log = log + '.'
    }
  },
  operaciones: (event) => {
    if (display.innerHTML !== '0') {
      switch (event.target.id) {
        case 'dividido':
          display.innerHTML = ''
          log = log + '/'
          break

        case 'por':
          display.innerHTML = ''
          log = log + '*'
          break

        case 'menos':
          display.innerHTML = ''
          log = log + '-'
          break

        case 'mas':
          display.innerHTML = ''
          log = log + '+'
          break

        default:
          break
      }
    }
  },
  igual: (event) => {
    if (display.innerHTML !== '0') {
      let result
      if (log.includes('+')) {
        result = log
          .split('+')
          .map((el) => Number(el))
          .reduce((a, b) => a + b)
        display.innerHTML = result
      }
      if (log.includes('-')) {
        result = log
          .split('-')
          .map((el) => Number(el))
          .reduce((a, b) => a - b)
        display.innerHTML = result
      }
    }
  },
  cambiarSigno: () => {
    if (display.innerHTML !== '0') {
      if (display.innerHTML.startsWith('-')) {
        display.innerHTML = display.innerHTML.slice(1)
        log = display.innerHTML
      }
      display.innerHTML = `-${display.innerHTML}`
      log = display.innerHTML
    }
  },
}

Calculadora.init()
