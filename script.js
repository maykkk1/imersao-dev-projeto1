const fieldReset = () => {
    notaDoPrimeiroBimestre.value = ''
    notaDoSegundoBimestre.value = ''
    notaDoTerceiroBimestre.value = ''
    notaDoQuartoBimestre.value = ''
    document.getElementById('celsius').value = ''
    document.getElementById('situacaoEscolar').innerHTML = ''
    document.getElementById('notaFinal').innerHTML = ''
    document.getElementById('fahrenheit').innerHTML = ''
}

const calculatorBtn = document.getElementById('calculatorBtn')
const converterBtn = document.getElementById('conveterBtn')
const calculator = document.getElementById('calculator')
const converter = document.getElementById('converter')

const changeApp = (showApp, hiddeApp) => {
    hiddeApp.style.display = 'none'
    showApp.style.display = 'flex'
}

calculatorBtn.addEventListener('click', () => {
    fieldReset()
    changeApp(calculator, converter)
})
converterBtn.addEventListener('click', () => {
    fieldReset()
    changeApp(converter, calculator)
})



const notaDoPrimeiroBimestre = document.getElementById("notaDoPrimeiroBimestre");
const notaDoSegundoBimestre = document.getElementById("notaDoSegundoBimestre");
const notaDoTerceiroBimestre = document.getElementById("notaDoTerceiroBimestre");
const notaDoQuartoBimestre = document.getElementById("notaDoQuartoBimestre");
const button = document.getElementById("mostrarResultado");

const mostrarResultado = () => {
  if (
    (notaDoPrimeiroBimestre.value.length == 0 ||
      notaDoSegundoBimestre.value.length == 0,
    notaDoTerceiroBimestre.value.length == 0,
    notaDoQuartoBimestre.value.length == 0)
  ) {
    return null;
  }
  const res =
    (parseFloat(notaDoPrimeiroBimestre.value) +
    parseFloat(notaDoSegundoBimestre.value) +
    parseFloat(notaDoTerceiroBimestre.value) +
    parseFloat(notaDoQuartoBimestre.value))/
    4;
    if (res >= 5) {
        document.getElementById('situacaoEscolar').style.color = 'green'
        document.getElementById('situacaoEscolar').innerHTML = 'Aprovado!'
    } else {
        document.getElementById('situacaoEscolar').style.color = 'red'  
        document.getElementById('situacaoEscolar').innerHTML = 'Reprovado.'
    }
    document.getElementById('notaFinal').innerHTML = `Nota final: ${res.toFixed(1)}`
};

button.addEventListener("click", (e)=>(
    e.preventDefault(),
    mostrarResultado()
));



const getCelsius = document.getElementById('celsius')
const calculateTemperatureBtn = document.getElementById('calculateTemperatureBtn')

const calculateTemperature = () => {
    const celsius = getCelsius.value
    const fahrenheit = (celsius * (9/5)) + 32
    document.getElementById('fahrenheit').innerHTML = `${fahrenheit.toFixed(1)} °F`
}

calculateTemperatureBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    calculateTemperature()
})


