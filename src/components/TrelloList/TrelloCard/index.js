import React, { useState, useContext } from 'react'
import { Typography, CardContent, Tooltip, } from '@material-ui/core'
import { StyledCard, StyledBookmark } from './StyledCard'
import { Draggable } from 'react-beautiful-dnd'
import { makeStyles } from '@material-ui/core/styles'
import Icon from '../../Icon/Icon'
import CardPreview from './CardPreview'
import Bookmark from './Bookmark'
import { CardGlobalContext } from '../TrelloListWrapper/TrelloListWrapper'

const useStyles = makeStyles({
   title: {
      fontSize: 14,
   },
})

export const ListCard = ({ index }) => {
   const globalCardData = useContext(CardGlobalContext)
   const { card: { title, id, priorityTag, tags } } = globalCardData

   const classes = useStyles()
   const [open, setOpen] = useState(false)
   return (
      <>
         <Draggable draggableId={String(id)} index={index}>
            {
               provided => (
                  <div
                     ref={provided.innerRef}
                     {...provided.draggableProps}
                     {...provided.dragHandleProps}
                  >
                     <StyledCard onClick={() => setOpen(true)}>
                        <CardContent style={{ padding: '10px' }}>
                           {priorityTag ? <Bookmark tag={priorityTag} /> : null}
                           <Typography className={classes.title} color="textSecondary" variant="subtitle1" gutterBottom >
                              {title}
                           </Typography>
                           {/* <Icon name="person" /> */}
                           {
                              tags.map(tag => {
                                 return (
                                    <Tooltip title={<p style={{ fontSize: 12 }}>{tag.name}</p>} arrow key={tag.id}>
                                       <span>
                                          <Icon name="local_offer" color={tag.color} />
                                       </span>
                                    </Tooltip>
                                 )
                              })
                           }
                        </CardContent>
                     </StyledCard>
                  </div>
               )
            }

         </Draggable>
         {open && <CardPreview open={open} setOpen={setOpen} />
         }
      </>

   )
}