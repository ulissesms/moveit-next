import { createContext, ReactNode, useEffect, useState} from 'react'
import Cookie from 'js-cookie'
import  challenges from '../../challenges.json'

interface Challenge{
  type: 'body'| 'eye'
  description: string
  amount: number
}

interface ChallengesContextData{
      level: number
      levelUp:()=>void
      currentExperience:number
      challengesCompleted:number
      experiencToNextLevel:number
      activeChallenge:Challenge
      startNewChallenge:()=>void
      resetChallenge:()=>void
      completeChallenge:()=>void
      
}

interface ChallengeProviderProps {
  children: ReactNode
  level: number
  currentExperience:number
  challengesCompleted:number

}

export const ChallengesContext = createContext( {} as ChallengesContextData)
export function ChallengesProvider({
  children,
  ...rest
}: ChallengeProviderProps){
  const [level, setLevel]= useState(1)
  const [currentExperience, setCurrentExperience]= useState(0)
  const [challengesCompleted, setChallengesCompleted]= useState(0)

  const [activeChallenge, setActiveChallenge]= useState(null)

  const experiencToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    Notification.requestPermission()
  },[])

  useEffect(() => {
    Cookie.set('level',String(level))
    Cookie.set('currentExperience',String(currentExperience))
    Cookie.set('challengesCompleted',String(challengesCompleted))

  },[level, currentExperience,challengesCompleted])

  function levelUp(){
    setLevel(level + 1) 
    
  }
  function startNewChallenge(){
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]

    setActiveChallenge(challenge) 

    new Audio('/notification.mp3').play()

    if ( Notification.permission === 'granted'){
      new Notification('Novo desafio',{
        body:`Valendo ${challenge.amount} xp`,
      })
    }
    
  }
  function resetChallenge(){
    setActiveChallenge(null)
  }
  function completeChallenge(){
    if(!activeChallenge){
      return;
    }
    const {amount} = activeChallenge
    let finalExpirience = currentExperience + amount
    if (finalExpirience >= experiencToNextLevel){
      finalExpirience = finalExpirience - experiencToNextLevel
      levelUp()
    }
    setCurrentExperience(finalExpirience)
    setActiveChallenge(null)
    setChallengesCompleted(challengesCompleted  +1 )
  }

  return(
    <ChallengesContext.Provider value={{
      level,
      levelUp,
      currentExperience,
      challengesCompleted,
      startNewChallenge,
      activeChallenge,
      resetChallenge,
      experiencToNextLevel,
      completeChallenge
      }}>
        {children}
    </ChallengesContext.Provider>
  )
}