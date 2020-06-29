import React from 'react'
import { List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar, Divider } from '@material-ui/core'
import Icon from '../../../Icon/Icon'


const Calendar = () => {

   return (
      <List>
         <ListItem  >
            <ListItemIcon><Icon name="calendar_today" md={25} /></ListItemIcon>
            <ListItemText primary="Kalendarz" />
         </ListItem>
      </List>
   )
}
export default Calendar

