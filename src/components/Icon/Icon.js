import React from "react"
import { StlyedIcon } from "./Icon.styled"

/**
 * Komponent ikony (oparty na material icons)
 *
 * @param {string} name Nazwa icony z material icon
 * @param {string} className	Dodatkowa css klasa modyfikująca ikonę.
 * 	md-18, md-24, md-36, md-48 - modyfikacja rozmiaru ikony
 * 	md-normal, md-dark, md-light - modyfikacja koloru
 * 	md-inactive - dezaktywacja
 * 	r-45, r-90, r-135, r-180, r-225, r-270, r-315 - rotacja ikony
 * @returns {Node}
 */
const Icon = ({ name, ...other }) => {
  return (
    <StlyedIcon {...other} className="material-icons">
      {name}
    </StlyedIcon>
  )
}

export default Icon
