import React, { useReducer, useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Menu, ListItem, ListItemIcon, Tooltip, TextField, Typography, Divider } from '@material-ui/core'
import Icon from '../../../Icon/Icon'
import { connect } from 'react-redux'
import { Tag, TagsWrapper, StyledHeading, CloseIcon, StyledMenu } from './StyledActions'
import { Search } from '../../../Menu/SubMenus/FindCardsMenu/FindCardsMenu'
import { setPriorityTag } from '../../../../actions'


const TagActions = ({ cardID, tagMenu, priorityTag, dispatch }) => {

   const [currentTag] = [...tagMenu.tags.filter(tag => tag.name === priorityTag)]

   const [state, setState] = useReducer((state, newState) => ({ ...state, ...newState }), {
      allTags: tagMenu.tags,
      chosenTag: currentTag && currentTag.id,
      anchorEl: null
   })
   const { allTags, anchorEl, chosenTag } = state

   const handleSetPriority = (name, id) => {
      dispatch(setPriorityTag(name, cardID))

      tagMenu.tags.map(tag => tag.id)
         .forEach(i => {
            if (i === id)
               setState({ chosenTag: id })
         })
   }

   const handleClick = (event) => {
      setState({ anchorEl: event.currentTarget })
   }

   const handleClose = () => {
      setState({ anchorEl: null })
   }

   const handleOnChange = (value) => {
      setState({ allTags: tagMenu.tags.filter(tag => tag.name.toLowerCase().includes(value.toLowerCase())) })
   }

   return (
      <div>
         <ListItem button onClick={handleClick} >
            <ListItemIcon><Icon name="local_offer" md={20} /></ListItemIcon>
            <p style={{ fontSize: '13px' }}>Etykiety</p>

         </ListItem>

         <StyledMenu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            getContentAnchorEl={null}
            anchorOrigin={{
               vertical: 'bottom',
               horizontal: 'center',
            }}
            transformOrigin={{
               vertical: 'top',
               horizontal: 'center',
            }}
         >
            <CloseIcon>
               <Icon name="close" onClick={() => handleClose()} />
            </CloseIcon>

            <Search handleChange={handleOnChange} placeholder="Szukaj etykiet" />
            <StyledHeading >
               Etykiety
            </StyledHeading>

            {
               allTags.map(item => {
                  return (
                     <TagsWrapper key={item.id}>
                        <Tooltip title={<p style={{ fontSize: 12 }}>{item.name}</p>} arrow>
                           <Tag color={item.color} />
                        </Tooltip>
                        <Icon name="bookmark" md={25} color="cardContentHover" />
                        <Tooltip title={<p style={{ fontSize: 12 }}>Priorytet</p>} arrow>
                           <Icon
                              md={25}
                              name="priority_high"
                              color={chosenTag === item.id ? 'primary' : 'cardContent'}
                              onClick={() => handleSetPriority(item.name, item.id)} />
                        </Tooltip>
                     </TagsWrapper>
                  )
               })
            }
         </StyledMenu>
      </div >
   )
}

const mapStateToProps = state => ({
   tagMenu: state.subMenu.tagsMenu
})

export default connect(mapStateToProps)(TagActions) 
