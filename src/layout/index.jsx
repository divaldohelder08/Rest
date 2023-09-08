import { CiBasketball } from "react-icons/ci"
import { CgSearch } from "react-icons/cg"
import { MdLogout } from "react-icons/md"
import { Link, Outlet } from "react-router-dom"
import { toast } from "react-toastify"

export default function Layout() {
  // const { setAuthenticated } = useContext(Context)
  // const navigator = useNavigate()
  // useEffect(() => {
  //   const token = localStorage.getItem(token)
  //   if (token) {
  //     api.defaults.headers.Authenticate = `Bearer ${JSON.parse(token)}`
  //     setAuthenticated(true)
  //     navigator("/venda")
  //   }
  // }, [])
  return (
    <>
      <header className="flex w-full p-4 px-10 items-center justify-between text-white static bg-[#00111A]">
        <div id="logo" className="w-48 h-auto  text-[42px] font-bold">
          <img src="/src/assets/Group 5946.png" alt="logo" />
        </div>
        <nav>
          <MdLogout
            className="cursor-pointer"
            size={22}
            stroke="2"
            onClick={() => {
              localStorage.removeItem("status")
              toast.success("Terminando sessão...")
              // setTimeout(() => navigator("/Home"), 200)
            }}
          />
        </nav>
      </header>
      <main className="w-full h-full grid-cols-all grid gap-4">
        <div>
          <nav className="flex p-2 h-auto items-center justify-between">
            <ul className="flex gap-4 h-full font-normal text-lg capitalize">
              <li>
                <Link>Refeições</Link>
              </li>
              <li>
                <Link>Sobremesas</Link>
              </li>
              <li>
                <Link>Bebidas</Link>
              </li>
              {/* <li>
                <Link>American pie 2</Link>
              </li> */}
            </ul>
            <div className="w-[635px] h-full px-3.5 py-2 bg-gray-900 rounded-[5px] justify-center items-center gap-3.5 inline-flex">
              <CgSearch size={19.5} className="fill-gray-500" />
              <input
                className="w-[254px] text-gray-500 text-base font-light leading-none bg-transparent focus:outline-none"
                placeholder="Busque por pratos ou ingredientes"
              />
            </div>
          </nav>
          <div className="w-full h-full grid grid-cols-4 gap-2 px-8 py-5">
            <Outlet />
          </div>
        </div>
        <section className="flex h-full bg-terciary w-full flex-col items-center gap-4 pt-3">
          <div className="w-[276px] px-[25px] py-[39px] bg-white rounded-lg flex-col justify-between items-start gap-16 flex h-[33rem]">
            <div className="w-[120px] h-12 flex-col justify-start items-start flex">
              <div className="text-black text-xl font-light leading-normal">
                9.500 KZ
              </div>
              <div className="justify-center items-center gap-[7px] inline-flex">
                <div className="w-[146px] text-black text-[15px] font-bold">
                  food explorer
                </div>
              </div>
            </div>
            <div className="w-[226px] flex-col justify-between items-start gap-[65px] flex">
              <div className="w-[226px] h-[0px] border border-black"></div>
              <div className="w-[226px] h-[0px] border border-black"></div>
              <div className="w-[226px] h-[0px] border border-black"></div>
              <div className="w-[226px] h-[0px] border border-black"></div>
            </div>
          </div>
          <div className="justify-between items-end gap-4 inline-flex text-sm font-medium">
            <button className="leading-normal px-4 py-2 bg-neutral-900 rounded-[5px] justify-center items-center gap-2 inline-flex">
              <CiBasketball size={32} />
              Novo Pedido
            </button>
            <button className="w-full  leading-normal px-2 py-2 bg-red-900 rounded-[5px] justify-center items-center flex">
              Faturar 4
            </button>
          </div>
        </section>
      </main>
    </>
  )
}
{
  /* <div className="w-[965px] h-[286px] justify-start items-end gap-[27px] inline-flex">
              <div className="w-[225px] h-[286px] p-6 bg-gray-950 rounded-lg border border-black flex-col justify-center items-center gap-[15px] inline-flex">
                <div className="w-[115px] h-[115px] justify-center items-center inline-flex">
                  <img
                    className="w-[115px] h-[115px]"
                    src="https://via.placeholder.com/115x115"
                  />
                </div>
                <div className="self-stretch text-center text-zinc-200 text-base font-bold leading-snug">
                  Salada Ravanello
                </div>
                <div className="w-[220px] h-[52px] justify-start items-start gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 h-[52px] text-center text-cyan-300 text-2xl font-light leading-[38.40px]">
                    R$ 49,97
                  </div>
                </div>
              </div>
            </div> */
}

//  ;<div className="grid w-96 grid-cols-3 gap-4">
//   //  <div className="bg-cyan-900 h-10 "></div>
//   //  <div className="bg-cyan-900 h-10 col-span-2"></div>
//   //  <div className="bg-cyan-900 h-10 col-span-2"></div>
//   //  <div className="bg-cyan-900 h-10"></div>
//   //  <div className="bg-cyan-900 h-10"></div>
//   //  <div className="bg-cyan-900 h-10 col-span-1"></div>
//   //  <div className="bg-cyan-900 h-10 col-span-1"></div>
//   //  <div className="bg-cyan-900 h-10"></div>
//   //  <div className="bg-cyan-900 h-10"></div>
//   //  <div className="bg-cyan-900 h-10"></div>
//   //  <div className="bg-cyan-900 h-10 col-span-3"></div>
//   //  <div className="bg-cyan-900 h-10"></div>
//   //  <div className="bg-cyan-900 h-10"></div>
//   //  <div className="bg-cyan-900 h-10"></div>
//  </div>
