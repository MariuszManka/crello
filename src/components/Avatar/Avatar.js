import React from 'react'
import { StyledAvatar } from './StyledAvatar'
import { Badge } from '@material-ui/core'


const AvatarIcon = ({ alt, url, size, messages }) => {
   console.log(alt)

   return (
      <>
         <Badge badgeContent={messages} color="error">
            <StyledAvatar size={size} alt={alt} url={url} >{alt}</StyledAvatar>
         </Badge>
      </>
   )
}
export default AvatarIcon
