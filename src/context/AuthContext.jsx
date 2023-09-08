import { useState, createContext } from "react"
import { useEffect } from "react"
const Context = createContext()

// eslint-disable-next-line react/prop-types
function AuthContext({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loadingStorageData = async () => {
      const storageUser = localStorage.getItem("@Auth:user")
      const storageToken = localStorage.getItem("@Auth:user")
      if (storageToken && storageUser) setUser(storageUser)
    }
    loadingStorageData()
  })
  return (
    <Context.Provider value={{ user, Signed: !!user, setUser }}>
      {children}
    </Context.Provider>
  )
}

export { Context, AuthContext }
