import React from 'react'
import Icon from '../Icon/Icon'
import { Divider, IconButton, } from '@material-ui/core'
import { StyledMenuTemplate, MenuHeader, MenuTextCenter, } from './StyledMenu'
import { connect } from 'react-redux'
import { setMenuOpen, setIconVisible, menuClose } from '../../actions/menuActions'

const MenuTemplate = ({ children, dispatch, menu }) => {

   const { title, open, iconVisible, currentOption } = menu
   const [option] = currentOption

   const handleSetMenuOpen = () => {
      dispatch(setMenuOpen(true))
      dispatch(setIconVisible(false))
   }

   const handleCloseMenu = () => {
      dispatch(menuClose(false, true))
   }

   return (
      <StyledMenuTemplate open={open}>
         <MenuHeader >
            <IconButton style={{ position: 'absolute' }} onClick={handleSetMenuOpen}>
               {
                  iconVisible ? <Icon name='chevron_left' md={35} /> : undefined
               }
            </IconButton>
            <MenuTextCenter>
               <p>{title}</p>
            </MenuTextCenter>
            <IconButton style={{ position: 'absolute', right: 25, top: 0 }} onClick={handleCloseMenu}>
               <Icon name='close' md={25} />
            </IconButton>
         </MenuHeader>
         <Divider />
         {
            option ?
               option.component
               :
               children
         }
      </StyledMenuTemplate>
   )

}

const mapStateToProps = state => ({
   menu: state.menu
})


export default connect(mapStateToProps)(MenuTemplate)