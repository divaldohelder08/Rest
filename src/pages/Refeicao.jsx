import { useState } from "react"
import api from "../api"
// import { useNavigate } from "react-router-dom"

export default function Refeicao() {
  const [image, setImage] = useState(null)
  const [mensagem, setMensagem] = useState()
  // const navigator = useNavigate()
  const refeicao = [
    {
      nome: "Salada Ravanellso",
      price: "49.97",
      img: "/src/assets/refeicoes/Dishrefeicoes.png",
    },
    {
      nome: "Salada Ravanellso",
      price: "49.97",
      img: "/src/assets/refeicoes/Dishrefeicoes.png",
    },
  ]
  async function Update(e) {
    e.preventDefault()

    console.log("Update function called")

    // Verifique se o estado `image` não está vazio
    if (!image) {
      console.error("A imagem está vazia")
      return
    }

    console.log(image)
    const formData = new FormData(e.currentTarget)
    const values = [...formData.values()]
    const isEmpty = values.includes("")
    if (isEmpty) {
      console.log("please provide all values")
      return
    }

    // get an object with all values
    const data = Object.fromEntries(formData)
    // do something
    console.log(data)

    // clear inputs
    e.currentTarget.reset()
    await api
      .post("/profile", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((Response) => {
        console.log("sucesso", Response)
        setMensagem("feito")
      })
      .catch((err) => {
        setMensagem(err)
      })
  }
  return (
    <>
      <div>
        {/* <h1>{mensagem ? mensagem : "Faça já o seu upload"}</h1> */}
        <form onSubmit={Update} id="ola">
          {/* Verifique se o evento onChange está configurado corretamente */}
          {/* eslint-disable */}
          <label for={"photo"}>Enter account number:</label>
          {/* eslint-enable */}
          <input
            type="file"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
      {refeicao?.map((item, key) => {
        return (
          <div
            key={key}
            className="w-56 h-72 p-6 bg-gray-950 rounded-lg border border-black flex-col justify-center items-center gap-3 inline-flex"
          >
            <div className="w-28 h-28 justify-center items-center inline-flex">
              <img src={item.img} />
            </div>
            <div className="self-stretch text-center text-zinc-200 text-xl font-bold leading-7">
              {item.nome}
            </div>
            <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
              <div className="grow shrink basis-0 text-center text-stone-300 text-sm font-normal leading-snug">
                Massa fresca com camarões e pesto.
              </div>
            </div>
            <div className="w-[220px] h-[52px] justify-start items-start gap-2.5 inline-flex">
              <div className="grow shrink basis-0 h-12 text-center text-cyan-300 text-2xl font-light leading-[38.40px]">
                Kz {item.price}
              </div>
            </div>
            <div className="justify-start items-center gap-4 inline-flex">
              <div className="w-[100px] h-8 justify-center items-center gap-3.5 flex">
                <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
                <div className="justify-start items-start inline-flex">
                  <div className="w-6 text-zinc-200 text-sm font-bold leading-loose">
                    01
                  </div>
                  <div className="w-6 h-6 relative flex-col justify-start items-start flex">
                    -
                  </div>
                  <div className="w-6 h-6 relative flex-col justify-start items-start flex">
                    +
                  </div>
                </div>
              </div>
              <div className="px-4 py-2 bg-red-900 rounded-[5px] justify-center items-center gap-2 flex">
                <div className="text-center text-white text-xs font-medium leading-normal">
                  incluir
                </div>
              </div>
            </div>
          </div>
        )
      })}
      {/* <div className="flex justify-between items-center gap-5">
        <button
          className="p-2.5 bg-indigo-700 rounded-sm"
          onClick={() => navigator("Clientes")}
        >
          Ver Clientes
        </button>
        <button
          className="p-2.5 bg-indigo-700 rounded-sm"
          onClick={() => navigator("/venda")}
        >
          Ver vendas
        </button>
      </div> */}
    </>
  )
}
