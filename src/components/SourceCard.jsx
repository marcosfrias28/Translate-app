import Sort_alfa from '../assets/Sort_alfa'
import { useContext } from 'react'
import { SourceContext } from '../context/SourceContext'
import SelectLangBlock from './SelectLangBlock'
import TextAreaBlock from './TextAreaBlock'
import axios from 'axios'
import { Options } from './Options'

// https://api.mymemory.translated.net/get?q=${}!&langpair=${}|${}

export function SourceCard ({ bgColor }) {
  // Riprende quanti caratteri sono stati scritti o cancellati dal text area e lo reenderizza sul text label
  const { state, dispatch } = useContext(SourceContext)

  function useTranslateButton () {
    const { targetLang, sourceLang, textAreaSource } = state
    document.querySelector('#textAreaTarget').value = 'Translating...'
    const API_KEY = import.meta.env.VITE_API_KEY
    const API_ENDPOINT = `https://translation.googleapis.com/language/translate/v2?q=${textAreaSource}&target=${targetLang}&format=text${
      sourceLang === 'null' ? '' : `&source=${sourceLang}`
    }&key=${API_KEY}`
    axios
      .get(API_ENDPOINT)
      .then(res => {
        const translatedText = res.data.data.translations[0].translatedText
        document.querySelector('#textAreaTarget').value = 'Translating...'
        dispatch({
          type: 'TRANSLATE_TEXT',
          payload: translatedText
        })
      })
      .catch(error => {
        document.querySelector('#textAreaTarget').value =
          'Error translating, maybe the languages are the same...'
      })
  }

  return (
    <>
      <section
        style={{ backgroundColor: bgColor }}
        className={`p-6 rounded-3xl w-full desktop:w-[600px] min-h-[360px] tablet:max-h-[360px] h-auto max-smartphonexs:h-auto border-[#4D5562] border-[1px]`}
      >
        {/*  Languages Selection Block */}
        <SelectLangBlock source />

        {/* Separator */}
        <hr className='my-5 border-[#4D5562]' />

        {/*  Textarea Block */}
        <TextAreaBlock source />

        {/*  Latests Buttons Block */}
        <div className='flex flex-nowrap w-full place-content-between items-end gap-4'>
          <Options language={state.sourceLang} source={true} />
          <div>
            <button
              onClick={useTranslateButton}
              className='bg-[#3662E3] border-[#7CA9F3] border-[1px] flex content-between gap-3 py-3 px-6 rounded-xl place-self-end text-[#F9FAFB] font-extrabold'
            >
              <Sort_alfa />
              Translate
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
