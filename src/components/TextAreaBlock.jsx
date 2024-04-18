import { useContext, useState } from 'react'
import { SourceContext } from '../context/SourceContext'

export default function TextAreaBlock () {
  const [areaLenght, setAreaLenght] = useState(0)
  const value = useContext(SourceContext)
  const { source, textAreaSource, setTextAreaSource } = value

  function handleTextArea (event) {
    setTextAreaSource(event.target.value)
    setAreaLenght(event.target.textLength)
  }
  return (
    <div className='w-full relative'>
      <textarea
        onChange={e => handleTextArea(e)}
        className='w-full resize-none text-[1rem] bg-transparent text-[#F9FAFB] outline-none appearance-none'
        name=''
        id={`textarea${source}`}
        cols='30'
        rows='7'
        defaultValue={source ? textAreaSource : ''}
        maxLength={500}
        readOnly={source ? false : true}
      ></textarea>
      {source ? (
        <p className='a absolute bottom-2 right-4 text-[#4D5562] text-sm'>
          {areaLenght} / 500
        </p>
      ) : (
        ''
      )}
    </div>
  )
}
