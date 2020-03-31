import React from 'react'
import TrelloListWrapper from './TrelloListWrapper/TrelloListWrapper'
import ActionButton from './TrelloActionButton'
import { StyledTrelloList } from './StyledTrelloList'
import { connect } from 'react-redux'
import { Droppable } from 'react-beautiful-dnd'


const TrelloList = ({ lists }) => {

   return (
      <Droppable droppableId="all-lists" direction="horizontal" type="list">
         {
            provided => (
               <StyledTrelloList
                  {...provided.droppableProps}
                  ref={provided.innerRef}
               >
                  <TrelloListWrapper list={lists} />
                  {provided.placeholder}
                  <ActionButton list={1} />
               </StyledTrelloList>
            )
         }
      </Droppable>
   )
}

const mapStateToProps = state => ({
   lists: state.lists
})

export default connect(mapStateToProps)(TrelloList) 
