import React from "react"
import { Link } from "gatsby"

const Header = ({ text }) => {
  return (
    <div>
      <h2>{text}</h2>
      <Link to="/about/">About</Link>
    </div>
  )
}

export default Header
