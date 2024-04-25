import { useContext } from 'react'
import { SourceContext } from '../context/SourceContext'
const actionsTypes = {
  source: 'SET_SOURCE_LANGUAGE',
  target: 'SET_TARGET_LANGUAGE',
  auto: 'SET_SOURCE_LANGUAGE'
}
export function LangButton (props) {
  const { content, name, lang } = props
  const { state, dispatch } = useContext(SourceContext)
  return (
    <label className='rounded-xl px-3 py-2'>
      <input
        type='radio'
        className='hidden'
        lang={lang}
        name={name}
        onChange={() => dispatch({ type: actionsTypes[name], payload: lang })}
      />
      {content}
    </label>
  )
}
