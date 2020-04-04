import React from 'react'
import { List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar, Divider } from '@material-ui/core'
import Icon from '../../Icon/Icon'

export const PinnedMenu = () => {

   return (
      <>
         <List>
            <ListItem  >
               <ListItemIcon><Icon name="attach_file" md={25} /></ListItemIcon>
               <ListItemText primary="Załączniki" />
            </ListItem>
         </List>
      </>
   )
}

