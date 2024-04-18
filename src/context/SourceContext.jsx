import { createContext, useState } from 'react'

export const SourceContext = createContext()

export function SourceProvider (props) {
  const [sourceObj, setSourceObj] = useState({
    sourceLang: 'en',
    textAreaSource: 'Hello World'
  })
  const [targetObj, setTargetObj] = useState({
    targetLang: 'es',
    textAreaTarget: ''
  })

  return (
    <SourceContext.Provider
      value={{ sourceObj, setSourceObj, targetObj, setTargetObj }}
    >
      {props.children}
    </SourceContext.Provider>
  )
}
