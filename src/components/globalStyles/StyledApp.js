import styled from 'styled-components'

export const StyledAppGrid = styled.main`
    position:relative;
    height:100vh;
    z-index:1;
    overflow:hidden;
`

export const StyledPageContent = styled.div`
    position:absolute;
    top: ${({ theme }) => theme.sizes.topbar};
    bottom: 0;
    overflow-y: hidden;
`