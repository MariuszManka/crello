import React, { useState } from 'react'
import { Typography, CardContent, } from '@material-ui/core'
import { StyledCard, StyledBookmark } from './StyledCard'
import { Draggable } from 'react-beautiful-dnd'
import { makeStyles } from '@material-ui/core/styles'
import Icon from '../../Icon/Icon'
import CardPreview from './CardPreview'
import Bookmark from './Bookmark'

const useStyles = makeStyles({
   title: {
      fontSize: 14,
   },
})

export const ListCard = ({ card, index }) => {
   const { title, id, description, tag } = card

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
                        <Bookmark tag={tag} />
                        {/* <CardHeader> */}
                        {/* </CardHeader> */}
                        <CardContent>
                           <Typography className={classes.title} color="textSecondary" variant="subtitle1" gutterBottom >
                              {title}
                           </Typography>
                        </CardContent>
                        <Icon name="person" />
                        <Icon name="bookmark" />
                     </StyledCard>

                  </div>
               )
            }

         </Draggable>
         {open && <CardPreview card={card} open={open} setOpen={setOpen} />
         }
      </>

   )
}