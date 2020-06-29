import React, { useReducer } from 'react'
import { Button, Dialog, DialogTitle, DialogActions, DialogContent, } from '@material-ui/core'
import { StyledColorPicker, StyledWrapper, ButtonWrapper, StyledButton } from './StyledTagsMenu'
import { connect } from 'react-redux'
import { changeTagColor } from '../../../../actions/subMenusActions'
import { AddTagsField } from '../../../globalStyles/StyledTextFields'

const EditTag = ({ dispatch, open, setOpenEditModal, state, setState }) => {
   console.log(state)

   const {
      color,
      name,
      id,
   } = state

   const handleChange = (value) => {
      setState({ name: value })
   }
   const handleClose = () => {
      setOpenEditModal(false)
      setState({
         color,
         name,
         id,
         openAll: false,
         openPicker: false
      })
      dispatch(changeTagColor(color, name, id))
   }

   return (
      <>
         <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} >
            <DialogTitle id="customized-dialog-title" onClose={handleClose} >
               {`Edycja etykiety: "${name}"`}
            </DialogTitle>
            <DialogContent dividers>
               <AddTagsField
                  autoFocus
                  margin='dense'
                  size="small"
                  label="Nazwa"
                  variant="outlined"
                  defaultValue={name}
                  onChange={(e) => handleChange(e.target.value)}
                  onKeyDown={(e) => {
                     if (e.key === 'Enter')
                        handleClose()
                  }}
               />
            </DialogContent>
            <DialogContent dividers style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', minWidth: '400px' }}>
               <StyledColorPicker color={color} onChangeComplete={(c) => setState({ color: c.hex })} />
            </DialogContent>
            <DialogActions>
               <StyledButton
                  onClick={handleClose}
                  color="primary"
               >
                  Zapisz
          </StyledButton>
               <StyledButton
                  onClick={() => setOpenEditModal(false)}
                  color="primary"
               >
                  Anuluj
          </StyledButton>
            </DialogActions>
         </Dialog>
      </>

      // {openAll && <StyledTextField
      //    id="outlined-basic"
      //    label="Nazwa"
      //    placeholder={name}
      //    autoFocus
      //    style={{ marginTop: '8px', padding: 0 }}
      //    onChange={(e) => handleChange(e.target.value)}
      //    onKeyDown={(e) => {
      //       if (e.key === 'Enter')
      //          handleSubmit()
      //    }}
      // />} {/**Komponent nie jest wyświetlany dopóki użytkownik nie kliknie w "ikonkę" */}
      // <StyledColorPicker color={color} onChangeComplete={(c) => setState({ color: c.hex })} />
      // <ButtonWrapper>
      //    <Button onClick={() => handleSubmit()}>Zapisz</Button> {/**Komponent nie jest wyświetlany dopóki użytkownik nie kliknie w "ikonkę" */}
      //    <Button onClick={() => setState({ open: false, openAll: false, openPicker: false })} >Anuluj</Button>
      // </ButtonWrapper>






      //    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      //    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
      //       Dodaj nową etykietę
      //   </DialogTitle>
      //    <DialogContent dividers style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', minWidth: '400px' }}>
      //       <AddTagsField
      //          error={buttonError}
      //          label="Nazwa"
      //          variant="outlined"
      //          autoFocus
      //          required
      //          margin='dense'
      //          size="small"
      //          helperText={error && errorMessage}
      //          // InputLabelProps={{
      //          //    shrink: true
      //          // }}
      //          onInput={(e) => setState({ name: e.target.value, error: false, buttonError: false })}
      //       />
      //    </DialogContent>
      //    <DialogContent dividers>
      //       <StyledColorPicker error={colorError} color={color} onChangeComplete={(c) => setState({ color: c.hex, error: false, colorError: false })} />
      //    </DialogContent>
      //    <DialogActions>
      //       <StyledButton
      //          disabled={error}
      //          onClick={handleClose}
      //          color="primary"
      //          onClick={() => handleAddTag()}
      //       >
      //          Zapisz
      //     </StyledButton>
      //       <StyledButton
      //          onClick={handleClose}
      //          color="primary"
      //       >
      //          Anuluj
      //     </StyledButton>
      //    </DialogActions>
      // </Dialog >
   )
}


export default connect()(EditTag)