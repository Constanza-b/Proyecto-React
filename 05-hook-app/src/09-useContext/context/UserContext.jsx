import { createContext } from 'react';


export const UserContext = createContext();

// El UserContex sirve para: 
// permite saber como luce la información que vamos a colocar ahi
// para que nuestro hook de react busque este contexto
// para definir el proveedor que es UserProvider