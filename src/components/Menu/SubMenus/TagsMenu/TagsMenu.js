import React, { useState } from 'react'
import { List, ListItem, Zoom, Tooltip, TextField, ClickAwayListener, Divider, ListItemText, Dialog, DialogTitle, DialogContent, Typography, DialogActions, Button, InputAdornment } from '@material-ui/core'
import Icon from '../../../Icon/Icon'
import { Tag, StyledColorPicker, StyledWrapper } from './StyledTagsMenu'
import { connect } from 'react-redux'

import { changeTagColor, addTag } from '../../../../actions/subMenusActions'


const Modal = ({ open, setOpen, dispatch }) => {

   const [color, setColor] = useState('')
   const [name, setName] = useState('')
   const [error, setError] = useState({ colorError: false, buttonError: false })
   const [errorMessage, setErrorMessage] = useState('')

   const handleClose = () => {
      setName('')
      setColor('')
      setOpen(false)
      setError({ colorError: false, buttonError: false })
   }

   const handleAddTag = () => {

      if (color && name) {
         dispatch(addTag(color, name))
         setOpen(false)
         setName('')
         setColor('')
         setError({ colorError: false, buttonError: false })
      }
      if (!name && !color) {
         setError({ colorError: true, buttonError: true })
         setErrorMessage('Ustaw poprawną nazwę oraz kolor')
      }
      if (!color && name) {
         setError({ colorError: true, buttonError: false })
         setErrorMessage('Ustaw poprawny kolor')
      }
      if (!name && color) {
         setError({ colorError: false, buttonError: true })
         setErrorMessage('Ustaw poprawną nazwę')
      }
   }

   return (
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
         <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Dodaj nową etykietę
        </DialogTitle>
         <DialogContent dividers style={{ display: 'flex', justifyContent: 'space-between' }}>
            <TextField
               error={error.buttonError}
               id="outlined-basic"
               label="Nazwa"
               variant="outlined"
               onInput={(e) => setName(e.target.value)}
            />

            {
               error.colorError &&

               < Tooltip
                  title={<p style={{ fontSize: '12px', }}>{errorMessage}</p>}
                  TransitionComponent={Zoom}
                  arrow>
                  <DialogContent>
                     <Icon name='priority_high' color={'error'} />
                  </DialogContent>
               </Tooltip>
            }
         </DialogContent>
         <DialogContent>
            <StyledColorPicker color={color} onChangeComplete={(c) => setColor(c.hex)} />
         </DialogContent>
         <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary" onClick={() => handleAddTag()}>
               Zapisz
          </Button>
            <Button autoFocus onClick={handleClose} color="primary">
               Anuluj
          </Button>
         </DialogActions>
      </Dialog >

   )
}


const EditTag = ({ color, handleChangeColor, setOpen, open }) => {

   return (
      open ?
         <StyledColorPicker style={{ boxShadow: 'none' }} color={color.color} onChangeComplete={(c) => handleChangeColor(c.hex, color.id)} />
         :
         null
   )
}

const TagsMenu = ({ tagsMenu, dispatch }) => {
   const { tags } = tagsMenu

   const [color, setColor] = useState({ color: '#fff', id: null })
   const [open, setOpen] = useState(false)
   const [openModal, setOpenModal] = useState(false)

   const handleOpen = (color, id) => {
      setOpen(true)
      setColor({ color: color, id: id })
   }

   const handleChangeColor = (color, id) => {
      setColor({ color, id })
      dispatch(changeTagColor(color, id))
   }

   return (
      <>
         <List>
            {
               tags.map(item => {
                  return (
                     <ListItem key={item.id} >
                        <Tooltip title={<p style={{ fontSize: '12px', }}>{item.name}</p>} TransitionComponent={Zoom} arrow>
                           <Tag background={item.color} onClick={() => handleOpen(item.color, item.id)} />
                        </Tooltip>
                        <Icon name="create" md={18} onClick={() => handleOpen(item.color, item.id)} />
                     </ListItem>
                  )
               })
            }
            <ListItem>
               <Tag addTag onClick={() => setOpenModal(true)}>
                  <ListItemText>Utwórz etykietę</ListItemText>
                  <Icon name="add_circle" md={20} onClick={() => setOpenModal(true)} />
               </Tag>
            </ListItem>
            <Modal open={openModal} setOpen={setOpenModal} dispatch={dispatch} />
            <ListItem /> {/*Placeholder*/}
            <Divider />
            <ListItem>
               {
                  open &&
                  <ClickAwayListener onClickAway={() => setOpen(false)}>
                     <StyledWrapper>
                        <TextField id="outlined-basic" label="Nazwa" variant="outlined" />
                        <EditTag
                           color={color}
                           handleChangeColor={handleChangeColor}
                           setOpen={setOpen}
                           open={open} />
                     </StyledWrapper>
                  </ClickAwayListener>
               }
            </ListItem>
         </List>
      </>
   )
}
const mapStateToProps = state => ({
   tagsMenu: state.subMenu.tagsMenu
})

export default connect(mapStateToProps)(TagsMenu)

