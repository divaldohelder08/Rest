import { BsShieldCheck } from "react-icons/bs"
import { useRef, useState } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { Waveform } from "@uiball/loaders"
import api from "../api"
import { useContext } from "react"
import { AuthContext, Context } from "../context/AuthContext"

export default function Login() {
  const { setAuthenticated } = useContext(Context)
  const [Login, setLogin] = useState(null)
  const [loading, setLoading] = useState(false) // Estado para controlar o carregamento
  const { setUser } = useContext(AuthContext)

  const email = useRef()
  const password = useRef()
  const navigator = useNavigate()

  const MakeData = () => {
    setLogin({ email: email.current.value, password: password.current.value })
  }

  const Send = async () => {
    try {
      setLoading(true) // Iniciar carregamento
      const {
        data: { token },
        status,
        data,
        user,
      } = await api.post("/authenticate", Login)
      if (status !== 200) {
        setLoading(false) // Parar o carregamento
        return toast.error("Aconteceu um erro por favor tente novamente")
      }

      setUser(data)
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`
      localStorage.setItem("@Auth:token", token)
      localStorage.setItem("@Auth:user", user)
      toast.success("Iniciando sessão...")
      setLoading(false) // Parar o carregamento
      setTimeout(() => {
        navigator("/venda")
      }, 3000)
    } catch (error) {
      setLoading(false) // Parar o carregamento
      toast.error("Aconteceu um erro por favor tente novamente")
      console.error(error.message)
      email.current.classList.add("error")
      password.current.classList.add("error")
      setTimeout(() => {
        email.current.classList.remove("error")
        password.current.classList.remove("error")
      }, 3000)
    }
  }

  return (
    <div className="flex w-full h-full items-center justify-evenly">
      <div className="w-[255.56px] h-[47.17px] text-white text-[42px] font-bold">
        <img src="/src/assets/Group 5946.png" alt="logo" />
      </div>
      <div className="w-80 p-8 bg-secundary rounded-2xl flex-col justify-center items-center gap-8 inline-flex">
        <h5 className="mb-0 text-2xl font-medium mt-0 text-white text-center">
          Login
        </h5>
        <div className="h-auto flex-col justify-start items-start flex gap-3.5 w-full text-white">
          <input
            type="email"
            ref={email}
            placeholder="Insira o seu email"
            name="email"
            onChange={() => {
              MakeData()
            }}
            className="border border-[#7C7C8A] font-light w-full px-3.5 rounded-md bg-transparent  block shadow-none relative text-[#7C7C8A] flex-all h-auto !outline-none overflow-visible py-2.5 focus:outline-none focus:ring-transparent focus:ring-0"
          />
          <input
            type="password"
            name="password"
            ref={password}
            onChange={() => {
              MakeData()
            }}
            className="border border-[#7C7C8A] font-light w-full px-3.5 rounded-md bg-transparent text-sm block shadow-none relative text-[#7C7C8A] flex-all h-auto !outline-none overflow-visible py-2.5 focus:outline-none focus:ring-transparent focus:ring-0"
            placeholder="Insira a sua senha"
          />
          <p className="text-white inline-flex gap-2.5 text-sm w-full items-center justify-center">
            <BsShieldCheck className="fill-green-500" size={20} />
            Segurança em primeiro lugar
          </p>
          {loading && (
            <Waveform size={40} lineWeight={3.5} speed={1} color="black" />
          )}
        </div>

        <button
          className="text-center text-white text-sm font-medium leading-normal self-stretch px-8 py-3 bg-red-900 rounded-[5px] justify-center items-center gap-2 inline-flex"
          onClick={() => Send()}
        >
          Entrar
        </button>
      </div>
    </div>
  )
}
