import React, { useReducer } from 'react'
import { DragHandle, Heading, StyledHeaderWrapper } from './StyledListHeading'

import Icon from '../../Icon/Icon'
import { StyledTextArea } from '../../EditableCard.js/StyledEditabledCard'
import { connect } from 'react-redux'
import { changeListTitle } from '../../../actions'
const ListHeading = ({ title, listID, dispatch, dragHandleProps }) => {
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
            dispatch(changeListTitle(listID, value))
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
                  aria-label={`Nazwa listy: ${title}`}
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
               <Heading type="button" aria-label={`Edytuj nazwę listy: ${title}`} onClick={() => setState({ open: true })}>
                  {title}
               </Heading>
         }
         <DragHandle {...dragHandleProps} aria-label={`Przeciągnij listę: ${title}`}>
            <Icon name="more_horiz" />
         </DragHandle>
      </StyledHeaderWrapper>
   )
}

export default connect()(ListHeading)
