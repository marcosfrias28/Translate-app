import Copy from '../assets/Copy'
import Sound_max_fill from '../assets/sound_max_fill'
import OptionButton from './OptionButton'
const langChanger = {
  en: 'English',
  es: 'Español',
  it: 'Italiano',
  fr: 'France',
  zh: 'Chinese',
  de: 'Deutsch',
  ru: 'Русский',
  ja: 'Japanese',
  null: 'Auto'
}

export function Options ({ language, source }) {
  return (
    <div className='flex flex-nowrap gap-3 place-items-center'>
      <OptionButton usage='read' source={source}>
        <Sound_max_fill />
      </OptionButton>
      <OptionButton usage='copy' source={source}>
        <Copy />
      </OptionButton>
      <p className='text-[#4D5562] text-sm sm:text-xl pl-3'>
        {langChanger[language]}
      </p>
    </div>
  )
}
