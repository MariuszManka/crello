import styled from 'styled-components'
import { TextField } from '@material-ui/core'
import Icon from '../../../Icon/Icon'

export const SearchWrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content:space-between;
   width: 100%;
   /* border: 1px solid ${({ theme }) => theme.colors.topbarBackground}; */
   border-radius: 40px;
   padding:3px  3px 3px 25px;
   background-color: white;
`

export const StyledTextField = styled(TextField)`
    width: 70% !important;
    & input{
      font-size: 13px;
      
   }
   & *::after, *::before {
      border:none !important;
   } 
`

