
import styles from'../styles/components/ExperienceBar.module.css'
import {useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
export function ExperienceBar(){

  const { currentExperience, experiencToNextLevel} =useContext(ChallengesContext)

  const percentToNextLevel = Math.round(currentExperience * 100)/ experiencToNextLevel

  return(
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{width:`${percentToNextLevel}%`}} />
        <span className={styles.currentExperience }style={{left:`${percentToNextLevel}%`}}>
          {currentExperience}px
        </span>
      </div>
      <span>{experiencToNextLevel}xp</span>
    </header>
  )
}