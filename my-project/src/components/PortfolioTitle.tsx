import React from 'react'
import './PortfolioTitle.css'
import { portfolioImages } from '../data/images'

const PortfolioTitle: React.FC = () => {
  const titleText = 'PORTFOLIO'
  
  return (
    <div className="portfolio-title-container">
      <div className="portfolio-title">
        {titleText.split('').map((char, index) => {
          if (char === 'O') {
            // Get a different image for each 'O'
            const imageIndex = titleText.indexOf('O', index === 3 ? 1 : 0)
            const imageUrl = portfolioImages[imageIndex % portfolioImages.length]
            
            return (
              <div key={index} className="title-char title-circle">
                <div className="circle-image-container">
                  <img 
                    src={imageUrl || "/placeholder.svg"} 
                    alt="Portfolio work" 
                    className="circle-image" 
                  />
                </div>
              </div>
            )
          }
          
          return (
            <div key={index} className="title-char">
              {char}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PortfolioTitle