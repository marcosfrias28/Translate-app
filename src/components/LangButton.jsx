import { useContext, useState } from 'react'
import { SourceContext } from '../context/SourceContext'
import { useEffect } from 'react'

export const actionsTypes = {
  source: 'SET_SOURCE_LANGUAGE',
  target: 'SET_TARGET_LANGUAGE',
  auto: 'SET_SOURCE_LANGUAGE'
}

export function LangButton (props) {
  const { content, name, value } = props
  const { state, dispatch } = useContext(SourceContext)

  function handleChanges () {
    if (state.sourceLang === value && name === 'source')
      document.querySelector(`#${value + name}`).checked = true
    if (state.targetLang === value && name === 'target')
      document.querySelector(`#${value + name}`).checked = true
    dispatch({ type: actionsTypes[name], payload: value })
  }

  return (
    <>
      <label
        htmlFor={value + name}
        className={`${
          value + name
        } rounded-xl px-3 py-2 has-[:checked]:bg-[#657081] has-[:checked]:text-[#cdd5e0] cursor-pointer hover:opacity-80`}
      >
        <input
          id={value + name}
          type='radio'
          className={`hidden`}
          value={value}
          name={name}
          onChange={handleChanges}
        />
        {content}
      </label>
    </>
  )
}
