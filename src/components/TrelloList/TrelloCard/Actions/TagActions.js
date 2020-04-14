import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Menu, ListItem, ListItemIcon, Tooltip, TextField, Typography, Divider } from '@material-ui/core'
import Icon from '../../../Icon/Icon'
import { connect } from 'react-redux'
import { Tag, TagsWrapper, StyledHeading } from './StyledActions'
import { Search } from '../../../Menu/SubMenus/FindCardsMenu/FindCardsMenu'


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


const TagActions = ({ tagMenu }) => {
   const [allTags, setTag] = useState(tagMenu.tags)

   console.log(allTags)

   const [anchorEl, setAnchorEl] = useState(null)

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
   }

   const handleClose = () => {
      setAnchorEl(null)
   }

   const handleOnChange = (value) => {
      setTag(tagMenu.tags.filter(tag => tag.name.toLowerCase().includes(value.toLowerCase())))
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
                        <Icon name="bookmark" md={20} color="cardContent" />
                        <Tooltip title={<p style={{ fontSize: 12 }}>Priorytet</p>} arrow>
                           <Icon name="priority_high" color="cardContentHover" />
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
