import type React from "react"
import "./Footer.css"

interface FooterProps {
  name?: string
  year?: number
}

const Footer: React.FC<FooterProps> = ({ name = "Hania Seifeldeen", year = new Date().getFullYear() }) => {
  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="copyright">
            <span className="copyright-symbol">©</span>2025 Hania Seifeldeen. All Rights Reserved.
          </div>
          <div className="footer-tagline">
            designed and coded with <span className="heart">♥</span> and creativity
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
