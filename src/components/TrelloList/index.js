import React from 'react'
import TrelloListWrapper from './TrelloListWrapper/TrelloListWrapper'
import ActionButton from './TrelloActionButton'
import { StyledTrelloList } from './StyledTrelloList'
import { connect } from 'react-redux'


const TrelloList = ({ lists }) => {

   return (
      <StyledTrelloList>
         <TrelloListWrapper list={lists} />
         <ActionButton list />
      </StyledTrelloList>
   )
}

const mapStateToProps = state => ({
   lists: state.lists
})

export default connect(mapStateToProps)(TrelloList) 
