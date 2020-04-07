import React, { useState } from 'react'
import { List, ListItem, Zoom, Tooltip, TextField, ClickAwayListener, Divider, ListItemText } from '@material-ui/core'
import Icon from '../../../Icon/Icon'
import { Tag, StyledColorPicker, StyledWrapper } from './StyledTagsMenu'
import { connect } from 'react-redux'

import { changeTagColor } from '../../../../actions/subMenusActions'

const EditTag = ({ color, handleChangeColor, setOpen, open }) => {

   return (
      open ?

         <StyledColorPicker style={{ boxShadow: 'none' }} color={color.color} onChangeComplete={(c) => handleChangeColor(c.hex, color.id)} />
         // </ClickAwayListener>
         :
         null
   )
}

const TagsMenu = ({ tagsMenu, dispatch }) => {
   const { tagsColors } = tagsMenu

   const [color, setColor] = useState({ color: '#fff', id: null })
   const [open, setOpen] = useState(false)

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
               tagsColors.map(item => {
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
               <Tag addTag >
                  <ListItemText>Utwórz nową</ListItemText>
                  <Icon name="add" md={20} />
               </Tag>

            </ListItem>
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

