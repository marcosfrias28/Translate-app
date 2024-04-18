import Logo from './assets/Logo.jsx'
import './index.css'
import { TargetCard } from './components/TargetCard.jsx'
import { SourceCard } from './components/SourceCard.jsx'
import { SourceContext } from './context/SourceContext.jsx'
import { useContext } from 'react'
function App () {
  return (
    <>
      <img
        src='../src/assets/hero_img.jpg'
        alt='background image galaxy'
        className=' w-full h-auto absolute -z-10 max-h-[800px]'
      />
      <main className='mx-auto my-0 w-full min-h-screen h-auto flex items-center justify-center'>
        <section className='mx-auto mb-20 box-border flex flex-row items-center justify-center flex-wrap gap-[24px] px-[24px] sm:px-[70px] max-w-[1280px] h-contain'>
          <div className='w-full'>
            <Logo className='mx-auto my-10' />
          </div>

          <SourceCard bgColor={'#212936cc'} />
          <TargetCard bgColor={'#121826cc'} />
        </section>
      </main>
    </>
  )
}

export default App
