import Sort_alfa from '../assets/Sort_alfa'
import Copy from '../assets/Copy'
import Sound_max_fill from '../assets/sound_max_fill'
import { useContext, useEffect, useState } from 'react'
import { SourceContext } from '../context/SourceContext'
import SelectLangBlock from './SelectLangBlock'
import TextAreaBlock from './TextAreaBlock'
import OptionButton from './OptionButton'
import axios from 'axios'

// https://api.mymemory.translated.net/get?q=${}!&langpair=${}|${}

export function SourceCard ({ bgColor }) {
  // Riprende quanti caratteri sono stati scritti o cancellati dal text area e lo reenderizza sul text label
  const { state, dispatch } = useContext(SourceContext)

  function useTranslateButton () {
    const { targetLang, sourceLang, textAreaSource } = state
    document.querySelector('#textAreaTarget').value = 'Translating...'
    const apiURL = `https://api.mymemory.translated.net/get?q=${textAreaSource}!&langpair=${sourceLang}|${targetLang}`
    axios.get(apiURL).then(res => {
      if (res.data.responseData.translatedText === '') {
        document.querySelector('#textAreaTarget').value =
          'Error translating, retry...'
      } else {
        dispatch({
          type: 'TRANSLATE_TEXT',
          payload: res.data.responseData.translatedText
        })
      }
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
          <div className='flex flex-nowrap gap-3'>
            <OptionButton usage='read' source>
              <Sound_max_fill />
            </OptionButton>
            <OptionButton usage='copy' source>
              <Copy />
            </OptionButton>
          </div>
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
