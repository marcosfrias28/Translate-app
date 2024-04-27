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
  const { dispatch, setIsOpen } = useContext(SourceContext)

  function handleChanges () {
    dispatch({ type: actionsTypes[name], payload: value })
    setIsOpen(false)
  }
  return (
    <>
      <label
        htmlFor={value + name}
        className={`rounded-xl px-3 py-2 has-[:checked]:bg-[#4d5562] has-[:checked]:text-[#cdd5e0] cursor-pointer hover:opacity-80`}
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
