import React, { useState } from 'react'
import { StyledTextArea, StyledButton, ButtonWrapper, StyledCard } from './StyledEditabledCard'
import { Card, CardContent, } from '@material-ui/core'
import { connect } from 'react-redux'

/**
 * Komponent pozwalający na edycję tekstu inline (Wyświetla albo tekst albo miejsce do jego edycji )
 * @param {String} description - tekst wyświetlany w karcie
 * @param {Function} setOpen - funkcja sterująca zamknięciem komponentu
 * @param {Function} action - akcja Która ma zostać wykonana podczas zapisu (Akcja z Reduxa)
 * @param {Function} dispatch - funkcja dispatch z Reduxa
 * @param {Bool} withButtons - zmienna sterująca wyświetlaniem się bądź nie przycisków "Zapisz" oraz "Cofnij"
 */
export const EditableTextArea = ({ description, setOpen, action, dispatch, withButtons, }) => {

   const [value, setValue] = useState(description)

   const handleSave = () => {
      if (value)
         dispatch(action(value))
   }

   return (
      <>
         <StyledTextArea
            autoFocus
            defaultValue={value}
            onInput={(e) => setValue(e.target.value)}
            cardheight={50}
            onBlur={() => setOpen(false)}

         />
         {
            withButtons &&
            <ButtonWrapper>
               <StyledButton onMouseDown={() => handleSave()}>Zapisz</StyledButton>
               <StyledButton>Cofnij</StyledButton>
            </ButtonWrapper>
         }

      </>
   )
}

const EditableCard = ({ description, action, dispatch, withButtons, }) => {
   const [open, setOpen] = useState(false)

   return (
      open ?
         <EditableTextArea
            description={description}
            setOpen={setOpen}
            open={open}
            action={action}
            dispatch={dispatch}
            withButtons={withButtons}
         />
         :
         <StyledCard onClick={() => setOpen(true)} >
            <CardContent style={{ padding: '10px' }}>
               {description}
            </CardContent>
         </StyledCard>
   )
}

export default connect()(EditableCard) 