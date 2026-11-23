import React from 'react'

import Badge from '@material-ui/core/Badge'

import { ListItemIcon } from '@material-ui/core'
import Icon from '../Icon/Icon'
import { StyledTopBar, Overlay, StyledTopBarIcons, StyledLogo } from './StyledTopBar'
import logo from '../../assets/livolink.svg'
import Avatar from '../Avatar/Avatar'
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
            <Badge overlap="rectangular" badgeContent={4} color="error"> {/** badgeContent odpowiada za wyświetlanie się powiadomień nad ikonami*/}
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
            <StyledLogo alt="LivoLINK" src={logo} />
            <TopBarIcons />


         </Overlay>
      </StyledTopBar>
   )
}