import Sort_alfa from '../assets/Sort_alfa'
import { useContext, useEffect } from 'react'
import { SourceContext } from '../context/SourceContext'
import SelectLangBlock from './SelectLangBlock'
import TextAreaBlock from './TextAreaBlock'
import axios from 'axios'
import { Options } from './Options'
import { toast } from 'sonner'
import { useState } from 'react'

export function SourceCard ({ bgColor }) {
  const { state, dispatch } = useContext(SourceContext)
  const [isTranslated, setIsTranslated] = useState(false)
  const { targetLang, sourceLang, textAreaSource } = state

  useEffect(() => {
    if (isTranslated === true) return
    const startTranslate = setTimeout(() => {
      toast.info('Auto translated')
      handleTranslateButton()
    }, 3000)
    setIsTranslated(false)
    return () => clearTimeout(startTranslate)
  }, [textAreaSource, sourceLang, targetLang])

  function handleTranslateButton () {
    if (sourceLang === targetLang) {
      toast.warning(`Error: Same Languages on source and target`)
      return
    }
    const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY
    const API_ENDPOINT = `https://translation.googleapis.com/language/translate/v2?q=${textAreaSource}&target=${targetLang}&format=text${
      sourceLang === 'null' ? '' : `&source=${sourceLang}`
    }&key=${API_KEY}`
    axios
      .post(API_ENDPOINT)
      .then(res => {
        const translatedText = res.data.data.translations[0].translatedText
        dispatch({ type: 'TRANSLATE_TEXT', payload: translatedText })
      })
      .catch(error => {
        toast.error(`Error: ${error.status}`)
      })
  }

  return (
    <>
      <section
        style={{ backgroundColor: bgColor }}
        className={`p-6 rounded-3xl w-full desktop:w-[600px] min-h-[360px] tablet:max-h-[360px] h-auto max-smartphonexs:h-auto border-[#657081] border-[1px]`}
      >
        {/*  Languages Selection Block */}
        <SelectLangBlock source />

        {/* Separator */}
        <hr className='my-5 border-[#657081]' />

        {/*  Textarea Block */}
        <TextAreaBlock source />

        {/*  Latests Buttons Block */}
        <div className='flex flex-nowrap w-full place-content-between items-end gap-4'>
          <Options language={state.sourceLang} source={true} />
          <button
            onClick={() => {
              handleTranslateButton()
              setIsTranslated(true)
            }}
            className='bg-[#3662E3] border-[#7CA9F3] border-[1px] flex content-between gap-1 tablet:gap-3 py-3 px-1 tablet:px-6 rounded-xl place-self-end text-[#F9FAFB] font-extrabold'
          >
            <Sort_alfa />
            Translate
          </button>
        </div>
      </section>
    </>
  )
}
