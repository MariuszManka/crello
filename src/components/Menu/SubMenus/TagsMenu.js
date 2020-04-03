import React from 'react'
import { List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar, Divider } from '@material-ui/core'
import Icon from '../../Icon/Icon'

export const TagsMenu = () => {

   return (
      <>
         <List>
            <ListItem  >
               <ListItemIcon><Icon name="local_offer" md={25} /></ListItemIcon>
               <ListItemText primary="Etykiety" />
            </ListItem>
         </List>
      </>
   )
}

