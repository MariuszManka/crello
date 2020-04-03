import React, { createContext } from 'react'

const SubMenuContext = createContext()

export const SubMenu = ({ title }) => {

   const { Provider } = SubMenuContext

   return (
      <Provider>

      </Provider>
   )
}