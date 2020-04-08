import React, { useReducer } from 'react'
import { Zoom, Grow, Tooltip, Dialog, DialogTitle, DialogContent, DialogActions, } from '@material-ui/core'
import Icon from '../../../Icon/Icon'
import { StyledColorPicker, StyledTextField, StyledButton } from './StyledTagsMenu'
import { addTag } from '../../../../actions/subMenusActions'

import { connect } from 'react-redux'


const CreateTag = ({ open, setModalOpen, dispatch }) => {

   const [state, setState] = useReducer((state, newState) => ({ ...state, ...newState }), {
      color: '',
      name: '',
      errorMessage: '',
      colorError: false,
      buttonError: false,
      error: false
   })

   const {
      color,
      name,
      errorMessage,
      buttonError,
      colorError,
      error
   } = state

   const handleClose = () => {
      setState({ name: '', color: '', colorError: false, buttonError: false, errorMessage: '', error: false })//resetowanie stanu po wyjściu z modala
      setModalOpen(false)
   }

   const handleAddTag = () => {

      if (color && name.trim()) {
         dispatch(addTag(color, name))
         setModalOpen(false)
         setState({ name: '', color: '', colorError: false, buttonError: false, errorMessage: '', error: false })//resetowanie stanu po zapisaniu tagu
      }

      if (!name.trim() && !color) //Przypadek gdy nie ma ustawionej ani nazwy ani koloru
         setState({ colorError: true, buttonError: true, errorMessage: 'Ustaw poprawną nazwę oraz kolor', error: true })

      if (!color && name.trim()) //Przypadek gdy nie ma ustawionego koloru
         setState({ colorError: true, buttonError: false, errorMessage: 'Ustaw poprawny kolor', error: true })

      if (!name.trim() && color) //Przypadek gdy nie ma ustawionej nazwy
         setState({ colorError: false, buttonError: true, errorMessage: 'Ustaw poprawną nazwę', error: true })

   }

   return (

      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
         <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Dodaj nową etykietę
        </DialogTitle>
         <DialogContent dividers style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', minWidth: '400px' }}>
            <StyledTextField
               error={buttonError}
               label="Nazwa"
               variant="outlined"
               autoFocus
               required
               margin='dense'
               onInput={(e) => setState({ name: e.target.value, error: false, buttonError: false })}
            />
            {
               errorMessage ?
                  <Grow in={Boolean(errorMessage)}>
                     < Tooltip
                        title={<p style={{ fontSize: '12px', }}>{errorMessage}</p>}
                        TransitionComponent={Zoom}
                        arrow>
                        <div>
                           <Icon name='priority_high' color={'error'} style={{ marginLeft: 20 }} />
                        </div>
                     </Tooltip>
                  </Grow>
                  :
                  null
            }
         </DialogContent>
         <DialogContent dividers>
            <StyledColorPicker error={colorError} color={color} onChangeComplete={(c) => setState({ color: c.hex, error: false, colorError: false })} />
         </DialogContent>
         <DialogActions>
            <StyledButton
               disabled={error}
               onClick={handleClose}
               color="primary"
               onClick={() => handleAddTag()}
            >
               Zapisz
          </StyledButton>
            <StyledButton
               onClick={handleClose}
               color="primary"
            >
               Anuluj
          </StyledButton>
         </DialogActions>
      </Dialog >

   )
}


export default connect()(CreateTag)