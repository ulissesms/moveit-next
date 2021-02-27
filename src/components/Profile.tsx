import styles from '../styles/components/Profile.module.css';
export function Profile(){
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/ulissesms.png" alt="UlissesMs"/>
      <div>
        <strong>UlissesMs</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 01
          </p>
      </div>
    </div>
  )
}