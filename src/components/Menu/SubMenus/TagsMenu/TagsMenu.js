import React, { useState, useReducer } from 'react'
import { List, ListItem, Zoom, Tooltip, Divider, ListItemText, } from '@material-ui/core'
import Icon from '../../../Icon/Icon'
import { Tag, } from './StyledTagsMenu'
import { connect } from 'react-redux'
import { changeTagColor } from '../../../../actions/subMenusActions'
import CreateTag from './CreateTag'
import EditTag from './EditTag'

/**
 * 
 * @param {Object} tagsMenu - objekt tagsMenu ze Stora. Zawiera najważniejsze informacje takie jak id, nazwa czy też kolor danej etykiety
 * @param {Function} dispatch - Funkcja dispatch z Reduxa
 */

const TagsMenu = ({ tagsMenu, dispatch }) => {
   const { tags } = tagsMenu

   const [openModal, setOpenModal] = useState(false) //Używane do otwierania modala pozwalającego na dodawanie nowych etykiet

   const [state, setState] = useReducer((state, newState) => ({ ...state, ...newState }), {
      color: '#fff',
      name: '',
      id: null,
      open: false,
      openAll: false,
      openPicker: false
   })

   const { color, id, open, openAll, openPicker, name } = state

   const handleChangeColor = (color, name, id) => {
      setState({ color: color, id: id })
      dispatch(changeTagColor(color, name, id))
   }

   const handleIconClick = (color, id, name) => {
      setState({ color, id, name, openAll: true, open: true, }) //Otwiera menu do edycji Etykiety po kliknięciu w Ikonę edycji
   }
   const handleTagClick = (color, id, name) => {
      setState({ color, id, name, openPicker: true, openAll: false, open: true, })//Otwiera menu do edycji Etykiety po kliknięciu w Etykietę
   }

   return (
      <>
         <List>
            {
               tags.map(item => {
                  return (
                     <ListItem key={item.id} >
                        <Tooltip title={<p style={{ fontSize: '12px', }}>{item.name}</p>} TransitionComponent={Zoom} arrow>
                           <Tag background={item.color} onClick={() => handleTagClick(item.color, item.id, item.name)} />
                        </Tooltip>
                        <Icon name="create" md={18} onClick={() => handleIconClick(item.color, item.id, item.name)} />
                     </ListItem>
                  )
               })
            }
            <ListItem>
               <Tag addTag onClick={() => setOpenModal(true)}>
                  <ListItemText>Utwórz etykietę</ListItemText>
                  <Icon name="add_circle" md={20} onClick={() => setOpenModal(true)} />
               </Tag>
            </ListItem>


            <ListItem /> {/*Placeholder*/}
            <Divider />
            <ListItem>
               {

                  open &&
                  <EditTag
                     props={{ color, id, openAll, openPicker, name }}
                     handleChangeColor={handleChangeColor}
                     setState={setState}
                  />

               }
            </ListItem>
         </List>

         <CreateTag open={openModal} setModalOpen={setOpenModal} /> {/*Modal do tworzenia nowej etykiety */}
      </>
   )
}
const mapStateToProps = state => ({
   tagsMenu: state.subMenu.tagsMenu
})

export default connect(mapStateToProps)(TagsMenu)

