let teclado = document.getElementsByClassName('teclado')[0]

const presionarBoton = () => {
  teclado.addEventListener('mousedown', function (event) {
    if (event.target.classList[0] == 'tecla') {
      event.target.style.transform = 'scale(0.95, 0.95)'
    }
  })
  teclado.addEventListener('mouseup', function (event) {
    if (event.target.classList[0] == 'tecla') {
      event.target.style.transform = 'scale(1, 1)'
    }
  })
}

let Calculadora = {
  init: function () {
    presionarBoton()
  },
}

Calculadora.init()
