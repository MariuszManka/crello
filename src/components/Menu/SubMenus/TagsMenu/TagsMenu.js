import React, { useState, useReducer } from 'react'
import { List, ListItem, Zoom, Tooltip, TextField, ClickAwayListener, Divider, ListItemText, Button, } from '@material-ui/core'
import Icon from '../../../Icon/Icon'
import { Tag, StyledColorPicker, StyledWrapper, StyledTextField, ButtonWrapper } from './StyledTagsMenu'
import { connect } from 'react-redux'
import { changeTagColor } from '../../../../actions/subMenusActions'
import CreateTag from './CreateTag'

const EditTag = ({ props, handleChangeColor, setState }) => {

   const { color, id, openAll, openPicker, name } = props

   const [currentColor, setColor] = useState(color)

   const handleChange = (value) => {
      setState({ name: value })
   }

   const handleSubmit = () => {
      handleChangeColor(currentColor, name, id)
      setState({ open: false })
   }

   return (
      openAll || openPicker ?
         <>
            <StyledWrapper>
               {openAll && <StyledTextField
                  id="outlined-basic"
                  label="Nazwa"
                  style={{ marginTop: '8px', padding: 0 }}
                  onChange={(e) => handleChange(e.target.value)}
                  onKeyDown={(e) => {
                     if (e.key === 'Enter')
                        handleSubmit()
                  }}
               />} {/**Komponent nie jest wyświetlany dopóki użytkownik nie kliknie w "ikonkę" */}
               <StyledColorPicker color={currentColor} onChangeComplete={(c) => setColor(c.hex)} />
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

const TagsMenu = ({ tagsMenu, dispatch }) => {
   const { tags } = tagsMenu

   const [openModal, setOpenModal] = useState(false)

   const [state, setState] = useReducer((state, newState) => ({ ...state, ...newState }), {
      color: '#fff',
      name: '',
      id: null,
      open: false,
      openAll: false,
      openPicker: false
   })

   const { color, id, open, openAll, openPicker, name } = state

   const handleChangeColor = (color, name, id) => {
      setState({ color: color, id: id })
      dispatch(changeTagColor(color, name, id))
   }

   return (
      <>
         <List>
            {
               tags.map(item => {
                  return (
                     <ListItem key={item.id} >
                        <Tooltip title={<p style={{ fontSize: '12px', }}>{item.name}</p>} TransitionComponent={Zoom} arrow>
                           <Tag background={item.color} onClick={() => setState({ color: item.color, id: item.id, openPicker: true, openAll: false, open: true })} />
                        </Tooltip>
                        <Icon name="create" md={18} onClick={() => setState({ color: item.color, id: item.id, openAll: true, open: true })} />
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


            <ListItem /> {/*Placeholder*/}
            <Divider />
            <ListItem>
               {
                  open &&
                  <EditTag
                     props={{ color, id, openAll, openPicker, name }}
                     handleChangeColor={handleChangeColor}
                     setState={setState}
                  />

               }
            </ListItem>
         </List>

         <CreateTag open={openModal} setModalOpen={setOpenModal} /> {/*Modal do tworzenia nowej etykiety */}
      </>
   )
}
const mapStateToProps = state => ({
   tagsMenu: state.subMenu.tagsMenu
})

export default connect(mapStateToProps)(TagsMenu)

