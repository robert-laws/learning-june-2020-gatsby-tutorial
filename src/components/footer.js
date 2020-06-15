import React from "react"
import footerStyles from "./footer.module.css"
import LogoImg from "../../static/logo.png"

const Footer = () => {
  return (
    <div className={footerStyles.footer}>
      <div className={footerStyles.contact}>
        <h4>Gatsby Tutorial</h4>
        <p>123 Green Way</p>
        <p>Montgomery, VA 20312</p>
      </div>
      <div className={footerStyles.logo}>
        <img src={LogoImg} alt="logo" />
      </div>
    </div>
  )
}

export default Footer
