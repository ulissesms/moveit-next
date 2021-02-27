import styles from '../styles/components/ChallengeBox.module.css';
export function ChallengeBox(){

  const hasActiveChalenge = true

  return(
    <div className={styles.challengeBoxContainer}>
    {hasActiveChalenge ?(
      <div>

      </div>
    ):(
      <div className={styles.challengeNotActive}>
      <strong>Finaliza um ciclo para receber desafios</strong>
      <p>
        <img src="icons/level-up.svg" alt="Level Up"/>
        Avance de level completando desafios.
      </p>
    </div>
    )}
    </div>
  )
}