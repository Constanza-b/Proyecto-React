import { useState } from "react"
import { UserContext } from "./UserContext"

// // const user = {
// //     id: '123',
// //     name: 'Constanza Becerra',
// //     email: 'ing.constanza11@gmail.com'
// }

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState();



  return (
    // <UserContext.Provider value={{ hola: 'Mundo', user: user}}>
    <UserContext.Provider value={{ user, setUser }}>
        { children }
    </UserContext.Provider>
  )
}
