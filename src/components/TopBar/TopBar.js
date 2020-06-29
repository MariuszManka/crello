import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import MenuIcon from '@material-ui/icons/Menu'
import InputAdornment from '@material-ui/core/InputAdornment'
import { TextField, ListItem, ListItemIcon, Input } from '@material-ui/core'
import Icon from '../Icon/Icon'
import { StyledTopBar, Overlay, StyledSearch, StyledTopBarIcons, StyledLogo } from './StyledTopBar'
import logo from '../../assets/livolink.svg'
import Avatar from '../Avatar/Avatar'

const Search = () => {
   return (
      <StyledSearch>
         <Input
            placeholder="search"
            endAdornment={
               <InputAdornment position="start">
                  <Icon name="search" color="topbarIcons" />
               </InputAdornment>
            }
         />
      </StyledSearch>
   )
}

const TopBarIcons = () => {

   return (
      <StyledTopBarIcons>
         <ListItemIcon>
            <Icon color="topbarIcons" name="add" />
         </ListItemIcon>
         <ListItemIcon>
            <Icon color="topbarIcons" name="people_alt" />
         </ListItemIcon>
         {/* <ListItemIcon>
            <Icon color="topbarIcons" name="info" />
         </ListItemIcon> */}
         <ListItemIcon>
            <Badge badgeContent={4} color="error"> {/** badgeContent odpowiada za wyświetlanie się powiadomień nad ikonami*/}
               <Icon color="topbarIcons" name="notifications_active" />
            </Badge>
         </ListItemIcon>
         <ListItemIcon>
            <Avatar alt='M' messages={6} />
         </ListItemIcon>
      </StyledTopBarIcons>
   )
}



export default function TopBar() {

   return (
      <StyledTopBar >
         <Overlay>

            {/* <Search /> */}
            <StyledLogo src={logo} />
            <TopBarIcons />


         </Overlay>
      </StyledTopBar>
   )
}