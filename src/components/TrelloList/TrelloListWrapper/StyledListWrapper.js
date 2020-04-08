import styled from 'styled-components'

export const TrelloListWrapper = styled.div`
    margin: 0 8px;
    padding: 2px 15px;
    min-width: 300px;
    border-radius: 4px 4px 0 0 ;
    height: 100%;
    max-height: 75vh;
    background-color: ${({ theme }) => theme.colors.listBackground};
    overflow-y:auto;
`
