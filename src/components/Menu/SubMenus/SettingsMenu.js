import React from 'react'
import { List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar, Divider } from '@material-ui/core'
import Icon from '../../Icon/Icon'

export const SettingsMenu = () => {

   return (
      <>
         <List>
            <ListItem  >
               <ListItemIcon><Icon name="settings" md={25} /></ListItemIcon>
               <ListItemText primary="Ustawienia" />
            </ListItem>
         </List>
      </>
   )
}

