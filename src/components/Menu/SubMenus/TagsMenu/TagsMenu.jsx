import React, { useState, useReducer } from 'react'
import { List, ListItem, Zoom, Tooltip, Divider, ListItemText, IconButton} from '@material-ui/core'
import Icon from '../../../Icon/Icon'
import { Tag} from './StyledTagsMenu'
import { connect } from 'react-redux'

import CreateTag from './CreateTag'
import EditTag from './EditTag'
/**
 * 
 * @param {Object} tagsMenu - objekt tagsMenu ze Stora. Zawiera najważniejsze informacje takie jak id, nazwa czy też kolor danej etykiety
 */

const TagsMenu = ({ tagsMenu }) => {
   const { tags } = tagsMenu

   const [openEditModal, setOpenEditModal] = useState(false) //Używane do otwierania modala pozwalającego na dodawanie nowych etykiet
   const [openCreateModal, setOpenCreateModal] = useState(false) //Używane do otwierania modala pozwalającego na dodawanie nowych etykiet

   const [state, setState] = useReducer((state, newState) => ({ ...state, ...newState }), {
      color: '#fff',
      name: '',
      id: null,
   })

   const handleIconClick = (color, id, name) => {
      setOpenEditModal(true)
      setState({ color, id, name, openAll: true, open: true, }) //Otwiera menu do edycji Etykiety po kliknięciu w Ikonę edycji
   }

   const handleTagClick = (color, id, name) => {
      setOpenEditModal(true)
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
                           <Tag type="button" aria-label={`Edytuj kolor etykiety: ${item.name}`} background={item.color} onClick={() => handleTagClick(item.color, item.id, item.name)} />
                        </Tooltip>
                        <IconButton aria-label={`Edytuj etykietę: ${item.name}`} onClick={() => handleIconClick(item.color, item.id, item.name)}>
                           <Icon name="create" md={22} />
                        </IconButton>
                     </ListItem>
                  )
               })
            }
            <ListItem>
               <Tag type="button" addTag onClick={() => setOpenCreateModal(true)}>
                  <ListItemText>Utwórz etykietę</ListItemText>
                  <Icon name="add_circle" md={22} />
               </Tag>
            </ListItem>
            <ListItem /> {/*Placeholder*/}
            <Divider />
         </List>

         <EditTag open={openEditModal} setOpenEditModal={setOpenEditModal} state={state} setState={setState} />
         <CreateTag open={openCreateModal} setOpenCreateModal={setOpenCreateModal} /> {/*Modal do tworzenia nowej etykiety */}
      </>
   )
}
const mapStateToProps = state => ({
   tagsMenu: state.subMenu.tagsMenu
})

export default connect(mapStateToProps)(TagsMenu)

