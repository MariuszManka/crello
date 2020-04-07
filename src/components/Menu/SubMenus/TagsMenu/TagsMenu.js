import React, { useState, useReducer } from 'react'
import { List, ListItem, Zoom, Grow, Tooltip, TextField, ClickAwayListener, Divider, ListItemText, Dialog, DialogTitle, DialogContent, Typography, DialogActions, Button, InputAdornment } from '@material-ui/core'
import Icon from '../../../Icon/Icon'
import { Tag, StyledColorPicker, StyledWrapper, StyledTextField, StyledButton } from './StyledTagsMenu'
import { connect } from 'react-redux'
import { changeTagColor, addTag } from '../../../../actions/subMenusActions'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
   palette: {
      primary: {
         main: '#fcae12',
      },
      secondary: {
         light: '#0066ff',
         main: '#0044ff',
         contrastText: '#ffcc00',
      },
   },
})


const Modal = ({ open, setOpen, dispatch }) => {

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
      setOpen(false)
   }

   const handleAddTag = () => {

      if (color && name) {
         dispatch(addTag(color, name))
         setOpen(false)
         setState({ name: '', color: '', colorError: false, buttonError: false, errorMessage: '', error: false })//resetowanie stanu po zapisaniu tagu
      }

      if (!name && !color) //Przypadek gdy nie ma ustawionej ani nazwy ani koloru
         setState({ colorError: true, buttonError: true, errorMessage: 'Ustaw poprawną nazwę oraz kolor', error: true })

      if (!color && name) //Przypadek gdy nie ma ustawionego koloru
         setState({ colorError: true, buttonError: false, errorMessage: 'Ustaw poprawny kolor', error: true })

      if (!name && color) //Przypadek gdy nie ma ustawionej nazwy
         setState({ colorError: false, buttonError: true, errorMessage: 'Ustaw poprawną nazwę', error: true })

   }

   return (
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
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

