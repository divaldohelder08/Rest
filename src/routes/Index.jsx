import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "../pages/Home"
import Venda from "../pages/Venda"
import Login from "../pages/Login"
import RotaPrivada from "./RotaPrivada"
import Layout from "../layout"
import Refeicao from "../pages/Refeicao"
import Clientes from "../pages/Clientes"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { AuthContext } from "../context/AuthContext"
import UploadForm from "../pages/UploadForm"
import Chatboot from "../pages/Chatboot"

export default function Index() {
  const rotas = createBrowserRouter([
    {
      path: "/venda",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <RotaPrivada>
              <Venda />
            </RotaPrivada>
          ),
        },
        {
          path: "Produto",
          element: (
            <RotaPrivada>
              <Refeicao />
            </RotaPrivada>
          ),
        },
        {
          path: "Clientes",
          element: (
            <RotaPrivada>
              <Clientes />
            </RotaPrivada>
          ),
        },
      ],
    },
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/upload",
      element: <UploadForm />,
    },
    {
      path: "/Chatboot",
      element:<Chatboot />
    },
  ])
  return (
    <AuthContext>
      <ToastContainer autoClose={3000} />
      <RouterProvider router={rotas} />
    </AuthContext>
  )
}
