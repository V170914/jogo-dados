"use client"

import { useState } from "react"
import Dado from "./components/Dado"

export default function Home() {
  const [dado1, setDado1] = useState(1)
  const [dado2, setDado2] = useState(1)

  function rolarDado1() {
    setDado1(Math.floor(Math.random() * 6) + 1)
  }

  function rolarDado2() {
    setDado2(Math.floor(Math.random() * 6) + 1)
  }

  function rolarAmbos() {
    rolarDado1()
    rolarDado2()
  }

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-10">

      <div className="flex gap-16">

        {/* Jogador 1 */}
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

        {/* Jogador 2 */}
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

      {/* Botão geral */}
      <button
        onClick={rolarAmbos}
        className="bg-black text-white px-6 py-2 rounded"
      >
        Rolar ambos
      </button>

    </main>
  )
}