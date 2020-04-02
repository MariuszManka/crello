import styled from 'styled-components'
import { Avatar } from '@material-ui/core'


export const StyledAvatar = styled(Avatar)`
   height: ${({ size }) => size ? size : '28px'} !important;
   width:  ${({ size }) => size ? size : '28px'} !important;

`