import React from 'react'
import { Button, } from '@material-ui/core'
import { StyledColorPicker, StyledWrapper, StyledTextField, ButtonWrapper } from './StyledTagsMenu'


const EditTag = ({ props, handleChangeColor, setState }) => {
   const { color, id, openAll, openPicker, name } = props

   const handleChange = (value) => {
      setState({ name: value })
   }

   const handleSubmit = () => {
      handleChangeColor(color, name, id)
      setState({ open: false })
   }

   return (
      openAll || openPicker ?
         <>
            <StyledWrapper>
               {openAll && <StyledTextField
                  id="outlined-basic"
                  label="Nazwa"
                  placeholder={name}
                  autoFocus
                  style={{ marginTop: '8px', padding: 0 }}
                  onChange={(e) => handleChange(e.target.value)}
                  onKeyDown={(e) => {
                     if (e.key === 'Enter')
                        handleSubmit()
                  }}
               />} {/**Komponent nie jest wyświetlany dopóki użytkownik nie kliknie w "ikonkę" */}
               <StyledColorPicker color={color} onChangeComplete={(c) => setState({ color: c.hex })} />
               <ButtonWrapper>
                  <Button onClick={() => handleSubmit()}>Zapisz</Button> {/**Komponent nie jest wyświetlany dopóki użytkownik nie kliknie w "ikonkę" */}
                  <Button onClick={() => setState({ open: false, openAll: false, openPicker: false })} >Anuluj</Button>
               </ButtonWrapper>
            </StyledWrapper>
         </>
         :
         null
   )
}

export default EditTag