import React from 'react'
import { StyledAvatar } from './StyledAvatar'
import { Badge } from '@material-ui/core'

/**
 * Komponent wyświetlający ikonke Avatara, możliwe ustawienie avatara z pierwszą literką imienia, lub ze zdjęciem
 * @param {String} alt - Inicjały które mają pojawić się w avatarze, wyświetlają się jeśli nie ma ustawionego url
 * @param {String} url - adres url do obrazka, jeśli ustawiony w awatarze będzie wyświetlać się obrazek 
 * @param {Number} size - rozmiar avatara używany w styled-components 
 * @param {Number} messages - Opcjonalna liczba wiadomosci które wyświetlaja się w czerwonym kółku nad avatarem, jeśli nie ustawiony, czerwone kółko się nie wyświetla
 */

const AvatarIcon = ({ alt, url, size, messages }) => {

   return (
      <>
         <Badge badgeContent={messages} color="error">
            <StyledAvatar size={size} alt={alt} url={url} >{alt}</StyledAvatar>
         </Badge>
      </>
   )
}
export default AvatarIcon
