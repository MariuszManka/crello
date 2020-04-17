import React, { useState, useContext } from 'react'
import { Typography, DialogTitle, Divider, ListItem, ListItemIcon } from '@material-ui/core'
import Icon from '../../Icon/Icon'
import { StyledContent, StyledDialog, ContentCard, DialogGrid, Menu } from './StyledCard'
import { makeStyles } from '@material-ui/core/styles'
import TagActions from './Actions/TagActions'
import { CardGlobalContext } from '../TrelloListWrapper/TrelloListWrapper'

const useStyles = makeStyles({
   title: {
      fontSize: 18
   },
   subtitle: {
      fontSize: 18,
      justifySelf: 'left',
      alignSelf: 'center',
      gridArea: 'title',
      whiteSpace: 'nowrap'
   },
})


const ActionsMenu = () => {
   const classes = useStyles()
   return (
      <Menu >

         <TagActions />

         <ListItem button className={classes.title} >
            <ListItemIcon><Icon name="person" md={20} /></ListItemIcon>
            <p style={{ fontSize: '13px' }}>Członkowie</p>
         </ListItem>
      </Menu>
   )
}


const CardPreview = ({ open, setOpen }) => {

   const globalCardData = useContext(CardGlobalContext)
   const { card: { title, description } } = globalCardData

   const classes = useStyles()

   return (
      <>
         <StyledDialog open={open} onClose={() => setOpen(false)} >
            <DialogGrid >
               <DialogTitle style={{ gridArea: 'title' }}>
                  <Typography className={classes.title} >
                     {title}
                  </Typography>
               </DialogTitle>
               <Icon
                  name="close"
                  md={28}
                  style={{ gridArea: 'menuIcon', alignSelf: 'start', justifySelf: 'end', padding: '13px ' }}
                  onClick={() => setOpen(false)}
               />
               <Divider style={{ gridArea: 'divider' }} />
               <StyledContent description>
                  <Icon name="library_books" color="primary" />
                  <Typography variant="subtitle1" className={classes.subtitle} component="h3">
                     Opis
                  </Typography>
                  <div style={{ gridArea: 'content' }}>
                     <ContentCard>
                        {description}
                     </ContentCard>

                  </div>

               </StyledContent>
               <StyledContent links>
                  <Typography variant="subtitle1" className={classes.subtitle} component="h3">
                     Załączniki
                  </Typography>
                  <div style={{ gridArea: 'content' }}>
                     <p>Załączniki odnośniki itp</p>
                  </div>
               </StyledContent>
               <StyledContent comments>
                  <Icon name="chat" color="primary" />
                  <Typography variant="subtitle1" className={classes.subtitle} component="h3" >
                     Komentarze
                  </Typography>
                  <div style={{ gridArea: 'content' }}>
                     <p>Komentarze</p>
                  </div>
               </StyledContent>
               <ActionsMenu />
            </DialogGrid>
         </StyledDialog>
      </>
   )
}

export default CardPreview
