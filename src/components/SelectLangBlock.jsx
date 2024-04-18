import { useEffect, useState } from 'react'
import OptionButton from './OptionButton'

export default function SelectLangBlock ({ target, source }) {
  const buttonClasses = ['bg-[#4D5562]', 'rounded-xl', 'px-1', 'text-[#CDD5E0]']

  const [changeClass, setChangeClass] = useState(true)

  useEffect(() => {
    const $buttonChecked = document.querySelectorAll('form label')
    $buttonChecked.forEach(label => {
      const $input = label.querySelector('input')
      if ($input.checked) {
        buttonClasses.map(className => {
          label.classList.add(className)
        })
      } else {
        buttonClasses.map(className => {
          label.classList.remove(className)
        })
      }
    })
  }, [changeClass])

  function handleSourcelang (event) {
    const clickedButton = event.target
    source.setSourceObj({
      ...source.sourceObj,
      sourceLang: clickedButton.lang
    })
    setChangeClass(!changeClass)
    console.log('Source: ', clickedButton.lang)
  }
  function handleTargetLang (event) {
    const clickedButton = event.target

    target.setTargetObj({
      ...target.targetObj,
      targetLang: clickedButton.lang
    })
    setChangeClass(!changeClass)

    console.log('Target: ', clickedButton.lang)
  }

  return (
    <div className='flex flex-row flex-nowrap justify-between text-[#4D5562] font-semibold'>
      <form className='flex flex-row flex-wrap gap-5 tablet:gap-10'>
        {source ? <input type='button' value='Detect Language' /> : ''}
        <label>
          <input
            type='radio'
            className=' hidden'
            lang='en'
            name={source ? 'source' : 'target'}
            onChange={
              source ? e => handleSourcelang(e) : e => handleTargetLang(e)
            }
          />
          English
        </label>
        <label>
          <input
            type='radio'
            className='hidden'
            lang='es'
            name={source ? 'source' : 'target'}
            onChange={
              source ? e => handleSourcelang(e) : e => handleTargetLang(e)
            }
          />
          Español
        </label>
        <label>
          <input
            type='radio'
            className='hidden'
            lang='it'
            name={source ? 'source' : 'target'}
            onChange={
              source ? e => handleSourcelang(e) : e => handleTargetLang(e)
            }
          />
          Italiano
        </label>
        <label>
          <input
            type='radio'
            className='hidden'
            lang='fr'
            name={source ? 'source' : 'target'}
            onChange={
              source ? e => handleSourcelang(e) : e => handleTargetLang(e)
            }
          />
          France
        </label>
      </form>
      <OptionButton visible={source ? '' : 1} usage='change-lang'>
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
    </div>
  )
}
