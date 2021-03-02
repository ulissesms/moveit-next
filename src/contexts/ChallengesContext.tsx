import { createContext, ReactNode, useState} from 'react'

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
}

export const ChallengesContext = createContext( {} as ChallengesContextData)
export function ChallengesProvider({children}: ChallengeProviderProps){
  const [level, setLevel]= useState(1)
  const [currentExperience, setCurrentExperience]= useState(0)
  const [challengesCompleted, setChallengesCompleted]= useState(0)

  const [activeChallenge, setActiveChallenge]= useState(null)

  const experiencToNextLevel = Math.pow((level + 1) * 4, 2)

  function levelUp(){
    setLevel(level + 1) 
    
  }
  function startNewChallenge(){
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]

    setActiveChallenge(challenge)
    
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