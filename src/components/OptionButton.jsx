import { useContext } from 'react'
import { SourceContext } from '../context/SourceContext'
import { toast } from 'sonner'

export default function OptionButton ({ children, usage, source }) {
  const { state, dispatch } = useContext(SourceContext)

  function handleCopy () {
    switch (usage) {
      case 'copy':
        const copyText = async () => {
          const textarea = document.getElementById(
            source ? 'textAreaSource' : 'textAreaTarget'
          )
          textarea.select()
          await navigator.clipboard
            .writeText(textarea.value)
            .then(toast.success('Copied to the clipboard'))
        }
        copyText()
        break
      case 'read':
        if (speechSynthesis.speaking) break
        const textarea = document.getElementById(
          source ? 'textAreaSource' : 'textAreaTarget'
        )
        textarea.select()
        const utterance = new SpeechSynthesisUtterance(textarea.value)
        utterance.lang = source ? state.sourceLang : state.targetLang
        speechSynthesis.speak(utterance)
        break
      case 'change-value':
        if (state.sourceLang === 'null') {
          toast.warning(
            'Detect Language is active, is not possible to interchange'
          )
          break
        }
        dispatch({ type: 'INTERCHANGE_LANG', payload: state.sourceLang })
        break
      default:
        break
    }
  }
  return (
    <button
      aria-label={usage + 'button'}
      onClick={handleCopy}
      className='border-[#394150] hover:scale-105 transition-all active:bg-[#394150] border-[1px] rounded-lg p-2 h-fit'
      width='20'
      height='20'
    >
      {children}
    </button>
  )
}
