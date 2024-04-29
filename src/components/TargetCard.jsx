import SelectLangBlock from './SelectLangBlock'
import TextAreaBlock from './TextAreaBlock'
import { Options } from './Options'
import { useContext } from 'react'
import { SourceContext } from '../context/SourceContext'

export function TargetCard ({ bgColor }) {
  const { state } = useContext(SourceContext)
  // Riprende quanti caratteri sono stati scritti o cancellati dal text area e lo reenderizza sul text label
  return (
    <>
      <section
        style={{ backgroundColor: bgColor }}
        className={`p-6 rounded-3xl w-full desktop:w-[600px] min-h-[360px] tablet:max-h-[360px] h-auto border-[#657081] border-[1px]`}
      >
        {/*  Languages Selection Block */}
        <SelectLangBlock />

        {/* Separator */}
        <hr className='my-5 border-[#657081]' />

        {/*  Textarea Block */}
        <TextAreaBlock />

        {/*  Latests Buttons Block */}
        <Options language={state.targetLang} />
      </section>
    </>
  )
}
