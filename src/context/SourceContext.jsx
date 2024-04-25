import { createContext, useReducer } from 'react'

export const SourceContext = createContext()

const initialState = {
  sourceLang: 'en',
  textAreaSource: 'Hello world and Welcome.',
  targetLang: 'es',
  textAreaTarget: '',
  firstRender: true
}

function reducer (state, action) {
  const { type, payload } = action
  if (type === 'SET_SOURCE_LANGUAGE') {
    return {
      ...state,
      sourceLang: payload
    }
  }
  if (type === 'SET_TARGET_LANGUAGE') {
    return {
      ...state,
      targetLang: payload
    }
  }
  if (type === 'TRANSLATE_TEXT') {
    return {
      ...state,
      textAreaTarget: payload
    }
  }
  if (type === 'SET_TEXT_AREA_SOURCE') {
    return {
      ...state,
      textAreaSource: payload
    }
  }
  if (type === 'FIRST_RENDER') {
    return {
      ...state,
      firstRender: false
    }
  }
  if (type === 'INTERCHANGE_LANG') {
    console.log(state)
    return {
      ...state,
      targetLang: state.sourceLang,
      sourceLang: payload
    }
  }
  return state
}

export function SourceProvider (props) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <SourceContext.Provider value={{ state, dispatch }}>
      {props.children}
    </SourceContext.Provider>
  )
}
