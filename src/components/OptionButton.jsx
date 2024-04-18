import { useContext } from 'react'
import { SourceContext } from '../context/SourceContext'

export default function OptionButton ({ children, visible, usage }) {
  const value = useContext(SourceContext)
  const { source } = value
  function handleCopy () {
    switch (usage) {
      case 'copy':
        const copyText = async () => {
          const textarea = document.getElementById(`textarea${source}`)
          textarea.select()
          await navigator.clipboard
            .writeText(textarea.value)
            .then(console.log('Copiado Exitosamente'))
            .catch(e => console.error(error, 'No se pudo copiar el texto'))
        }
        copyText()
        break
      case 'read':
        const textarea = document.getElementById(`textarea${source}`)
        textarea.select()
        const utterance = new SpeechSynthesisUtterance(textarea.value)
        speechSynthesis.speak(utterance)
        break
      case 'change-lang':
        console.log('change-lang')
        break
      default:
        break
    }
  }
  return (
    <button
      onClick={handleCopy}
      style={{
        visibility:
          visible === undefined ? 'visible' : visible ? 'visible' : 'hidden'
      }}
      className='border-[#394150] border-[1px] rounded-lg p-2 h-fit'
      width='20'
      height='20'
    >
      {children}
    </button>
  )
}
