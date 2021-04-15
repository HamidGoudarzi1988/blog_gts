import React from "react"
import * as footerStyles from "./footer.module.css"

export default params => (
  <footer className={footerStyles.footer}>
    <div className="container">
      <span className='text-muted'>© CopyRight Gatsby-project</span>
    </div>
  </footer>
)
