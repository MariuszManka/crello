import React, { useReducer } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Menu, ListItem, ListItemIcon, Tooltip, TextField, Typography, Divider } from '@material-ui/core'
import Icon from '../../../Icon/Icon'
import { connect } from 'react-redux'
import { Tag, TagsWrapper, StyledHeading, StyledIcon } from './StyledActions'
import { Search } from '../../../Menu/SubMenus/FindCardsMenu/FindCardsMenu'
import { setPriorityTag } from '../../../../actions'


const StyledMenu = withStyles({
   paper: {
      border: '1px solid #d3d4d5',
      fontSize: 20,
      padding: '7px 15px'
   },
})((props) => (
   <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
         vertical: 'bottom',
         horizontal: 'center',
      }}
      transformOrigin={{
         vertical: 'top',
         horizontal: 'center',
      }}
      {...props}
   />
))


const TagActions = ({ cardID, tagMenu, dispatch }) => {


   const [state, setState] = useReducer((state, newState) => ({ ...state, ...newState }), {
      allTags: tagMenu.tags,
      color: false,
      anchorEl: null
   })
   const { allTags, anchorEl, color } = state

   const handleSetPriority = (name) => {
      dispatch(setPriorityTag(name, cardID))
      setState({ color: true, })

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
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
         >
            {/* <StyledHeading>
               Etykiety
           </StyledHeading> */}

            <Search handleChange={handleOnChange} placeholder="Szukaj etykiet" />
            <StyledHeading >
               Etykiety
            </StyledHeading>

            {
               allTags.map(item => {
                  return (
                     <TagsWrapper>
                        <Tooltip title={<p style={{ fontSize: 12 }}>{item.name}</p>} arrow>
                           <Tag color={item.color} />
                        </Tooltip>
                        <Icon name="bookmark" md={20} color="cardContentHover" />
                        <Tooltip title={<p style={{ fontSize: 12 }}>Priorytet</p>} arrow>
                           <StyledIcon name="priority_high" color={color ? 'primary' : 'cardContent'} onClick={() => handleSetPriority(item.name)} />
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
