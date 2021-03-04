import { ChallengesContext } from "../contexts/ChallengesContext"
import styles from "../styles/components/LevelUpMoldal.module.css"
import {useContext } from 'react'
export function LevelUpModal(){
  const { level, closeLevelUpModal }  = useContext(ChallengesContext)
  return(
      <div className={styles.overlay}>
        <div className={styles.container}>
          <header>{level}</header>

          <strong>Parabéns</strong>
          <p>Você alconçou um novo Level.</p>
          <button 
          type="button"
          onClick={closeLevelUpModal}
          >
            <img src="/icons/close.svg" alt="Fechar Modal"/>
          </button>
        </div>

      </div>
  )
}