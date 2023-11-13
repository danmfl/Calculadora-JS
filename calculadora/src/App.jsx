import React, {useState} from "react";

function App() {
  const [primeiroValor, setPrimeiroValor] = useState()
  const [segundoValor, setSegundoValor] = useState()
  const[resultado, setResultado] = useState()
  

  const getPrimeiroValor = (evento) => {
    setPrimeiroValor(parseFloat(evento.target.value))
  }
  
  const getSegundoValor = (evento) => {
    setSegundoValor(parseFloat(evento.target.value))
  }

  const soma = () => {
    setResultado(primeiroValor + segundoValor)
  }

  const subtracao = () => {
    setResultado(primeiroValor - segundoValor)
  }

  const multiplicacao = () => {
    setResultado(primeiroValor * segundoValor)
  }

  const divisao = () => {
    setResultado(primeiroValor / segundoValor)
  }
  
  return (
    <main>
      <h1>Calculadora</h1>
      <input onChange={getPrimeiroValor} type="text" />
      <input onChange={getSegundoValor} type="text" />
      <button onClick={soma}>+</button>
      <button onClick={subtracao}>-</button>
      <button onClick={multiplicacao}>*</button>
      <button onClick={divisao}>/</button>
      <h2>{resultado}</h2>
    </main>
  )
}

export default App
