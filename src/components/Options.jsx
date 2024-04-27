import Copy from '../assets/Copy'
import Sound_max_fill from '../assets/sound_max_fill'
import OptionButton from './OptionButton'

export function Options ({ language, source }) {
  return (
    <div className='flex flex-nowrap gap-3 place-items-center'>
      <OptionButton usage='read' source={source}>
        <Sound_max_fill />
      </OptionButton>
      <OptionButton usage='copy' source={source}>
        <Copy />
      </OptionButton>
      <p className='text-[#4D5562] text-xl pl-3'>
        {language !== 'null' ? language : 'auto'}
      </p>
    </div>
  )
}
