import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Icon from '../Icon/Icon'
import { StyledMenu, MenuHeader, MenuTextCenter, StyledList } from './StyledMenu'


const menuIcons = [
   { id: 0, icon: 'info', description: 'Informacje o tablicy' },
   { id: 1, icon: 'add_photo_alternate', description: 'Zmień tło' },
   { id: 2, icon: 'search', description: 'Szukaj kart' },
   { id: 3, icon: 'local_offer', description: 'Etykiety' },
   { id: 4, icon: 'archive', description: 'Archiwum' },
   { id: 5, icon: 'settings', description: 'Ustawienia' },
]



export default function MiniDrawer() {

   const [open, setOpen] = React.useState(false)

   const handleToggle = () => {
      setOpen(!open)
   }

   return (

      <StyledMenu open={open}>
         <MenuHeader >
            <IconButton onClick={handleToggle} style={{ position: 'absolute' }}>
               <Icon name={open ? 'chevron_right' : 'chevron_left'} />
            </IconButton>
            <MenuTextCenter>
               <p>Menu</p>
            </MenuTextCenter>
         </MenuHeader>
         <Divider />
         <List>
            {menuIcons.map((item, index) => (
               <ListItem button key={item.id}>
                  <ListItemIcon><Icon name={item.icon} /></ListItemIcon>
                  <ListItemText primary={item.description} />
               </ListItem>
            ))}
         </List>
         <StyledList>
            <Divider />
            <ListItem>
               <ListItemIcon><Icon name="forum" /></ListItemIcon>
               <ListItemText primary="Aktywność" />
            </ListItem>

         </StyledList>
      </StyledMenu>

   )
}