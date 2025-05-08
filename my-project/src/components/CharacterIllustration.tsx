import React from 'react'
import './CharacterIllustration.css'
import ghibliCharacter from '../assets/nada.png'

const CharacterIllustration: React.FC = () => {
  return (
    <div className="character-container">
      <img 
        src={ghibliCharacter || "/placeholder.svg"} 
        alt="Character Illustration" 
        className="character-illustration" 
      />
    </div>
  )
}

export default CharacterIllustration