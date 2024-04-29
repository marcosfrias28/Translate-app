import { useContext, useState } from 'react'
import { SourceContext } from '../context/SourceContext'

export default function TextAreaBlock ({ source }) {
  const { state, dispatch } = useContext(SourceContext)
  const [areaLenght, setAreaLenght] = useState(state.textAreaSource.length)
  function handleTextArea (event) {
    dispatch({
      type: 'SET_TEXT_AREA_SOURCE',
      payload: event.target.value
    })
    setAreaLenght(event.target.value.length)
  }

  return (
    <div className='w-full relative'>
      <textarea
        onChange={handleTextArea}
        className='w-full resize-none text-[1rem] bg-transparent text-[#F9FAFB] outline-none appearance-none'
        name=''
        id={source ? 'textAreaSource' : 'textAreaTarget'}
        cols='30'
        rows='7'
        value={source ? state.textAreaSource : state.textAreaTarget}
        maxLength={500}
        readOnly={source ? false : true}
      ></textarea>
      {source ? (
        <p className='a absolute bottom-2 right-4 text-[#F9FAFB] text-sm'>
          {areaLenght} / 500
        </p>
      ) : (
        ''
      )}
    </div>
  )
}
