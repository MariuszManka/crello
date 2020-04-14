import styled from 'styled-components'

export const Tag = styled.div`
   height:25px;
   width: 180px;
   border-radius: 5px;
   cursor: pointer;
   background-color: ${({ theme, color }) => color};

`

export const TagsWrapper = styled.div`
   display:flex;
   justify-content:space-between;
   align-items: center;
   margin: 5px 10px ;

   & i{
      margin: 0 15px;
      transition: color .2s ease-in;
      &:hover{
         color: ${({ theme }) => theme.colors.primary};
         transform: scale(1.1);
      }
   }
`

export const StyledHeading = styled.div`
   font-size:20px;
   margin-bottom: 25px;
   padding-bottom: 10px;
   text-align:left;
   border-bottom: 1px solid ${({ theme }) => theme.colors.cardContentHover};
`