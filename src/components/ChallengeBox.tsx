import styles from '../styles/components/ChallengeBox.module.css';
import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
export function ChallengeBox(){

  const { activeChallenge, resetChallenge } = useContext(ChallengesContext)


  return(
    <div className={styles.challengeBoxContainer}>
    {activeChallenge ?(
      <div className={styles.challengeActive}>
        <header>Ganhe {activeChallenge.amount} xp</header>
        <main>
          <img src={`icons/${activeChallenge.type}.svg`}/>
          <strong>Novo desafio</strong>
          <p>{activeChallenge.description}</p>
        </main>
          <footer>
            <button
              type="button"
              className={styles.challengeFaileButton}
              onClick={resetChallenge}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
              >
                Completei
            </button>
          </footer>
        
      </div>
    ):(
      <div className={styles.challengeNotActive}>
      <strong>Finaliza um ciclo para receber um desafios</strong>
      <p>
        <img src="icons/level-up.svg" alt="Level Up"/>
        Avance de level completando desafios.
      </p>
    </div>
    )}
    </div>
  )
}