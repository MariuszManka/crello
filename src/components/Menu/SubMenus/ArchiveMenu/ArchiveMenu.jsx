import React from 'react'
import { List, ListItem, ListItemText, ListItemIcon} from '@material-ui/core'
import Icon from '../../../Icon/Icon'
/**
 * Komponent wyświetlajacy archiwum, tutaj trafiaja usunięte karty
 */

export const ArchiveMenu = () => {

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
