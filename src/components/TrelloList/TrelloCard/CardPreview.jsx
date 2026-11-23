import React, { useContext} from 'react'
import { Typography, DialogTitle, Divider, ListItem, ListItemIcon, Link, ListItemText } from '@material-ui/core'
import Icon from '../../Icon/Icon'
import { StyledContent, StyledDialog, DialogGrid, Menu } from './StyledCard'
import { makeStyles } from '@material-ui/core/styles'
import TagActions from './Actions/TagActions'
import { CardGlobalContext } from '../CardContext'
import { changeCardDescription } from '../../../actions'
import EditableCard from '../../EditableCard.js'
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
   link: {
      fontSize: 16
   },
   addDescriptionButton: {
      width: 150
   },
   addDescriptionText: {
      fontSize: 18
   }

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


const DialogContent = ({ title, children, iconName, ...other }) => {
   const classes = useStyles()
   return (
      <StyledContent {...other}>
         <Icon name={iconName} color="primary" />
         <Typography variant="subtitle1" className={classes.subtitle} component="h3">
            {title}
         </Typography>
         <div style={{ gridArea: 'content' }}>
            {children}
         </div>
      </StyledContent>
   )
}

const EditableDescription = ({ description, cardID }) => (
   <EditableCard description={description} action={changeCardDescription} cardID={cardID} />
)

const CardPreview = ({ open, setOpen }) => {

   const globalCardData = useContext(CardGlobalContext)
   const { card: { id, title, description, links } } = globalCardData

   const classes = useStyles()

   return (
      <>
         <StyledDialog maxWidth={"md"} fullWidth={true} open={open} onClose={() => setOpen(false)} >
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
               <DialogContent title='Opis' iconName="library_books" descriptionComponent >
                  <EditableDescription description={description} cardID={id} />
               </DialogContent>
               <DialogContent title='Załączniki' iconName="attach_file" links >
                  {
                     links.map(link => {
                        return (
                           <ListItem key={link.id} style={{ padding: '0 8px' }}>
                              <Icon name="alternate_email" md={18} color="greyText" style={{ marginRight: 5 }} />
                              <ListItemText>
                                 <Link className={classes.link} href={link.link} target="_blank">
                                    {link.text}
                                 </Link>
                              </ListItemText>
                           </ListItem>
                        )
                     })
                  }
               </DialogContent>
               <DialogContent title='Komentarze' iconName="chat" comments >
                  <p>Komentarze</p>
               </DialogContent>
               <ActionsMenu />
            </DialogGrid>
         </StyledDialog>
      </>
   )
}

export default CardPreview
