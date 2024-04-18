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

export function useTranslateButton () {
  const value = useContext(SourceContext)
  const { targetLang, sourceLang } = value

  async function fetchData (url) {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
  }

  console.log(window.localStorage.getItem('currentInput') || 'Hello World')
  useEffect(() => {
    fetchData(
      `https://api.mymemory.translated.net/get?q=${'Hello World'}!&langpair=${sourceLang}|${targetLang}`
    )
  }, [])
}

export function SourceCard ({ bgColor }) {
  // Riprende quanti caratteri sono stati scritti o cancellati dal text area e lo reenderizza sul text label
  return (
    <>
      <section
        style={{ backgroundColor: bgColor }}
        className={`p-6 rounded-3xl w-full desktop:w-[600px] max-h-[360px] h-auto border-[#4D5562] border-[1px]`}
      >
        {/*  Languages Selection Block */}
        <SelectLangBlock />

        {/* Separator */}
        <hr className='my-5 border-[#4D5562]' />

        {/*  Textarea Block */}
        <TextAreaBlock />

        {/*  Latests Buttons Block */}
        <div className='flex flex-nowrap w-full place-content-between items-end'>
          <div className='flex flex-nowrap gap-3'>
            <OptionButton usage='read'>
              <Sound_max_fill />
            </OptionButton>
            <OptionButton usage='copy'>
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
