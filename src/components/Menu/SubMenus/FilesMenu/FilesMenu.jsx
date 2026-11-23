import React from 'react'
import { List, ListItem, ListItemText, ListItemIcon} from '@material-ui/core'
import Icon from '../../../Icon/Icon'
const FilesMenu = () => {

   return (
      <List>
         <ListItem  >
            <ListItemIcon><Icon name="layers" md={25} /></ListItemIcon>
            <ListItemText primary="Pliki" />
         </ListItem>
      </List>
   )
}
export default FilesMenu

