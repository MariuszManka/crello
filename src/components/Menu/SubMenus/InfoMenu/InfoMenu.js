import React from 'react'
import { List, ListItem, ListItemText, ListItemIcon, Avatar, Divider } from '@material-ui/core'
import Icon from '../../../Icon/Icon'
import EditableCard from '../../../EditableCard.js/index.js'
import { connect } from 'react-redux'
import { setInfoDescription } from '../../../../actions/subMenusActions'

/**
 * 
 * @param {Object} infoMenu  - Obiekt infoMenu z głównego Stora, zawiera najpotrzebniejsze informacje dla danej sekcji. Znajduje się w pliku reducer/SubMenusReducer.js
 */

const InfoMenu = ({ infoMenu }) => {

   const { avatarImage, avatarLetters, email, author, description } = infoMenu

   return (
      <>
         <List>
            <ListItem  >
               <ListItemIcon><Icon name="perm_identity" md={25} /></ListItemIcon>
               <ListItemText primary="Wykonane przez:" />
            </ListItem>
            <ListItem >
               <ListItemIcon><Avatar src={avatarImage}>{avatarLetters}</Avatar></ListItemIcon>{/**Gdy avatarImage jest równy null, w avatarze wyświetlają się literki podnae we właściwości avatarLetters */}
               <ListItemText primary={author} secondary={email} />
               <ListItemText />
            </ListItem>
            <ListItem /> {/*Placeholder*/}
            <Divider />
            <ListItem  >
               <ListItemIcon><Icon name="description" md={25} /></ListItemIcon>
               <ListItemText primary="Opis:" />
            </ListItem>
            <ListItem>
               <ListItemText>
                  <EditableCard description={description} action={setInfoDescription} withButtons />
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
