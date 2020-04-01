import React, { useState } from 'react'
import { Heading } from './StyledListHeading'
import ContextMenu from '../../ContextMenu/ContextMenu'

export const ListHeading = ({ title }) => {

   const [isOpen, setOpen] = useState(false)
   return (
      <ContextMenu title={title} isOpen={isOpen} setOpen={setOpen}>
         <Heading >{title}</Heading>
      </ContextMenu>
   )
}