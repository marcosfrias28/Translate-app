import Copy from '../assets/Copy'
import Sound_max_fill from '../assets/sound_max_fill'
import { useContext, useEffect } from 'react'
import { SourceContext } from '../context/SourceContext'
import SelectLangBlock from './SelectLangBlock'
import TextAreaBlock from './TextAreaBlock'
import OptionButton from './OptionButton'

export function TargetCard ({ bgColor }) {
  // Riprende quanti caratteri sono stati scritti o cancellati dal text area e lo reenderizza sul text label
  const { targetObj, setTargetObj } = useContext(SourceContext)


  return (
    <>
      <section
        style={{ backgroundColor: bgColor }}
        className={`p-6 rounded-3xl w-full desktop:w-[600px] max-h-[360px] h-auto border-[#4D5562] border-[1px]`}
      >
        {/*  Languages Selection Block */}
        <SelectLangBlock target={{ targetObj, setTargetObj }} />

        {/* Separator */}
        <hr className='my-5 border-[#4D5562]' />

        {/*  Textarea Block */}
        <TextAreaBlock target={{ targetObj, setTargetObj }} />

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
        </div>
      </section>
    </>
  )
}
