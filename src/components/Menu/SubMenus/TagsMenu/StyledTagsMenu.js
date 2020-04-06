
import styled from 'styled-components'

export const Tag = styled.div`
   width:85%;
   margin: 0 15px 0 auto;
   height: 25px;
   border-radius: 7px;
   background-color: ${({ background }) => background};
   cursor: pointer;

   &:nth-last-child(){
      
   }
`