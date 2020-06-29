import React, { useState, useReducer } from 'react'
import { StyledTextArea, StyledButton, ButtonWrapper, StyledCard, ContentCard, } from './StyledEditabledCard'
import { Card, ListItem } from '@material-ui/core'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Icon from '../Icon/Icon'

const useStyles = makeStyles({
   title: {
      fontSize: 18
   },
   addDescriptionButton: {
      width: 150
   },
   addDescriptionText: {
      fontSize: 18
   }
})
/**
 * Komponent pozwalający na edycję tekstu inline (Wyświetla albo tekst albo miejsce do jego edycji )
 * @param {String} description - tekst wyświetlany w karcie
 * @param {Function} setOpen - funkcja sterująca zamknięciem komponentu
 * @param {Function} action - akcja Która ma zostać wykonana podczas zapisu (Akcja z Reduxa)
 * @param {Function} dispatch - funkcja dispatch z Reduxa
 * @param {Bool} withButtons - zmienna sterująca wyświetlaniem się bądź nie przycisków "Zapisz" oraz "Cofnij"
 */
export const EditableTextArea = ({ cardInfo, setOpen, action, dispatch, withButtons, }) => {

   const { description, cardID } = cardInfo
   const [value, setValue] = useState(description)

   const handleSave = () => {
      // if (value.trim()) { //Powoduje że nie można dodać pustego opisu
      if (value.trim() === description) {
         setOpen(false)
         return
      }
      else {
         dispatch(action(value, cardID))
         setOpen(false)
      }
      // }
   }
   return (
      <>
         <StyledTextArea
            autoFocus
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={() => setOpen(false)}
            onKeyDown={(e) => {
               if (e.key === 'Enter' && !withButtons) {
                  handleSave()
               }
            }}
         />
         {
            withButtons &&
            <ButtonWrapper>
               <StyledButton onMouseDown={() => handleSave()}>Zapisz</StyledButton>
               <StyledButton>Cofnij</StyledButton>
            </ButtonWrapper>
         }

      </>
   )
}

const EditableCard = ({ description, cardID, action, dispatch, withButtons, }) => {

   const [open, setOpen] = useState(false)
   const classes = useStyles()

   return (
      open ? //W zależności od open wyświetlamy albo kartę albo pole do edycji
         <EditableTextArea
            cardInfo={{ description, cardID }}
            setOpen={setOpen}
            open={open}
            action={action}
            dispatch={dispatch}
            withButtons={withButtons}
         />
         :
         description ? //Jeśli description jest puste wyświetlamy przycisk "Dodaj opis"
            <ContentCard onClick={() => setOpen(true)}>
               <p style={{ padding: 0, margin: '0 auto 0 0', fontSize: 14 }}>
                  {description}
               </p>
            </ContentCard>
            :
            <ListItem button className={classes.addDescriptionButton} onClick={() => setOpen(true)}>
               <p style={{ padding: 0, margin: '0 auto 0 0', fontSize: 14 }}>
                  Dodaj Opis
               </p>
               <Icon name="add" md={18} color="greyText" />
            </ListItem>
   )
}

export default connect()(EditableCard) 