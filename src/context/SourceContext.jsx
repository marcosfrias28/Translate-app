import { createContext, useState } from 'react'

export const SourceContext = createContext()

export function SourceProvider (props) {
  const [sourceObj, setSourceObj] = useState({
    sourceLang: 'en',
    textAreaSource: 'Hello World'
  })
  const [targetObj, setTargetObj] = useState({
    targetLang: 'it',
    textAreaTarget: ''
  })

  const value = {
    sourceObj,
    setSourceObj,
    targetObj,
    setTargetObj
  }

  return (
    <SourceContext.Provider value={value}>
      {props.children}
    </SourceContext.Provider>
  )
}
