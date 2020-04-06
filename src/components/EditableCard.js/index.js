import React, { useState } from 'react'
import { StyledTextArea, StyledButton, ButtonWrapper, StyledCard } from './StyledEditabledCard'
import { Card, CardContent, } from '@material-ui/core'
import { connect } from 'react-redux'


const EditableTextArea = ({ description, setOpen, action, dispatch }) => {

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

         <ButtonWrapper>
            <StyledButton onMouseDown={() => handleSave()}>Zapisz</StyledButton>
            <StyledButton>Cofnij</StyledButton>
         </ButtonWrapper>
      </>
   )
}

const EditableCard = ({ description, action, dispatch }) => {
   const [open, setOpen] = useState(false)

   return (
      open ?

         <EditableTextArea
            description={description}
            setOpen={setOpen}
            open={open}
            action={action}
            dispatch={dispatch}
         />
         :
         <StyledCard onClick={() => setOpen(true)} >
            <CardContent>
               {description}
            </CardContent>
         </StyledCard>
   )
}

export default connect()(EditableCard) 