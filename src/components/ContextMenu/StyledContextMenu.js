import styled from 'styled-components'
import { TextField } from '@material-ui/core'


export const StyledInput = styled(TextField)`
   min-height: 35px;
  padding: 4px !important;
  border:none;;

   &  input{
     padding: 10px;
      font-size: 16px; 
      background-color: #fff;
      border: none;
  }

`