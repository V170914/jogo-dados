"use client"

type Props = {
  numero: number
}

export default function Dado({ numero }: Props) {
  return (
    <img
      src={`/dado${numero}.png`}
      alt={`Dado ${numero}`}
      className="w-32"
    />
  )
}