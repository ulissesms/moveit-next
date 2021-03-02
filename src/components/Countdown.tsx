import { count } from 'node:console';
import { useState, useEffect, useContext } from 'react'
import {ChallengesContext} from'../contexts/ChallengesContext'
import {CountdownContext} from'../contexts/CountdownContext'
import styles from '../styles/components/Countdown.module.css'


export function Countdown(){
  const {
    minutes,
    seconds,
    hasFinished, 
    startCountdown, 
    isActive, 
    restCountdown 
  }= useContext(CountdownContext);

  const [minutesLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
  const [secondsLeft, secondsRight] = String(seconds).padStart(2,'0').split('');

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minutesLeft}</span>
          <span>{minuteRight}</span>
          </div>
            <span>:</span>
          <div>
            <span>{secondsLeft}</span>
            <span>{secondsRight}</span>
          </div>
      </div>

      {hasFinished ? (
        <button 
        disabled 
        className={styles.countdownButton}
        >
          Ciclo encerrado
        </button>
      ):(
        <>
            {isActive ? (
            <button 
            type="button" 
            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
            onClick={restCountdown}
            >
              Abandonar Ciclo
            </button>
          ):(
            <button 
              type="button" 
              className={styles.countdownButton}
              onClick={startCountdown}
              >
                Iniciar Ciclo
              </button>
          )}
        </>
      )}

      
    </div>
  )
}
