import React from 'react'
import { List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar, Divider } from '@material-ui/core'
import Icon from '../../Icon/Icon'

export const InfoMenu = () => {

   return (
      <>
         <List>
            <ListItem  >
               <ListItemIcon><Icon name="perm_identity" md={25} /></ListItemIcon>
               <ListItemText primary="Wykonane przez:" />
            </ListItem>
            <ListItem >
               <ListItemIcon><Avatar >MM</Avatar></ListItemIcon>
               <ListItemText >
                  Mariusz Mańka
                  mariuszmanka2@gmail.com
               </ListItemText>
               <ListItemText />
            </ListItem>
            <Divider />
            <ListItem  >
               <ListItemIcon><Icon name="description" md={25} /></ListItemIcon>
               <ListItemText primary="Opis:" />
            </ListItem>
            <ListItem>
               <ListItemText>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat recusandae esse, non, consectetur natus labore
               </ListItemText>
            </ListItem>
         </List>
      </>
   )
}

