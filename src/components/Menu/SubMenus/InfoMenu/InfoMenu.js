import React from 'react'
import { List, ListItem, ListItemText, ListItemIcon, Avatar, Divider } from '@material-ui/core'
import Icon from '../../../Icon/Icon'
import EditableCard from '../../../EditableCard.js/index.js'
import { connect } from 'react-redux'
import { setInfoDescription } from '../../../../actions/subMenusActions'

const InfoMenu = ({ infoMenu }) => {

   return (
      <>
         <List>
            <ListItem  >
               <ListItemIcon><Icon name="perm_identity" md={25} /></ListItemIcon>
               <ListItemText primary="Wykonane przez:" />
            </ListItem>
            <ListItem >
               <ListItemIcon><Avatar src={infoMenu.avatarImage}>{infoMenu.avatarLetters}</Avatar></ListItemIcon>
               <ListItemText primary={infoMenu.author} secondary={infoMenu.email} />
               <ListItemText />
            </ListItem>
            <Divider />
            <ListItem  >
               <ListItemIcon><Icon name="description" md={25} /></ListItemIcon>
               <ListItemText primary="Opis:" />
            </ListItem>
            <ListItem>
               <ListItemText>
                  <EditableCard description={infoMenu.description} action={setInfoDescription} />
               </ListItemText>
            </ListItem>
         </List>
      </>
   )
}

const mapStateToProps = state => ({
   infoMenu: state.subMenu.infoMenu
})

export default connect(mapStateToProps)(InfoMenu)
