import React, { useReducer, useState, createContext, useContext } from 'react'
import { ListItem, ListItemIcon, Tooltip, Typography } from '@material-ui/core'
import Icon from '../../../Icon/Icon'
import { connect } from 'react-redux'
import { Tag, TagsWrapper, StyledHeading, CloseIcon, StyledMenu, Paragraph } from './StyledActions'
import { Search } from '../../../Menu/SubMenus/FindCardsMenu/FindCardsMenu'
import { setPriorityTag, setTags } from '../../../../actions'
import { CardGlobalContext } from '../../TrelloListWrapper/TrelloListWrapper'


const LocalContext = React.createContext(null) //Lokalny kontekst

/**
 * Komponent wyświetlający i obsługujący sekcję z etykietami w podmenu Etykiet
 * @var {Array} allTags - obiekt z lokalnego kontekstu zawiertający informacje o wyświetlanych aktualnie Etykietach
 * @var {Array} tags - obiekt z globalnego kontekstu zawierający informacje o wszystkich etykietach
 */
const TagSection = () => {

   //Użycie kontekstów
   const localData = useContext(LocalContext)
   const globalCardData = useContext(CardGlobalContext)
   //Destrukturyzacja kontekstów
   const { dispatch, allTags } = localData
   const { card: { id: cardID, priorityTag, tags } } = globalCardData

   const [currentTag] = [...allTags.filter(tag => tag.name === priorityTag)] //Filtrowanie tablicy wszystkich tagów w celu sprawdzenia czy  
   const [state, setState] = useReducer((state, newState) => ({ ...state, ...newState }), {
      chosenPriorityTag: currentTag && currentTag.id,//Wybrany przez usera tag główny
      chosenTagsID: tags.map(tag => tag.id) //Tablica która przechowuje ID wybranych przez usera tagów standardowych
   })

   const { chosenPriorityTag, chosenTagsID } = state

   const handleSetPriority = (name, id) => {
      dispatch(setPriorityTag(name, cardID))

      allTags.map(tag => tag.id)
         .forEach(i => {
            if (i === id)
               setState({ chosenPriorityTag: id })
         })
   }

   const handleChoseTag = (tag) => {
      const { id } = tag

      if (tags.find(tag => tag.id === id)) {

         //Gdy kliknięto dwa razy ten sam znacznik - filtrujemy tablicę ze znacznikami i zwracamy nową bez klikniętego znacznika
         const filteredArray = tags.filter(tag => tag.id !== id)
         chosenTagsID.length = 0 //Usuwamy wszystkie elementy z tablice chosenTagsID (opróżniamy ją)
         filteredArray.map(tag => chosenTagsID.push(tag.id)) //Zastępujemy ją nową tablicą z aktualnymi indeksami
         dispatch(setTags(filteredArray, cardID))
      }
      else {
         //Gdy klikniętego znacznika nie ma w tablicy. Dodajemy go do niej i wywołuejmy akcję setTags.
         tags.push(tag)
         chosenTagsID.push(id)//Dodajemy id klikniętego tagu do tablicy
         dispatch(setTags(tags, cardID))
      }
   }

   return (
      allTags.length ?
         allTags.map(item => {
            return (
               <TagsWrapper key={item.id}>
                  <Tooltip title={<p style={{ fontSize: 12 }}>{item.name}</p>} arrow>
                     <Tag color={item.color} onClick={() => handleChoseTag(item)} />
                  </Tooltip>
                  <Tooltip title={<p style={{ fontSize: 12 }}>Etykieta Standardowa</p>} arrow>
                     <div>
                        <Icon
                           name="bookmark"
                           md={20}

                           color={chosenTagsID.includes(item.id) ? 'primary' : 'cardContentHover'}
                           onClick={() => handleChoseTag(item)} />
                     </div>
                  </Tooltip>
                  <Tooltip title={<p style={{ fontSize: 12 }}>Etykieta Priorytetowa</p>} arrow>
                     <div>
                        <Icon
                           md={25}
                           name="priority_high"
                           color={chosenPriorityTag === item.id ? 'primary' : 'cardContentHover'}
                           onClick={() => handleSetPriority(item.name, item.id)} />
                     </div>
                  </Tooltip>
               </TagsWrapper>
            )
         })
         :
         <Paragraph align="center">
            Brak Etykiet
          </Paragraph>
   )
}


const TagsHeading = () => {

   const localData = useContext(LocalContext)
   const globalCardData = useContext(CardGlobalContext)

   const { setState, handleClose, allTags } = localData
   const { tags } = globalCardData

   const handleOnChange = (value) => {
      setState({ allTags: tags.filter(tag => tag.name.toLowerCase().includes(value.toLowerCase())) })
   }

   return (
      <>
         <CloseIcon>
            <Icon name="close" onClick={() => handleClose()} />
         </CloseIcon>
         <Search handleChange={handleOnChange} placeholder="Szukaj etykiet" />
         <StyledHeading >
            Etykiety
         </StyledHeading>
      </>
   )
}


const TagActions = ({ dispatch, }) => {

   const globalCardData = useContext(CardGlobalContext)

   const {
      tags: globalTags,
   } = globalCardData

   const [state, setState] = useReducer((state, newState) => ({ ...state, ...newState }), {
      allTags: globalTags,
      anchorEl: null
   })

   const { anchorEl, allTags } = state

   const handleClick = (event) => {
      setState({ anchorEl: event.currentTarget })
   }

   const handleClose = () => {
      setState({ anchorEl: null })
   }

   return (
      <LocalContext.Provider value={{
         dispatch,
         handleClose,
         setState,
         allTags
      }}>
         <ListItem button onClick={handleClick} >
            <ListItemIcon><Icon name="local_offer" md={20} /></ListItemIcon>
            <Paragraph >Etykiety</Paragraph>
         </ListItem>

         <StyledMenu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            getContentAnchorEl={null}
            anchorOrigin={{
               vertical: 'bottom',
               horizontal: 'center',
            }}
            transformOrigin={{
               vertical: 'top',
               horizontal: 'center',
            }}
         >

            <TagsHeading />
            <TagSection />

         </StyledMenu>
      </LocalContext.Provider >
   )
}

export default connect()(TagActions) 
