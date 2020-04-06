import React from 'react'
import { List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar, Divider } from '@material-ui/core'
import Icon from '../../../Icon/Icon'

export const ArchiweMenu = () => {

   return (
      <>
         <List>
            <ListItem  >
               <ListItemIcon><Icon name="archive" md={25} /></ListItemIcon>
               <ListItemText primary="Archiwum" />
            </ListItem>
         </List>
      </>
   )
}
