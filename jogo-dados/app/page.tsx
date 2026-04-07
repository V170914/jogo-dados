"use client"

import { useState } from "react"
import Dado from "./components/Dado"

export default function Home() {
  const [dado1, setDado1] = useState(1)
  const [dado2, setDado2] = useState(1)
  const [resultado, setResultado] = useState("")

  function verificarVencedor(n1: number, n2: number) {
    if (n1 > n2) {
      setResultado("Jogador 1 venceu! 🏆")
    } else if (n2 > n1) {
      setResultado("Jogador 2 venceu! 🏆")
    } else {
      setResultado("Empate! ")
    }
  }

  function rolarDado1() {
    const novo = Math.floor(Math.random() * 6) + 1
    setDado1(novo)
  }

  function rolarDado2() {
    const novo = Math.floor(Math.random() * 6) + 1
    setDado2(novo)
  }

  function rolarAmbos() {
    const novo1 = Math.floor(Math.random() * 6) + 1
    const novo2 = Math.floor(Math.random() * 6) + 1

    setDado1(novo1)
    setDado2(novo2)

    verificarVencedor(novo1, novo2)
  }

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-10">

      <div className="flex gap-16">

        <div className="flex flex-col items-center gap-4">
          <p>Jogador 1</p>
          <Dado numero={dado1} />

          <button
            onClick={rolarDado1}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Tente novamente
          </button>
        </div>

        <div className="flex flex-col items-center gap-4">
          <p>Jogador 2</p>
          <Dado numero={dado2} />

          <button
            onClick={rolarDado2}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Tente novamente
          </button>
        </div>

      </div>

      <button
        onClick={rolarAmbos}
        className="bg-black text-white px-6 py-2 rounded"
      >
        Rolar ambos
      </button>

      <p className="text-xl font-bold">{resultado}</p>

    </main>
  )
}