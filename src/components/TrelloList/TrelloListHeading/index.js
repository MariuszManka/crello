import React, { useState, useReducer } from 'react'
import { Heading, StyledHeaderWrapper } from './StyledListHeading'
import ContextMenu from '../../ContextMenu/ContextMenu'
import Icon from '../../Icon/Icon'
import { StyledTextArea } from '../../EditableCard.js/StyledEditabledCard'
import { connect } from 'react-redux'
import { changeListTitle } from '../../../actions'

const ListHeading = ({ title, dispatch }) => {
   const [state, setState] = useReducer((state, newState) => ({ ...state, ...newState }),
      {
         open: false,
         value: title
      })

   const handleSave = () => {
      if (value.trim()) {
         if (value.trim() === title) {
            setState({ open: false })
            return
         }
         else {
            dispatch(changeListTitle(title, value))
            setState({ open: false })
         }
      }
      return
   }


   const { open, value } = state
   return (

      <StyledHeaderWrapper>
         {
            open ?
               <StyledTextArea
                  value={value}
                  autoFocus
                  style={{ margin: '5px 10px 10px 0', padding: '5px 10px' }}
                  onChange={(e) => setState({ value: e.target.value })}
                  onBlur={(e) => handleSave()}
                  onKeyDown={(e) => {
                     if (e.key === 'Enter')
                        handleSave()
                  }}

               />
               :
               <Heading onClick={() => setState({ open: true })}>
                  {title}
               </Heading>
         }
         <Icon name="more_horiz" outlined />
      </StyledHeaderWrapper>
   )
}

export default connect()(ListHeading)