import styled from 'styled-components'
import { TextField } from '@material-ui/core'

export const SearchWrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content:space-between;
   width: 100%;
   border-radius: 40px;
   padding:3px  3px 3px 25px;
   background-color: white;
   margin: 20px 0;
   box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
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

