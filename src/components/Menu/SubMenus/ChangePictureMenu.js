import React from 'react'
import { List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar, Divider } from '@material-ui/core'
import Icon from '../../Icon/Icon'

export const ChangePictureMenu = () => {

   return (
      <>
         <List>
            <ListItem  >
               <ListItemIcon><Icon name="add_photo_alternate" md={25} /></ListItemIcon>
               <ListItemText primary="Zmiana tła" />
            </ListItem>
         </List>


      </>
   )
}

