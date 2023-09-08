
import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
// eslint-disable-next-line react/prop-types
export default function RotaPrivada({children}) {
  
const { Signed } = useContext(AuthContext)
  return Signed ? children : <Navigate to="/login" />
}
