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
      activeChallenge
      startNewChallenge:()=>void
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

  function levelUp(){
    setLevel(level + 1)
    
  }
  function startNewChallenge(){
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]
    setActiveChallenge(challenge)
    
  }
  return(
    <ChallengesContext.Provider value={{
      level,
      levelUp,
      currentExperience,
      challengesCompleted,
      startNewChallenge
      }}>
        {children}
    </ChallengesContext.Provider>
  )
}