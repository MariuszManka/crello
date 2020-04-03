import React from 'react'
import Icon from '../Icon/Icon'
import { List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { StyledList } from './StyledMenu'
import MenuTemplate from './MenuTemplate'
import { connect } from 'react-redux'
import { menuOptionClick } from '../../actions/menuActions'


function Menu({ icons, dispatch }) {

   const handleOptionClick = (id, title) => {
      dispatch(menuOptionClick(id, title))
   }

   return (
      <MenuTemplate icons={icons}>
         <List>
            {icons.map(item => (
               <ListItem button key={item.id} onClick={() => handleOptionClick(item.id, item.description)}>
                  <ListItemIcon><Icon name={item.icon} md={35} /></ListItemIcon>
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
      </MenuTemplate>
   )
}

const mapStateToProps = state => ({
   icons: state.menu.menuIcons
})


export default connect(mapStateToProps)(Menu)