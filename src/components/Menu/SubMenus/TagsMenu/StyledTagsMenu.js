
import styled from 'styled-components'
import {
   SketchPicker
} from 'react-color'

export const Tag = styled.div`
   width:85%;
   margin: 0 15px 0 auto;
   height: 25px;
   border-radius: 7px;
   background-color: ${({ background }) => background};
   cursor: pointer;

   ${({ addTag, theme }) => addTag && `
       background-color: transparent;
       border: 1px dashed ${theme.colors.topbarBackground};
       display:flex;
       justify-content: center;
       align-items:center;
       text-align: center;
       padding: 15px 8px;
       margin-right: 30px;
   `};

`

export const StyledColorPicker = styled(SketchPicker)`
   box-shadow: none !important;
`

export const StyledWrapper = styled.div`
   height: 100%;
   display:flex;
   flex-direction:column
`