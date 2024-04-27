import { useState, useEffect, useContext } from 'react'
import OptionButton from './OptionButton'
import { LangButton } from './LangButton'
import { SourceContext } from '../context/SourceContext'
import ExpandDown from '../assets/ExpandDown'

export default function SelectLangBlock ({ source }) {
  const name = source ? 'source' : 'target'
  const [render, setRender] = useState(false)

  return (
    <div className='flex flex-row flex-nowrap justify-between text-[#4D5562] font-semibold'>
      <form
        className='flex flex-row flex-wrap gap-1 tablet:gap-2'
        id={`form${name}`}
      >
        {source && (
          <LangButton content='Detect Language' name={name} value='null' />
        )}
        <LangButton content='English' name={name} value='en' />
        <LangButton content='Español' name={name} value='es' />
        <LangButton content='Italiano' name={name} value='it' />
        <div
          onClick={() => setRender(true)}
          className='relative border rounded-xl px-3 py-2 cursor-pointer has-[div:has(label:has(input:checked))]:bg-[#4d5562] has-[input:checked]:text-[#cdd5e0]'
        >
          <ExpandDown />
          {source && render && (
            <div
              onClick={() => setRender(false)}
              className='flex z-50 absolute flex-col flex-nowrap bg-[#24282f] rounded-xl'
            >
              <LangButton content='France' name={name} value='fr' />
              <LangButton content='Chinese' name={name} value='zh' />
              <LangButton content='Deutsch' name={name} value='de' />
              <LangButton content='Русский' name={name} value='ru' />
              <LangButton content='日本語' name={name} value='ja' />
            </div>
          )}
        </div>
      </form>
      {!source && (
        <OptionButton usage='change-value'>
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1.66666 6.66668L0.95955 5.95957L0.252443 6.66668L0.95955 7.37378L1.66666 6.66668ZM17.5 7.66668C18.0523 7.66668 18.5 7.21896 18.5 6.66668C18.5 6.11439 18.0523 5.66668 17.5 5.66668V7.66668ZM4.29288 2.62624L0.95955 5.95957L2.37376 7.37378L5.7071 4.04045L4.29288 2.62624ZM0.95955 7.37378L4.29288 10.7071L5.7071 9.2929L2.37376 5.95957L0.95955 7.37378ZM1.66666 7.66668H17.5V5.66668H1.66666V7.66668Z'
              fill='#4D5562'
            />
            <path
              d='M18.3333 13.3333L19.0404 12.6262L19.7475 13.3333L19.0404 14.0404L18.3333 13.3333ZM10.8333 14.3333C10.281 14.3333 9.83331 13.8856 9.83331 13.3333C9.83331 12.781 10.281 12.3333 10.8333 12.3333L10.8333 14.3333ZM15.7071 9.29289L19.0404 12.6262L17.6262 14.0404L14.2929 10.7071L15.7071 9.29289ZM19.0404 14.0404L15.7071 17.3738L14.2929 15.9596L17.6262 12.6262L19.0404 14.0404ZM18.3333 14.3333L10.8333 14.3333L10.8333 12.3333L18.3333 12.3333L18.3333 14.3333Z'
              fill='#4D5562'
            />
          </svg>
        </OptionButton>
      )}
    </div>
  )
}
