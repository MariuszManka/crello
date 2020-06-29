import React from 'react'
import TrelloList from './TrelloList'
import { ThemeProvider } from 'styled-components'
import { connect } from 'react-redux'
import { DragDropContext } from 'react-beautiful-dnd'
import { sort } from '../actions'
import { theme, StyledAppGrid, StyledPageContent, GlobalStyle } from './globalStyles'
import Menu from './Menu/Menu'
import TopBar from './TopBar/TopBar'
import { Grid } from '@material-ui/core'
import { createMuiTheme, ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles'

const materialTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#fcae12',
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00',
    },
  },
})

const App = ({ lists, dispatch }) => {

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result

    if (!destination)
      return

    if (destination) {
      dispatch(sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      ))
    }
  }

  return (
    <StyledAppGrid >
      <DragDropContext onDragEnd={onDragEnd}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <MaterialThemeProvider theme={materialTheme}>
            <TopBar />
            <StyledPageContent>
              <TrelloList list={lists} />
              <Menu />
            </StyledPageContent>
          </MaterialThemeProvider>
        </ThemeProvider>
      </DragDropContext>
    </StyledAppGrid>
  )
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App) 
