import React from 'react'
import Icon from '../Icon/Icon'
import { Divider, IconButton, } from '@material-ui/core'
import { StyledMenuTemplate, MenuHeader, MenuTextCenter, } from './StyledMenu'
import { connect } from 'react-redux'
import { setMenuOpen, setIconVisible, menuClose } from '../../actions/menuActions'

/**
 * Komponent wyświetlający menu lub podmenu w zależności od tego czy currentOption jest pustą tablicą czy nie.
 * @param {Node} children  - dzieci, ikony menu do wyświetlenia w podstawowym widoku
 * @param {Function} dispatch  - funkcja używana w react Redux do ustawiania nowego stanu
 * @param {Object} menu - obiekt menu z głównego magazynu
 */

const MenuTemplate = ({ children, dispatch, menu }) => {

   const { title, open, iconVisible, currentOption } = menu
   const [option] = currentOption //Tablica z aktualnie wybraną opcją lub undefined

   const handleSetMenuOpen = () => {
      /*Jesli parametr option jest ustawiony, oznacza to że ikona jest renderowana w subMenu. 
       //w tym przypadku używamy menuClose aby wyjść do podstawowego widoku menu*/
      if (option) {
         dispatch(menuClose(true, false))
         return
      }
      dispatch(setMenuOpen(true))
      dispatch(setIconVisible(false))
   }

   const handleCloseMenu = () => {
      dispatch(menuClose(false, true))
   }

   return (
      <StyledMenuTemplate open={open}>

         <MenuHeader >
            {
               iconVisible ?
                  <IconButton style={{ position: 'absolute' }} onClick={handleSetMenuOpen}>
                     <Icon name='chevron_left' md={35} />
                  </IconButton>
                  :
                  null
            }
            <MenuTextCenter>
               <p>{title}</p>
            </MenuTextCenter>
            <IconButton style={{ position: 'absolute', right: 25, top: 0 }} onClick={handleCloseMenu}>
               <Icon name='close' md={25} />
            </IconButton>
         </MenuHeader>
         <Divider />

         {
            option ? option.component : children //option.component - komponent podmenu z tablicy currentOption ze stora, children standardowe menu z ikonami
         }
      </StyledMenuTemplate>
   )

}

const mapStateToProps = state => ({
   menu: state.menu
})


export default connect(mapStateToProps)(MenuTemplate)