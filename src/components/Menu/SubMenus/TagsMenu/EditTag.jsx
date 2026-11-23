import React from 'react'
import { Dialog, DialogTitle, DialogActions, DialogContent} from '@material-ui/core'
import { StyledColorPicker, StyledButton } from './StyledTagsMenu'
import { connect } from 'react-redux'
import { changeTagColor } from '../../../../actions/subMenusActions'
import { AddTagsField } from '../../../globalStyles/StyledTextFields'
const EditTag = ({ dispatch, open, setOpenEditModal, state, setState }) => {


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
         <Dialog onClose={() => setOpenEditModal(false)} aria-labelledby="customized-dialog-title" open={open} >
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
                  value={name}
                  onChange={(e) => handleChange(e.target.value)}
                  onKeyDown={(e) => {
                     if (e.key === 'Enter')
                        handleClose()
                  }}
               />
            </DialogContent>
            <DialogContent dividers style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', minWidth: 0 }}>
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

   )
}
export default connect()(EditTag)
