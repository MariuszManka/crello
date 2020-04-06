import React from 'react'
import { List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar, Divider } from '@material-ui/core'
import Icon from '../../../Icon/Icon'

export const FindCardsMenu = () => {

   return (
      <>
         <List>
            <ListItem  >
               <ListItemIcon><Icon name="search" md={25} /></ListItemIcon>
               <ListItemText primary="Szukaj kart" />
            </ListItem>
         </List>

      </>
   )
}

