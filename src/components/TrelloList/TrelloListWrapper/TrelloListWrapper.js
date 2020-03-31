import React from 'react'
import {
   TrelloListWrapper
} from './StyledListWrapper'
import { ListHeading, ListCard } from '../exports'
import ActionButton from '../TrelloActionButton'
import { connect } from 'react-redux'
import { Droppable } from 'react-beautiful-dnd'

const TrelloList = ({ lists }) => {

   return (
      lists.map(list => {
         return (
            <Droppable droppableId={String(list.id)}>
               {
                  (provided) => (
                     <TrelloListWrapper {...provided.droppableProps} ref={provided.innerRef} key={list.id}>
                        <ListHeading key={list.id} title={list.title} />
                        {
                           list.cards.map((card, index) =>
                              <ListCard key={card.id}
                                 text={card.text}
                                 id={card.id}
                                 index={index}
                              />
                           )
                        }
                        {provided.placeholder}
                        <ActionButton id={list.id} />
                     </TrelloListWrapper>
                  )


               }

            </Droppable>
         )
      })
   )
}

const mapStateToProps = state => ({
   lists: state.lists
})

export default connect(mapStateToProps)(TrelloList) 
