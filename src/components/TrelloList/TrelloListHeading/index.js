import React, { useState } from 'react'
import { Heading, StyledHeaderWrapper } from './StyledListHeading'
import ContextMenu from '../../ContextMenu/ContextMenu'
import Icon from '../../Icon/Icon'

export const ListHeading = ({ title }) => {

   const [isOpen, setOpen] = useState(false)
   return (
      <ContextMenu title={title} isOpen={isOpen} setOpen={setOpen}>
         <StyledHeaderWrapper>
            <Heading >{title} </Heading>
            <Icon name="more_horiz" outlined />
         </StyledHeaderWrapper>
      </ContextMenu>
   )
}