import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Context } from "../context/AuthContext"

export default function Home() {
  const { authenticated } = useContext(Context)
  const navigate = useNavigate()
  console.log("login", authenticated)
  return (
    <div className="flex w-full h-full items-center justify-center flex-col gap-2">
      <h1 className="text-white">Home</h1>
      <button
        onClick={() => navigate("/venda")}
        ///onClick={Auth}
        className="p-2.5 bg-indigo-700 rounded-sm"
      >
        Ir para logado
      </button>
    </div>
  )
}
 