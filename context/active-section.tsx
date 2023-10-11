"use client"

import React, { useState, createContext, useContext } from 'react'
import { links } from '@/app/lib/data'

export const ActiveSectionContext = createContext<ActiveSectionType | null>(null)

type ActiveSectionType = {
    currentSection: SectionName;
    setCurrentSection: React.Dispatch<React.SetStateAction<SectionName>>
}

type SectionName = (typeof links)[number]["name"]


function ActiveSectionState({ children } : {children: React.ReactNode}) {

    const [currentSection, setCurrentSection] = useState<SectionName>('Home')


  return (
    <ActiveSectionContext.Provider value={{
        currentSection,
        setCurrentSection
    }}>
        {children}
    </ActiveSectionContext.Provider>
  )
}

export default ActiveSectionState

export function useCurrentSectionContext(){
    const context = useContext(ActiveSectionContext)

    if (context === null){
        throw new Error(
            "failed"
        )
    }

    return context
}