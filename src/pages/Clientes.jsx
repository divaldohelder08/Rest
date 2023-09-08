import { useNavigate } from "react-router-dom"

export default function Clientes() {
  const navigator = useNavigate()
  return (
    <div className="flex w-full h-full items-center justify-center flex-col gap-2">
      <h1 className="text-white">Clientes</h1>
      <div className="flex justify-between items-center gap-5">
        <button
          className="p-2.5 bg-indigo-700 rounded-sm"
          onClick={() => navigator("Produto")}
        >
          Ver Produtos
        </button>
        <button
          className="p-2.5 bg-indigo-700 rounded-sm"
          onClick={() => navigator("/")}
        >
          Ver vendas
        </button>
      </div>
    </div>
  )
}
