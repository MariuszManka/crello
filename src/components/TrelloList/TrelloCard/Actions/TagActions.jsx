import React, { useReducer, useContext } from 'react'
import { ListItem, ListItemIcon, Tooltip} from '@material-ui/core'
import Icon from '../../../Icon/Icon'
import { connect } from 'react-redux'
import { Tag, TagsWrapper, StyledHeading, CloseIcon, StyledMenu, Paragraph } from './StyledActions'
import { Search } from '../../../Menu/SubMenus/FindCardsMenu/FindCardsMenu'
import { setPriorityTag, setTags } from '../../../../actions'
import { CardGlobalContext } from '../../CardContext'
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

   const chosenPriorityTag = priorityTag
   const chosenTagsID = tags.map(tag => tag.id)
   const handleSetPriority = (name, id) => dispatch(setPriorityTag(id, cardID))
   const handleChoseTag = tag => dispatch(setTags(chosenTagsID.includes(tag.id) ? chosenTagsID.filter(id => id !== tag.id) : [...chosenTagsID, tag.id], cardID))

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


   const { setQuery, handleClose } = localData


   const handleOnChange = (value) => {
      setQuery(value)
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
      query: '',
      anchorEl: null
   })

   const { anchorEl, query } = state
   const allTags = globalTags.filter(tag => tag.name.toLowerCase().includes(query.toLowerCase()))

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
         setQuery: query => setState({ query }),
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
