import styles from '../styles/components/ChallengeBox.module.css';

import { ChallengesContext } from '../contexts/ChallengesContext'
export function ChallengeBox(){

  const hasActiveChalenge = true

  return(
    <div className={styles.challengeBoxContainer}>
    {hasActiveChalenge ?(
      <div className={styles.challengeActive}>
        <header>Ganhe 400 xp</header>
        <main>
          <img src="icons/body.svg"/>
          <strong>Novo desafio</strong>
          <p>Levante e faca uma caminhada</p>
        </main>
          <footer>
            <button
              type="button"
              className={styles.challengeFaileButton}
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